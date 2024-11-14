export interface RemotePlugin {
    id: string // internal id of plugin
    name: string // display name of plugin
    metadata?: Record<string, string> | { description?: string } // metadata of plugin
    version: string // version of plugin appended with hash
    dath: string // date of last update
    path: string // path to zip file relative to yml
    sha256: string // sha256 hash of zip file
    requires: string[] // list of dependencies
}

export type RemoteIndex = RemotePlugin[]

export interface LocalRepository {
    name: string // name of repository
    collection: LocalCollection
    scripts: LocalSidecar[]
}

export interface LocalCollection {
    index: string // index url of collection
    global_repo: string // repository of collection
    global_author?: string // author of collection if it is just owner
    base_path?: string // base path to plugins
    exclusive: boolean // exclude any entires not in sidecar
}

export interface LocalSidecar {
    id: string // internal id of plugin
    path?: string // override path to plugin if not id
    description?: string // override description if not in index
    readme?: string // path to readme file
    author?: string // author of plugin
    screenshots?: string[] // screenshots of plugin
    hide?: boolean // hide plugin from generated index
        // this should only be used when the plugin is a backend dependency
        // or is in a completely broken state and wholly incompatible
        // or has been deprecated and should not be used
}