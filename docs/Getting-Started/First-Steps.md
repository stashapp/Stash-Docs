---
layout: default
title: First Steps
nav_order: 2
parent: Getting Started
---
# **First Steps**
{: .no_toc }

---

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Setting Up Content Libraries

1. Open your Stash.
2. Go to `Settings` > `Library` and click `Add Directory`.
3. To change the drive letter/volume, just type it in the field.
![Drive location]({{ site.baseurl }}/docs/Getting-Started/assets/drive_location.png)
4. Select the folder containing the content you want to add. It will select the folder and all sub-folders.
5. Click `Confirm`.

---

## Configuring Scan Options

1. Open your Stash.
2. Go to `Settings` > `Tasks`.

| Option                           | Description                                                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Generate previews                | Generates video previews which play when hovering over a scene.                                                                         |
| Generate animated image previews | Generates animated webp previews. Only required if the Preview Type is set to Animated Image. Requires Generate previews to be enabled. |
| Generate scrubber sprites        | Generates sprites for the scene scrubber.                                                                                               |
| Generate perceptual hashes       | Generates perceptual hashes for scene deduplication and identification.                                                                 |
| Generate thumbnails for images   | Generates thumbnails for image files.                                                                                                   |

{:style="counter-reset:none"}
3. Select options you want based on your preferences, but every option increases time the scan will take.
4. You can stop and re-scan it will ignore the files that are already scanned and just scan new or missing files.

---

## Initiating Scan

1. Open your Stash.
2. Go to `Settings` > `Tasks`.
3. Click `Scan` to start scanning for the content from your setup libraries or `Selective Scan...` if you want to scan a specific location.
