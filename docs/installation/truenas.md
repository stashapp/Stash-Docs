---
title: TrueNAS
icon: simple/truenas
---

## TrueNAS Community Edition

!!! info 
    No dedicated installation guide is available at the moment. Sorry!

Follow TrueNAS official documentation: [https://www.truenas.com/docs/](https://www.truenas.com/docs/){:target="_blank"}

## TrueNAS Scale (via TrueCharts)

!!! important
    TrueCharts last supported version is Dragonfish (24.04.2.3).  
    Deprecation of TrueNAS SCALE Apps: [https://trueforge.org/news/scale-deprecation/](https://trueforge.org/news/scale-deprecation/){:target="_blank"}

!!! info 
    The following step by step was tested using TrueNAS Scale Cobia (23.10.1.3). 

### Installation

To install the stashapp, we will use the TrueCharts app database. To install, we'll follow the official documentation at https://truecharts.org/manual/SCALE/guides/getting-started/

1. Go to Apps page from the top level SCALE menu
2. Click Discover Apps button on the Apps page
3. Click Manage Catalogs link on the Discover Apps page
4. Click Add Catalog
5. After reading the iXsystems notice, click Continue and enter the required information: Name: truecharts Repository: https://github.com/truecharts/catalog Preferred Trains: enterprise, stable and operators (type each one manually) Branch: main
6. Click Save and allow SCALE to refresh its catalog with TrueCharts (this may take a few minutes)

After the update is complete, use the search bar to search for "stash". When found, click Install.

### Options

The installation window will contain several customizable options, but the most important one is the storage option. Search for "Additional App Storage" on the page and click "Add".

In "Type of Storage", select "Host Path" if the desired folder is a Dataset.
"Host Path" should be where your content will be.
"Mount Path" is the name that appears in the stash for the selection. You can put anything here, like /stash-content for example.
After that, click Install.

Installation will take a few minutes. After the stash appears as "Running", click "Open" on the right and continue with the stash configuration.
When entering the folder that contains its contents, remember to search for the same name you entered previously. In the case of this guide, the name was /stash-content.

## TrueNAS Legacy (CORE)

!!! warning "Maintenance mode"
    TrueNAS CORE has transitioned to maintenance mode and will receive security patches only moving forward. No new features or functionality enhancements will be developed.

    Migration Guide From TrueNAS CORE to TrueNAS Community Edition: [https://www.truenas.com/docs/scale/25.04/gettingstarted/migrate/](https://www.truenas.com/docs/scale/25.04/gettingstarted/migrate/){:target="_blank"}

### Caveats and assumptions

- The method documented here has only been given cursory testing, so there may be compatibility problems.
- This method assumes that Stash will be run within a previously created iocage jail - the process to create and configure the jail is not included here.
- If the jail is in NAT mode, ensure that port 9999 is forwarded to your TrueNAS host.
- The alternative to this method is to compile from source, which is a more involved process and not documented here

### Linux compatibility

In order for the `stash-linux` binary to work in a FreeBSD system, Linux compatibility must be enabled both in the system and the jail. To enable Linux compatibility:

1. navigate to `System -> Tunables` in the TrueNAS Web UI
2. click `Add` and enter the following:
    - Variable: `linux_enable`
    - Value: `YES`
    - Type: `rc.conf`
3. Click submit.
4. In a shell in your iocage jail, edit `/etc/rc.conf` to add:
```
enable_linux="YES"
```
5. Reboot the system.

### Install ffmpeg/ffprobe

Go into your iocage jail and install `ffmpeg`
```
pkg install ffmpeg
``` 

### Create user and group

It is recommended to not run services as root. Adjust this step to your system. in this example the user `stash` will be created and set to run the service.

```
pw useradd -n stash -u 1069 -d /nonexistent -s /usr/sbin/nologin
```

### Download stash-linux 

Choose where you would like to store the binary, in this example `/usr/local/bin` is selected as this is where the ffmpeg binaries also reside. Check github for latest release. Also remember to fix permissions and ownership
```
cd /usr/local/bin
fetch https://github.com/stashapp/stash/releases/download/v0.22.1/stash-linux
chown stash:stash stash-linux
chmod +x stash-linux
```

### Create configuration directory

stash needs a directory for its config file, database and more. Remember to change ownership and permission for the folder you select. The script we will look at in the next step has this path as the default:
```
mkdir /usr/local/etc/stash
chown stash:stash /usr/local/etc/stash
```

### rc.d startup script

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

### Enable the service at boot

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

### Optional steps

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
