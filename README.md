# Stash-Docs
Website: https://docs.stashapp.cc

# Contributing

Everyone is welcome to help with the documentation. All changes are managed through pull requests. 

Read step-by-step guide on how to create a pull request [CONTRIBUTING.md](CONTRIBUTING.md).

# Running locally with Ruby

## Prerequsites
- [Ruby](https://www.ruby-lang.org/en/downloads/) v2.5.0 or higher, including all development headers (check your Ruby version using `ruby -v`)
- [RubyGems](https://rubygems.org/pages/download) (check your Gems version using `gem -v`)
- [Bundler gem](https://rubygems.org/gems/bundler) run `gem install bundler`
- Clone/download the repository

### Images
You will need to update the baseurl in the `_config.yml` file. Find line 
```baseurl: "/"```
 and replce it with 
 ```baseurl: "/Stash-Docs"```.

## Building the site
1. Open Terminal/Command Prompt with Ruby and go to your directory where you saved the copy of the repository
2. Run `bundle exec jekyll serve`
> You can add `--livereload` option to automatically refresh the page after changes. 
