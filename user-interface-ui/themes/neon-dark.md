---
layout: clean
title: Neon Dark
nav_order: 7
parent: Themes
grand_parent: User Interface (UI)

---

<details markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Made by [@Dankonite](https://github.com/Dankonite)

A darker custom theme I made. I dont know if nsfw screenshots are allowed here so Im not risking it. If I get the thumbs up ill add preview images.
Almost all the colors that are the same are linked together and you only have to change one hex color to change them all. I think the only exception is the blue accent color is applied in a few locations. Use Ctrl + F to find all of them.

Ive never uploaded to here before so the notes and the code may be a bit ugly, but I did my best to annotate most of the changes
Let me know what you think :)

{: .note }
There are some changes to the css that are tailored to improve the appearance of the ui on my phone, a galaxy s20.
They may not Look correct on your phone depending on its resolution/aspect ratio. Most of the changes that are phone related are under the @media(max-width) section. there are some others aswell but the others look good on mobile and desktop imo.


## Screenshots

![Modern Dark preview #1](/assets/user-interface-ui/themes/neon-dark-1.jpg)

## Install

1. Open User **Interface** Configuration panel in **settings**. (http://localhost:9999/settings?tab=interface)
2. Tick/Enable Custom CSS ✅ 
3. Copy&Paste [CSS Code](#css-code) to the Custom CSS text area. 

Enjoy!

## CSS Code

```css
/* Neon Dark Theme by Dankonite */
.job-table.card, .bg-dark, .bg-secondary, .card, .popover, .tag-item, .text-input, div.react-select__menu, div.dropdown-menu, div.react-select__control, button.btn, .btn-secondary, .btn-secondary.disabled, .btn-secondary:disabled, .nav-pills .nav-link.active, .nav-pills .show>.nav-link, .recommendations-container-edit .recommendation-row, div.react-select__control, div.react-select__control .react-select__multi-value, .btn.active:not(.disabled), .btn.active.minimal:not(.disabled), body ::-webkit-scrollbar-thumb, .input-control, .search-item, .markdown table tr:nth-child(2n), .markdown blockquote, .markdown pre {
	background-color: #202020!important; /* Grey Accent*/
}
body, #tasks-panel .tasks-panel-queue, #scene-edit-details .edit-buttons-container {
	background-color:#101010!important; /* Black Background */
}
.modal-header, .modal-body, .modal-footer, .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show>.btn-secondary.dropdown-toggle, .btn-secondary:focus, .btn-secondary.focus, .input-group-text, .input-group-append>.btn, .markdown code {
    background-color: #303030!important; /* Slightly Lighter Gray Accent */
}
.tag-item, div.react-select__control .react-select__multi-value, .react-select__multi-value__label, .react-select__multi-value__remove, .btn.active:not(.disabled), .btn.active.minimal:not(.disabled), .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show>.btn-secondary.dropdown-toggle, .btn-secondary:focus, .btn-secondary.focus, .btn-secondary, .btn-secondary.disabled, .btn-secondary:disabled, .tag-item .btn, span.filter-container.text-muted.paginationIndex.center-text, span.input-group-text {
	color: #fff!important /* Text Color */
}
.scene-specs-overlay, .scene-interactive-speed-overlay, .scene-studio-overlay, span.scene-card__date {
	font-weight: 900; /* font Weight, not applied to everything*/
}
.card, .popover, .tag-item, .text-input, div.react-select__menu, div.dropdown-menu, div.react-select__control, .query-text-field, button.minimal, button.nav-menu-toggle, .btn.active:not(.disabled), .btn.active.minimal:not(.disabled), .pagination .btn:first-child, .pagination .btn:last-child, div.react-select__control, div.react-select__control .react-select__multi-value, .pagination .btn, .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show>.btn-secondary.dropdown-toggle, .btn-secondary:focus, .btn-secondary.focus, .btn-secondary, .btn-secondary.disabled, .btn-secondary:disabled, .nav-pills .nav-link.active, .nav-pills .show>.nav-link, .dropdown-menu, input.border-secondary, .input-control, .input-group-text, .markdown table td, .markdown table th {
	border: 1px solid #137cbd!important; /* Blue Border Accent */
}
nav.top-nav.navbar.navbar-expand-xl.navbar-dark.bg-dark.fixed-top {
    border-bottom: 1px solid #137cbd!important; /* Blue Border Accent for the bottom of the navbar */
}
.card {
	border-radius: 1rem;
    /*card Corner Radius Rounding*/
}
.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show>.btn-secondary.dropdown-toggle:focus, .form-control:focus, .btn-secondary:focus, .btn-secondary.focus, .btn-secondary:not(:disabled):not(.disabled).active, .scene-card:hover, .btn:hover, .active.btn.btn-primary, .active.btn.btn-primary:focus, .btn.brand-link:focus, input.query-text-field:hover, .btn-secondary:hover, .gallery-card:hover, .performer-card:hover, a.nav-link:hover, .tag-card:hover, span.tag-item:hover, .studio-card:hover, button:focus {
	box-shadow: 0 0 .3rem 0.3rem #137cbd!important; /* Blue Glow Accent For Active/Focused/hovered UI Elements */
}
/* Phone UI Tweaks Only Tested With My phone in mind May need to adjust some settings if your phone has a different resolution and or aspect ratio. Not The Only Ones But These Are The Only Ones That Are Screen Width Dependant, Remove If You Want I think Nothing Else Is Dependant On Them... probably */
@media(max-width: 575.98px){
	.tag-card-image{
        max-height:120px
        }
        .scene-card-preview-image, .scene-card-preview-video{
            max-height:105px;
            width:187px;
            height: auto;  
        }
    .top-nav {
	    bottom:unset;
	    top:unset;
	}
    body{
        padding:0
    }
    .container, .container-fluid, .container-xl, .container-lg, .container-nd, .container-sm{
        padding-top:4em
    }
    .scene-card.zoom-1.grid-card.card{
        width: min-content;
    }
    .slick-list .movie-card, .slick-list .performer-card {
        width: 12rem;
    }
    .slick-list .scene-card, .slick-list .studio-card, .slick-list .gallery-card {
        width: 12rem;
    }
    .card.performer-card {
        max-width:min-content
    }
    .performer-card-image {
        height: 12rem!important;
        min-width: 8rem;
    }
    .overlay-resolution {
        display: none;
    }
}
div[role='group'].ml-auto.btn-group>div {
    margin-right: .5rem;
    margin-top: .5rem;
    /*spacing for the details screen o-counter, organize, and the three dot menu buttons*/
}
.criterion-list.accordion, .saved-filter-list-menu {
    padding: 1rem; /*adds a little bit of padding to the pop-up menus*/
}
.edit-buttons>button {
    margin-left: 1px; /* without this the 1px border on the save button on the edit scene page gets cut off on the left*/
}
.modal-header {
    border-radius: 1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    /*rounding for the edit filters pop up menu top*/
}
.modal-footer {
    border-radius: 1rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    /*rounding for the edit filters pup menu bottom*/
}

div.mb-2 {
    height: 100%; /* fixes the heights of the filters bar being mismatched*/
}
.btn-primary.btn.donate.minimal, .TruncatedText.scene-card__description, span.scenes-stats, .rating-banner, .gender-icon, .tag-sub-tags, a[target='_blank'], .ml-2.mb-2.d-none.d-sm-inline-flex, .studio-child-studios, a.marker-count {
	display: none!important; /* Hide These UI Elements*/
}
a.nav-utility, button[title='Help'], .nav-menu-toggle {
    margin-left: .5rem;
}
.navbar-buttons>.mr-2, .card hr {
    margin: 0!important; /* eliminates some ugly margins */
}
.card, .modal-body, .card-section {
	padding:0!important; /* tightens up some padding */
}
button.brand-link, .top-nav .navbar-buttons .btn {
	height: 40px; /* sets the navbar buttons to be the same height */
}
.top-nav {
	padding: 0 2rem!important; /* sets the padding of the navbar to look better on main ui and phone ui */
}
.scene-studio-overlay {
	top:.2rem;
	line-height: .8rem;
	max-width: 50%;
    /*moves the studio text to the corner, and compresses it a bit*/
}
hr, .setting-section .setting:not(:first-child) {
	border-top: 1px solid #137cbd;
	margin:0;
    /* fixes some borders */
}
.card-popovers {
	margin-bottom: 3px;
	margin-top: 3px;
    /*centers The Popover Tags/Performer/Scene/Movie Buttons*/
}
.card-popovers>.tag-count>.btn, .card-popovers>.o-count>.btn, .card-popovers>.performer-count>.btn, .card-popovers>.image-count>.btn, .card-popovers>.scene-count>.btn, .card-popovers>.gallery-count>.btn, .card-popovers>.marker-count>.btn, .card-popovers>.movie-count>.btn, span.tag-item>.btn, .modal-header, .modal-footer, .setting-section .setting:not(:last-child) {
	border: unset!important; /* disables some borders that clash with the color shceme*/
}
.scene-card__details, .gallery-card__details, h5.card-section-title {
	margin-bottom:0; /* gets rid of some of the padding around text in cards*/
}
span.scene-card__date {
	display:flex;
	justify-content: flex-end;
	font-size: .8em;
    margin-right: .2rem;
    /*for moving date to bottom right and making it smaller*/
}
.scene-specs-overlay, .scene-studio-overlay {
    right:.2rem;
    /*slightly moves text away from right edge of card*/
}
.scene-specs-overlay {
	bottom: .2rem; 
    /*slightly moves res/duration text */
}
.slick-track {
	margin-bottom: 1rem;
    /*some of the 1px borders were getting cut off. if this is too much for your tastes set to 1px to fix with minimal margins*/
}
.gallery-card {
	height: min-content!important;
    /*sets the gallery cards to shrink their height to 'shrink wrap' the card around the image. gallery cards look dumb with and without this, this is the lesser of the two evils imo, open to suggestions for replacements*/
}
.TruncatedText>div>span {
	display:flex;
	min-height: 3rem;
	justify-content: center;
	align-items: center;
    /*centers and justifies some text*/
}
.grid-card a .card-section-title {
	display: flex;
	justify-content: center;
    /* centers some text*/
}

.gallery-card-image, .gallery-card.card {
	min-width: 12rem;
    max-width: min-content;
    /*Sets The width of gallery cards to 12rem, allows for two gallerys to be side by side on phone ui*/
}
.TruncatedText, .performer-card__age {
    text-align: center; /* Centers title/age Text */
}
.TruncatedText{
	word-break:break-word; /* Adds Word Wrap To Text On Cards */
    margin-bottom:3px; 
    min-height: 3rem; /* makes it so if a title with 1 row of text next to a 2 row title, they dont look stupid next to each other. doesnt fix 3 row titles but I dont have alot of those. */
}
.custom-control.custom-switch, .setting-section .setting>div:last-child {
    justify-content: center;
    display: flex;
    /* centers the settings panel switches */
}
.grid-card .progress-bar {
    bottom: 0px!important;
    /*moves the progress bar down off the preview img and onto the title section */
}
.zoom-0 {
    width:auto;
}
```