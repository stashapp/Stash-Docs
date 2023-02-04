---
layout: page
title: Advanced Configuration Options
nav_order: 1
parent: Advanced Tutorials
permalink: advanced-tutorials/advanced-configuration-options
---

Some configuration options can not be edited through the UI and should only be used if needed.

Depending on the option they can be configured either by editing the `config.yml` configuration file or by using an enviroment variable or in a few cases by using flags when running stash.

As an example the `port` option can be changed from the default `9999` to `1234`  by one of the below methods

* adding `port: 1234` to the config.yml file
* setting the ENV variable **STASH_PORT** to **1234** eg `STASH_PORT=1234 ./stash`
* using the flag **--port** when running stash  `./stash --port 1234`


Configuration Option | YML | ENV | FLAG | Description | Comments
---------------------|:---:|:---:|:----:|-------------|:-------------:
host|host|STASH_HOST|--host| The ip address for the host that stash is listening to | default: 0.0.0.0
port|port|STASH_PORT|--port| The port that stash serves to |default: 9999 
external host|external_host|STASH_EXTERNAL_HOST|-| Needed in some cases when you use a reverse proxy | [Docs](../../networking/reverse-proxy)
plugins path|plugins_path|-|-|The path to the stash plugins folder|Only use if you need to override the default
scrapers path|scrapers_path|-|-|The path to the scrapers folder|Only use if you need to override the default
custom served folders|custom_served_folders|-|-|Allows configuration of mapped URLs to file system folders|[PR](https://github.com/stashapp/stash/pull/620){:target="_blank"}
maximum upload size|max_upload_size|-|-|Change the maximum size (in MB) for partial imports| default: 1024 (1GB)