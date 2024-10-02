---
layout: post
title:  "Could SRI GC methanizer be more than 100% efficient?"
date:   2024-09-20 12:52:23 -0600
categories: news
tags: GC Troubleshooting
--- 

## Recent observations
After the methanizer replacement I observed that its CO<sub>2</sub> conversion efficiency exceeded 100%. If our instument is to be trusted, we are converting CO<sub>2</sub> to methane at a whopping rate of **117%**!

| Component | Area    | Percent | Efficiency |
|-----------|---------|---------|------------|
| CO        | 16.3632 | 0.5014  | 103.8654   |
| CH<sub>4</sub>       | 15.9836 | 0.5087  | NA         |
| CO<sub>2</sub>       | 36.808  | 1       | 117.1465   |


The most obvious question one might ask is where the extra methane comes from? Can we profit by it by any chance? 

Unfortunately, any prospects for a lucrative scheme had to be cut short. Somehow I already new that there was a rational explanation somewhere. Looking at the chromatogram was my first hint.

![](/images/gc1.png)

Right between methane and carbon monooxide peaks there was something I didn't like: **integration error**!

### Hopefully those are easy to fix
* First we go to the *Edit->Manual integration*

![](/images/gc2.png)

* Then after applying the tool 

we split the two adjacent peaks. The integration of the methane peak looks more realistic and we get:

![](/images/gc3.png)

Not perfect, but we know what to blame and how to get from there. Our **corrected** methanizer efficiency is now better at reflecting reality:

| Component | Area    | Percent | Efficiency |
|-----------|---------|---------|------------|
| CO     | 18.6501 | 0.5014  | 105.7996   |
|CH<sub>4</sub>       | 17.8844 | 0.5087  | NA         |
| CO<sub>2</sub>         | 36.808  | 1       | 104.6959   |

