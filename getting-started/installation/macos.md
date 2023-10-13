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

# Apple Silicon

## Install

1. Download latest `stash-macos-applesilicon` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
2. Run `./stash-macos-applesilicon` from the terminal.
  - If you have trouble, try running `chmod u+x stash-macos-applesilicon` to make the file executable.
3. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.

## Upgrade

1. Stop Stash server. Either by closing the terminal window or by stopping the process from Activity Monitor. 
2. Download latest `stash-macos-applesilicon` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
3. Delete old `stash-macos-applesilicon` binary and replace it with the newly downloaded one. 
4. Run `./stash-macos-applesilicon` from the terminal.
  - If you have trouble, try running `chmod u+x stash-macos-applesilicon` to make the file executable.
5. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.
6. You might be asked to perform a database migration depending on the changes included in the new release. Follow the steps. 
  - Automatic backup will be performed before the migration. 
  - If any issues arise during the migration your database will be automatically restored from the backup.
7. You should be good to go. 

## Remove

1. Stop Stash server.
2. Delete `stash-macos-applesilicon`.
3. Delete `$HOME/.stash`.

# Intel

## Install

1. Download latest `stash-macos-intel` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
2. Run `./stash-macos-intel` from the terminal.
  - If you have trouble, try running `chmod u+x stash-macos-intel` to make the file executable.
3. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.

## Upgrade

1. Stop Stash server. Either by closing the terminal window or by stopping the process from Activity Monitor. 
2. Download latest `stash-macos-intel` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
3. Delete old `stash-macos-intel` binary and replace it with the newly downloaded one. 
4. Run `./stash-macos-intel` from the terminal.
  - If you have trouble, try running `chmod u+x stash-macos-intel` to make the file executable.
5. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.
6. You might be asked to perform a database migration depending on the changes included in the new release. Follow the steps. 
  - Automatic backup will be performed before the migration. 
  - If any issues arise during the migration your database will be automatically restored from the backup.
7. You should be good to go. 

## Remove

1. Stop Stash server.
2. Delete `stash-macos-intel` binary file.
3. Delete `$HOME/.stash` folder.