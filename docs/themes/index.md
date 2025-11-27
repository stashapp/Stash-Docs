---
title: Themes
---

!!! info "Disclaimer"
    Plugins are created and maintained by the community and are not associated with the stashapp team.

Stash supports CSS themes to adjust the look-and-feel of the interface.

Themes can be installed either via plugin or as Custom CSS.

## Managing themes

Themes can be installed and managed from the :fontawesome-solid-gear: **Settings** > **Plugins** page.

Themes are installed using the **Available Plugins** section. The **Community (stable)** source is configured by default.

Installed themes can be updated or uninstalled from the **Installed Plugins** section.

### Adding sources

To add a new source go to :fontawesome-solid-gear: **Settings** > **Plugins** page and under **Available Plugins** click **Add Source**.

## Installing themes manually

By default Stash reads plugin configuration files from the `plugins` sub-directory located where the stash `config.yml` is read. Typical locations:

- Windows: `%USERPROFILE%\.stash\plugins`
- Unix: `/root/.stash/plugins`
- Or: current working directory (cwd)

Themes are added by adding configuration YAML files (format: `pluginName.yml`) to the `plugins` directory.

Loaded themes can be viewed in the :fontawesome-solid-gear: **Settings** > **Plugins** page. After themes are added, removed or edited while Stash is running, they can be reloaded by clicking :fontawesome-solid-rotate: **Reload plugins** button.

## Installing via Custom CSS

1. Find a theme from the list and copy the content of .css file.
1. In Stash, go to :fontawesome-solid-gear: **Settings** > **Interface** and scroll down to Custom CSS heading. 
1. Make sure **Custom CSS enabled** is checked.
1. Click on **Edit** under **Custom CSS** and then paste the CSS code into the text box.
1. You will need to force-reload ++shift+f5++ in order to see the theme.

## Theme sources

Stash comes preconfigured with [stashapp/CommunityScripts](https://github.com/stashapp/CommunityScripts){:target="_blank"} source maintained by stashapp community. 

- [List of known plugin sources](https://discourse.stashapp.cc/t/list-of-plugin-sources/122){:target="_blank"}  
- [Community theme index](https://discourse.stashapp.cc/tags/c/plugins/18/none/theme){:target="_blank"}