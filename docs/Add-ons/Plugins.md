---
layout: default
title: Plugins
nav_order: 2
parent: Add-ons
---
# Plugins
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

Stash plugins add further features that Stash doesn't itself provide. 

To install a plugin, save them to `%USERPROFILE%\.stash\plugins` on Windows or `/root/.stash/plugins` on Unix systems (Mac, Linux, etc.). The `plugins` directory won't exist by default so you will have to create it. Once installed, go to the Plugins page in your Stash settings and reload plugins.

Plugins are separated into 2 sections [Official](#official) and [Third-party](#third-party).

---

## Official

Official plugins are hosted on [CommunityScripts repository](https://github.com/stashapp/CommunityScripts){:target="_blank"}. All code is reviewed by core Stash team and any questions or issues you have regarding these plugins can be raised in Discord or GitHub. 

### GHScraper_Checker

|-|-|
|Category|Scraper|
|Plugin|[GHScraper_Checker](https://github.com/stashapp/CommunityScripts/tree/main/plugins/GHScraper_Checker)|
|Description|Compare local file against github file from the community scraper repo.|
|Triggers|Task|
|Stash version|v0.8 or higher|
|Screenshots|![](../assets/fixed_table_width.png)![GHScraper_Checker](../assets/GHScraper_Checker.png)|

### renamerOnUpdate

|-|-|
|Category|Maintenance|
|Plugin|[renamerOnUpdate](https://github.com/stashapp/CommunityScripts/blob/main/plugins/renamerOnUpdate){:target="_blank"}|
|Description|Rename/Move your file based on Stash metadata.|
|Triggers|Task<br />Scene.Update|
|Stash version|v0.7 or higher|
|Screenshots|![](../assets/fixed_table_width.png)![renamerOnUpdate](../assets/renamerOnUpdate.png)|

### setSceneCoverFromFile

|-|-|
|Category|Maintenance|
|Plugin|[setSceneCoverFromFile](https://github.com/stashapp/CommunityScripts/blob/main/plugins/setSceneCoverFromFile){:target="_blank"}|
|Description|Searchs Stash for Scenes with a cover image in the same folder and sets the cover image in stash to that image.|
|Triggers|Task|
|Stash version|v0.7 or higher|
|Screenshots|![](../assets/fixed_table_width.png)|

### markerTagToScene

|-|-|
|Category|Scene|
|Plugin|[markerTagToScene](https://github.com/stashapp/CommunityScripts/blob/main/plugins/markerTagToScene){:target="_blank"}|
|Description|Adds primary tag of Scene Marker to the Scene on marker create/update.|
|Triggers|SceneMarker.Create<br />SceneMarker.Update|
|Stash version|v0.8 ([46bbede](https://github.com/stashapp/stash/commit/46bbede9a07144797d6f26cf414205b390ca88f9){:target="_blank"}) or higher|
|Screenshots|![](../assets/fixed_table_width.png)|

### defaultDataForPath

|-|-|
|Category|Scanning|
|Plugin|[defaultDataForPath](https://github.com/stashapp/CommunityScripts/blob/main/plugins/defaultDataForPath){:target="_blank"}|
|Description|Adds configured Tags, Performers and/or Studio to all newly scanned Scenes, Images and Galleries.|
|Triggers|Scene.Create<br />Gallery.Create<br />Image.Create|
|Stash version|v0.8 or higher|
|Screenshots|![](../assets/fixed_table_width.png)|

### filenameParser

|-|-|
|Category|Scanning|
|Plugin|[filenameParser](https://github.com/stashapp/CommunityScripts/blob/main/plugins/filenameParser){:target="_blank"}|
|Description|Tries to parse filenames, primarily in {studio}.{year}.{month}.{day}.{performer1firstname}.{performer1lastname}.{performer2}.{title} format, into the respective fields.|
|Triggers|Scene.Create<br />Gallery.Create|
|Stash version|v0.10 or higher|
|Screenshots|![](../assets/fixed_table_width.png)|

### pathParser

|-|-|
|Category|Scanning|
|Plugin|[pathParser](https://github.com/stashapp/CommunityScripts/blob/main/plugins/pathParser){:target="_blank"}|
|Description|Updates scene info based on the file path.|
|Triggers|Scene.Create|
|Stash version|v0.17 or higher|
|Screenshots|![](../assets/fixed_table_width.png)|

### titleFromFilename

|-|-|
|Category|Scanning|
|Plugin|[titleFromFilename](https://github.com/stashapp/CommunityScripts/blob/main/plugins/titleFromFilename){:target="_blank"}|
|Description|Sets the scene title to its filename.|
|Triggers|Scene.Create|
|Stash version|v0.17 or higher|
|Screenshots|![](../assets/fixed_table_width.png)|

### tagGraph

|-|-|
|Category|Reporting|
|Plugin|[tagGraph](https://github.com/stashapp/CommunityScripts/blob/main/plugins/tagGraph){:target="_blank"}|
|Description|Creates a visual of the Tag relations.|
|Triggers|Scene.Create|
|Stash version|v0.7 or higher|
|Screenshots|![](../assets/fixed_table_width.png)|

---

## Third-party

{: .note }
These plugins are created by third parties and not officially affiliated or supported by the core Stash team. If you have issues, please reach out to the original creators.

### YT-DL Downloader

|-|-|
|Category|Downloader|
|Plugin|[YT-DL Downloader](https://github.com/niemands/StashPlugins){:target="_blank"}|
|Description|Download Videos automated with yt-dl and add the scrape tag for Bulk URL Scraper.|
|Author|[niemands](https://github.com/niemands){:target="_blank"}|
|Screenshots|![](../assets/fixed_table_width.png)|

### Gallery Tags

|-|-|
|Category|Images|
|Plugin|[Gallery Tags](https://github.com/niemands/StashPlugins){:target="_blank"}|
|Description|Copy information from attached scene to galleries.|
|Author|[niemands](https://github.com/niemands){:target="_blank"}|
|Screenshots|![](../assets/fixed_table_width.png)|

### Update Image Titles

|-|-|
|Category|Images|
|Plugin|[Update Image Titles](https://github.com/niemands/StashPlugins){:target="_blank"}|
|Description|Update all image titles (Fixes natural sort).|
|Author|[niemands](https://github.com/niemands){:target="_blank"}|
|Screenshots|![](../assets/fixed_table_width.png)|

### Duplicate Finder

|-|-|
|Category|Maintenance|
|Plugin|[Duplicate Finder](https://github.com/WithoutPants/stash-plugin-duplicate-finder){:target="_blank"}|
|Description|Detects and marks duplicate scenes within Stash.|
|Author|[WithoutPants](https://github.com/WithoutPants){:target="_blank"}|
|Screenshots|![](../assets/fixed_table_width.png)|

### Performer Creator

|-|-|
|Category|Metadata|
|Plugin|[Performer Creator](https://github.com/com1234475/stash-plugin-performer-creator){:target="_blank"}|
|Description|Creates performers from scenes based on filenames.|
|Author|[com1234475](https://github.com/com1234475){:target="_blank"}|
|Screenshots|![](../assets/fixed_table_width.png)|

### Set PH Urls

|-|-|
|Category|Metadata|
|Plugin|[Set PH Urls](https://github.com/niemands/StashPlugins){:target="_blank"}|
|Description|Add urls to Pornhub scenes downloaded by youtube-dl.|
|Author|[niemands](https://github.com/niemands){:target="_blank"}|
|Screenshots|![](../assets/fixed_table_width.png)|

### Bulk URL Scraper

|-|-|
|Category|Scraping|
|Plugin|[Bulk URL Scraper](https://github.com/niemands/StashPlugins){:target="_blank"}|
|Description|Bulk scene url scraping.|
|Author|[niemands](https://github.com/niemands){:target="_blank"}|
|Screenshots|![](../assets/fixed_table_width.png)|

### Scrape with

|-|-|
|Category|Scraping|
|Plugin|[Scrape with](https://github.com/Tweeticoats/stash-plugin-scrape_with){:target="_blank"}|
|Description|Batch scrape scenes and performers. For example tag a scene with scrape_with_xbvr and run the task to run that scraper. Run artist scrapers on all performers missing a url. Run the performer image scraper on all performers.|
|Author|[Tweeticoats](https://github.com/Tweeticoats){:target="_blank"}|
|Screenshots|![](../assets/fixed_table_width.png)|

### stash-deovr

|-|-|
|Category|VR|
|Plugin|[stash-deovr](https://github.com/Tweeticoats/stash-deovr){:target="_blank"}|
|Description|Creates an index json file /deovr used by the vr player allowing you to use DeoVR to play 2d and 3d videos from stash.|
|Author|[Tweeticoats](https://github.com/Tweeticoats){:target="_blank"}|
|Screenshots|![](../assets/fixed_table_width.png)|