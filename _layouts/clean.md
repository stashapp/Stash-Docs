---
layout: default
---

<style>
    h1.clean-heading {
        font-size: 45px !important;
        font-weight: 300;
    }
    .main-content h1:first-of-type {
        margin-top: 0.3em;
    }
    .main-content h1, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6, .main-content #toctitle {
        margin-top: 0.5em;
        margin-bottom: 0.25em;
    }
    h1, h2, #toctitle {
        font-weight: 400;
    }
    h3, h4 {
        font-weight: 500;
    }

    h5, h6 {
        font-weight: 600;
    }
</style>

<h1 class="clean-heading">{{ page.title }}</h1>

{{ content }}