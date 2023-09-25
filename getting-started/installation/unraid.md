---
layout: clean
title: Unraid
nav_order: 7
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
Unraid app is maintained by a 3rd party. For Unraid specific support you can go to [support thread](https://forums.unraid.net/topic/90861-support-stash-corneliousjd-repo){:target="_blank"} by CorneliousJD.

{: .note }
For users that want to try the development branch of Stash you can change the repository to `stashapp/stash:development`.

# Install

1. Open Unraid and go to the `Apps` tab.
2. Enable apps (if disabled) and search for `Stash`.
  - You can modify paths to your preference.
3. Go to Docker tab and enable autostart for `Stash`.

# Optional Nvidia Runtime

{: .important }
`binarygeek119/stash-cuda:latest` repository is not maintained by Stash core team. 

1. First off you need the unraid Nvidia plugin for this to work. On Unraid go to apps and do a search for `nvidia driver` and install, this will take some time to install. When the dialog is done it is still installing in the background. When it has finshed you will get a popup saying it is safe to reboot now.

{: .warning }
Do not restart Unraid server until the plugin is done installing itself!

{:style="counter-reset:none"}
2. After getting the popup, reboot your server. After it back online you may continue to the next steps.

{:style="counter-reset:none"}
3. To begin modifing start by going into edit mode by right click on stash icon on Unraid dashboard or in Docker tab.

{:style="counter-reset:none"}
4. In edit mode go to the top and click on basic view to switch to advaced view.

![](/assets/beginner-guides/unraid-docker-stash-page.jpg)
![](/assets/beginner-guides/unraid-docker-stash-page-advanced-view.jpg)

## Container configuration

Now we can change some thing to have Stash work with a Nvidia GPU.

1. Under Repository change the default Repository from `stashapp/stash:development` to `binarygeek119/stash-cuda:latest`.

![](/assets/beginner-guides/unraid-docker-stash-Repository-1.jpg)
![](/assets/beginner-guides/unraid-docker-stash-Repository-2.jpg)

{:style="counter-reset:none"}
2. Add the following under Extra Parameters: `--runtime=nvidia`.

![](/assets/beginner-guides/unraid-docker-stash-Extra-Parameters-1.jpg)
![](/assets/beginner-guides/unraid-docker-stash-Extra-Parameters-2.jpg)

{:style="counter-reset:none"}
3. Go down to the bottom of the page and click on  `Add another Path, Port, Variable, Label or Device`.

![](/assets/beginner-guides/unraid-stash-Add-another-Variable-1.jpg)

{:style="counter-reset:none"}
4. Change `path` to `Variable` and add the following:

`Name:` enter `NVIDIA_DRIVER_CAPABILITIES`<br />
`Key:` enter `NVIDIA_DRIVER_CAPABILITIES`<br />
`Value:` enter `all`<br />

and click save. 

![](/assets/beginner-guides/unraid-stash-Add-another-Variable-2.jpg)
![](/assets/beginner-guides/unraid-stash-Add-another-Variable-3.jpg)
![](/assets/beginner-guides/unraid-stash-Add-another-Variable-4.jpg)

{:style="counter-reset:none"}	
5. Go down to the bottom of the page and click on  `Add another Path, Port, Variable, Label or Device`.

![](/assets/beginner-guides/unraid-stash-Add-another-Variable-1.jpg)

{:style="counter-reset:none"}
6. Change `path` to `Variable` and add the following:

`Name:` enter `NVIDIA_VISIBLE_DEVICES`<br />
`Key:` enter `NVIDIA_VISIBLE_DEVICES`<br />
`Value:` enter `GPU-xxxx-xxxx-xxx-xxxx-xxxx-xxx-xxxxxxxxxxxx`<br />

![](/assets/beginner-guides/unraid-stash-Add-another-Variable-2.jpg)
![](/assets/beginner-guides/unraid-stash-Add-another-Variable-3.jpg)
![](/assets/beginner-guides/unraid-stash-Add-another-Variable-5.jpg)

### Locating GPUID
	
Where `GPU-xxxx-xxxx-xxx-xxxx-xxxx-xxx-xxxxxxxxxxxx` you must enter your own GPUID. To find it do the folowing:
  - On a new Unraid page click on settings.
  - Go down to the bottom and click Nvidia Driver plugin.
  - Copy the key and paste it under `Variable` called `Value`.

![](/assets/beginner-guides/unraid-gpuid.jpg)

{:style="counter-reset:none"}   
7. Click on save.

{:style="counter-reset:none"}
8. Now click on apply and let the Docker download the new Nvidia version of Stash.

{:style="counter-reset:none"}
9. Enjoy and use as before.
