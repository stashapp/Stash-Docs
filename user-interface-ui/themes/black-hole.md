---
layout: page
title: Black Hole
nav_order: 5
parent: Themes
grand_parent: User Interface (UI)
permalink: user-interface-ui/themes/black-hole
---

<details markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Install

1. Open User **Interface** Configuration panel in **settings**. (http://localhost:port/settings?tab=interface)
2. Tick/Enable Custom CSS ✅ 
3. Copy&Paste [CSS Code](#css-code) to the Custom CSS text area. 

---

## Notes

Just a simple all black theme.

Everything in this css is commented, so if you don't like something just remove it!

Don't like the color of the border, or the border at all, change it or remove it!

If you're not sure how DM me on Discord.

---

## Important changes

1. By default scrubber is hidden.
2. By default hovering on performers images when checking them below a scene/gallery makes them bigger, useful if you're not really sure who the hell is that person!!! This is a little tricky when you have a lot of performers on an item but I manage to check them all. To achieve this I had to "break" tags, now they never to go a new line.
3.  Made checkboxes, on scenes/galleries/etc., a little bigger so it's easier to click on them and not on the item itself.
4. Removed transparency from logos when on scenes/etc., it's easier to see them and it's not a big deal since they disappear when you hover on an item to check it.
5. You can set a custom background from an online image and yes you can use gifs but mind the size :)
By default it's set to "contain" so if the image is extremely small, well you get the catch... shouldn't be a problem with bigger images.

Have fun and if in doubt you should find me on Discord!

---

## Changelog

V2.0

Code simplified<br>
Changed borders color from red to "Stash grey"<br>
Edits to paint it all black again!

## CSS Code

```css
/* Black Hole Theme by BViking78 v2.0 */
/* STASH GENERAL */
/* Set Background to Black & Optional Custom Image */
body {
	background: black url("") no-repeat fixed center;
	background-size: contain;
}

/* Change Top Nav Bar Colors */
.bg-dark {
    background-color: #000000!important;
}

/* Set Red Border on Button on Hover */
.btn-primary.btn:hover {
  border: 1px solid red;
}

/* Set Background to Transparent for Tags/Performers Popups*/
.fade.hover-popover-content {
  background: transparent;
}

/* Zoom Performers image when Hover*/
.hover-popover-content {
  max-width: initial;
}
.image-thumbnail:hover {
  height: 100%;
}

/* Set Opacity Studio Logo to 100% */
.scene-studio-overlay {
	opacity: 100%;
}

/* Making Checkbox Slightly Bigger */
.grid-card .card-check {
	top: 0.9rem;
	width: 1.75rem;
}

/* Center Titles on Cards */
.grid-card a .card-section-title {
	text-align: center;
}

/* Setting Background on Cards to Black and Borders to "Stash Grey" */
.card {
	background-color: black;
	border: 1px solid #30404d;
}

/* STASH MAIN PAGE*/
/* Change Card Header Color */
.card-header {
  background: black;
  border: 1px solid white;
}
/* Change Markdown Color */
.card-body {
  background: black;
  border: 1px solid white;
}

/* SCENE PAGE */
/* Hide the scene scrubber */
.scrubber-wrapper {
  display: none;
}

/* Setting Row "Scrape With" Background to Black */
#scene-edit-details .edit-buttons-container {
    background-color: black;
}

/* Setting Other Rows Background to Black */
div.react-select__control {
    background-color: black;
}

/* SETTING */
/* Setting Text Input Border to White */
.input-control, .text-input {
	border: 1px solid white;
}

/* Setting Background on Task Queue to Black */
#tasks-panel .tasks-panel-queue {
    background-color: black;
}
```