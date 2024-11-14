import axios from 'axios'
import YAML from 'yaml'
import fs from 'fs'
import path from 'path'

import { LocalCollection, LocalRepository, LocalSidecar, RemoteIndex } from './types'
import { Plugin } from './plugin'
import { infoLog, warnLog } from './utils'

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
    // sort plugins and print to md
    const sortedPlugins = plugins
        .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    return sortedPlugins
}

function printPlugins(outputName: string, sortedPlugins: Plugin[]) {
    // create folder if not exists
    if (!fs.existsSync(`./dist`)) fs.mkdirSync(`./dist`)
    if (!fs.existsSync(`./dist/${outputName}`)) fs.mkdirSync(`./dist/${outputName}`)
    // print to file
    const outputPath = `./dist/${outputName}/list.md`
    const stream = fs.createWriteStream(outputPath)
    stream.write(`# List of ${outputName} \n\n`)
    // iterate over plugins
    for (const plugin of sortedPlugins) {
        stream.write(plugin.printMD())
        stream.write("\n")
    }
    stream.end()
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
    for (const index of indexData) {
        const sidecarMatch = repoSidecars.find(sidecar => sidecar.id == index.id)
        if (sidecarMatch?.id == "example") continue // skip example
        if (sidecarMatch?.hide) {
            // skip if hidden, but warn
            infoLog(`Skipping hidden plugin: ${index.name}`)
            continue
        }
        if (repoDefaults.exclusive && !sidecarMatch) continue // if exclusive, skip if no sidecar
        const plugin = new Plugin(repoDefaults, sidecarMatch, index)
        // check readme if undefined
        await plugin.checkReadme()
        indexPlugins.push(plugin)
    }
    // check if there are leftover sidecars
    // not named example
    // not in indexPlugins and not hidden
    const extraSidecars = repoSidecars.filter(sidecar => sidecar.id != "example" && !indexPlugins.find(plugin => plugin.id == sidecar.id && !sidecar.hide))
    if (extraSidecars.length > 0) {
        warnLog(`Found ${extraSidecars.length} extra sidecars in ${localRepository.name}`)
        extraSidecars.forEach(sidecar => warnLog(`    ${sidecar.id}`))
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
}

run()