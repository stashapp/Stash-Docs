---
title: Scraping scenes via stash-box
---

## What is stash-box?

[stash-box](https://github.com/stashapp/stash-box){target="_blank"} is an open-source video indexing and metadata API server for porn developed by Stash team. It provides a crowdsourced database of metadata for adult performers, studios and scenes.

Stash has several ways to scrape from stash-box instances. From automatic to manual. Each has its own advantages and disadvantages.

- [Tagger](/guides/scraping-scenes-via-stash-box/#tagger) (recommended) - partially automatic, great accuracy
- [Identify](/guides/scraping-scenes-via-stash-box/#identify) - fully automatic, mediocre accuracy
- [Scrape with...](/guides/scraping-scenes-via-stash-box/#scrape-with) - fully manual, great accuracy

## Prerequisites

### Enable perceptual hashes (pHash)

1. Go to :fontawesome-solid-gear: **Settings** > **Tasks**.
1. Under Library heading you will find configuration options for Scan task and Generate task.
1. Enable **Generate perceptual hashes** under Scan heading.
1. Enable **Perceptual hashes** under Generate heading.

Scan task and its options are applied when the content is being added to the database the first time.

Generate task and its options are applied when you want to generate additional things for content that is already in your database.

### Configure stash-box endpoint

!!! info "Known stash-box instances"
    A list of public stash-box instances is available [here](/metadata-sources/stash-box-instances).

1. Go to :fontawesome-solid-gear: **Settings** > **Metadata Providers**.
1. Under Stash-box Endpoints heading click **Add** and include the details of the stash-box instance you want to add.
1. Click **Test Credentials** to make sure everything is correct.

## Tagger

Recommended to people that value accuracy the most. It can automatically go through scenes and match them based on perceptual hash, but object creation and verification is left to you and nothing is saved until you click **Save**.

1. Go to :fontawesome-solid-tags: **Tagger**, which accessible from the toolbar.
1. Under **Source** select a stash-box instance you want to use.
1. Opposite the **Source** click on the :fontawesome-solid-gear: to open configuration.
    1. You can enable **Show male performers** if you want them to be scraped for you locally.
    1. You can disable **Set scene cover image** if you prefer to keep your existing cover.
    1. You can enable **Set tags** if you want to be shown all the crowdsourced tags the scene has on the stash-box instance.
    1. You can enable **Mark as Organized on save** which will apply :fontawesome-solid-box: Organized flag.

        ??? info "Organized flag"
            Organized flag has a technical purpose in addition to being able to be used in a filter. All objects marked as organized will be ignored by automatic tasks like Identify and Auto Tag.

1. Click on **Scrape All** and look through the results. Add missing objects and click **Save**.
    1. If you got returned **No results found**, you can try using query method. You can enter title, performer, release date, or studio and click **Search**. Keep in mind that sometimes fewer details, are better.
    1. If you know the scene exists on that stash-box instance, but it wasn't found, you can input the exact StashID in the Query field, click **Search** and it will return that exact scene.
1. For scenes that you clicked **Save** on, you can submit your file fingerprints (hashes) back to the instance to help improve the accuracy. Scroll to the top and click **Submit x fingerprints**.

    ??? info "Fingerprints"
        All fingerprints are tied to the user API key, no other information is sent to the stash-box instance. Privacy is paramount.

## Identify

For people that want fully automatic option and don't mind some potential inaccuracies. The task will automatically go through all scenes and match them based on perceptual hash. You can also create all missing objects automatically. No manual verification is possible.

!!! warning
    Task is irreversible, so it's a good idea to [make a backup](/guides/backup-and-restore-database/) before running it.

1. Go to :fontawesome-solid-gear: **Settings** and enable **Advanced Mode**.
1. Go to :fontawesome-solid-gear: **Settings** > **Tasks**.
1. Under Library heading click on **Identify...**.
1. Under **Sources** select a stash-box instance(s) you want to match against.

    !!! info
        Identify task iterates through sources until it finds a match, once it finds a match, it will ignore all other sources for that scene.

1. Configure default options that will apply to all sources (they can be overwritten for individual sources by clicking :fontawesome-solid-gear: next to each source).
    1. You can disable **Show male performers** if you don't want them to be scraped for you locally.
    1. You can disable **Set scene cover image** if you prefer to keep your existing cover.
    1. You can enable **Set organized flag** which will apply :fontawesome-solid-box: Organized flag.
    1. You can disable **Skip matches that have more than one result** if you don't mind potentially getting more mismatched results. If enabled, it can also be tagged with a custom tag to let you know which scenes were skipped.
    1. You can disable **Skip single name performers with no disambiguation** if you don't mind potentially getting more mismatched results. If enabled, it can also be tagged with a custom tag to let you know which scenes were skipped.
1. Click **Set as default** to save your configuration.
1. Configure default field options that will apply to all sources (they can be overwritten for individual sources by clicking :fontawesome-solid-gear: next to each source).
1. Click **Set as default** to save your configuration.
1. Click **Identify** to start the task.

## Scrape with...

In addition to previous methods, there is also a completely manual way to match scenes individually.

1. Go to a scene you want to match.
1. Click on the **Edit** tab.
1. Click **Scrape with...** and select a stash-box instance you want to match against.
1. Check the return results, create missing objects and click **Apply**.
1. Click **Save**.