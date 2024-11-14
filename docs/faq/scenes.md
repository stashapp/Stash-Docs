---
title: Scenes
icon: fontawesome/solid/circle-play
---

## How does Stash keep track of scenes?

Stash tracks video files 2 ways:

1. oshash - fast hash created using partial file and filesize. 
1. Filepath - exact library location where your file is stored.

Stash can still find the file even if one of them changes, all you need to do is run a scan task to trigger it. If both gets changed at the same time, Stash will create a new scene.