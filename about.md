---
layout: page
order: 1
title: "About the event"
titleDisplay: "About"
---

Our Networks is a conference about the past, present, and future of building our own network infrastructures. The event brings together enthusiasts, hardware and software hackers, researchers, organizers and more to collectively explore creative and critical engagements with the Internet and alternative infrastructures.

The event has a [Code of Conduct](/code-of-conduct/) in order to foster an environment we can all be in together. During the event if you are being harassed, notice that someone else is being harassed, or have any other concerns, we ask you to contact an organizer immediately. Those who wish to do so but don’t feel comfortable talking to the organizers in-person can email [coc@ournetworks.ca](mailto:coc@ournetworks.ca).

We would like to acknowledge this sacred land on which Our Networks will take place. Tkaronto (Toronto) has been a site of human activity for 15,000 years. This land is the territory of the Huron-Wendat and Petun First Nations, the Seneca, and most recently, the Mississaugas of the Credit River. The territory was the subject of the Dish with One Spoon Wampum Belt Covenant, an agreement between the Iroquois Confederacy and Confederacy of the Ojibwe and allied nations to peaceably share and care for the resources around the Great Lakes. Today, the meeting place of Toronto is still the home to many Indigenous people from across Turtle Island and we are grateful to have the opportunity to work in the community, on this territory.

_We are grateful to the [First Nations House](https://studentlife.utoronto.ca/service/first-nations-house/) and Elders Circle (Council of Aboriginal Initiatives) for the language that this acknowledgement is based on._

{:.font-display}

## Organizers

{% for organizer in site.data.organizers %}

  <p class="mb-05">
    <strong id="{{ organizer.organizerID }}">{{ organizer.name }}</strong>&nbsp;{% if organizer.bio %}{{ organizer.bio }}{% endif %}
  </p>
  {% if organizer.link or organizer.twitter or organizer.github %}
  <ul class="flex flex-wrap p-0 mb-2 gap-4 list-none text-sm">
    {%- if organizer.link -%}<li class="bio-sm-list-item"><a href="https://{{ organizer.link }}" target="_blank" rel="noopener" data-proofer-ignore>{{ organizer.link }}</a></li>{%- endif -%}
    {%- if organizer.fediverse -%}<li class="bio-sm-list-item"><a href="https://{{ organizer.fediverseLink }}" target="_blank" rel="noopener">{{ organizer.fediverse }}</a></li>{%- endif -%}
    {%- if organizer.twitter -%}<li class="bio-sm-list-item"><a href="https://twitter.com/{{ organizer.twitter }}" target="_blank" rel="noopener">@{{ organizer.twitter }}</a></li>{%- endif -%}
    {%- if organizer.github -%}<li class="bio-sm-list-item"><a href="https://github.com/{{ organizer.github }}" target="_blank" rel="noopener">{{ organizer.github }}</a></li>{%- endif -%}
  </ul>
  {% endif %}
{% endfor %}

{:.font-display}

### Design

Logo by [Marlo Yarlo](https://www.instagram.com/marloyarlo/).
