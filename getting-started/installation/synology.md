---
layout: clean
title: Synology
nav_order: 5
parent: Installation
grand_parent: Getting Started
---

<details markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

# Foreword

Synology devices comes in two categories : those who support containerization through Docker, and those who don't. To see in which category you stand, refer to the "Applied Models" section of [the Docker Package page](https://www.synology.com/dsm/packages/Docker){:target="_blank"}.

Now, follow the installation instructions based on whether you [can use Docker](#to-install-stash-with-docker) or [you cannot use Docker](#to-install-stash-without-docker).

{: .note }
Running stash without docker is possible even if your NAS is docker ready. It offers more control on your stash instance startup. As an example, it allows you to store your porn collection in an Encrypted Shared Folder, and only run stash when the Encrypted folder is Mounted (Decrypted).

## To install Stash with Docker

- Make sure [the Docker app is installed](https://blog.pavelsklenar.com/how-to-install-and-use-docker-on-synology/){:target="_blank"} and running correctly.
- [Search the registry for stash](https://hub.docker.com/r/stashapp/stash){:target="_blank"} and install.
- Create a stash image with the following set up in 'advanced options'

### "Volume" Tab

| File/Folder             | Mount Path   | Description                                         |
|-------------------------|--------------|-----------------------------------------------------|
| docker/Stash/generated  | /generated   | Thumbnails, clips, etc                              |
| docker/Stash/metadata   | /metadata    | Database                                            |
| docker/Stash/config     | /root/.stash | Configuration Files                                 |
| docker/Stash/cache      | /cache       | Cache Files                                         |
| docker/Stash/blobs      | /blobs       | Binary data for scene covers, performer images, etc |
| (where your porn lives) | /data        | Location of your porn                               |

### "Environment" Tab

(These will need to be the same as the Volumes you created in the "Volume" tab.)

| variable        | Value        |
|-----------------|--------------|
| PATH            | (keep as is) |
| STASH_CACHE     | /cache       |
| STASH_METADATA  | /metadata    |
| STASH_GENERATED | /generated   |
| STASH_STASH     | /data        |
|   |   |   |

### "Port" Tab

You will need to set a default port in the "Port" tab, otherwise Docker will assign a different port every time Stash is launched.  Leave the container port as-is.

### "Network" Tab

Make sure that "Use The Same Network As Docker Host" is checked.

(thanks to backer Herelam80 for these instructions)

## To install Stash without Docker

Warning : this method uses SSH to run command lines on the NAS. If you are unfamiliar with SSH or linux command lines, I suggest you not to go further, as making a mistake in the SSH session can really screw your NAS.

This is intended to work on DSM 7.0 and later. It will not work on any version prior to 7.0.

### Install Prerequisites

In DSM, navigate to `Package Center > Settings`. In the `Package Sources` tab, click `Add`, type _SynoCommunity_ as Name and [https://packages.synocommunity.com/](https://packages.synocommunity.com/){:target="_blank"} as Location and then press `OK` to validate.

Go back to the Package Center and look for `Python 3.11` in the Community tab. Click on `Ìnstall` and agree to the _Third-Party Package_ warning.

Then look for `Ffmpeg 6` in the Community tab. Click on `Ìnstall` and agree to the _Third-Party Package_ warning.

### Enable SSH

In DSM, navigate to `Control Panel > Connectivity > Terminal & SNMP` and check the `Enable SSH service` box.

### Create a user that will run stash

1. In DSM, navigate to `Control Panel > File Sharing > User & Group`
1. Click on the `Create` button
1. Give it a name (eg _stash_) and a Password (you will need it later)
1. Click `Next` until you are on the "Join groups" screen
1. Assign the user to the "administrators" group (this will be removed later but is required by synology to be able to use SSH (I know, it's stupid) and complete the installation properly)
1. Click `Next` until you are on the "Assign shared folders permissions" screen
1. Assign the Read/Write permission to your porn folder (the write permission is needed to allow the deletion of clips from the stash app)
1. Click `Next` until you are on the "Assign application permissions" screen
1. Check `Deny` for all applications
1. Click `Next` until you can click on `Done`

### Connect to your NAS

With your terminal, connect to your NAS using the newly created account that is part of the _administrators_ group.

```bash
ssh stash@your_nas_hostname
```

### Link ffprobe & ffmpeg

ffmpeg has been installed earlier, but is missing a link to ffprobe (also installed) and the new version of ffmpeg. Run the following command.

```bash
sudo ln -s /var/packages/ffmpeg6/target/bin/ffprobe /usr/local/bin/ffprobe
sudo ln -s /var/packages/ffmpeg6/target/bin/ffmpeg /usr/local/bin/ffmpeg
```

### Download Stash

Download the lastest version of stash and its checksum from github

```bash
# find what architecture your synology is running on
uname -m

# depending on the architecture, you'll have to download the right version of stash

# x86_64
wget https://github.com/stashapp/stash/releases/latest/download/stash-linux
# armv6l
wget https://github.com/stashapp/stash/releases/latest/download/stash-linux-arm32v6
# armv7l
wget https://github.com/stashapp/stash/releases/latest/download/stash-linux-arm32v7
# aarch64
wget https://github.com/stashapp/stash/releases/latest/download/stash-linux-arm64v8

# Download the CHECKSUM
wget https://github.com/stashapp/stash/releases/latest/download/CHECKSUMS_SHA1

# Perform the checksum validation
sha1sum -c --ignore-missing CHECKSUMS_SHA1

# you should see a line that says `stash-linux: OK`
# if not, something went wrong during the download

# Clean up the now unnecessary file
rm CHECKSUMS_SHA1
```

{: .note }
DO NOT run stash yet or it will generate a bunch of files/folders where we don't want them_

### Python

Prepare a python environment (for scrapers and plugins)

```bash
python3.11 -m ensurepip --upgrade
python3.11 -m venv stash-env
source stash-env/bin/activate
pip3 install pipreqs
```

### Configure your NAS to run Stash

Create a profile file

```bash
echo 'PATH=/usr/local/bin:$PATH' > .profile
echo 'source stash-env/bin/activate' >> .profile
```

Create the service file by running `cat > stash.service`, copy/pasting the following, and hitting CTRL+D when it's done to save the file (hit again if you are not back to the prompt) :

```ini
[Unit]
Description=Run Stash at startup
After=network.target

[Service]
WorkingDirectory=/var/services/homes/stash
Type=simple
User=stash
ExecStart=/bin/bash -c -l '\
   exec ./stash-linux'
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

{: .note }
Change the `ExecStart` line by providing the exact name of the stash executable that you downloaded previously.

Start and activate the service

```bash
sudo systemctl enable "$(pwd)/stash.service"
sudo systemctl start stash.service
```

### Verify that it is working

You can now access to stash by navigating to your NAS url on port 9999 : `http://nas-hostname:9999`

### Installing Scrapers and Plugins

Whenever you install a new python scraper or plugin, do the following from the _stash_ user home directory

```bash
pipreqs .stash/.
pip3 install -r .stash/requirements.txt
```

{: .note }
Using pipreqs allows to scan all scrapers and plugins installed and find dependencies that they require. You can do the same thing without pipreqs by going into each individual directory and run `pip3 install -r requirements.txt`

### Remove stash user from administrator group

1. Go back to DSM, navigate to `Control Panel > File Sharing > User & Group`
1. Click on the _stash_ user and then on `Edit`
1. In the `User Groups` tab, uncheck "administrators" and click on `Save`

