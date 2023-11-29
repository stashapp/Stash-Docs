---
layout: clean
title: macOS
nav_order: 2
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

# Packed App

## Install

1. Download latest `Stash.app.zip` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
2. Open `Stash.app.zip` archive and drag the application icon to your Applications folder. 
3. Start `Stash` app.
4. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.

## Upgrade

1. Stop Stash server. Either by closing the app or by stopping the process from Activity Monitor. 
2. Download latest `Stash.app.zip` app from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
3. Delete old `Stash` app. 
4. Open newly downloaded `Stash.app.zip` archive and drag the application icon to your Applications folder. 
5. Start `Stash` app.
6. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.
7. You might be asked to perform a database migration depending on the changes included in the new release. Follow the steps. 
  - Automatic backup will be performed before the migration. 
  - If any issues arise during the migration your database will be automatically restored from the backup.
8. You should be good to go. 

## Remove

1. Stop Stash server.
2. Delete `Stash` app.
3. Delete `$HOME/.stash`.

# Unified Binary (Intel + ARM)

## Install

1. Download latest `stash-macos` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
2. Run `./stash-macos` from the terminal.
  - If you have trouble, try running `chmod u+x stash-macos` to make the file executable.
3. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.

## Upgrade

1. Stop Stash server. Either by closing the terminal window or by stopping the process from Activity Monitor. 
2. Download latest `stash-macos` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
3. Delete old `stash-macos` binary and replace it with the newly downloaded one. 
4. Run `./stash-macos` from the terminal.
  - If you have trouble, try running `chmod u+x stash-macos` to make the file executable.
5. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.
6. You might be asked to perform a database migration depending on the changes included in the new release. Follow the steps. 
  - Automatic backup will be performed before the migration. 
  - If any issues arise during the migration your database will be automatically restored from the backup.
7. You should be good to go. 

## Remove

1. Stop Stash server.
2. Delete `stash-macos`.
3. Delete `$HOME/.stash`.