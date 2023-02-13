---
layout: clean
title: API
nav_order: 1
parent: Networking

---

<details markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

There is a GraphQL API which allows to do things automatically.

All http requests have to go to ``http://IP:PORT/graphql``

Data from the API can be outdated from time to time.
In that case you can either visit our [Discord](https://discord.gg/2TsNFKt){:target="_blank"} for more help or make an issue.

For up to date info you can check stash's playground `http://IP:PORT/playground` ( SCHEMA/DOCS section to the right).

## Scan for new files

Request: `HTTP-POST`

```json
{
  "query": "mutation { metadataScan ( input: {} ) }"
}
```
_Example using curl_

`curl -X POST -H "Content-Type: application/json" --data '{ "query": " mutation { metadataScan (input: {} ) }" }' localhost:9998/graphql`

## Authentication

If you have configured a username/password you have to use cookies to authenticate
```
curl --verbose --cookie-jar cookie.txt  --data 'username=stash&password=**' localhost:9998/login
curl --cookie cookie.txt -H "Content-Type: application/json"  --data '{  "query": "mutation { metadataScan ( input: {} ) } "}' localhost:9998/graphql
```
Latest dev version has support for API Keys.

Using the `API Key` is recommended instead of the above cookie method.

You just need to add the key you generated in stash ( for more info about the API Key check stash's help section ) in a header for every request you make
```
curl -X POST -H "ApiKey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJiaWxsIiwiaWF0IjoxNjE3MDkzMDYwLCJzdWIiOiJBUElLZXkifQ.WhUyvmnVeW8wGV5fkVyje3xLfz5A97HFwyZy-4i8Q-I" -H "Content-Type: application/json" --data '{ "query": "mutation { metadataScan (input:{})}" }' localhost:9998/graphql
```

## Generate content

Request: `HTTP-POST`

Payload (set desired content to generate **sprites**,**previews**,**imagePreviews**,**markers**,**transcodes** to ```true``` or ```false```):
```json
{
  "query": "mutation { metadataGenerate ( input : { sprites: true previews: false imagePreviews: false markers: false transcodes: false } ) }" 
}
```
_Example using curl_

`curl -X POST -H "Content-Type: application/json" --data '{ "query": "mutation { metadataGenerate ( input : { sprites: false previews: true imagePreviews: false markers: false transcodes: false } ) }" }' localhost:9998/graphql`

## Get Studios

Request: `HTTP-POST`

Payload ( must be at least one of ```id``` ```checksum``` ```url``` ```name``` ```image_path``` ```scene_count``` ):
```json
{
  "query": "{ allStudios { id checksum url name image_path scene_count } }" 
}
```
_Example using curl_

`curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ allStudios { name url scene_count} }" }' localhost:9998/graphql`

## Scrape perfomer attributes from Freeones

Request: `HTTP-POST`

Payload (
* ```$performer name``` is the name of the Performer you are scraping for
* return values must be at least one of ```name``` ```url``` ```twitter``` ```instagram``` ```birthdate``` ```ethnicity``` ```country``` ```eye_color``` ```height``` ```measurements``` ```fake_tits``` ```career_length``` ```tattoos``` ```piercings``` ```aliases```

):
```json
{
  "query": "{ scrapeFreeones(performer_name: $performer_name) { name url twitter instagram birthdate ethnicity country eye_color height measurements fake_tits career_length tattoos piercings aliases } }" 
}
```
1. Caution is needed when used in a script.Always set a waiting/sleep period between calls to avoid getting blacklisted by Freeones
2. Due to way it's used in Stash and to work reliably it requires the prior use of **scrapeFreeonesPerfomerList** (described beneath) to make sure the name of the performer exists in the list returned and thus in the Freeones db


_Example using curl_

`curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ scrapeFreeones ( performer_name : \"Abella Danger\" ) { name height birthdate} }" }' localhost:9998/graphql`

## Get list of perfomer names that match a name or alias from Freeones

Request: `HTTP-POST`

Payload ( $q is the name or alias (or partial name , alias) of the performer you are looking for
):
```json
{
  "query": "{ scrapeFreeonesPerformerList(query: $q) }" 
}
```
1. Caution is needed when used in a script.Always set a waiting/sleep period between calls to avoid getting blacklisted by Freeones

_Example using curl_


`curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ scrapeFreeonesPerformerList (query: \"bella\" ) }" }' localhost:9998/graphql`

## Get System Status

Request: `HTTP-POST`
```json
{
  "query": "{ systemStatus { databaseSchema databasePath configPath appSchema status } }" 
}
```

_Example using curl_

`curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ systemStatus { appSchema status } }" }' localhost:9999/graphql`

