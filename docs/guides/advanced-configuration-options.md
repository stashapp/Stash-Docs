---
title: Advanced configuration options
---

Some configuration options cannot be edited through the UI and should only be changed if necessary.

Depending on the option, configuration can be done in one of three ways:

- By editing the `config.yml` configuration file
- By setting an environment variable
- By using a command-line flag when running Stash

For example, to change the `port` option from the default `9999` to `1234`, you can use any of the following methods:

- Add `port: 1234` to the `config.yml` file
- Set the environment variable `STASH_PORT=1234` before running Stash (e.g., `STASH_PORT=1234 ./stash`)
- Use the command-line flag when running Stash (e.g., `./stash --port 1234`)

## Configuration options

### host

The IP address for the host that stash is listening to. Default is `0.0.0.0`.

| Key        | Value         |
|------------|--------------|
| **Configuration file**    | `host`       |
| **Environment variable**    | `STASH_HOST` |
| **Command-line interface flag**   | `--host`     |

### port

The port that Stash serves to. Default is `9999`.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `port`       |
| **Environment variable**   | `STASH_PORT` |
| **Command-line interface flag** | `--port`     |

### external host

Needed in some cases when you use a reverse proxy. See [reverse proxy guide](/guides/reverse-proxy/) for more details.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `external_host` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### plugins path

The path to the stash plugins folder. **Only use if you need to override the default.**

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `plugins_path` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### scrapers path

The path to the scrapers folder. **Only use if you need to override the default.**

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `scrapers_path` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### custom served folders

Allows configuration of mapped URLs to file system folders. See [pull request](https://github.com/stashapp/stash/pull/620){:target="_blank"} for more details.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `custom_served_folders` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### maximum upload size

Change the maximum size (in MB) for partial imports. Default is `1024 (1GB)`.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `max_upload_size` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### proxy

The URL of a HTTP(S) proxy to be used when stash makes calls to online services. _Example: `https://user:password@my.proxy:8080`_

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `proxy`      |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### no proxy

A list of domains for which the proxy must not be used. Default is all local LAN `localhost,127.0.0.1,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12`

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `no_proxy`   |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |