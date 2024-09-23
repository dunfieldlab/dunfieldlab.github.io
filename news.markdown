---
layout: default
title: Latest articles
permalink: /news/
---

 <section class="site-section">
    <div class="wrapper">
        <h1>News</h1>
            {% for post in site.categories['news'] %}
                    <div class="post post-featured"> 
                        {% include post.html %}
                    </div>
            {% endfor %}
    </div>
</section>