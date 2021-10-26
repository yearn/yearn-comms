# yearn-comms

This is a collection of communication, announcements, tweets, newsletters, and other articles about yearn. 

## Run locally

- Follow the guide [here](https://jekyllrb.com/docs/) to install Jekyll.
- Run the Jekyll blog locally with `bundle exec jekyll serve --watch`
  - With --watch whenever you save a change it will update the site but you will need to reload it on [http://localhost:4000](http://localhost:4000)

## Translations

Under your [language] branch, you will now find both the site config files and assets, as well as the comms content (articles, newsletters, etc.).

You can find content (or "posts") to be translated in the following folders (and their subfolders):
- Announcements/_posts
- Articles/_posts
- Financials/_posts
- Newsletters/_posts
- Podcasts/_posts
- Tweets/_posts

A "post" consists of two parts: the "header", or "front-matter" (necessary for the site to publish the post correctly.), and the "content".

In order for a PR for a translation to be accepted and deployed, you need to make sure that: 
- the "content" is translated properly
- in the front-matter, the name of the "translator" (you) is added correctly
- in the front-matter, the "title" is translated
- in the front-matter, "publish:" is set to "true"

Please, do not:
- modify/translate the filename
- modify/translate anything else in the "front-matter"
