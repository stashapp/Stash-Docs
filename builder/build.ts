import axios from 'axios'
import YAML from 'yaml'
import * as fs from 'fs';
import * as path from 'path';

import { LocalCollection, LocalRepository, LocalSidecar, RemoteIndex, RemotePlugin } from './types'
import { Plugin } from './plugin'
import { infoLog, warnLog } from './utils'
import { debuglog } from 'util';

// iterate over folder
async function searchRepository(pathName: string = "plugins"): Promise<Plugin[]> {
    const repoPath = path.resolve(`./repositories/${pathName}`)
    const repoFiles = fs.readdirSync(repoPath)

    const repositories: LocalRepository[] = []
    // find all files
    repoFiles.forEach(file => {
        if (file.endsWith(".yml")) {
            const fileData = fs.readFileSync(`${repoPath}/${file}`, 'utf8')
            const localRepo: LocalRepository = YAML.parse(fileData)
            // set name to filename if not defined
            if (!localRepo.name) localRepo.name = file.replace(".yml", "")
            repositories.push(localRepo)
        }
    })
    // iterate over repositories
    const plugins: Plugin[] = []
    for (const repo of repositories) {
        const plugin = await parseRepository(repo)
        plugins.push(...plugin)
    }
    // fetch all readmes of plugins
    const readmePromises = plugins.map(plugin => plugin.checkReadme())
    await Promise.all(readmePromises)
    // sort plugins and print to md
    const sortedPlugins = plugins
        .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    return sortedPlugins
}

function printPlugins(outputName: string, sortedPlugins: Plugin[]) {
    // create folder if not exists
    if (!fs.existsSync(`./dist`)) fs.mkdirSync(`./dist`, { recursive: true })
    if (!fs.existsSync(`./dist/${outputName}`)) fs.mkdirSync(`./dist/${outputName}`, { recursive: true })
    // print to file
    const outputPath = `./dist/${outputName}/list.md`
    const stream = fs.createWriteStream(outputPath)
    stream.write(`# Browse ${outputName} \n\n`)
    stream.write(getSourceIndexes(sortedPlugins))
    stream.write(`## All ${outputName} \n\n`)
    // iterate over plugins
    for (const plugin of sortedPlugins) {
        stream.write(plugin.printMD())
        stream.write("\n")
    }
    stream.end()
}

function getSourceIndexes(plugins: Plugin[]): string {
    const indexes = Array.from(new Set(plugins.map(plugin => plugin.index))).sort((a, b) => a.localeCompare(b));
    return `
## Sources

${indexes.map(index => `1. [${index}](${index})`).join('\n')}
`;
}

async function parseRepository(localRepository: LocalRepository): Promise<Plugin[]> {
    // load from parsed
    const repoDefaults: LocalCollection = localRepository.collection
    const repoSidecars: LocalSidecar[] = localRepository.scripts
    // grab from index.yml
    const indexData: RemoteIndex = await axios.get(repoDefaults.index)
        .then(res => YAML.parse(res.data))
    // iterate over remote index and match with sidecars
    const indexPlugins: Plugin[] = []
    const idxMissingScar: Set<RemotePlugin> = new Set()
    const allIdx: Set<RemotePlugin> = new Set()
    for (const index of indexData) {
        const sidecarMatch = repoSidecars.find(sidecar => sidecar.id == index.id)
        if (sidecarMatch) {
            if (sidecarMatch.id == "example") continue // if example, skip
            else if (sidecarMatch.hide) { // skip but warn if hidden
                debuglog(`Skipping hidden plugin: ${index.name}`)
                continue
            } else allIdx.add(index) // add to sidecars
        } else { // sidecar not found
            if (repoDefaults.exclusive) continue // if exclusive, skip
            idxMissingScar.add(index) // add to missing
        }
        const plugin = new Plugin(repoDefaults, sidecarMatch, index)
        indexPlugins.push(plugin)
    }
    // check if there are leftover sidecars
    // not named example
    // not in indexPlugins and not hidden
    const extraSidecars = repoSidecars.filter(sidecar => sidecar.id != "example" && !sidecar.hide && !indexPlugins.find(plugin => plugin.id == sidecar.id))
    if (extraSidecars.length > 0) {
        warnLog(`Found ${extraSidecars.length} extra sidecars in ${localRepository.name}`)
        extraSidecars.forEach(sidecar => warnLog(`    ${sidecar.id}`))
    }
    // check for plugins without sidecars
    const missingSCars = Array.from(idxMissingScar).filter(plugin => allIdx.has(plugin))
    if (missingSCars.length > 0) {
        infoLog(`Found ${missingSCars.length} missing sidecars in ${localRepository.name}`)
        missingSCars.forEach(sidecar => infoLog(`    ${sidecar.name}`))
    }
    return indexPlugins
}

async function run() {
    // generate themes first then exclude
    const themes = await searchRepository("themes")
    printPlugins("themes", themes)
    // generate plugins with themes excluded
    const plugins = await searchRepository("plugins")
    // remove themes from plugins
    const filteredPlugins = plugins.filter(plugin => !themes.some(theme => theme.id == plugin.id))
    printPlugins("plugins", filteredPlugins)
    console.log("finished building plugin index")
}

run()