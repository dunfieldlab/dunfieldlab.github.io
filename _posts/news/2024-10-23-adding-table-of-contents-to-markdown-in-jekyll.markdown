---
layout: post
title:  "Install Jekyll Plugins: Adding Table of Contents to Markdown"
date:   2024-10-23 13:30:00 -0600
categories: news
featured: true
tags: www tutorials code
--- 
## Instal a Jekyll plugin
To add a TOC that automatically links to our various heading levels within a document (much like in MS Word) we are goint to install and use a jekyll plugin 
[jekyll-toc](https://github.com/toshimaru/jekyll-toc){:target="_blank"}. The process seems straightforward, and we could use a similar approach when installing other Jekyll plugins or themes. According to the instructions we:
* Add jekyll-toc plugin in your site's Gemfile, and run bundle install.
```ruby
#Gemfile
gem 'jekyll-toc'
```
Install our gem
```bash
bundle install
```
* Add jekyll-toc to the gems: section in your site's _config.yml.

{% highlight yaml%}
# _config.yml
plugins:
  - jekyll-toc
{% endhighlight %}
## Initial configuration
* Configure our TOC. For the changes ```_config.yml``` to take effect, we have to save and re-start the server.
{% highlight yaml %}
# _config.yml
toc:
min_level: 1
max_level: 6
ordered_list: false
no_toc_section_class: no_toc_section
list_id: toc
list_class: section-nav
sublist_class: ''
item_class: toc-entry
item_prefix: toc-
{% endhighlight %}
* Finally, let's tell Jekyll where to put our TOC. One of the simplest ways would be to modify our post layout.
The simplest thing we could do is to place this line ```{% raw %} {% toc %} {% endraw %}``` inserting a toc tag where we want our TOC to appear. A logical place to add it is right above our Jekyll ```{% raw %} {{ content}} {% endraw %}``` variable. 
{% highlight html %}
{% raw %} 
#/_layouts/post.html
---
layout: default
---
<article class="site-section site-section-last">
  <header class="post-header">
    <h1 class="post-title"> {{ page.title }}</h1>
    <p class="post-meta"> 
      {% comment %} autors, social media, date, etc {% endcomment %}
      {{ page.date | date: "%b %-d, %Y" }}
     </p>

     {% if page.featured_image %}

      <div class="post-image monospacefont">
        <img src="{{page.featured_image }}" alt="{{ page.title }} featured image">
      </div>
     {% endif %}
  </header>
<div class="post-body">
  {% toc %}
  {{ content }}
</div>
</article>
{% endraw %}
{% endhighlight %}
* Optionally we could try out some styling the developers provide. Otherwise we could style it ourselves later. To test it add the following class definition in our ```_layout.scss```:

```css
// _sass/minima/_layout.scss
.section-nav {
  background-color: #fff;
  margin: 5px 0;
  padding: 10px 30px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
}
```
## Testing it out
Now that everything is ready, and if we didn't make any mistake all we need to do is to set ```toc: true``` in the YAML frontmatter of this very post.
{% highlight yaml%}
{% raw %} 
---
layout: post
title:  "Adding Table of Contents to a Markdown Page in Jekyll"
date:   2024-10-23 13:30:00 -0600
categories: news
featured: true
toc: true
tags: github tutorials code
--- 
{% endraw %}
{% endhighlight %}

While this is not particularly useful for a small page like this one, longer pages could definitely benefit from having a toc. Plus, we could style it so that it would be positioned on a side and would be stiky when scrolling.