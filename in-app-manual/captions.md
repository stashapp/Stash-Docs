---
layout: clean
title: Captions
nav_order: 12
parent: In-app Manual

---

<details markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Stash supports captioning with SRT and VTT files.

These files need to be named as follows:

## Scene

- {scene_name}.{language_code}.ext
- {scene_name}.ext

Where `{language_code}` is defined by the [ISO-6399-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes){:target="_blank"} (2 letters) standard and `ext` is the file extension. Captions files without a language code will be labeled as Unknown in the video player but will work fine.

Scenes with captions can be filtered with the `captions` criterion.
