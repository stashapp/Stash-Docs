---
layout: clean
title: Frequently Asked Questions
nav_order: 9
permalink: /faq/
---

<details markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Logging in

### How do I recover a forgotten username or password?

Stash saves login credentials in the `config.yml` file. You must reset both login and password if you have forgotten your password by doing the following:
- Close your Stash process;
- Open the `config.yml` file found in your Stash directory with a text editor;
- Delete the `login` and `password` lines from the file and save;
- Stash authentication should now be reset with no authentication credentials.

### How can I connect to my server from elsewhere within my network?

Find the local IP address of your Stash Server (guides for [Windows](https://support.microsoft.com/en-us/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9){:target="_blank"}, [MacOS](https://support.apple.com/guide/mac-help/find-your-computers-name-and-network-address-mchlp1177/11.0/mac/11.0){:target="_blank"}, [Linux](https://wiki.archlinux.org/title/Network_configuration#IP_addresses){:target="_blank"}). Then, on another device on your local network, open a browser to http://SERVER.IP.ADDRESS.HERE:9999/

See [this article](/networking/authentication-required-when-accessing-stash-from-the-internet#alternative-and-safe-methods-to-access-your-stash) for ideas on accessing your stash from outside your network.

### How do I serve Stash over SSL/TLS (HTTPS)?

This is typically accomplished by putting Stash behind a reverse proxy, such as Nginx or Caddy. Stash can also serve SSL directly.
To use the built-in SSL:
First you must generate a SSL certificate and key combo.  Here is an example using openssl:

`openssl req -x509 -newkey rsa:4096 -sha256 -days 7300 -nodes -keyout stash.key -out stash.crt -extensions san -config <(echo "[req]"; echo distinguished_name=req; echo "[san]"; echo subjectAltName=DNS:stash.server,IP:127.0.0.1) -subj /CN=stash.server`

This command would need customizing for your environment.  [This link](https://stackoverflow.com/questions/10175812/how-to-create-a-self-signed-certificate-with-openssl){:target="_blank"} might be useful.

Once you have a certificate and key file name them `stash.crt` and `stash.key` and place them in the same directory as the `config.yml` file, or the `~/.stash` directory.  Stash detects these and starts up using HTTPS rather than HTTP.

### How do I serve Stash in a Subpath?

The basepath defaults to `/`. When running stash via a reverse proxy in a subpath, the basepath can be changed by having the reverse proxy pass `X-Forwarded-Prefix` (and optionally `X-Forwarded-Port`) headers. When detects these headers, it alters the basepath URL of the UI.

---

## Working with Content

### What's the best way to add metadata to Stash?

* StashDB is a service that allows for crowdsourcing of porn metadata. Check the pinned messages in the #stashbox-invites channel in Discord to start using it.
* Stash includes a single scraper, but you can add more via the [CommunityScrapers repository](https://github.com/stashapp/CommunityScrapers){:target="_blank"}. See the README for installation and usage instructions.

### How do I rename or relocate a library folder or scenes?

**If you need to move or rename a folder**, you can remove the existing directory from your library and re-add the new location. 
**If you need to move or rename scenes**, you can simply move the scenes and rescan, being sure the new location is in your library.

Stash will recognize the files on the next scan and re-link to the new location. 
**Do not run a Clean in between these steps, or you will lose the information from your relocated folders** (your files will not be affected).

Stash uses 2 different methods to track your scenes: oshash and filename/path.  Changing ONE (either moving OR editing/altering the file) will be recovered on your next scan.  Stash will update the 'wrong' entry, and restore it knowing 2 things about each file.  If both are changed at once (like a reencode and a rename), Stash has no way to associate the file with the old version and will add the file as new entry, **losing** the old metadata associated with it. (The data isn't deleted until a clean though)

> **⚠️ Note:** Don't forget to click `Save` after updating these directories!

### How do I add galleries?

For gallery-related issues check the relevant Documentation [section](/in-app-manual/galleries).

### How to add performers in bulk?

> You will need to have a stash-box attached as a source. 

Go to `Performers` page > Tagger view > click `Batch Update Performers` > select your preferences > refresh the page.

---

## Scraping

### Scrape behind paywall

A regular scraper can only scrape information from webpages that are open to the public access. If you want to scrape a webpage that requires login or behind a paywall, you need to use the "Visible CDP" technique. So far this technique was tested and passed under Windows 10 only.

Normal CDP scraping will launch a headless chrome browser, which will not show up for any user interactions. "Visible CDP" turns the "headless chrome" into a "visible" instance.

Steps:
1. Prepare your scraper's .yml file and make sure it's valid and working. Your scraper should have the following setting inside:
```
driver:
  useCDP: true
```
2. Run a command console. Go to the Chrome's binary directory and run `chrome.exe --remote-debugging-port=9222`. This will launch a special Chrome instance that Stash Scrapers can control later on.
3. In Stash, make sure that the "Chrome CDP Path" setting is `http://localhost:9222/json/version`.
4. Use the special Chrome instance you launched earlier, go to the webpage you want to scrape, type in your user/pass or pass any other human tests, until you see the page with desired content.
5. Paste the webpage's URL in your Stash scene and start scraping. It should get the information correctly.

---

## Troubleshooting

### Known Issues

- Performer images uploaded in WebP format will not display on versions of Safari prior to version 13 or on anything earlier than MacOS Big Sur. This is a [limitation of Safari](https://caniuse.com/webp){:target="_blank"}. As a workaround, ensure you are uploading performer images in jpg or png format.

### Stash is showing a "FFMPEG Not Found" error

If Stash is unable to find or download FFMPEG, then download and install it yourself.

The `ffmpeg.exe` and `ffprobe.exe` files should be placed in `C:\Users\YourUsername\.stash` on Windows.
The `ffmpeg` and `ffprobe` files should be placed in `~/.stash` on macOS / Linux. 

### I'm having problem with my Docker image

Third-party Docker images are more likely to be misconfigured and makes it harder to get support from the core Stash team. For best experience you should stay with official Stash Docker image. [Stash repository](https://github.com/stashapp/stash/tree/master/docker/production){:target="_blank"} and [DockerHub](https://hub.docker.com/r/stashapp/stash){:target="_blank"}. 

---

## Other FAQs

### I have a question not answered here.

Join the Stash [Discord server](https://discord.gg/2TsNFKt){:target="_blank"}.
