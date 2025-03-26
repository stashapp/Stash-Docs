---
title: Setup
icon: fontawesome/solid/desktop
---

## How do I recover a forgotten username or password?

Stash saves login credentials in the `config.yml` file. You must reset both login and password if you have forgotten your password by doing the following:

- Close your Stash process;
- Open the `config.yml` file found in your Stash directory with a text editor;
- Delete the `login` and `password` lines from the file and save;
- Stash authentication should now be reset with no authentication credentials.

## How can I connect to my server from elsewhere within my network?

Find the local IP address of your Stash Server (guides for [Windows](https://support.microsoft.com/en-us/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9){:target="_blank"}, [MacOS](https://support.apple.com/guide/mac-help/find-your-computers-name-and-network-address-mchlp1177/11.0/mac/11.0){:target="_blank"}, [Linux](https://wiki.archlinux.org/title/Network_configuration#IP_addresses){:target="_blank"}). Then, on another device on your local network, open a browser to `http://SERVER.IP.ADDRESS.HERE:9999`.

See [this article](../faq/setup/#alternative-and-safe-methods-to-access-your-stash) for ideas on accessing your stash from outside your network.

## How do I serve Stash over SSL/TLS (HTTPS)?

This is typically accomplished by putting Stash behind a reverse proxy, such as Nginx or Caddy. Stash can also serve SSL directly.
To use the built-in SSL:

1. First you must generate a SSL certificate and key combo.

    === "Example using OpenSSL"

    ```
    openssl req -x509 -newkey rsa:4096 -sha256 -days 7300 -nodes -keyout stash.key -out stash.crt -extensions san -config <(echo "[req]"; echo distinguished_name=req; echo "[san]"; echo subjectAltName=DNS:stash.server,IP:127.0.0.1) -subj /CN=stash.server
    ```

    This command would need customizing for your environment. [This link](https://stackoverflow.com/questions/10175812/how-to-create-a-self-signed-certificate-with-openssl){:target="_blank"} might be useful.

1. Once you have a certificate and key file name them `stash.crt` and `stash.key` and place them in the same directory as the `config.yml` file, or the `~/.stash` directory. Stash detects these and starts up using HTTPS rather than HTTP.

## How do I serve Stash in a Subpath?

The basepath defaults to `/`. When running stash via a reverse proxy in a subpath, the basepath can be changed by having the reverse proxy pass `X-Forwarded-Prefix` (and optionally `X-Forwarded-Port`) headers. When detects these headers, it alters the basepath URL of the UI.

## Error: config initialization error: missing the following mandatory settings: generated

1. Find your `config.yml` file. Usually located at `%userprofile%/.stash` or `$HOME/.stash`.
2. Open it and find `generated:` line. 
3. Replace with or add `generated: absolute_path_to_your_generated_folder`.
4. Save and try to start Stash. 

## Stash is showing a "FFMPEG Not Found" error

If Stash is unable to find or download FFMPEG, then download and install it yourself.

The `ffmpeg.exe` and `ffprobe.exe` files should be placed in `C:\Users\YourUsername\.stash` on Windows.
The `ffmpeg` and `ffprobe` files should be placed in `~/.stash` on macOS / Linux. 

## I'm getting "Migration failed"

It can mean that you database got corrupted. You can verify that by running a few SQL statements. The easiest way to do so is to install a simple program called [DB Browser for SQLite](https://sqlitebrowser.org){:target="_blank"}. Start the program and in the menu select `File` > `Open Database...` and select your Stash .sqlite database file. Then navigate to the `Execute SQL` tab and run:
- `PRAGMA integrity_check;` - it should return `ok`.
- `PRAGMA foreign_key_check;` - it should return nothing.

If you get something different it means there is an issue with your database. It's still possible that it can be recovered. You can ask for more help in one of the [support channels](#support).  
Another option would be to try using an older backup if you have one. 

## My Python installation is not detected

- Make sure your Python version is added to environment variable PATH. This is a common issue with Python installed from Microsoft Store on Windows. 

    ??? tip "How to add Python to PATH"
        A handy guide how you set a PATH on different operating systems: [https://realpython.com/add-python-to-path/](https://realpython.com/add-python-to-path/){target="_blank"}.

- If you use multiple versions or have non standard configuration you can specify which version to use in :fontawesome-solid-gear: **Settings** > **System** and under Applications Paths header set **Python Executable Path**.

## How do I run multiple instances of Stash?

Running multiple instances of Stash can be done by specifying both the `-c` switch to denote an alternate `config.yml` filepath, and the `--p` switch to denote a unique port number.

Step-by-step Linux guide to running mutiple instances of Stash:

1. Create a new directory for the alternate Stash configuration, referred to here as `NEW_DIRECTORY_LOCATION`.
1. Choose a unique port number that does not conflict with other local Stash instances, referred to here as `NEW_PORT_NUMBER`.
1. Initiate Stash to assume a fresh installation by running `./stash-linux --port NEW_PORT_NUMBER -c NEW_DIRECTORY_LOCATION/config.yml`.
1. Complete the Stash Setup Wizard.
1. Using a text editor, manually update `config.yml` to use `NEW_PORT_NUMBER`. Find the line `port: 9999` and replace with `port: NEW_PORT_NUMBER`.
1. This instance of Stash can now be accessed by running `./stash-linux -c NEW_DIRECTORY_LOCATION/config.yml`

## Protecting against accidental exposure to the internet

Stash data is considered private, and Stash is not designed to be publicly exposed, except to trusted confidants. Stash has a built-in protection against accidentally exposing itself publicly outside of your network. If Stash receives a request from the public internet, and you do not have a password enabled, Stash will reject the request and stop handling requests to protect your privacy.

This often happens when you use the port-forwarding feature of your router or install Stash on a publicly accessible server, such as a VPS. When you do this, anybody in the world can access your Stash instance, so we enforce a password requirement. If your Stash instance has shutdown due to an insecure configuration, it will not handle requests again until you tell it that you have fixed the problem. After setting up either authentication, firewall, or removing your port forwarding rules, you can edit `.stash/config/config.yml` and remove the key `security_tripwire_accessed_from_public_internet`.

### Alternative and safe methods to access your Stash

You may use several methods to safely access Stash from outside of your home network. In the most basic, you can enable authentication in Stash, and re-enable port forwarding. You can also use a VPN solution that allows you to securely access your home network, such as [Tailscale](https://tailscale.com){:target="_blank"}, [Zerotier](https://zerotier.com){:target="_blank"}, [Wireguard](https://www.digitalocean.com/community/tutorials/how-to-set-up-wireguard-on-ubuntu-20-04){:target="_blank"}, or others.

### Using an external authentication provider

If you are an advanced user, and have secured your Stash instance behind an authwall provided by a reverse proxy or hosting solution, you may continue to use that. You simply have to edit `.stash/config/config.yml` and set `dangerous_allow_public_without_auth` to `true`. If you have already tripped the security feature, you will also have to remove the `security_tripwire_accessed_from_public_internet` key in order to allow Stash to serve requests.

## Migrating from Windows to Unix or vice verse

!!! info
    Migrating between filesystems with different path separators (`/` and `\`) is currently unsupported.
        
!!! danger
    Use at your own risk. If you do this, make sure to [backup](/guides/backup-and-restore-database) your database before starting.

It's possible to manually migrate the `folders` table using SQL. 

The following example query would replace `\` with `/` and `D:/` with `/mnt/`.

=== "Example SQL query"
    ```sql
    UPDATE folders SET path = REPLACE(path, '\', '/');
    UPDATE folders SET path = REPLACE(path, 'D:/', '/mnt/');
    ```
