---
layout: clean
title: FreeNAS/TrueNAS CORE
nav_order: 6
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

# Install ffmpeg/ffprobe

Go into your iocage jail and install `ffmpeg`
```
pkg install ffmpeg
``` 

# Create user and group

It is recommended to not run services as root. Adjust this step to your system. in this example the user `stash` will be created and set to run the service.

```
pw useradd -n stash -u 1069 -d /nonexistent -s /usr/sbin/nologin
```

# Download stash-linux 

Choose where you would like to store the binary, in this example `/usr/local/bin` is selected as this is where the ffmpeg binaries also reside. Check github for latest release. Also remember to fix permissions and ownership
```
cd /usr/local/bin
fetch https://github.com/stashapp/stash/releases/download/v0.22.1/stash-linux
chown stash:stash stash-linux
chmod +x stash-linux
```

# Create configuration directory

stash needs a directory for its config file, database and more. Remember to change ownership and permission for the folder you select. The script we will look at in the next step has this path as the default:
```
mkdir /usr/local/etc/stash
chown stash:stash /usr/local/etc/stash
```

# rc.d startup script

In order for stash to run as a daemon in the background, and also start at boot, you need a rc.d script.  
```
mkdir /usr/local/etc/rc.d
ee /usr/local/etc/rc.d/stash
```
Enter the following in the editor:
```
#!/bin/sh

# PROVIDE: stash
# REQUIRE: DAEMON
# KEYWORD: shutdown


. /etc/rc.subr

name=stash
rcvar=stash_enable

load_rc_config $name

: ${stash_enable:="NO"}
: ${stash_user:="stash"}
: ${stash_group:="stash"}
: ${stash_config_dir:="/usr/local/etc/stash/config.yml"}
: ${stash_exec_bin:="/usr/local/bin/stash-linux"}

#daemon
pidfile="/var/run/${name}.pid"
command="/usr/sbin/daemon"
command_args="-f -P ${pidfile} ${stash_exec_bin} --config ${stash_config_dir}"
start_precmd="stash_precmd"

stash_precmd() {
    install -o ${stash_user} -g ${stash_group} /dev/null ${pidfile}
}

run_rc_command $1
```
To save, press `ESC + Enter` and confirm with `a` and make it executable with `chmod +x /usr/local/etc/rc.d/stash`

# Enable the service at boot

If you want Stash to run when you start the jail, run the following command:
```
sysrc "stash_enable=YES"
```
And to start the service, reboot the jail or run this command:
```
service stash start
```
Stash is now available at http://jail-IP:9999/ 

During setup you can leave all the paths for config, database and etc empty to use the default. They will then be stored in the config-folder we created earlier so you can easily backup the folder. Only add your media content. 

# Optional steps

You can change the location where stash stores the configuration files and database. Please note that the path needs to end with `config.yml` even if it does not exist yet. Stash will create it for you. Remember to fix ownership and permissions of the location you choose.
```
sysrc "stash_config_dir=path/to/location/config.yml"
```

You can change the user and group that Stash runs as. Remember that the config_dir needs to be owned by the user that Stash runs as, aswell as the stash-linux binary
```
sysrc "stash_user=usernamegoeshere"
sysrc "stash_group=groupnamegoeshere"
```

Its also possible to change the location of the stash-linux binary
```
sysrc "stash_exec_bin=/path/to/stash-linux"
