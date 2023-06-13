---
layout: clean
title: Mobile Layout Overhaul
nav_order: 8
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

Took some of the mobile ui overhauls I made for my other theme (Neon Dark) and reverted them back to the default stash color scheme at the request of someone on discord. Figured someone else might want this aswell. All changes are screen width dependant and dont change anything on the main desktop ui.

## Screenshots

![Stash Scenes](/assets/user-interface-ui/themes/mobile-layout-overhaul-1.png)

## Install

1. Open User **Interface** Configuration panel in **settings**. (http://localhost:9999/settings?tab=interface)
2. Tick/Enable Custom CSS ✅ 
3. Copy&Paste [CSS Code](#css-code) to the Custom CSS text area. 

Enjoy!

## CSS Code

```css
/* Mobile Layout Overhaul by Dankonite */
:root
{
	--card-radius:.75rem;
	--font-color:#fff;
	--menu-rounding:1rem;
	--not-card-radius:.25rem;
}
@media(max-width: 576px) {    
.btn
{
	border-radius:var(--not-card-radius)
}
.dropdown-item
{
	border-radius:var(--menu-rounding)
}
.edit-buttons-container>*
{
	margin-bottom:1rem
}
.form-control
{
	border-radius:var(--not-card-radius);
	padding-right:1.3rem
}
.input-group-text
{
	color:var(--font-color)
}
.input-group.has-validation>.input-group-append>div>div>button
{
	border-bottom-left-radius:0!important;
	border-top-left-radius:0!important
}
.nav-pills .nav-link
{
	border-radius:var(--not-card-radius)
}
.row
{
	margin-left:0;
	margin-right:0
}
.saved-filter-list-menu>div>div
{
	margin-bottom:1rem
}
.search-item
{
	border-radius:.25rem;
	padding:1rem
}
.set-as-default-button
{
	margin-top:1rem
}
button.brand-link
{
	font-size:0;
	visibility:hidden!important
}
button.brand-link:after
{
	align-items:center;
	border-radius:var(--not-card-radius);
	content:"Home";
	display:inline-block;
	font-size:1rem;
	height:40px;
	padding:7px 12px;
	position:relative;
	top:-1px;
	vertical-align:middle;
	visibility:visible
}
div.row>h4
{
	margin:0;
	padding:1rem
}
div.row>hr.w-100
{
	padding-bottom:1rem
}
input.bg-secondary.text-white.border-secondary.form-control,.date-input.form-control,.text-input.form-control
{
	height:33.5px
}
	.brand-link:after
	{
		margin-left:-16px
	}
	.top-nav .btn
	{
		padding:0 12px
	}
.bs-popover-bottom>.arrow:after,.bs-popover-auto[x-placement^=bottom]>.arrow:after
{
	border-width:0 .5rem .5rem;
	top:1px
}
.btn-toolbar>.btn-group>.dropdown>button,.query-text-field,.form-control,.dropdown,.dropdown-toggle
{
	height:100%
}
.navbar-brand
{
	display:inline-block;
	font-size:1.25rem;
	line-height:inherit;
	margin-right:0;
	padding-bottom:.3125rem;
	padding-top:.3125rem;
	white-space:nowrap
}
.navbar-expand-xl .navbar-nav .nav-link
{
	padding-left:.5rem;
	padding-right:0
}
h6.col-md-2.col-4
{
	display:flex;
	justify-content:center
}
.TruncatedText.scene-card__description
{
	font-size:.9rem
}
.brand-link
{
	padding:0
}
.btn-toolbar
{
	justify-content:flex-start;
	padding-top:.5rem
}
.dropdown-item.disabled,.dropdown-item:disabled
{
	color:#adb5bd
}
.dropdown-menu.show
{
	display:block;
	padding:1rem
}
body
{
	text-align:left
}
div.navbar-buttons>:not(.mr-2)
{
	border-radius:var(--not-card-radius)
}
h5,.h5
{
	font-size:1.1rem
}
.gallery-card
{
	width:unset!important
}
.performer-card
{
	width:unset!important
}
.tag-card-image
{
	height:120px
}
#scrubber-current-position
{
	height:30px;
	left:50%;
	position:absolute;
	width:2px;
	z-index:1
}
#scrubber-position-indicator
{
	height:20px;
	left:-100%;
	position:absolute;
	width:100%;
	z-index:0
}
.badge-secondary
{
	border-radius:.25rem;
}
.filter-button .badge
{
	border-radius:999px;
	right:-7px;
	top:-6px;
	z-index:3!important
}
.gallery-card
{
	height:min-content!important
}
.gallery-card.card
{
	padding-bottom:0
}
.modal-footer
{
	border-radius:1rem;
	border-top-left-radius:0;
	border-top-right-radius:0
}
.modal-header
{
	border-bottom-left-radius:0!important;
	border-bottom-right-radius:0!important;
	border-radius:1rem
}
.performer-card .fi
{
	bottom:.3rem;
	filter:drop-shadow(0 0 2px rgba(0,0,0,.9));
	height:2rem;
	position:absolute;
	right:.2rem;
	width:3rem
}
.scene-header>h3>.TruncatedText
{
	text-align:left
}
.scene-specs-overlay,.scene-interactive-speed-overlay,.scene-studio-overlay,span.scene-card__date
{
	font-weight:900!important
}
.scrubber-tags-background
{
	height:20px;
	left:0;
	position:absolute;
	right:0
}
hr
{
	margin:0
}
.card.performer-card
{
	padding:0
}
.performer-card__age
{
	text-align:center
}
.slick-list .gallery-card
{
	width:min-content
}
.slick-slide .card
{
	height:min-content
}
.slick-track
{
	margin-bottom:1rem;
	top:0
}
.tag-sub-tags,.studio-child-studios
{
	display:none
}
.card-popovers
{
	justify-content:space-around;
	margin-bottom:2px;
	margin-top:2px
}
.card-section
{
	height:100%;
	padding:0 .2rem
}
.scene-specs-overlay
{
	bottom:.2rem;
	right:.2rem
}
.scene-studio-overlay
{
	line-height:.8rem;
	max-width:50%;
	right:.2rem;
	top:.2rem
}
.edit-buttons>button
{
	margin-left:1px
}
.scene-card__details,.gallery-card__details
{
	margin-bottom:0!important
}
.setting-section .setting>div:last-child
{
	display:flex;
	justify-content:center;
	text-align:right
}
span.scene-card__date
{
	display:flex;
	font-size:.8em;
	justify-content:flex-end;
	margin-right:.2rem
}
a.marker-count
{
	display:none
}
a[target='_blank']
{
	display:none
}
button.collapse-button.btn-primary:not(:disabled):not(.disabled):hover,button.collapse-button.btn-primary:not(:disabled):not(.disabled):focus,button.collapse-button.btn-primary:not(:disabled):not(.disabled):active
{
	color:var(--font-color)
}
.TruncatedText
{
	text-align:center;
	white-space:pre-line;
	word-break:break-word
}
.gallery-card
{
	width:min-content!important
}
.gallery-card-image
{
	max-height:240px!important;
	width:auto!important
}
.grid-card .progress-bar
{
	bottom:0
}
.grid-card a .card-section-title
{
	color:var(--font-color);
	display:flex;
	justify-content:center
}
.ml-2.mb-2.d-none.d-sm-inline-flex
{
	display:none!important
}
.tag-card
{
	padding:0;
	width:auto!important
}
body
{
	color:var(--font-color);
	padding:3.6rem 0 0
}
div.mb-2
{
	height:auto
}
.card
{
	padding:0
}
.container,.container-fluid,.container-xl,.container-lg,.container-md,.container-sm
{
	padding-left:0;
	padding-right:0
}
.d-flex.justify-content-center.mb-2.wrap-tags.filter-tags
{
	margin:0!important
}
.input-control,.text-input
{
	color:var(--font-color)
}
.navbar-buttons>.mr-2,.card hr
{
	margin:0!important
}
.preview-button .fa-icon
{
	color:var(--font-color)
}
.rating-banner
{
	display:none!important
}
.scene-card-preview,.gallery-card-image,.tag-card-image,.image-card-preview
{
	width:100%
}
.slick-dots li button:before
{
	content:"."
}
.slick-dots li.slick-active button:before
{
	opacity:.75
}
.tag-item
{
	color:var(--font-color)
}
.tag-item .btn
{
	color:var(--font-color)
}
.top-nav
{
	padding:0 2rem!important
}
a.nav-utility,button[title='Help'],.nav-menu-toggle
{
	margin-left:.5rem
}
button.brand-link,.top-nav .navbar-buttons .btn
{
	height:40px
}
div.react-select__control
{
	color:var(--font-color)
}
div.react-select__control .react-select__multi-value,div.react-select__multi-value__label,div.react-select__multi-value__remove
{
	color:var(--font-color)!important
}
div.react-select__menu,div.dropdown-menu
{
	color:var(--font-color)
}
div.react-select__multi-value
{
	border-radius:999px
}
div.react-select__multi-value__label
{
	border-bottom-left-radius:999px;
	border-top-left-radius:999px;
	padding-right:8px
}
div.react-select__multi-value__remove
{
	border-bottom-right-radius:999px;
	border-top-right-radius:999px;
	padding-left:0
}
div.react-select__placeholder
{
	color:var(--font-color)
}
div[id='settings-menu-container']
{
	padding-top:.5rem
}
div[role='group'].ml-auto.btn-group>div
{
	margin-right:.5rem;
	margin-top:.5rem
}
.grid-card a .card-section-title
{
	display:flex;
	justify-content:center
}
dl.details-list {
    grid-column-gap:0;
}
dt {
    padding-right: .5rem;
}
dd {
    margin-bottom: 0;
    padding-left: .5rem;
}
#performer-page .performer-image-container .performer {
    border-radius:var(--menu-rounding);
    border: 0!important;
}
.recommendations-container-edit .recommendation-row {
    border-radius: 1rem;
    margin-bottom: 10px;
}
.recommendations-container-edit.recommendations-container>div>div:first-of-type {
    margin-top: calc(1rem + 10px);
}
}
@media (max-width: 575.98px) and (orientation: portrait) {
	.container,.container-fluid,.container-xl,.container-lg,.container-nd,.container-sm
	{
		padding-top:3.5rem!important
	}
	.top-nav
	{
		bottom:unset;
		top:auto
	}
    .performer-card-image
	{
		height:25vh
	}
    body
    {
        padding:0
    }
    .grid-card
	{
		width:47vw
	}
    .grid-card
	{
		width:47vw
	}
    }
```
