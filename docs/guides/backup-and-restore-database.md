---
title: Backup and restore database
---

## Backup

Always use the UI to create a backup of the database. As with all live databases **DO NOT** copy manually the database file as a means of backup.

Stash uses an sqlite database with `WAL` mode enabled. This practically means that along with the main db file `stash.go-sqlite` there can be a `-shm` and a `-wal` file present ([more info](https://sqlite.org/wal.html){:target="_blank"}). Even stopping Stash might leave some of these index files present so again **DO NOT** manually copy the database file.

The **Backup** or **Download Backup** tasks are the proper way to create a backup file.

1. Go to :fontawesome-solid-gear: **Settings** > **System**.
1. Under Application Paths heading scroll down to **Backup Directory Path**.
1. Set directory to store your backups.
1. Go to :fontawesome-solid-gear: **Settings** > **Tasks**.
1. Under Backup heading you will find 2 tasks.
1. Select either **Backup** or **Download Backup** task.

## Restore

Assuming you have properly created a backup file you can use it to restore your database if needed.

!!! info 
    The restore procedure uses the default `stash-go.sqlite` filename, if you changed that when configuring Stash adjust accordingly.

The following steps are recommended when restoring a database file:

1. Go to :fontawesome-solid-gear: **Settings** > **System**, scroll down to Database heading and check your **Database Path** location.
1. Create a backup of the current database. (optional)
1. Stop Stash.
1. In your file browser, go to the location of your database path.
1. Move or delete the `stash-go.sqlite` database file (along with the `-shm` `-wal` `.journal` files if present).
1. Copy the backup file that you want to restore to `stash-go.sqlite`.
1. Make sure that you now have a `stash-go.sqlite` file and that no `-shm` `-wal` `.journal` files are present. 
1. Start Stash.

You should now have Stash running with a working and restored database.

## Advanced troubleshooting

If you get a database malformed message during upgrade or backup that probably means that the database is already corrupt. One way to get past that is to do a full export and check the error log. If there are not a lot of errors you can then try to do a full import and get a working db with minimal losses. As the full import is destructive proceed with caution. 
For cases like this it is better to ask for [support](/#support).




