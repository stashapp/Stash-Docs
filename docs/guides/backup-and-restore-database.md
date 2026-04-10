---
title: Backup and restore database
---

## Backup


To back up your database, always use the Stash UI. Do not manually copy the database file while Stash is running.

Stash uses an SQLite database in `WAL` (Write-Ahead Logging) mode. In addition to the main `stash-go.sqlite` file, there may also be `-shm` and `-wal` files present. These files can remain even after stopping Stash. For this reason, you should never manually copy the database files as a backup method.

??? info "WAL mode"
    Learn more about `WAL` mode in SQLite [here](https://sqlite.org/wal.html){:target="_blank"}.

The **Backup** task is the proper way to create a backup file.

1. Go to :fontawesome-solid-gear: **Settings** > **System**.
2. Under the Application Paths heading, scroll down to **Backup directory path**.
3. Set the directory to store your backups.
4. Go to :fontawesome-solid-gear: **Settings** > **Tasks**.
5. Under the Backup heading, you will find the **Backup** task.
6. Select the **Backup...** task.
7. Select **Destination** and method:
    - To your backup directory: This will save the backup file to the directory you set in step 3.
    - Download backup file: This will prompt you to download the backup file directly to your computer.
8. You can optionally include blobs in your backup by checking the **Include blobs in backup** option. This will include the binary data in the backup file, which can be useful if you want to have a single file for backup and restore. However, keep in mind that this will make the backup file larger and may take more time to create.
9. Click **Backup** to start the backup process.

## Restore

Assuming you have properly created a backup file, you can use it to restore your database if needed.

!!! info
    The restore procedure uses the default `stash-go.sqlite` filename. If you changed that when configuring Stash, adjust accordingly.

The following steps are recommended when restoring a database file:

1. Go to :fontawesome-solid-gear: **Settings** > **System**, scroll down to the Database heading, and check your **Database path** location.
2. Check what your **Binary data storage type** is set to.
3. If it's set to `Filesystem`, look below for **Binary data path** and move your backed up blobs to that location. If set to `Database` or you included blobs in the backup, skip this step.
4. Create a backup of the current database (optional).
5. Stop Stash.
6. In your file browser, go to the location of your database path.
7. Move or delete the `stash-go.sqlite` database file (along with the `-shm`, `-wal`, and `.journal` files if present).
8. Copy the backup file that you want to restore to `stash-go.sqlite`.
9. Make sure that you now have a `stash-go.sqlite` file and that no `-shm`, `-wal`, or `.journal` files are present.
10. Start Stash.

You should now have Stash running with a working and restored database.

## Advanced troubleshooting

If you get a "database malformed" message during upgrade or backup, that probably means the database is already corrupt. One way to get past this is to do a full export and check the error log. If there are not a lot of errors, you can then try to do a full import and get a working database with minimal losses. As the full import is destructive, proceed with caution.
For cases like this, it is better to ask for [support](/#support).