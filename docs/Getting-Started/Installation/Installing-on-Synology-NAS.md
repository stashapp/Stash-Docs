---
layout: default
title: Installing on Synology NAS
nav_order: 4
parent: Installation
grand_parent: Getting Started
---
# **Installing on Synology NAS**
{: .no_toc }

---

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Foreword

Synology devices comes in two categories : those who support containerization through Docker, and those who don't. To see in which category you stand, refer to the "Applied Models" section of [the Docker Package page](https://www.synology.com/dsm/packages/Docker){:target="_blank"}.

Now, follow the installation instructions based on whether you [can use Docker](#to-install-stash-with-docker) or [you cannot use Docker](#to-install-stash-without-docker).

---

## To install Stash with Docker

- Make sure [the Docker app is installed](https://blog.pavelsklenar.com/how-to-install-and-use-docker-on-synology/){:target="_blank"} and running correctly.
- [Search the registry for stash](https://hub.docker.com/r/stashapp/stash){:target="_blank"} and install.
- Create a stash image with the following set up in 'advanced options'

### "Volume" Tab

|  File/Folder | Mount Path | Description  |
|---|---|---|
| docker/Stash/generated  | /generated  | Thumbnails, clips, etc  |
| docker/Stash/metadata  | /metadata  | Database  |
| docker/Stash/config  | /root/.stash  | Configuration Files  |
| docker/Stash/cache  | /cache  | Cache Files  |
| (where your porn lives)  | /data  | Location of your porn  |

### "Environment" Tab

(These will need to be the same as the Volumes you created in the "Volume" tab.

| variable  | Value  |
|---|---|
| PATH  | (keep as is)  |
| STASH_CACHE  | /cache  |
| STASH_METADATA  | /metadata  |
| STASH_GENERATED  | /generated  |
| STASH_STASH  | /data  |
|   |   |   |

### "Port" Tab

You will need to set a default port in the "Port" tab, otherwise Docker will assign a different port every time Stash is launched.  Leave the container port as-is.

### "Network" Tab

Make sure that "Use The Same Network As Docker Host" is checked.

(thanks to backer Herelam80 for these instructions)

---

## To install Stash without Docker

Warning : this method uses SSH to run command lines on the NAS. If you are unfamiliar with SSH or linux command lines, I suggest you not to go further, as making a mistake in the SSH session can really screw your NAS.

This is intended to work on DSM 7.0 and later. It will not work on any version prior to 7.0.

### Enable SSH

In DSM, navigate to `Control Panel > Terminal & SNMP` and check the `enable SSH service` box.

_Note : only members of the adminstrator group are able to use SSH, you'll need one of them to complete the installation._

### Create a user that will run stash

1. In DSM, navigate to `Control Panel > User & Group`
2. Click on the `Create` button
3. Give it a name (eg _stash_) and Generate a Random Password (you won't need it later)
4. Click `Next` until you are on the "Assign shared folders permissions" screen
5. Assign the read write permission to your porn folder (the write permission is needed to allow the deletion of clips from the stash app)
6. Click `Next` until you are on the "Assign application permissions" screen
7. Check `Deny` for all applications
6. Click `Next` until you can click on `Done`

### Connect to your NAS

With your terminal, connect to your NAS using an account that is part of the _administrator_ group.

1. SSH to your NAS

```
ssh admin@nas-hostname
```

{:style="counter-reset:none"}
2. navigate to the _stash_ user home directory

```
cd ../stash/
```

### Download Stash

{:style="counter-reset:none"}
3. Download the lastest ARM64 version of stash and its checksum from github

```
wget https://github.com/stashapp/stash/releases/download/[version]/stash-linux-arm64v8
wget https://github.com/stashapp/stash/releases/download/[version]/CHECKSUMS_SHA1
```

{:style="counter-reset:none"}
4. Perform the checksum validation

```
sha1sum -c --ignore-missing CHECKSUMS_SHA1

# you should see a line that says `stash-linux-arm64v8: OK`
```

{:style="counter-reset:none"}
5. Clean up unnecessary file

```
rm CHECKSUMS_SHA1
```

_Note : DO NOT run stash yet or it will generated a bunch of files/folders where we don't want them_

### Download ffmpeg

{:style="counter-reset:none"}
6. Donwload the ARM64 static build of ffmpeg and its checksum

```
wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-arm64-static.tar.xz
wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-arm64-static.tar.xz.md5
```

{:style="counter-reset:none"}
7. Perform the checksum validation

```
md5sum -c ffmpeg-release-arm64-static.tar.xz.md5

# you should see a line that says `ffmpeg-release-arm64-static.tar.xz: OK`
```

{:style="counter-reset:none"}
8. Unpack & move ffmpeg to the .stash/ folder

```
tar xvf ffmpeg-release-arm64-static.tar.xz
mv ffmpeg-4.4-arm64-static/ffmpeg ffmpeg-4.4-arm64-static/ffprobe .stash/
```

{:style="counter-reset:none"}
9. Clean up unnecessary files

```
rm ffmpeg-release-arm64-static.tar.xz
rm ffmpeg-release-arm64-static.tar.xz.md5
rm -rd ffmpeg-4.4-arm64-static/
```

{:style="counter-reset:none"}
10. Prepare a python environment (for scrapers)

```
sudo -H python -m ensurepip --upgrade
python3 -m venv stash-env
source stash-env/bin/activate
pip3 install pipreqs
```

Whenever you install a new scraper, do the following from the _stash_ user home directory

```
source stash-env/bin/activate
cd your_scraper_directory
pipreqs .
sudo pip3 install -r requirements.txt
```

### Configure your NAS to run Stash upon startup

{:style="counter-reset:none"}
10. Create the service file by running `cat > /etc/systemd/system/stash.service`, copy/pasting the following, and hitting CTRL+D when it's done to save the file (hit again if you are not back to the prompt) :

```
[Unit]
Description=Run Stash at startup
After=network.target

[Service]
Type=simple
User=stash
ExecStart=/bin/bash -c '\
   source /var/services/homes/stash/stash-env/bin/activate stash-env; \
   exec /var/services/homes/stash/stash-linux-arm64v8'
Restart=on-failure

[Install]
WantedBy=multi-user.target
# end
```

{:style="counter-reset:none"}
11. Start and activate the service

```
sudo systemctl start stash.service
sudo systemctl enable stash.service
```

### Verify that it is working

You can now access to stash by navigating to your NAS url on port 9999 : `http://nas-hostname:9999`
