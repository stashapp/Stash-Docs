---
title: Docker
icon: fontawesome/brands/docker
---

Docker is effectively a cross-platform software package repository. It allows you to ship an entire environment in what's referred to as a container. Containers are intended to hold everything that is needed to run an application from one place to another, making it easy for everyone along the way to reproduce the environment.

The stash Docker container ships with everything you need to automatically run stash, including ffmpeg.

!!! info
    Before starting make sure your system has Docker installed. You can follow the instructions on how to install Docker from [Docker Docs](https://docs.docker.com/engine/install/){:target="_blank"}.

## Official

### stashapp team hosted image

- :fontawesome-brands-github: Source repository: [https://github.com/stashapp/stash](https://github.com/stashapp/stash)
- :fontawesome-brands-docker: DockerHub image: [https://hub.docker.com/r/stashapp/stash/](https://hub.docker.com/r/stashapp/stash/){:target="_blank"}

#### Details

- No hardware acceleration support
- No Python manager included
- Full ARM compatability

### Docker Compose

[https://github.com/stashapp/stash/blob/master/docker/production/docker-compose.yml](https://github.com/stashapp/stash/blob/master/docker/production/docker-compose.yml){:target="_blank"}

```yaml
# APPNICENAME=Stash
# APPDESCRIPTION=An organizer for your porn, written in Go
services:
  stash:
    image: stashapp/stash:latest
    container_name: stash
    restart: unless-stopped
    ## the container's port must be the same with the STASH_PORT in the environment section
    ports:
      - "9999:9999"
    ## If you intend to use stash's DLNA functionality uncomment the below network mode and comment out the above ports section
    # network_mode: host
    logging:
      driver: "json-file"
      options:
        max-file: "10"
        max-size: "2m"
    environment:
      - STASH_STASH=/data/
      - STASH_GENERATED=/generated/
      - STASH_METADATA=/metadata/
      - STASH_CACHE=/cache/
      ## Adjust below to change default port (9999)
      - STASH_PORT=9999
    volumes:
      - /etc/localtime:/etc/localtime:ro
      ## Adjust below paths (the left part) to your liking.
      ## E.g. you can change ./config:/root/.stash to ./stash:/root/.stash
      ## The left part is the path on your host, the right part is the path in the stash container.

      ## Keep configs, scrapers, and plugins here.
      - ./config:/root/.stash
      ## Point this at your collection.
      ## The left side is where your collection is on your host, the right side is where it will be in stash.
      - ./data:/data
      ## This is where your stash's metadata lives
      - ./metadata:/metadata
      ## Any other cache content.
      - ./cache:/cache
      ## Where to store binary blob data (scene covers, images)
      - ./blobs:/blobs
      ## Where to store generated content (screenshots,previews,transcodes,sprites)
      - ./generated:/generated
```

### Build from Dockerfile

#### Dockerfile (x86_64)

[https://github.com/stashapp/stash/blob/master/docker/build/x86_64/Dockerfile](https://github.com/stashapp/stash/blob/master/docker/build/x86_64/Dockerfile){:target="_blank"}

#### Dockerfile-CUDA (x86_64)

[https://github.com/stashapp/stash/blob/master/docker/build/x86_64/Dockerfile-CUDA](https://github.com/stashapp/stash/blob/master/docker/build/x86_64/Dockerfile-CUDA){:target="_blank"}

- Adds support for NVENC
- Adds Intel QSV drivers

## Community images

!!! info "Disclaimer"
    The images are not managed by stashapp team.

### feederbox826

- :fontawesome-brands-github: Source repository: [https://github.com/feederbox826/stash-s6](https://github.com/feederbox826/stash-s6){:target="_blank"}
- :fontawesome-brands-docker: DockerHub image: [https://hub.docker.com/r/feederbox826/stash-s6](https://hub.docker.com/r/feederbox826/stash-s6){:target="_blank"}
- :octicons-container-16: GitHub image: [https://github.com/feederbox826/stash-s6/pkgs/container/stash-s6](https://github.com/feederbox826/stash-s6/pkgs/container/stash-s6){:target="_blank"}

#### Details

- Hardware acceleration support
- [uv](https://pypi.org/project/uv/){:target="_blank"} Python manager

### nerethos

- :fontawesome-brands-github: Source repository: [https://github.com/nerethos/docker-stash](https://github.com/nerethos/docker-stash)
{:target="_blank"}
- :fontawesome-brands-docker: DockerHub image: [https://hub.docker.com/r/nerethos/stash](https://hub.docker.com/r/nerethos/stash){:target="_blank"}
- :octicons-container-16: GitHub image: [https://github.com/nerethos/docker-stash/pkgs/container/stash](https://github.com/nerethos/docker-stash/pkgs/container/stash){:target="_blank"}

#### Details

- Hardware acceleration support
- [venv](https://docs.python.org/3/library/venv.html){:target="_blank"} Python manager


## Using Docker Compose

!!! note
    Condensed instructions are available [here](https://github.com/stashapp/stash/blob/master/docker/production/README.md){:target="_blank"}. 

1. Download and save `docker-compose.yml` file from [our GitHub](https://raw.githubusercontent.com/stashapp/stash/master/docker/production/docker-compose.yml){:target="_blank"}.
  - Modify the `docker-compose.yml` file to your preferences. 
2. Open terminal in the same directory as saved `docker-compose.yml` or `cd` to that directory.
3. Run `docker compose up -d`.
4. Installing this way will bound Stash to port 9999. 
5. If everything went well Stash will be available at [http://localhost:9999](http://localhost:9999){:target="_blank"} locally or on your network [http://YOUR-LOCAL-IP:9999](http://YOUR-LOCAL-IP:9999){:target="_blank"}.

### Update

??? warning "Migrating from <=v0.20"
    If you are upgrading from older than v0.20 version make sure to re-download the `docker-compose.yml` file from [our GitHub](https://raw.githubusercontent.com/stashapp/stash/master/docker/production/docker-compose.yml){:target="_blank"} as new volume was added.  
    Alternatively you can edit the `docker-compose.yml` to manually include new volume: `- ./blobs:/blobs`.

1. Go to the directory where `docker-compose.yml` is saved.
2. Run `docker-compose pull`. Pulls the new image.
3. Run `docker-compose down`. Removes old container.
4. Run `docker compose up -d`. Creates and starts the new container. 
  - Make sure the mount points and settings are the same as in previous `docker-compose.yml` file. 

### Remove

1. Go to the directory where `docker-compose.yml` is saved.
2. Run `docker container kill`. Force stops the container.
3. Run `docker container rm`. Removes the container.
3. Delete `docker-compose.yml` file.
