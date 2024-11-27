---
title: Stash API
hide:
  - navigation
---

There is a GraphQL API which allows to do things automatically. GraphQL is also self-documenting.

Stash has integrated playground where you run interact with the API and view the documentation. 

1. Go to `<server>:<port>/playground` (default is `http://localhost:9999/playground`). 
1. Expand **Docs** on the right to open Documentation Explorer.

All HTTP requests have to go to `<server>:<port>/graphql` (default is `http://localhost:9999/graphql`).

## Authentication

You just need to add the key you generated in Stash (for more info about the API Key check stash's help section) in a header for every request you make.

=== "Example using curl"

    ```shell
    curl -X POST -H "ApiKey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJiaWxsIiwiaWF0IjoxNjE3MDkzMDYwLCJzdWIiOiJBUElLZXkifQ.WhUyvmnVeW8wGV5fkVyje3xLfz5A97HFwyZy-4i8Q-I" -H "Content-Type: application/json" --data '{ "query": "mutation { metadataScan (input:{})}" }' localhost:9999/graphql
    ```

### Legacy cookie authentication

If you have configured a username/password you have to use cookies to authenticate.

=== "Example using curl"

    ```shell
    curl --verbose --cookie-jar cookie.txt  --data 'username=stash&password=**' localhost:9998/login
    curl --cookie cookie.txt -H "Content-Type: application/json"  --data '{  "query": "mutation { metadataScan ( input: {} ) } "}' localhost:9999/graphql
    ```

Using the `API Key` is recommended instead of the above cookie method.

## Scan for new files

=== "`HTTP-POST`"

    ```json
    {
      "query": "mutation { metadataScan ( input: {} ) }"
    }
    ```

=== "Example using curl"

    ```shell
    curl -X POST -H "Content-Type: application/json" --data '{ "query": " mutation { metadataScan (input: {} ) }" }' localhost:9999/graphql
    ```



## Create backup

=== "`HTTP-POST`"

    ```json
    {
      "query": "mutation { backupDatabase(input: {download: false})}"
    }
    ```

=== "Example using curl"

    ```shell
    curl -X POST -H "Content-Type: application/json" --data '{ "query": "mutation {backupDatabase(input: {download: false})}" }' localhost:9999/graphql
    ```

If `download:` is `true` the created backup is returned and not stored locally.

## Generate content

=== "`HTTP-POST`"

    Payload (set desired content to generate **covers**, **sprites**, **previews**, **imagePreviews**, **markers**, **transcodes**, **phashes**, **interactiveHeatmapsSpeeds**, **imageThumbnails**, **clipPreviews** to `true` or `false`.

    ```json
    {
      "query": "mutation { metadataGenerate ( input : { sprites: true previews: false imagePreviews: false markers: false transcodes: false } ) }" 
    }
    ```

=== "Example using curl"

    ```shell
    curl -X POST -H "Content-Type: application/json" --data '{ "query": "mutation { metadataGenerate ( input : { sprites: false previews: true imagePreviews: false markers: false transcodes: false } ) }" }' localhost:9999/graphql
    ```

## Get studios

=== "`HTTP-POST`"

    Payload (must be at least one of `id` `checksum` `url` `name` `image_path` `scene_count`).

    ```json
    {
      "query": "{ allStudios { id checksum url name image_path scene_count } }" 
    }
    ```

=== "Example using curl"

    ```shell
    curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ allStudios { name url scene_count} }" }' localhost:9999/graphql
    ```

## Scrape perfomer attributes from Freeones

=== "`HTTP-POST`"

    Payload

    - `$performer name` is the name of the Performer you are scraping for
    - return values must be at least one of `name` `url` `twitter` `instagram` `birthdate` `ethnicity` `country` `eye_color` `height` `measurements` `fake_tits` `career_length` `tattoos` `piercings` `aliases`

    ```json
    {
      "query": "{ scrapeFreeones(performer_name: $performer_name) { name url twitter instagram birthdate ethnicity country eye_color height measurements fake_tits career_length tattoos piercings aliases } }" 
    }
    ```

    1. Caution is needed when used in a script. Always set a waiting/sleep period between calls to avoid getting blacklisted by Freeones.
    1. Due to way it's used in Stash and to work reliably it requires the prior use of **scrapeFreeonesPerfomerList** (described beneath) to make sure the name of the performer exists in the list returned and thus in the Freeones db.


=== "Example using curl"

    ```shell
    curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ scrapeFreeones ( performer_name : \"Abella Danger\" ) { name height birthdate} }" }' localhost:9999/graphql
    ```

## Get list of perfomer names that match a name or alias from Freeones

=== "`HTTP-POST`"

    Payload (`$q` is the name or alias (or partial name , alias) of the performer you are looking for).

    ```json
    {
      "query": "{ scrapeFreeonesPerformerList(query: $q) }" 
    }
    ```

    1. Caution is needed when used in a script.Always set a waiting/sleep period between calls to avoid getting blacklisted by Freeones

=== "Example using curl"


    ```shell
    curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ scrapeFreeonesPerformerList (query: \"bella\" ) }" }' localhost:9999/graphql
    ```

## Get system status

=== "`HTTP-POST`"

    ```json
    {
      "query": "{ systemStatus { databaseSchema databasePath configPath appSchema status } }" 
    }
    ```

=== "Example using curl"

    ```shell
    curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ systemStatus { appSchema status } }" }' localhost:9999/graphql
    ```
