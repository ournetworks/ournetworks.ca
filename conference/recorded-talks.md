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

Watch the recorded talks from the Our Networks 2018 below! Also available at the ipfs archive is:
<LINK>

or at Internet Archive: <LINK>

## Videos
{:.program-heading}

{% include vod-stream-embed.html %}

{% assign sortedSessions = site.data.sessions | sort: 'title' %}

{%- for session in sortedSessions -%}
  {%- if session.linkYoutube -%}
    {% include session-details.html %}
    
  {%- endif -%}
{%- endfor -%}
