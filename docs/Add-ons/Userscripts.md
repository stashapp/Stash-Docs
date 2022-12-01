---
layout: default
title: Userscripts
nav_order: 4
parent: Add-ons
---
# Userscripts
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

 Userscripts are programs written in Javascript that modifies web pages to improve browsing with new features, formatting and more. 

To install the userscript you will need a browser extension such as [Violentmonkey](https://violentmonkey.github.io){:target="_blank"} / [Tampermonkey](https://www.tampermonkey.net){:target="_blank"} / [Greasemonkey](https://www.greasespot.net){:target="_blank"}.

## Categories
- **Stash** - applies to Stash software
- **StashDB** - applies to StashDB.org stash-box instance (might work with other stash-box instances with some tweaking)
- **Utility** - applies to sites not related to Stash

Userscripts are separated into 2 sections:

---

## Official

Official userscripts are hosted on [CommunityScripts repository](https://github.com/stashapp/CommunityScripts){:target="_blank"}. All code is reviewed by core Stash team and any questions or issues you have regarding these userscripts can be raised in Discord or GitHub. 

| Category | Userscript Name | Description |
---------|---------------|-----------|
StashDB | [StashDB Submission Helper](https://github.com/stashapp/CommunityScripts/blob/main/userscripts/StashDB_Submission_Helper){:target="_blank"} | Adds handy functions for StashDB submissions like buttons to add aliases in bulk to a performer |

---

## Third-party

{: .note }
These userscripts are created by third parties and not officially affiliated or supported by the core Stash team. If you have issues, please reach out to the original creators.

Category | Plugin | Author | Description
-|-|-|-
Stash | [Stash Batch Query Edit](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | In Scene Tagger, adds button to batch update all query fields with a configurable combination of Date, Studio, Performers, and Title
Stash | [Stash Batch Result Toggle](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | In Scene Tagger, adds button to toggle all stashdb scene match result fields. Saves clicks when you only want to save a few metadata fields. Instead of turning off every field, you batch toggle them off, then toggle on the ones you want
Stash | [Stash Batch Save](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | In Scene Tagger, adds button to batch save all scenes. Opens a confirmation popup with clicked
Stash | [Stash Batch Search](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | In Scene Tagger, adds button to batch search all scenes
Stash | [Stash Markdown](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds markdown parsing to tag description fields
Stash | [Stash New Performer Filter Button](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds button to performers page to switch to a filter by new performers tagger view
Stash | [Stash Open Media Player](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Open filepath link on scene page 'File Info' tab in an external media player when clicked
Stash | [Stash Performer Audit Task Button](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds a button to the performers page to check for duplicate performer urls. Task output shown in stash logs
Stash | [Stash Performer Image Cropper](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds ability to crop performer image from performer page
Stash | [Stash Performer Markers Tab](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds a Markers link to performer pages
Stash | [Stash Performer Tagger Additions](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds performer birthdate and url to tagger view. Makes clicking performer name open stash profile in new tab instead of current tab
Stash | [Stash Performer URL Searchbox](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds a performer URL search textbox to performers page for quicker searching by performer URL
Stash | [Stash Scene Tagger Additions](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds scene duration, filepath, and url to tagger view in the collapsible scene details sections. Adds shift-click to collapsible scene details buttons to open/close all.
Stash | [Stash Scene Tagger Colorizer](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | In Scene Tagger, colorize scrape results. Matching fields are green, missing fields are yellow, and mismatching fields are red
Stash | [Stash Scene Tagger Draft Submit](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds button to Scene Tagger to submit draft to stashdb	
Stash | [Stash Scene Tagger Linkify](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Turn all scene tagger result text referencing stash or stashbox studio and performer names into clickable links
Stash | [Stash Set Stashbox Favorite Performers](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Sync Stashbox favorite performers whenever a stash performer is favorited or unfavorited. Also adds button to performers page to sync all
Stash | [Stash StashID Icon](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds checkmark icon to performer and studio cards that have a stashid
Stash | [Stash StashID Input](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds input textboxes to performer detail and studio detail pages for stashid entry. Also displays studio stashids on studio page without having to click edit to view
Stash | [Stash Stats](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds new stats to the stats page: marker count, favorite performer count, studios with stashid %, performers with stashid %, scenes with stashid %
Stash | [Stash Studio Image And Parent On Create](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | In Scene Tagger, sets studio image and parent studio from StashDB when a studio is created
Stash | [Stash Tag Image Cropper](https://github.com/7dJx1qP/stash-userscripts){:target="_blank"} | 7dJx1qP | Adds ability to crop tag image from tag page
Stash | [Visage](https://github.com/cc1234475/visage){:target="_blank"} | cc1234475 | Visage is a series of tools to do facial recognition on images (and create a searchable database)
StashDB | [StashDB Copy StashID](https://github.com/7dJx1qP/stashdb-userscripts){:target="_blank"} | 7dJx1qP | Adds a button to copy StashID
StashDB | [StashDB Backlog Userscript](https://gist.github.com/peolic/e4713081f7ad063cd0e91f2482ac39a7){:target="_blank"} | peolic | This userscript is used to be able to view pending changes from the StashDB Backlog spreadsheet directly on StashDB
StashDB | [StashDB Images Userscript](https://gist.github.com/peolic/7368022947a28ef11bf44d0ae802df45){:target="_blank"} | peolic | This userscript adds image resolutions next to every performer image on StashDB
StashDB | [StashDB ID Copy Buttons](https://github.com/peolic/userscripts){:target="_blank"} | peolic | Adds buttons to copy StashID
Utility | [Indexxx Helper Userscript](https://github.com/peolic/userscripts){:target="_blank"} | peolic | This userscript adds useful tools to indexxx.com
Utility | [IAFD Helper Userscript](https://github.com/peolic/userscripts){:target="_blank"} | peolic | This userscript converts dates to YYYY-MM-DD and provides a filter for the studios search page on iafd.com
Utility | [ManyVids Release Year Userscript](https://github.com/peolic/userscripts){:target="_blank"} | peolic | This userscript adds the year to partial video release dates on manyvids.com
Utility | [Brazzers Sub-Studio Userscript](https://github.com/peolic/userscripts){:target="_blank"} | peolic | This userscript adds the sub-studio of a Brazzers scene to the video page
Utility | [1 Pass For All Sites - Better Episode Image](https://github.com/peolic/userscripts){:target="_blank"} | peolic | Attempts to grab a better episode image
Utility | [CumLouder](https://github.com/peolic/userscripts){:target="_blank"} | peolic | Adds site logo and name to video pages. May not work for all videos.
Utility | [ExploitedX Sites - Release Codes](https://github.com/peolic/userscripts){:target="_blank"} | peolic | Shows episode numbers for ExploitedX sites.
Utility | [FTVCash - Better Image](https://github.com/peolic/userscripts){:target="_blank"} | peolic | Attempts to grab a better episode image
Utility | [Gamma Entertainment - Scene Length](https://github.com/peolic/userscripts){:target="_blank"} | peolic | Adds scene length information on Gamma Entertainment sites
Utility | [Kink - Find Duration](https://github.com/peolic/userscripts){:target="_blank"} | peolic | Add "find duration" link to shoot pages
Utility | [MindGeek Scene Trailer](https://github.com/peolic/userscripts){:target="_blank"} | peolic | Shows trailers on MindGeek sites
Utility | [Porn Pros](https://github.com/peolic/userscripts){:target="_blank"} | peolic | Fixes duration on Porn Pros sites


