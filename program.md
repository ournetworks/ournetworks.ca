---
layout: page
order: 5
title: "Program"
titleDisplay: "Program"
---

## Sessions
{: data-nav-program-link=''}

{% assign sortedSessions = site.data.sessions[2020] | sort_natural: "title" %}

{% for session in sortedSessions %}
  {%- unless session.sessionType == "orga" or session.sessionType == "keynote" or session.sessionType == "exhibit" or session.sessionType == "para" or session.sessionType == "lightning-talk" -%}
    {% include session-details.html year=2020 %}
  {%- endunless -%}
{% endfor %}

## Presenters
{: data-nav-program-link=''}

{% assign sortedPresenters = site.data.presenters[2020] | sort: "name" %}

{%- for presenter in sortedPresenters -%}
    {% include presenter-details.html year=2020 %}
{%- endfor -%}