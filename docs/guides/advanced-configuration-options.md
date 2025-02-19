---
title: Advanced configuration options
hide:
  - toc
---

Some configuration options can not be edited through the UI and should only be used if needed.

Depending on the option they can be configured either by editing the `config.yml` configuration file or by using an enviroment variable or in a few cases by using flags when running stash.

As an example the `port` option can be changed from the default `9999` to `1234`  by one of the below methods:

- adding `port: 1234` to the config.yml file
- setting the ENV variable **STASH_PORT** to **1234** eg `STASH_PORT=1234 ./stash`
- using the flag **--port** when running stash  `./stash --port 1234`

Configuration Option | YML | ENV | FLAG | Description | Comments
---------------------|:---:|:---:|:----:|-------------|:-------------:
host|host|STASH_HOST|--host| The ip address for the host that stash is listening to | default: 0.0.0.0
port|port|STASH_PORT|--port| The port that stash serves to |default: 9999 
external host|external_host|STASH_EXTERNAL_HOST|-| Needed in some cases when you use a reverse proxy | [Docs](/guides/reverse-proxy/)
plugins path|plugins_path|-|-|The path to the stash plugins folder|Only use if you need to override the default
scrapers path|scrapers_path|-|-|The path to the scrapers folder|Only use if you need to override the default
custom served folders|custom_served_folders|-|-|Allows configuration of mapped URLs to file system folders|[PR](https://github.com/stashapp/stash/pull/620){:target="_blank"}
maximum upload size|max_upload_size|-|-|Change the maximum size (in MB) for partial imports| default: 1024 (1GB)
proxy|proxy|-|-| The url of a HTTP(S) proxy to be used when stash makes calls to online services | Example: https://user:password@my.proxy:8080
no proxy|no_proxy|-|-| A list of domains for which the proxy must not be used | default is all local LAN: localhost,127.0.0.1,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12
