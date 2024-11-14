---
title: macOS
icon: fontawesome/brands/apple
---

On macOS, Stash can be run as either a packaged app (`Stash.app`) or as a command-line app (`stash-macos`). Both are universal apps, and will therefore run natively on both Apple silicon and Intel-based Macs.

## Packaged app

!!! note
    The packaged app is recommended for most users.

    It supports desktop notifications, displays a menu bar icon, and does not need to be launched from the terminal.

    However, due to app restrictions, it only supports setting up in `$HOME/.stash`. If you would like to use a different folder, then you will need to use the command-line app.

### Install

1. Download the latest `Stash.app.zip` from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
2. Open `Stash.app.zip` archive and drag the `Stash` app to your Applications folder.
3. Open the `Stash` app.
4. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.

### Update

1. Stop Stash server. Either via icon in the menu bar or by stopping the process from Activity Monitor. 
2. Download latest `Stash.app.zip` from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
3. Delete old `Stash` app. 
4. Open newly downloaded `Stash.app.zip` archive and drag the `Stash` app to your Applications folder. 
5. Open the `Stash` app.
6. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.
7. You might be asked to perform a database migration depending on the changes included in the new release. Follow the steps. 
    - Automatic backup will be performed before the migration. 
    - If any issues arise during the migration your database will be automatically restored from the backup.
8. You should be good to go. 

### Remove

1. Stop Stash server.
2. Delete `Stash` app.
3. Delete `$HOME/.stash`.

## Command-line app
 
!!! note
    The command-line app is only recommended for users who are familiar with the terminal, or for those who do not want to set up in `$HOME/.stash`.
    
    It does not support desktop notifications and does not display a menu bar icon. It must be launched from the terminal.

### Install

1. Download latest `stash-macos` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
2. Run `./stash-macos` from the terminal.

    !!! note ""
        If you have trouble, try running `chmod u+x stash-macos` to make the file executable.

3. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.

### Update

1. Stop Stash server. Either by closing the terminal window or by stopping the process from Activity Monitor. 
2. Download latest `stash-macos` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
3. Delete old `stash-macos` binary and replace it with the newly downloaded one. 
4. Run `./stash-macos` from the terminal.

    !!! note ""
        If you have trouble, try running `chmod u+x stash-macos` to make the file executable.

5. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.
6. You might be asked to perform a database migration depending on the changes included in the new release. Follow the steps. 
    - Automatic backup will be performed before the migration. 
    - If any issues arise during the migration your database will be automatically restored from the backup.
7. You should be good to go. 

### Remove

1. Stop Stash server.
2. Delete `stash-macos`.
3. Delete `$HOME/.stash`.