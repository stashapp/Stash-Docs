---
title: Plugins
---

!!! info
    Plugins are created by third parties and not officially affiliated or supported by the core Stash team. If you have issues, please reach out to the original creators.

Plugins adds further features that Stash doesn't itself provide.

## Managing plugins

Plugins can be installed and managed from the :fontawesome-solid-gear: **Settings** > **Plugins** page.

Plugins are installed using the **Available Plugins** section. The **Community (stable)** source is configured by default.

Installed plugins can be updated or uninstalled from the **Installed Plugins** section.

### Adding sources

Anyone can create their own source index for plugins. To add a new source go to :fontawesome-solid-gear: **Settings** > **Plugins** page and under **Available Plugins** click **Add Source**.

### Installing plugins manually

By default, Stash looks for plugin configurations in the plugins sub-directory of the directory where the stash `config.yml` is read. This will either be the `%USERPROFILE%\.stash\plugins` on Windows or `/root/.stash/plugins` on Unix systems (Mac, Linux, etc.) or the current working directory.

Plugins are added by adding configuration yaml files (format: `pluginName.yml`) to the `plugins` directory.

Loaded plugins can be viewed in the :fontawesome-solid-gear: **Settings** > **Plugins** page. After plugins are added, removed or edited while Stash is running, they can be reloaded by clicking :fontawesome-solid-rotate: **Reload plugins** button.