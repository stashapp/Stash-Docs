---
title: Windows
icon: fontawesome/brands/windows
---

!!! note
    Some Windows 11 versions might open Stash via Terminal instead of going to notification area. You can bypass that by running the program as administrator or [use a shortcut to run it via conhost.exe](https://github.com/stashapp/stash/issues/2598){:target="_blank"}.  
    As a result of running as administrator Stash might fail to detect your Python installtion in PATH, so you need point it the correct way yourself after installation. In :fontawesome-solid-gear: **Settings** > **System** and under **Applications Paths** header set **Python Executable Path**.

## Install

1. Download latest `stash-win.exe` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
2. Run the executable (typically `stash-win.exe`). 

    !!! note ""
        Running the executable might present a security prompt since the binary isn't signed yet. Just click more info and then the `run anyway` button.

3. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.
4. The program will show an icon in your notification area. You can access some quick links or quit the server from there.

## Update

1. Stop Stash server. Either via icon in the notification area or by stopping the process from Task Manager. 
2. Download latest `stash-win.exe` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
3. Delete old `stash-win.exe` binary and replace it with the newly downloaded one. 
4. Run the executable (typically `stash-win.exe`). 

    !!! note ""
        Running the executable might present a security prompt since the binary isn't signed yet. Just click more info and then the `run anyway` button.

5. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.
6. You might be asked to perform a database migration depending on the changes included in the new release. Follow the steps. 
    - Automatic backup will be performed before the migration. 
    - If any issues arise during the migration your database will be automatically restored from the backup.
7. You should be good to go. 

## Remove

1. Stop Stash server.
2. Delete the `stash-win.exe` binary file.
3. Delete `%userprofile%/.stash` folder.

## Install via Scoop

!!! info "Disclaimer"
    The package is not managed by stashapp team. 

[Scoop](https://scoop.sh/){:target="_blank"} is command-line package manager for Windows. 

Stash is available via [Scoop Extras](https://github.com/ScoopInstaller/Extras){:target="_blank"} bucket. 

1. Add extras bucket `scoop bucket add extras`.
2. Run `scoop install stash`.