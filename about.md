---
layout: page
order: 1
title: "About the event"
titleDisplay: "About"
redirect_from:
  - "/2018/about"
---

Our Networks is a conference about the past, present, and future of building our own network infrastructures. The event brings together enthusiasts, hardware and software hackers, researchers, organizers and more to collectively explore creative and critical engagements with the Internet and alternative infrastructures.

The event has a [Code of Conduct](/code-of-conduct/) and policy on [Filming](/filming/) in order to foster an environment where we can all work together. During the event if you are being harassed, notice that someone else is being harassed, or have any other concerns, we ask you to contact an organizer immediately. Those who wish to do so but don’t feel comfortable talking to the organizers in-person can email [coc@ournetworks.ca](mailto:coc@ournetworks.ca).

We would like to acknowledge this sacred land on which Our Networks will take place. Tkaronto (Toronto) has been a site of human activity for 15,000 years. This land is the territory of the Huron-Wendat and Petun First Nations, the Seneca, and most recently, the Mississaugas of the Credit River. The territory was the subject of the Dish with One Spoon Wampum Belt Covenant, an agreement between the Iroquois Confederacy and Confederacy of the Ojibwe and allied nations to peaceably share and care for the resources around the Great Lakes. Today, the meeting place of Toronto is still the home to many Indigenous people from across Turtle Island and we are grateful to have the opportunity to work in the community, on this territory.

_We are grateful to the [First Nations House](https://www.studentlife.utoronto.ca/fnh) and Elders Circle (Council of Aboriginal Initiatives) for the language that this acknowledgement is based on._

###  Organizers

<!-- choose random first organizer and have that set the order -->
{% assign min = 1 %}
{% assign max = site.data.organizers.size %}
{% assign diff = max | minus: min %}
{% assign random_number = "now" | date: "%s" | modulo: diff | plus: min %}

{% assign organizers = site.data.organizers %}
{% assign sorted_organizers = '' | split: '' %}
{% assign organizer_count = random_number %}

{% for counter in (min..max) %}
  {% assign array_end = organizer_count | modulo: 4 %}
  {% if array_end == 0 %}
    {% if organizer_count == 0 %}
      {% assign organizer_count = organizer_count | plus: 1 %}
    {% else %}
      {% assign organizer_count = organizer_count | minus: 4 %}
    {% endif %}
  {% else %}
    {% assign organizer_count = organizer_count | plus: 1 %}
  {% endif %}
  {% assign sorted_organizers = sorted_organizers | push: organizers[organizer_count] %}
{% endfor %}

{% for organizer in sorted_organizers %}
  {% include organizer-bio.html %}  
{% endfor %}

###  Design

Logo by [Marlo Yarlo](https://www.instagram.com/marloyarlo/). 2019 design concept by Amelia Zhang.
