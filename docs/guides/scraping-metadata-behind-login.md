---
title: Scraping metadata behind login
hide:
  - toc
---

A regular scraper can only scrape information from webpages that are open to the public access. If you want to scrape a webpage that requires login or behind a paywall, you need to use the "Visible CDP" technique. 

Normal CDP scraping will launch a headless chrome browser, which will not show up for any user interactions. "Visible CDP" turns the "headless chrome" into a "visible" instance.

1. Prepare your scraper's .yml file and make sure it's valid and working. Your scraper should have the following setting inside:
```yaml
driver:
  useCDP: true
```
2. Run a command console. Go to the Chrome's binary directory and run `chrome.exe --remote-debugging-port=9222`. This will launch a special Chrome instance that Stash Scrapers can control later on.
3. In Stash, make sure that the **Settings** > **Metadata Providers** > **Scraping** > **Chrome CDP Path** is set to `http://localhost:9222/json/version`.
4. Use the special Chrome instance you launched earlier, go to the webpage you want to scrape, type in your user/pass or pass any other human tests, until you see the page with desired content.
5. Paste the webpage's URL in your Stash scene and start scraping. It should get the information correctly.