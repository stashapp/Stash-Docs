---
layout: clean
title: Reverse Proxy
nav_order: 2
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

The use of a reverse proxy for Stash is possible. 

# General

Generally, the following headers will need to be set (check your proxy's documentation for how to configure).
- Host (http host)
- X-Real-IP
- X-Forwarded-For
- X-Forwarded-Proto

See [issue 134](https://github.com/stashapp/stash/pull/134){:target="_blank"} for more information.

# Using a URL prefix

Stash also supports running under a URL prefix, in which case the the `X-Forwarded-Prefix` header must also be set. The proxy also needs to remove the prefix from the requested URLs. For example, if you want your homepage to be accessible at `http://example.domain.com/stash`, then you need to set `X-Forwarded-Prefix: /stash`. 

# Setting External URL

You can also set the host that will be served by Stash manually by adding an `external_host:` setting in your Stash config.yml and assigning it the publicly accessible hostname, including the `http://` or `https://`. `X-Forwarded-Prefix` will still need to be set if using a prefix.
```
external_host: http://example.domain.com
```

# Server Configuration Examples

## Nginx

```bash
location / {
    proxy_pass http://127.0.0.1:9999;
    
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_read_timeout 60000s;
}
```

## Nginx + Docker (Linuxserver Letsencrypt)

If you are using the linuxserver letencrypt docker you can use create a `stash.subdomain.conf` file in your `proxy-confs` folder and use this as the config:
```bash
# make sure that your dns has a cname set for stash

server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name stash.*;

    include /config/nginx/ssl.conf;

    client_max_body_size 0;

    # enable for ldap auth, fill in ldap details in ldap.conf
    #include /config/nginx/ldap.conf;

    location / {
        # enable the next two lines for http auth
        #auth_basic "Restricted";
        #auth_basic_user_file /config/nginx/.htpasswd;

        # enable the next two lines for ldap auth
        #auth_request /auth;
        #error_page 401 =200 /login;

        include /config/nginx/proxy.conf;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        resolver 127.0.0.11 valid=30s;
        set $upstream_app stash;
        set $upstream_port 9999;
        set $upstream_proto http;
        proxy_pass $upstream_proto://$upstream_app:$upstream_port;
        proxy_set_header Host $http_host;
        proxy_read_timeout 60000s;
    }
}
```

## Nginx with prefix

An example for `nginx` using the prefix `/stash`:

```bash
location /stash/ {
    # Notice the trailing slash - this causes nginx to remove the /stash prefix from requested URLs
    proxy_pass http://192.168.0.1:9999/;

    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Port $server_port;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Prefix /stash;
    proxy_read_timeout 60000s;
}
```

## Nginx with external_host

Another example for `nginx`:

In this case we are using `stash.home` as our domain and `192.168.0.1` is stash's ip so edit acccordingly.

The `external_host` configuration option should also be set, in this case `external_host: http://stash.home`. Refer to [external_host](https://github.com/stashapp/stash/pull/369){:target="_blank"} for more details

```bash
server {
    listen 80;
    listen [::]:80;

    server_name stash.home;
    client_max_body_size 0;

    location / {
        proxy_pass http://192.168.0.1:9999;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Apache

```
ProxyPass "/stash" "http://127.0.0.1:9999"
ProxyPassReverse "/stash" "http://127.0.0.1:9999"
RequestHeader setIfEmpty X-Forwarded-Prefix "/stash"
ProxyPreserveHost on

# for name resolution
ServerAdmin admin@example.com
ServerName example.com
ServerAlias stash.example.com

# to enable websockets
RewriteEngine on
RewriteCond %{HTTP:Upgrade} websocket [NC]
RewriteCond %{HTTP:Connection} upgrade [NC]
RewriteRule ^/?stash/(.*) "ws://127.0.0.1:9999/$1" [P,L]

# to add SSL
SSLEngine on
SSLCertificateFile /path/to/cert.pem
SSLCertificateKeyFile /path/to/cert.key
```

### Prerequisites

```
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests

sudo a2enmod rewrite
sudo a2enmod headers

# for SSL
sudo a2enmod ssl
```

## Caddy

```
example.domain.com

reverse_proxy 127.0.0.1:9999 {
	header_up X-Forwarded-Host {host}
	header_up Host {upstream_hostport}
	header_up X-Real-IP {remote_host}
	header_up X-Forwarded-For {remote_host}
	header_up X-Forwarded-Port {server_port}
	header_up X-Forwarded-Proto {scheme}
}
}
```

# Troubleshooting

## 504 Errors

- In some cases with big database files you might encounter `504` errors during stash db migration due to timeout. Adjusting the `proxy_read_timeout` value ( `proxy.conf` file in Letencrypt/Swag docker container)

## 422 Errors

- In order for the websocket to work, you may need to also add these lines to your server block (`proxy.conf` file in the Letencrypt Unraid docker container for instance) as mentioned [here](https://github.com/stashapp/stash/issues/532){:target="_blank"} should fix the issue.

```bash
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```
