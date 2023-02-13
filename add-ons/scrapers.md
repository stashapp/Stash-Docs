---
layout: clean
title: Scrapers
nav_order: 1
has_children: false
parent: Add-ons

---

<details markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Scrapers are the way to retrieve information from websites for your movies/scenes/galleries/performers...etc. Using scrapers wisely, you can avoid typing information manually and repetitively. They can help you quickly establish links between movies/scenes and performers/studios, add relative tags, then download covers/posters for easy recognition. It's a great feature to organize your video or image collections.

{: .important }
> Scrapers are in **.yml** format. Some of them requires Python or Ruby if you use those, you need to install Python/Ruby on your machine, and don't forget to get the corresponding **.py** or **.rb** file as well.

# Installation

To install a scraper:
1. Make sure you have the `scrapers` folder in the same location of your Stash app. If you don't have it, create that folder/directory. You can also specify the name of this folder in the `config.yml`.
2. Go to the [CommunityScrapers repository](https://github.com/stashapp/CommunityScrapers){:target="_blank"}.
  - Find the scraper you want from [scrapers list](https://github.com/stashapp/CommunityScrapers/blob/master/SCRAPERS-LIST.md){:target="_blank"} > go back to the [main repository](https://github.com/stashapp/CommunityScrapers){:target="_blank"} > go to scrapers folder > find the scraper, use `Ctrl+F` to open search > open the file > click `Raw` button > right click the page with your mouse and select `Save As...` or use `Ctrl+S`.
  - Download the whole [CommunityScrapers repository](https://github.com/stashapp/CommunityScrapers){:target="_blank"} by clicking `Code` > `Download ZIP`. Copy the files from **scrapers** folder in your **.zip** to your `.stash/scrapers` directory. 

{: .note }
For Python scrapers, it's also helpful to read the **.py** file. Some of them require extra Python modules installed to work.

{:style="counter-reset:none"}
3. Once the new scrapers are in position, you need to go to `Settings` > `Metadata Providers` and click on `Reload Scrapers` button. You should see your scrapers listed in the list below that button.

{:style="counter-reset:none"}
4. Navigate to the scene/gallery/movie/performer you want to scrape.
  - If that's a URL scraper, you need to paste the URL in its "URL" blanket, and the scrape icon next to it should light up.
  - If that's a Search-By-Name scraper, you can provide the name and choose "Scrape With...", and the scraper should fetch the list of potential matches for you.

{:style="counter-reset:none"}
5. You will preview the scrape result before you commit the change. Check on the left will keep the original value, check on the right will make the change.

# Scraper Types

## By Searching Type

### Fragment

This kind of scrapers will fetch the metadata from a website, by using existing data from Stash, like a scene's file name, performer's name...etc. Fragment scrapers will get all the data Stash knows about that scene/performer/gallery, so it's quite flexible when fetching information.

Scrapers includes: AdultTimeAPI.yml, JavLibrary.yml, ThePornDB.yml

### Search By Name

A Search-By-Name scraper will get only "name" input from a scene or performer, then it will search a website with that name, and return a list of results.

Scrapers includes: Babepedia.yml, FreeonesCommunity.yml, IAFD.yml

### Search By URL

Most scrapers fetch metadata from a given URL, either by using XPath, JSON, or scripts. For this kind of scrapers you need to know the URL for that scene/performer/gallery/movie so they can extract information from it.

Scrapers includes: All other scrapers.

## By Implementation

### XPath and JSON Scrapers

This is the most common type of scrapers, which use either XPath parser to pin-point the information and retrieve them, or send out JSON requests to get the information. xpathScraper and jsonScraper can be mixed in the same .yml file.

### CDP Scrapers

This type of scrapers is mostly the same as XPath/JSON scrapers, except it will launch a headless Chrome browser to retrieve the information from websites. It can also get cookies, simulate a mouse click and other actions. These scrapers have `useCDP: true` setting in them.

### Python / Ruby Scrapers

This type of scrapers will launch Python, Ruby to retrieve information from websites. Script scrapers are powerful, versatile and cross-platform. So they usually can do much more than regular scrapers. To install this kind of scrapers, you need to copy not only the .yml file, but also all the script files like .py, .rb that associated with it.

# More details

You can view the [detailed information about scrapers here](/in-app-manual/scraping) or [CommunityScrapers README](https://github.com/stashapp/CommunityScrapers/blob/master/README.md){:target="_blank"}.

# Create your own

To create your own scraper, there is [detailed information about that as well](/in-app-manual/scraping/scraperdevelopment). Best way to start is to read the simple ones and understand how xpath works. The [XPath Cheetsheet](https://devhints.io/xpath){:target="_blank"} is quite useful in creating a .yml file. In Firefox you can use xpath search in "Web Developer Tools (F12)". The "search HTML" bar actually accepts xpath searches. You can use it to verify your xpath queries.

# Contribution

The Scraper community always welcome new members. If you create a nice scraper and find it stable and useful, you can share it via [the GitHub repository](https://github.com/stashapp/CommunityScrapers){:target="_blank"}. Create a pull request, and let the mod review your work. The mods are busy, so it will probably take a few days, or a couple of weeks, but it will be a great feeling once your contribution is accepted by the community.