---
layout: clean
title: Unraid Support
nav_order: 6
parent: Installation
grand_parent: Getting Started

---

To use the Nvidia version of stash. follow the guide for the standered stash docker for unraid. (https://docs.stashapp.cc/getting-started/installation/unraid/)
Fill in based off the setup guide and then we modify it to use nivida runtimes.

First off you need the unraid nvidia plugin for this to work. On unraid go to apps and do a search for `nvidia driver` and install this will take some time to install. do not restart unraid server till the plugin is done installing its self.
when the dialog is done it is still installing in the background. when it has finshed you will get a popup saying it is safe to reboot now.
and now reboot. after it back online you may continue to the next steps.

To modify start with going into edit by right click on stash icon on unraid dashboard or in docker tab.

In edit mode go to the top and click on basic view to switch to advaced view (see pics unraid-docker-stash-page.jpg and  unraid-docker-stash-page-advanced-view.jpg)

Now we can change some thing to have stash work with a nvidia GPU.
(see pics unraid-docker-stash-Repository-1 and unraid-docker-stash-Repository-2)
1. Under Repository change the default Repository from `stashapp/stash:development` to `binarygeek119/stash-cuda:latest` with out the `` ()

2. Add the following under Extra Parameters: `--runtime=nvidia` with out the `` (see pics unraid-docker-stash-Extra Parameters-1.jpg and unraid-docker-stash-Extra Parameters-2.jpg)

3. Go down to the bottom of the page and click on  `Add another Path, Port, Variable, Label or Device` (see pic unraid-stash-Add-another-Variable.jpg)

4. Change `path` to `Variable` and add the following (see pics unraid-stash-Add-another-Variable-1.jpg, unraid-stash-Add-another-Variable-2.jpg, and unraid-stash-Add-another-Variable-3.jpg)
   
   `Name:` enter `NVIDIA_DRIVER_CAPABILITIES`
   `Key:` enter `NVIDIA_DRIVER_CAPABILITIES`
   `Value:` enter `all` 
   
   (see pic unraid-stash-Add-another-Variable-4.jpg)
    click save
	
5. Go down to the bottom of the page and click on  `Add another Path, Port, Variable, Label or Device` (see pic unraid-stash-Add-another-Variable.jpg)

6. Change `path` to `Variable` and add the following (see pics unraid-stash-Add-another-Variable-1.jpg, unraid-stash-Add-another-Variable-2.jpg, and unraid-stash-Add-another-Variable-3.jpg)

	`Name:` enter `NVIDIA_VISIBLE_DEVICES`
    `Key:` enter `NVIDIA_VISIBLE_DEVICES`
    `Value:` enter `GPU-xxxx-xxxx-xxx-xxxx-xxxx-xxx-xxxxxxxxxxxx` 
	(see pic unraid-stash-Add-another-Variable-5.jpg)
	
   where `GPU-xxxx-xxxx-xxx-xxxx-xxxx-xxx-xxxxxxxxxxxx`  you must enter your own GPUID to do this you must do the folowing.
   1. on a new unraid page click on settings.
   2. go down to the bottom and click Nvidia Driver plugin
   3. copy and page the key show in pic unraid-gpuid.jpg.
   
7. click on save.

8. now click on apply and let the docker download the new Nvidia version of stash.

9. enjoy and use as before.




