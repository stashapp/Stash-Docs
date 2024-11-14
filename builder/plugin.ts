import * as utils from './utils'
import { LocalCollection, LocalSidecar, RemotePlugin } from './types'
import axios from 'axios'

export class Plugin {
    id: string // internal id of plugin
    name: string // display name of plugin
    description: string // description of plugin if available
    index: string // index url of collection
    repo: string // repository of collection
    author: string // author of plugin
    path: string // path to plugin in repository
    screenshots: string[] // screenshots of plugin
    readme: string | boolean | undefined // readme file
    base_path: string // path to plugins/ folder
    repo_path: string // path to repository in the format of owner/repo

    constructor(defaults: LocalCollection, sidecar: LocalSidecar | undefined, index: RemotePlugin) {
        this.id = index.id
        this.name = index.name 
        this.description = index?.metadata?.description
            ?? sidecar?.description
            ?? "No Description Provided"
        this.index = defaults.index
        this.repo = defaults.global_repo
        this.author = sidecar?.author
            ?? defaults?.global_author // fall back to global author
            ?? "No Author" // if no author
        this.path = sidecar?.path
            ?? index.id // default to ID
        this.screenshots = sidecar?.screenshots ?? []
        this.readme = sidecar?.readme ?? true // readme file
        this.base_path = defaults.base_path ?? "main/plugins"
        this.repo_path = `${this.base_path}/${this.path}`
    }

    async checkReadme(): Promise<void> {
        // test readme if undefined
        if (this.readme === undefined) {
            this.readme = await axios.head(`https://github.com/${this.repo}/blob/${this.repo_path}/README.md`)
                .then(res => res.status == 200)
        }
    }

    printMD() {
        // pre prepared values
        const folderPath = `https://github.com/${this.repo}/tree/${this.repo_path}`
        const filePath = `https://github.com/${this.repo}/blob/${this.repo_path}`
        // if false, no readme
        // if true, default readme
        // otherwise, follow path or url
        const readme = typeof(this.readme) == "string" // if readme is string
            ? this.readme.includes("http") // if link, add target blank
                ? `View [README](${this.readme}){target=_blank}`
                : `View [README](${filePath}/${this.readme}){target=_blank}`
            : this.readme // readme is boolean
                ? `View [README](${filePath}/README.md){target=_blank}` // default path
                : "No README available"
        const screenshots = this.screenshots
            .map(screenshot => `![${this.name} screenshot](${screenshot}){ loading=lazy }  `)
            .join("")
        // ugly formatted markdown
        return `
### [${this.name}](${folderPath}){target=_blank}

=== "Description"

    ${utils.sanitizeMD(this.description)}

=== "Source URL"

    \`\`\`
    ${this.index}
    \`\`\`

=== "README"

    ${readme}

=== "Author"

    ${this.author.replace(/(\[.+\]\(http.+\)(?:,|\r|\n|\r\n))/g, "{target=_blank}")}

=== "Screenshots"
    ${screenshots}`
    }
}
