---
layout: page
title: Importing via CSV Using gql-iterate
nav_order: 2
parent: Advanced Tutorials
permalink: advanced-tutorials/importing-via-csv-using-gql-iterate
---

<details markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

If you want to add a collection of performers, tags, studios, etc, and you have a text/spreadsheet list of them, here's the walkthrough of how to do it via a simple CLI method.

---

## Step 1: Install gql-iterate

[gql-iterate repository](https://github.com/efstajas/gql-iterate){:target="_blank"}

`npm install @efstajas/gql-iterate -g`

or

`yarn add @efstajas/gql-iterate -g`

For latest versions of NodeJS (14>) you need to  go where you globally install your npm modules (AppData/Roaming/npm/node_modules/@efstajas/gql-iterate/bin) and add the following to the first line of the cli.js file.

`import { createRequire } from 'module'; const require = createRequire(import.meta.url);`

---

## Step 2: Prepare your gql.file if needed

See below for example versions of performers.gql and tags.gql samples that should work for you.
Others can be figured out (with minor changes needeed) from stash/graphql/documents/mutations

These are NOT identical to the original files found above.  Compare you'll see how they differ.  This is very specific to be used for gql-iterate.

### tags.gql

    mutation TagCreate( 
      $name: String!,
      $image: String) {
        tagCreate(input: { 
          name: $name,  
          image: $image 
        }) {
       id
      }
    }

### performers.gql

    mutation PerformerCreate( 
      $name: String!, 
      $url: String, 
      $gender: GenderEnum, 
      $birthdate: String, 
      $ethnicity: String, 
      $country: String, 
      $eye_color: String, 
      $height: String, 
      $measurements: String, 
      $fake_tits: String, 
      $career_length: String, 
      $tattoos: String, 
      $piercings: String, 
      $aliases: String, 
      $twitter: String, 
      $instagram: String, 
      $favorite: Boolean, 
      $image: String) {
           performerCreate(input: { 
             name: $name, 
             url: $url, 
             gender: $gender, 
             birthdate: $birthdate, 
             ethnicity: $ethnicity, 
             country: $country, 
             eye_color: $eye_color, 
             height: $height, 
             measurements: $measurements, 
             fake_tits: $fake_tits, 
             career_length: $career_length, 
             tattoos: $tattoos,
             piercings: $piercings, 
             aliases: $aliases, 
             twitter: $twitter, 
             instagram: $instagram, 
             favorite: $favorite, 
             image: $image }
       ) 
       { id } 
     }


If you have a suggested change, please add it below.

---

## Step 3: Prepare your textfile or spreadsheet into a CSV

let's say you have a textfile with these performers (just names and eyecolors for a simple example)
If you have a spreadsheet, add a first line with the column headers, you HAVE to provide all fields listed above in the first line, but you don't have to actually have data in them. 

`name,url,gender,birthdate,ethnicity,country,eye_color,height,measurements,fake_tits,career_length,tattoos,piercings,aliases,twitter,instagram,favorite,image`

then add your data if text, or export as CSV if it's a spreadsheet
(gender is not a string, see documentation in code, and favorite is a boolean, if you want to add those)

    Alice,,,,,,blue
    Betty,,,,,,green
    Carter,,,,,,brown

the above lines all go into a file, like performerdata.csv


Gender is complicated due to Stash using GenderEnum.


For tags, you only need the tag title, and if desired, a url to a image

If you're unable to get this to work, then **omit** the **favorite** and **image** property from your CSV header, and from the **performers.gql** file.

---

## Step 4

{: .note }
Must use numerical IP instead of localhost.

 Run this CLI command (assumes your files are in current directory and location for gql-interate is in your path)

`gql-iterate --host http://_yourserverIP:portgoeshere_/graphql --input ./performerdata.csv --query ./performers.gql`

It will run and add performers, it won't duplicate existing names, so you can run it multiple times if you want to add more names.  Or delete something and readd it, if need be.




