---
layout: post
title:  "Website development series #1: Installing Jekyll with Anaconda"
date:   2024-10-01 13:30:00 -0600
categories: news tutorials
tags: www tutorials code
--- 
## Installing Jekyll locally
The official way of installing Jekyll could be found [here](https://jekyllrb.com/docs/installation/){:target="_blank"}. As never got it to work for me, here's the approach I used for my local Jekyll installations (both on Ubuntu and WSL). In theory this should also work for any Anaconda, I just haven't tested those.

First we create and activate the environment called jekyll:
```bash
conda update conda
conda create -n jekyll
source activate jekyll
```
Then we need to install all the reqirements:
{% highlight bash %}
conda install -c conda-forge c-compiler compilers cxx-compiler
conda install -c conda-forge ruby 
gem install jekyll bundler
{% endhighlight %}
Then we tell **RubyJems** where to find Ruby:

```bash
ln -s $CONDA_PREFIX/bin/ruby $CONDA_PREFIX/share/rubygems/bin/ 
```
That's it, now we are ready to go!

## Testing our new install
Let's create a brand-new website called my_website and serve it locally:
{% highlight bash %}
jekyll new my_website
cd my_website
jekyll serve
{% endhighlight %}
Yay! Fantastic! We've got it running. 
Jekyll has made a website with a following structure:
```
my_website/
├── 404.html
├── Gemfile
├── Gemfile.lock
├── _config.yml
├── _posts
│   └── 2024-10-01-welcome-to-jekyll.markdown
├── _site
│   ├── 404.html
│   ├── about
│   │   └── index.html
│   ├── assets
│   │   ├── main.css
│   │   ├── main.css.map
│   │   └── minima-social-icons.svg
│   ├── feed.xml
│   ├── index.html
│   └── jekyll
│       └── update
│           └── 2024
│               └── 10
│                   └── 01
│                       └── welcome-to-jekyll.html
├── about.markdown
└── index.markdown
```
Here we could note the following:
* index.markdown: the home page for the website.
* _config.yml: site settings, could be overrided in individual pages.
* Gemfile: information about ruby gems, jekyll packages and themes to be installed.
* _posts folder: is where jekyll actively looks for posts, like this one.
* assets folder: additional website resourses like documents, images, styles, scripts.
* _site: a ready-to-serve website compiled by jekyll.


To view our new website we go to the local server running at the following address [http://127.0.0.1:4000/](http://127.0.0.1:4000/){:target="_blank"}. In our browser and see something like this:

![](/images/jekyll-new.png){: .himgcenter }

## Useful Jekyll commands
* Our Gemfile holds the information about the dependencies needed for a project.
We could install those by funning:
```bash
bundle install
```
* Then to seve our website with **the specified** dependencies we could:
```bash
bundle exec jekyll serve
```
* To keep re-generating website when we make updates we could use the **incremental** flag. In some cases we still need to stop and re-start the server.
```bash
bundle exec jekyll serve --incremental
```
* I found the *incremental* feature often fails on Windows or WSL, so here's the workaround:
```bash
bundle exec jekyll serve --watch --force_polling
```
* We'd like to include the contents of our _drafts folder:
```bash
bundle exec jekyll serve --watch --force_polling --drafts
```
## Updates and troubleshooting