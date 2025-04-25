---
title: Docker
icon: fontawesome/brands/docker
---

!!! info
    Before starting make sure your system has Docker installed. You can follow the instructions on how to install Docker from [Docker Docs](https://docs.docker.com/engine/install/){:target="_blank"}.

!!! info
    Official Stash image is located at [`stashapp/stash`](https://hub.docker.com/r/stashapp/stash){:target="_blank"}.

!!! note
    Stash README on Docker installation is available [here](https://github.com/stashapp/stash/blob/master/docker/production/README.md){:target="_blank"}. 

## Using Docker Compose

### Install

1. Download and save `docker-compose.yml` file from [our GitHub](https://raw.githubusercontent.com/stashapp/stash/master/docker/production/docker-compose.yml){:target="_blank"}.
  - Modify the `docker-compose.yml` file to your preferences. 
2. Open terminal in the same directory as saved `docker-compose.yml` or `cd` to that directory.
3. Run `docker-compose up -d`.
4. Installing this way will bound Stash to port 9999. 
5. If everything went well Stash will be available at [http://localhost:9999](http://localhost:9999){:target="_blank"} locally or on your network [http://YOUR-LOCAL-IP:9999](http://YOUR-LOCAL-IP:9999){:target="_blank"}.

### Update

??? warning
    If you are upgrading from older than v0.20 version make sure to re-download the `docker-compose.yml` file from [our GitHub](https://raw.githubusercontent.com/stashapp/stash/master/docker/production/docker-compose.yml){:target="_blank"} as new volume was added. Alternatively you can edit the `docker-compose.yml` to manually include new volume `- ./blobs:/blobs`.

1. Go to the directory where `docker-compose.yml` is saved.
2. Run `docker-compose pull`. Pulls the new image.
3. Run `docker-compose down`. Removes old container.
4. Run `docker-compose up -d`. Creates and starts the new container. 
  - Make sure the mount points and settings are the same as in previous `docker-compose.yml` file. 

### Remove

1. Go to the directory where `docker-compose.yml` is saved.
2. Run `docker container kill`. Force stops the container.
3. Run `docker container rm`. Removes the container.
3. Delete `docker-compose.yml` file.
