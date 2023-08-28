---
layout: clean
title: Guide to Scraping
nav_order: 1
parent: Beginner Guides

---

<details markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

The following is our recommended procedure for new Stash users who want to get info for their scenes as quickly, easily, and as accurately as possible. Pulling info directly from StashDB is still the best option, but unfortunately this will not always be possible. Alternative methods are also covered for when StashDB doesn't have what you need. This is an expanded version of @Scruffy's [pinned post](https://discord.com/channels/559159668438728723/798641040029777980/997893396733640737){:target="_blank"} in the **#stashdb-general** channel in our Discord. Go there if you'd like something more succinct and direct. Hopefully this guide will reduce the pain and frustration for those who are lost and don't know where to start.

**The following sections are in this particular order for a reason, so please follow this guide from the beginning**.

# Generate pHashes

1. Navigate to the Settings page (⚙ icon in top right), make sure you're on "Tasks" in the sidebar to the left, then find the first heading "Library" in the middle of the page. Make sure "Generate perceptual hashes" is turned on so pHashes will be created automatically each time you run a scan to add new scenes. This will slow down the scanning process, but for most users [it's worth it](https://guidelines.stashdb.org/docs/faq_getting-started/stashdb/whats-a-phash){:target="_blank"}. pHashes are the main way to match your scenes with our data on StashDB.

    ![How to generate pHashes on scan](/assets/beginner-guides/gen-phashes-on-scan.jpg)
<br/><br/>

{:style="counter-reset:none"}
1. pHash generation is not turned on by default, so you'll need to generate them manually if you haven't already. This can be done on your entire library on the same Settings --> Tasks page, scroll down to the "Generated Content" heading. Make sure "Perceptual hashes (for deduplication)" is turned on and click the "Generate" button at the top. As long as "Overwrite existing generated files" is turned off, this will only generate missing files and hashes.

    ![How to generate pHashes manually](/assets/beginner-guides/gen-phashes-manually.jpg)

# Join StashDB

If you haven't set up StashDB in your Stash settings yet, now's the time to do it. Get an invite code in the **#stashdb-invites** channel on [Discord](https://discord.gg/gHwFj8neaa){:target="_blank"}. Check the pinned messages (📌 icon in top right) there for details and up-to-date instructions on how to create an account and connect to it from Stash.

## How to connect your account to Stash

1.  Go to [https://stashdb.org/register](https://stashdb.org/register){:target="_blank"} to create a new account using one of the invite codes pinned to **#stashdb-invites**.
  - If all of the codes are used/expired, you can ping **@Infinite** in **#stashdb-invites** and politely ask to refresh them. A few other elevated users can also generate an invite code for you.*
2.  Once you're logged in to StashDB, click on your username at the top next to **Logged in as**.
3.  Copy your unique **API key**.
4.  Go to the **Settings** page in Stash ([http://localhost:9999/settings](http://localhost:9999/settings){:target="_blank"} by default), click **Metadata Providers** on the left side and find **Stash-box Endpoints** at the top.
5.  Click **Add** and fill out the form that pops up: paste in your API key from step #3, enter `stashdb.org` (or anything else you'd like) for **Name**, and enter `https://stashdb.org/graphql` as the **GraphQL endpoint**
6.  Click **Test Credentials** to make sure you've entered everything correctly, then click **Confirm**.

# Use the Scene Tagger

1. Go to your Scenes page on Stash and click the double 🔖 icon to the far right of the search bar. This is your Scene Tagger view and should be your first choice for pulling data, not Identify / Autotag / Filename Parser / URL Scrapers / etc. Always use the Scene Tagger first, the rest are for users with more specific needs who understand the strengths and weaknesses of each tool.

    ![How to find the Scene Tagger](/assets/beginner-guides/find-scene-tagger.jpg)
<br/><br/>

{: .important }
Tags are not created automatically. You need to click `+` icon near the tag name to create it for you locally and attach it to the scene. Once it's created, it will match automatically in the future.  

{:style="counter-reset:none"}
1.  First, click the "Scrape All" button. This will use your pHashes to find matching scenes on StashDB for every scene on the current page. The "Scrape by fragment" buttons will do the same thing but just for one scene at a time. Also, you may want to change your Scene Tagger settings with the ⚙ icon next to "Scrape All." You can tell it to Merge (keep all) tags, Overwrite (keep only new) tags, or ignore StashDB's tags entirely (leave box unchecked). If you plan on [contributing to StashDB](https://guidelines.stashdb.org/docs/faq_getting-started/stashdb/contributing-to-stashdb){:target="_blank"}, you should have "Show male performers" turned on to better follow [these guidelines](https://guidelines.stashdb.org/docs/scenes/edit/scene-performers/missing-performers){:target="_blank"}.

    ![Running "Scrape All" and "Search"](/assets/beginner-guides/scrape-all-and-search.jpg)
<br/><br/>

{:style="counter-reset:none"}
1. If your fingerprint search doesn't return a correct result for your scene, you can try searching with the "Query" field using title, performer, release date, or studio. Try to use as little text as possible to find your scene. Otherwise, unnecessary words that do not match StashDB's info may block correct results. If you can find the matching scene on StashDB.org but can't find it using the Scene Tagger, you can use the scene's [StashID](https://guidelines.stashdb.org/docs/faq_getting-started/stashdb/whats-a-stashid){:target="_blank"} as your Tagger query.

    ![How to find a StashID](/assets/beginner-guides/find-stashid.jpg)
<br/><br/>

{:style="counter-reset:none"}
1. Be sure to double-check that each selected result matches your scene before clicking the "Save" button at the bottom of each card. **If you're confident that all of your saved matches are accurate**, you may click the "Submit fingerprints" button after you're done. This will add your files' hashes to StashDB to make them easier for other users to find. But again, **make sure your files were matched correctly first**. The button will appear right next to the "Scrape All" button.

# Use ThePornDB Scraper

1. If you are absolutely sure a scene isn't on StashDB anywhere, the next easiest method is to scrape from ThePornDB. They have significantly more scenes than StashDB thanks to their automated scrapers, but their info isn't always as complete or accurate compared to StashDB's manually curated approach. They also don't host pHashes so matching scenes can be trickier as well.
<br/><br/>

{:style="counter-reset:none"}
1. First step is to make an account at [metadataapi.net](https://metadataapi.net/register){:target="_blank"} which is ThePornDB's website. With your account created, navigate to your [API Tokens](https://metadataapi.net/user/api-tokens){:target="_blank"} page. Type "stash" as your token's name (or whatever you'd prefer), make sure the "read" permission is checked (you don't need the others), and click the "Create" button. A pop-up will display your newly created token. **Save your API token somewhere so you can find it later!** It will not be visible on ThePornDB's website after you close the pop-up. If you lose it, you may need to create a new one and repeat this entire setup process. This can be done in a password manager, notes app, or a well-placed text file.

    ![How to create an API token on ThePornDB](/assets/beginner-guides/create-tpdb-token.jpg)
<br/><br/>

{:style="counter-reset:none"}
1. Next, we need to download and setup our TPDB scraper for Stash. The scraper file we need is at [this page](https://raw.githubusercontent.com/stashapp/CommunityScrapers/master/scrapers/ThePornDB.yml){:target="_blank"} in our scrapers repo. Right-click the page in your browser, select "Save as...", and save it somewhere you can easily find. We'll move it into our scrapers folder later. Now open your saved file with a basic text editor like Notepad for Windows users. Your browser's defaults should have saved it as a text file for you, so simply opening the file should automatically use your default text editor. Find the two lines at the very bottom that start with `#- Key: Authorization` and `#  Value: Bearer`. First remove the `#` characters before `- Key:` and `Value:`. The string starting with `zUo...` is a placeholder. Replace it with your own API key, then save your changes. It should now look like this:

    ```yaml
        - Key: Authorization # Uncomment and add a valid API Key after the `Bearer ` part
          Value: Bearer YOUR-API-KEY-HERE
    ```
<br/>

{:style="counter-reset:none"}
1. If you saved the file with your browser's default filename, we'll need to rename it. Currently, it should be named `ThePornDB.yml.txt`. We'll need to rename it to remove `.txt` from the end, giving us the filename `ThePornDB.yml`. If you are using Windows, you may need to change the view settings in Windows Explorer to make file extensions visible before changing the filename.
<br/><br/>

{:style="counter-reset:none"}
1. Now we need to move our scraper file into the right folder for Stash to see it. The exact location is going to be a little different for everybody depending on where and how you've installed Stash. By default, it should go in a folder named `scrapers` in the same directory as your `config.yml` file. In the example directory below, you'll also see `ThePornDB_api-key.txt` where I've saved my API key for safekeeping in case I need it again later. If you're having trouble finding where this folder is, feel free to ask in the **#help** channel on [Discord](https://discord.com/channels/559159668438728723){:target="_blank"}.

    ![Location of "scrapers" folder](/assets/beginner-guides/scrapers-folder-location.jpg)
<br/><br/>

{:style="counter-reset:none"}
1. For our last step of setup, we need to go back into Stash. Navigate to the Settings page, click on "Metadata Providers" in the sidebar to the left, and scroll down to the "Scrapers" heading. Click the "🔃 Reload scrapers" button just below it. Now click "> Scene Scrapers" to expand that list of recognized scraper files. If you've done everything right, you should find your TPDB scraper here.

    ![ThePornDB in the list of scene scrapers](/assets/beginner-guides/tpdb-scene-scraper-entry.jpg)
<br/><br/>

{:style="counter-reset:none"}
1. Finally, we can use the Scene Tagger to scrape from ThePornDB. First you'll need to switch to "ThePornDB" as the Tagger's source. It will always default to a Stash-Box source, so you'll need to switch it every time you need something else. Use the same process here as [we used with StashDB and the Scene Tagger](#use-the-scene-tagger). The "Scrape All" and "Scrape by fragment" buttons will search using your filename and your OSHash. If these don't give you the right results, you can try the "Search" button and customize your search terms as needed. Remember to use as few terms as possible in your search because unneccessary words that don't match ThePornDB's info may block correct results. You could also [search TPDB itself](https://metadataapi.net/scenes){:target="_blank"} to find your scene first if you're having trouble with the Tagger's search or if you don't have the right search terms in your filename. Then, you can copy and paste the scene's URL slug (everything in the address bar after `https://metadataapi.net/scenes/`) into the Scene Tagger to quickly search with the exact same studio and title on TPDB. You can also copy-paste additional terms from TPDB's page if you need to narrow down the Tagger's results more.

    ![Tagger source set to ThePornDB](/assets/beginner-guides/tagger-source-tpdb.png)
<br/><br/>

- **For those wanting to contribute to StashDB**: As noted before, ThePornDB leans heavily on automated scrapers to pull all of their info. Often that data is incomplete or inaccurate compared to what we'd want on StashDB. Before you [submit your scene to StashDB](https://guidelines.stashdb.org/docs/faq_getting-started/drafts/submit-from-stash){:target="_blank"}, you'll need to double-check your info, clean it up a bit first, and make sure you're following [these guidelines](https://guidelines.stashdb.org/docs/scenes){:target="_blank"}. Submitting to StashDB is discussed further in the [last step](#submit-to-stashdb) of this guide.

# Use Site-Specific Scrapers

1. If you've already [tried StashDB](#use-the-scene-tagger), you've already [tried ThePornDB](#use-theporndb-scraper), and you still want to scrape a site directly, you can try using a site-specific scraper. However, every scraper is going to work differently. Some will need Python installed. Others will need you to set a user agent or a Chrome CDP path. A handful will need to be edited and configured first. Only a few can search a studio's website for the right scene. The entire process is much more advanced and is different for each scraper, which is why we recommend StashDB and TPDB first for new users. They can all be found in [the same repo](https://github.com/stashapp/CommunityScrapers){:target="_blank"} where we found ThePornDB's scraper. You can download them individually like we did with the TPDB scraper or you can download the entire repo as a zip archive.
<br/><br/>

{:style="counter-reset:none"}
1. First you'll want to search [this page](https://github.com/stashapp/CommunityScrapers/blob/master/SCRAPERS-LIST.md){:target="_blank"} for your website to see if we have a scraper for it and to get an idea of what its requirements are. For most of these scrapers, you'll need to find and save a studio URL to your scene first. If you've managed to set up a fragment scraper, you can click on the "Scrape with..." button in the scene's edit tab to select your scraper. Typically fragment scrapers are better than URL scrapers, such as the MindGeekAPI scraper. Otherwise, you'll need to click the button at the far right end of the URL field to run a URL scraper. It should light up when the field is filled with a URL that matches one of your installed scrapers. That's about as detailed as we can get in this guide for new users. If you've tried StashDB, tried TPDB, checked the relevant documentation, checked your logs, and still can't get one of these scrapers working, you can ask for help on [Discord](https://discord.com/channels/559159668438728723){:target="_blank"} in the **#help** channel or in **#scrapers**.

# Submit to StashDB

1. If you're certain a scene isn't on StashDB and you've found the info using ThePornDB or some other scraper, please consider submitting it to StashDB yourself. That way nobody else will have to duplicate the same work you've done for that particular scene if they can match their [pHash](#generate-phashes) with yours. You'll need to ask for edit privileges in our [Discord](https://discord.com/channels/559159668438728723){:target="_blank"} and follow the guidelines on [this website](https://guidelines.stashdb.org/docs/scenes){:target="_blank"}. In particular, please note that [not every scene can be added to StashDB](https://guidelines.stashdb.org/docs/scenes/create){:target="_blank"} at this time. Some [studios aren't allowed](https://guidelines.stashdb.org/docs/studios/create){:target="_blank"} and [full movies likely won't be eligible](https://guidelines.stashdb.org/docs/scenes/create/full-movie-entries){:target="_blank"} either.
<br/><br/>

{:style="counter-reset:none"}
1. Also, please don't blindly submit data from ThePornDB. You should verify the data is correct and complete first, make sure the URL is right, check for any [missing performers](https://guidelines.stashdb.org/docs/scenes/edit/scene-performers/missing-performers){:target="_blank"}, and look up any relevant [guidelines](https://guidelines.stashdb.org/docs/scenes){:target="_blank"} if something else seems funky to you. You can update your data within Stash before submitting a draft or you can edit the draft on StashDB itself before creating the edit. You should also have the studio URL now, so you should also compare with that page manually or even scrape again with a site-specific scraper as explained in the [previous step](#use-site-specific-scrapers) of this guide. Also please note in your [edit comment](https://guidelines.stashdb.org/docs/faq_getting-started/scenes/scene-edit-comments){:target="_blank"} where your data is coming from.