---
title: Stash API
hide:
  - navigation
---

# Stash GraphQL API

The Stash GraphQL API facilitates automated operations through a type-based schema that is both introspective and self-documenting.

Stash includes an integrated playground where users can execute queries and retrieve schema structures and documentation via a special introspection query.

??? tip "Learn more about GraphQL"
    For further information, visit the [official GraphQL site](https://graphql.org/learn/){target="_blank"}.

## Accessing the GraphQL playground

1. Navigate to :fontawesome-solid-gear: **Settings** > **Tools** > **GraphQL playground**.
1. Click <svg height="1.125em" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 3C0.75 4.24264 1.75736 5.25 3 5.25H17.25M0.75 3C0.75 1.75736 1.75736 0.75 3 0.75H16.25C16.8023 0.75 17.25 1.19772 17.25 1.75V5.25M0.75 3V21C0.75 22.2426 1.75736 23.25 3 23.25H18.25C18.8023 23.25 19.25 22.8023 19.25 22.25V6.25C19.25 5.69771 18.8023 5.25 18.25 5.25H17.25" stroke="currentColor" stroke-width="1.5"></path><line x1="13" y1="11.75" x2="6" y2="11.75" stroke="currentColor" stroke-width="1.5"></line></svg> on the left to access the Documentation Explorer.

## Endpoint

All HTTP requests should be directed to `<server>:<port>/graphql` (default: `localhost:9999/graphql`).

## Authentication

Include the API key generated in Stash in the header of every request. For details on obtaining the API Key, refer to Stash's in-app manual.

=== "Example using curl"

```shell
curl -X POST -H "ApiKey: <your_api_key>" -H "Content-Type: application/json" --data '{ "query": "<graphql_query>" }' localhost:9999/graphql
```

Replace `<your_api_key>` with your **API Key** found under :fontawesome-solid-gear: **Settings** > **Security** > **Authentication**.

Replace `<graphql_query>` with the raw query, which can be formatted using the playground.

### Legacy cookie authentication

!!! info
    Was made obsolete in version v0.7. It is recommended to use the `API Key` method.

For configurations using a username/password, cookies must be used for authentication.

=== "Example using curl"

```shell
curl --verbose --cookie-jar cookie.txt --data 'username=stash&password=**' localhost:9999/login
curl --cookie cookie.txt -H "Content-Type: application/json" --data '{ "query": "<graphql_query>" }' localhost:9999/graphql
```
