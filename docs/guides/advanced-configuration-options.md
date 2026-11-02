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

### custom ui location

The file system folder where the UI files will be served from, instead of using the embedded UI. Empty to disable. Stash must be restarted to take effect.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `custom_ui_location` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### developer options extra blob paths

A list of alternative blob paths. These paths will be read for blob files. Blobs will not be written or deleted from these paths. Intended for developer use only.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `developer_options.extra_blob_paths` |
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

### theme color

Sets the `theme-color` property in the UI.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `theme_color` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### gallery cover regex

The regex responsible for selecting images as gallery covers.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `gallery_cover_regex` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### sequential scanning

Modifies behaviour of the scanning functionality to generate support files (previews/sprites/phash) at the same time as fingerprinting/screenshotting. Useful when scanning cached remote files.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `sequential_scanning` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### trusted proxies

A list of trusted proxy IPs or CIDR ranges. If a request comes from a trusted proxy or if the request IP address is a local address, the `X-FORWARDED-FOR` header will be used to determine the client's real IP address. Default is empty (no trusted proxies).

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `trusted_proxies` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### public whitelist

A list of public IP addresses or subnets (in CIDR range format eg: `192.168.1.0/24`) that are allowed to access the system when no credentials are configured.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `public_whitelist` |
| **Environment variable**   | _(none)_     |
| **Command-line interface flag** | _(none)_     |

### signed url expiry

The expiry time for signed URLs, in seconds. Signed URLs are used when authentication is required. Defaults to 4 hours to accommodate long video playback sessions.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | `signed_url_expiry` |
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

## Environment variables

### STASH_SQLITE_CACHE_SIZE

Sets the SQLite cache size. See https://www.sqlite.org/pragma.html#pragma_cache_size. Default is `-2000` which is 2MB.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | _(none)_     |
| **Environment variable**   | `STASH_SQLITE_CACHE_SIZE` |
| **Command-line interface flag** | _(none)_     |

### STASH_HW_TEST_TIMEOUT

Sets the Hardware Acceleration test timeout in seconds. Default is 10 seconds.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | _(none)_     |
| **Environment variable**   | `STASH_HW_TEST_TIMEOUT` |
| **Command-line interface flag** | _(none)_     |

### STASH_HW_DRI_DEVICE

Overrides the default `/dev/dri` device used for VAAPI hardware acceleration. Default is `/dev/dri/renderD128`.

| Key                        | Value         |
|----------------------------|--------------|
| **Configuration file**     | _(none)_     |
| **Environment variable**   | `STASH_HW_DRI_DEVICE` |
| **Command-line interface flag** | _(none)_     |