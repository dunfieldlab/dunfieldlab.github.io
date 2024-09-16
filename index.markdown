---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="home">
<!-- section for featured post -->
<section class="site-section">
    <div class="wrapper">
        <h1>Featuured articles</h1>
            {%  assign count = 0 %}
            {% for post in site.categories['blog'] reversed  %}
                {% if post.featured == true and count < 2 %}
                    <div class="post post-featured"> 
                        {%  include post.html %}
                    </div>
                    {%  assign count = count | plus: 1 %}
                {% endif %}
            {% endfor %}
    </div>
</section>
<!-- section for featured projects -->
<section class="site-section">
    <h1>Featured projects</h1>
    <ul class="project-list">
        {% for project in site.categories['project'] reversed | limit: 3 %}
                {% include project.html %}
        {% endfor %}
    </ul>
</section>
<!-- section for the latest articles -->
<section class="site-section site-section-last">
    <div class="wrapper">
        <h1>Latest articles</h1>
        <ul class="post-list">
            {% for post in site.categories['blog'] reversed | limit: 4 %}
                <li class="post"> 
                    {% include post.html %}
                </li>
            {% endfor %}
        </ul>
    </div>
</section>
</div>
 