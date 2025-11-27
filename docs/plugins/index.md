---
title: Plugins
---

!!! info "Disclaimer"
    Plugins are created and maintained by the community and are not associated with the stashapp team.

Plugins add features that Stash does not provide by default.

## Managing plugins

Plugins can be installed and managed from the :fontawesome-solid-gear: **Settings** > **Plugins** page.

Plugins are installed using the **Available Plugins** section. The **Community (stable)** source is configured by default.

Installed plugins can be updated or uninstalled from the **Installed Plugins** section.

### Adding sources

To add a new source go to :fontawesome-solid-gear: **Settings** > **Plugins** page and under **Available Plugins** click **Add Source**.

## Installing plugins manually

By default Stash reads plugin configuration files from the `plugins` sub-directory located where the stash `config.yml` is read. Typical locations:

- Windows: `%USERPROFILE%\.stash\plugins`
- Unix: `/root/.stash/plugins`
- Or: current working directory (cwd)

Plugins are added by adding configuration YAML files (format: `pluginName.yml`) to the `plugins` directory.

Loaded plugins can be viewed in the :fontawesome-solid-gear: **Settings** > **Plugins** page. After plugins are added, removed or edited while Stash is running, they can be reloaded by clicking :fontawesome-solid-rotate: **Reload plugins** button.

## Plugin sources

Stash comes preconfigured with [stashapp/CommunityScripts](https://github.com/stashapp/CommunityScripts){:target="_blank"} source maintained by stashapp community. 

- [List of known plugin sources](https://discourse.stashapp.cc/t/list-of-plugin-sources/122){:target="_blank"}  
- [Community plugin index](https://discourse.stashapp.cc/c/plugins/18){:target="_blank"}