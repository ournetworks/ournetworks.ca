---
layout: page
order: 2
section: "2018"
title: "Recorded Talks"
titleDisplay: "Recorded Talks"
parent: "Conference"
redirect_from:
  - "/2018/conference/recorded-talks"
---

Watch the recorded talks from Our Networks 2018 below! We want to again thank our A/V volunteers, without whom sharing these videos would not have been possible, Yurko, Elon, Benedict, and Hank.

Full archive of videos are available:

On ipfs: [QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r5sdVz](#)  
Internet Archive: [temp](#)

## Videos
{:.program-heading}

{% assign sortedSessions = site.data.sessions | sort: 'title' %}

{%- for session in sortedSessions -%}
  {%- if session.linkYoutube -%}
    {% include session-video.html %}
  {%- endif -%}
{%- endfor -%}
