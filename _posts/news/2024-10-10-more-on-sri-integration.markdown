---
layout: post
title:  "More on SRI GC peak integration"
date:   2024-10-09 12:52:23
categories: news
featured: false
tags: GC Troubleshooting
--- 
## Update on GC integration
In our [previous post on peak integration]({% link _posts/news/2024-09-26-why-methanizer-is-more-than-100.markdown %}) we used manual integration tools to fix peak areas. This way works, but it has a **very significant drawback** - we have to fix peak integration each time we have CO and CH<sub>4</sub> close to each other. After a recent call to the tech support on an unrelated issue, they suggested us a way of doing it more robustly.

Basically here is our **"problem"**:
CO and CH<sub>4</sub> peaks are too close and we have to make sure we integrate them correctly. Pay attention to the bottom part of the graph. Proper integration could get us between 2 and 10% (depending on a run conditions) correction of a peak area as we've seen <a href="why-methanizer-is-more-than-100">before.</a> 

<!-- inserting image with mardown -->
![](/images/gc2.1.png){: .himgcenter style="width:auto"}
## New method settings
Instead of updating every new chromatogram manually, a tech support engineer suggested we modify our methods as follows. If we go to: *Edit->Channels->Integration* in our PeakSimple software, we can see that Base Line is set for 60.0%.

<!-- inserting image with html -->
<img src="/images/gc2.2.png" class="himgcenter" style="width: 40%;">


Lowering this parameter is the *solution*. We make the following change 
to get an improved peak integration for all **chromatograms at once**:

*Edit->Channels->Integration->Base line: 1.00*

![](/images/gc2.3.png){: .himgcenter style="width:40%"}

Now we just have to propagate the new setting in our GC method files.



