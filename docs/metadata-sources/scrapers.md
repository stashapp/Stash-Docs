---
title: Scrapers
---

Scrapers are the way to retrieve information from websites for your scenes/groups/galleries/performers. Using scrapers wisely, you can avoid typing information manually and repetitively. They can help you quickly establish links between groups/scenes and performers/studios, add relative tags, then download covers/posters for easy recognition. It's a great feature to organize your video or image collections.

## Managing scrapers

Scrapers can be installed and managed from the :fontawesome-solid-gear: **Settings** > **Metadata Providers** page.

Scrapers are installed using the **Available Scrapers** section. The **Community (stable)** source is configured by default.

Installed plugins can be updated or uninstalled from the **Installed Scrapers** section.

### Adding sources

Anyone can create their own source index for scrapers. To add a new source go to :fontawesome-solid-gear: **Settings** > **Metadata Providers** page and under **Available Scrapers** click **Add Source**.

### Installing scrapers manually

By default, Stash looks for scrapers configurations in the scrapers sub-directory of the directory where the stash `config.yml` is read. This will either be the `%USERPROFILE%\.stash\scrapers` on Windows or `/root/.stash/scrapers` on Unix systems (Mac, Linux, etc.) or the current working directory.

Scrapers are added by adding configuration yaml files (format: `scraperName.yml`) to the `scrapers` directory.

Loaded scrapers can be viewed in the :fontawesome-solid-gear: **Settings** > **Metadata Providers** page. After scrapers are added, removed or edited while Stash is running, they can be reloaded by clicking :fontawesome-solid-rotate: **Reload scrapers** button.

[CommunityScrapers repository](https://github.com/stashapp/CommunityScrapers){:target="_blank"} is the source for community maintained scrapers.

## Scraper types

### By searching type

#### Fragment

This kind of scrapers will fetch the metadata from a website, by using existing data from Stash, like a scene's file name, performer's name...etc. Fragment scrapers will get all the data Stash knows about that scene/performer/gallery, so it's quite flexible when fetching information.

#### Search by name

A Search-By-Name scraper will get only "name" input from a scene or performer, then it will search a website with that name, and return a list of results.

Scrapers includes: Babepedia.yml, FreeonesCommunity.yml, IAFD.yml

#### Search by URL

Most scrapers fetch metadata from a given URL, either by using XPath, JSON, or scripts. For this kind of scrapers you need to know the URL for that scene/performer/gallery/group so they can extract information from it.

Scrapers includes: All other scrapers.

### By implementation

#### XPath and JSON scrapers

This is the most common type of scrapers, which use either XPath parser to pin-point the information and retrieve them, or send out JSON requests to get the information. xpathScraper and jsonScraper can be mixed in the same .yml file.

#### CDP scrapers

This type of scrapers is mostly the same as XPath/JSON scrapers, except it will launch a headless Chrome browser to retrieve the information from websites. It can also get cookies, simulate a mouse click and other actions. These scrapers have `useCDP: true` setting in them.

#### Python / Ruby scrapers

This type of scrapers will launch Python, Ruby to retrieve information from websites. Script scrapers are powerful, versatile and cross-platform. So they usually can do much more than regular scrapers. To install this kind of scrapers, you need to copy not only the .yml file, but also all the script files like .py, .rb that associated with it.

## More details

You can view the [detailed information about scrapers here](/in-app-manual/scraping) or [CommunityScrapers README](https://github.com/stashapp/CommunityScrapers/blob/master/README.md){:target="_blank"}.

## Create your own

To create your own scraper, there is [detailed information about that as well](/in-app-manual/scraping/scraperdevelopment). Best way to start is to read the simple ones and understand how xpath works. The [XPath Cheetsheet](https://devhints.io/xpath){:target="_blank"} is quite useful in creating a .yml file. In Firefox you can use xpath search in "Web Developer Tools (F12)". The "search HTML" bar actually accepts xpath searches. You can use it to verify your xpath queries.

## Contribution

The Scraper community always welcome new members. If you create a nice scraper and find it stable and useful, you can share it via [the GitHub repository](https://github.com/stashapp/CommunityScrapers){:target="_blank"}. Create a pull request, and let the mod review your work. The mods are busy, so it will probably take a few days, or a couple of weeks, but it will be a great feeling once your contribution is accepted by the community.
