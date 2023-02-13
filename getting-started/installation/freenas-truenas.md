---
layout: clean
title: Installing on FreeNAS/TrueNAS
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

# Caveats and assumptions

* the method documented here has only been given cursory testing, so there may be compatibility problems
* this method assumes that stash will be run within a previously created iocage jail - the process to create and configure the jail is not included here
* if the jail is in NAT mode, ensure that port 9999 is forwarded to your TrueNAS host
* the alternative to this method is to compile from source, which is a more involved process and not documented here

# Linux compatibility

In order for the `stash-linux` binary to work in a FreeBSD system, Linux compatibility must be enabled both in the system and the jail. To enable Linux compatibility:
1. navigate to `System -> Tunables` in the TrueNAS Web UI
2. click `Add` and enter the following:
* Variable: `linux_enable`
* Value: `YES`
* Type: `rc.conf`
3. Click submit.
4. In a shell in your iocage jail, edit `/etc/rc.conf` to add:

```
enable_linux="YES"
```
5. Reboot the system.

# ffmpeg/ffprobe

`ffmpeg` can be downloaded using `pkg install ffmpeg`. For some reason, stash is unable to find the `ffmpeg` and `ffprobe` binaries even after installing them. To work around this, create symbolic links to the binaries in `$HOME/.stash`:

```
ln -s /usr/local/bin/ffmpeg ~/.stash/ffmpeg
ln -s /usr/local/bin/ffprobe ~/.stash/ffprobe
```

# Downloading and running

Download `stash-linux` for your chosen release. Make sure to enable execution with: `chmod +x stash-linux`

Run with: `./stash-linux` (assuming the binary is in the current directory)