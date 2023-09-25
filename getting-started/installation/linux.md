---
layout: clean
title: Linux
nav_order: 3
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

{: .important }
It is recommended that you install `ffmpeg` from your distribution's package manager. In case you don't, Stash will download a copy for you. 

{: .note }
>Stash offers different binaries for different architectures. You can find your processor architecture by running a simple command `uname -p` in a terminal.
>
>`stash-linux` = amd64  
>`stash-linux-arm32v6` = arm32v6 (armel)  
>`stash-linux-arm32v7` = arm32v7 (armhf)  
>`stash-linux-arm64v8` = arm64v8 (arm64)  

# Install

1. Download latest `<binary-name>` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"} depending on your architecture. 
2. Run `./<binary-name>` from the terminal.
  - If you have trouble, try running `chmod u+x <binary-name>` to make the file executable.
3. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.

# Upgrade

1. Stop Stash server. Either by closing the terminal window or by stopping the process from task manager. 
2. Download latest `<binary-name>` binary from [GitHub repository](https://github.com/stashapp/stash/releases/latest){:target="_blank"}.
3. Delete old `<binary-name>` binary and replace it with the newly downloaded one. 
4. Run `./<binary-name>` from the terminal.
  - If you have trouble, try running `chmod u+x <binary-name>` to make the file executable.
5. If everything went well, it should open a browser tab [http://localhost:9999](http://localhost:9999){:target="_blank"} to get started.
6. You might be asked to perform a database migration depending on the changes included in the new release. Follow the steps. 
  - Automatic backup will be performed before the migration. 
  - If any issues arise during the migration your database will be automatically restored from the backup.
7. You should be good to go. 

# Remove

1. Stop Stash server.
2. Delete `<binary-name>` binary file.
3. Delete `$HOME/.stash` folder.