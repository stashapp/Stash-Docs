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

Plugins are separated into 2 sections:

---

## Official

Official plugins are hosted on [CommunityScripts repository](https://github.com/stashapp/CommunityScripts){:target="_blank"}. All code is reviewed by core Stash team and any questions or issues you have regarding these plugins can be raised in Discord or GitHub. 

Category|Triggers|Plugin Name|Description|Minimum Stash version
--------|-----------|-----------|-----------|---------------------
Scraper | Task | [GHScraper_Checker](https://github.com/stashapp/CommunityScripts/tree/main/plugins/GHScraper_Checker){:target="_blank"} | Compare local file against github file from the community scraper repo. | v0.8
Maintenance|Task<br />Scene.Update|[renamerOnUpdate](https://github.com/stashapp/CommunityScripts/blob/main/plugins/renamerOnUpdate){:target="_blank"}|Rename/Move your file based on Stash metadata.|v0.7
Maintenance|Set Scene Cover|[setSceneCoverFromFile](https://github.com/stashapp/CommunityScripts/blob/main/plugins/setSceneCoverFromFile){:target="_blank"}|Searchs Stash for Scenes with a cover image in the same folder and sets the cover image in stash to that image|v0.7
Scenes|SceneMarker.Create<br />SceneMarker.Update|[markerTagToScene](https://github.com/stashapp/CommunityScripts/blob/main/plugins/markerTagToScene){:target="_blank"}|Adds primary tag of Scene Marker to the Scene on marker create/update.|v0.8 ([46bbede](https://github.com/stashapp/stash/commit/46bbede9a07144797d6f26cf414205b390ca88f9){:target="_blank"})
Scanning|Scene.Create<br />Gallery.Create<br />Image.Create|[defaultDataForPath](https://github.com/stashapp/CommunityScripts/blob/main/plugins/defaultDataForPath){:target="_blank"}|Adds configured Tags, Performers and/or Studio to all newly scanned Scenes, Images and Galleries..|v0.8
Scanning|Scene.Create<br />Gallery.Create|[filenameParser](https://github.com/stashapp/CommunityScripts/blob/main/plugins/filenameParser){:target="_blank"}|Tries to parse filenames, primarily in {studio}.{year}.{month}.{day}.{performer1firstname}.{performer1lastname}.{performer2}.{title} format, into the respective fields|v0.10
Scanning|Scene.Create|[pathParser](https://github.com/stashapp/CommunityScripts/blob/main/plugins/pathParser){:target="_blank"}|Updates scene info based on the file path.|v0.17
Scanning|Scene.Create|[titleFromFilename](https://github.com/stashapp/CommunityScripts/blob/main/plugins/titleFromFilename){:target="_blank"}|Sets the scene title to its filename|v0.17
Reporting||[TagGraph](https://github.com/stashapp/CommunityScripts/blob/main/plugins/tagGraph){:target="_blank"}|Creates a visual of the Tag relations.|v0.7

---

## Third-party

{: .note }
These plugins are created by third parties and not officially affiliated or supported by the core Stash team. If you have issues, please reach out to the original creators.

Category | Plugin | Author | Description
-|-|-|-
Downloader | [YT-DL Downloader](https://github.com/niemands/StashPlugins){:target="_blank"} | niemands | Download Videos automated with yt-dl and add the scrape tag for Bulk URL Scraper |
Images | [Gallery Tags](https://github.com/niemands/StashPlugins){:target="_blank"} | niemands | Copy information from attached scene to galleries   |
Images | [Update Image Titles](https://github.com/niemands/StashPlugins){:target="_blank"} | niemands | Update all image titles (Fixes natural sort)        |
Maintenance | [Duplicate Finder](https://github.com/WithoutPants/stash-plugin-duplicate-finder){:target="_blank"} | WithoutPants | Detects and marks duplicate scenes within Stash
Metadata | [Performer Creator](https://github.com/com1234475/stash-plugin-performer-creator){:target="_blank"} | com1234475 | Creates performers from scenes based on filenames.
Metadata | [Set PH Urls](https://github.com/niemands/StashPlugins){:target="_blank"} | niemands | Add urls to pornhub scenes downloaded by Youtube-dl |
Scraping | [Bulk URL Scraper](https://github.com/niemands/StashPlugins){:target="_blank"} | niemands | Bulk scene url scraping                             |
Scraping | [OnlyFans Scraper](https://github.com/ALonelyJuicebox/OFMetadataToStash){:target="_blank"} | ALonelyJuicebox | Scrape scene and performer info from OnlyFans 
Scraping | [Scrape with](https://github.com/Tweeticoats/stash-plugin-scrape_with){:target="_blank"} | Tweeticoats | Batch scrape scenes and performers. For example tag a scene with scrape_with_xbvr and run the task to run that scraper. Run artist scrapers on all performers missing a url. Run the performer image scraper on all performers.
VR | [stash-deovr](https://github.com/Tweeticoats/stash-deovr){:target="_blank"} | Tweeticoats | Create an index json file /deovr used by the vr player allowing you to use DeoVR to play 2d and 3d videos from stash.