---
layout: page
order: 1
title: "About the event"
titleDisplay: "About"
---

Our Networks is a conference about the past, present, and future of building our own network infrastructures. The event brings together enthusiasts, hardware and software hackers, researchers, organizers and more to collectively explore creative and critical engagements with the Internet and alternative infrastructures.

The event has a [Code of Conduct](/code-of-conduct/) in order to foster an environment we can all be in together. During the event if you are being harassed, notice that someone else is being harassed, or have any other concerns, we ask you to contact an organizer immediately. Those who wish to do so but don’t feel comfortable talking to the organizers in-person can email [coc@ournetworks.ca](mailto:coc@ournetworks.ca).

In previous years we have hosted this event in Tkaronto (Toronto), in territory subject to the Dish with One Spoon Wampum Belt Covenant and the land of the Huron-Wendat and Petun First Nations, the Seneca, and most recently, the Mississaugas of the Credit River.

After two years of hosting the conference remotely we will be hosting the event in so-called Vancouver, British Columbia.

We would like to acknowledge the land on which Our Networks will take place. Vancouver is the unceded and ancestral territory of the <span class="font-bc-sans">hən̓q̓əmin̓əm̓</span> and <span class="font-bc-sans">Sḵwx̱wú7mesh</span> (Squamish) speaking peoples, the <span class="font-bc-sans">xʷməθkʷəy̓əm</span> (Musqueam), <span class="font-bc-sans">Sḵwx̱wú7mesh</span>, and <span class="font-bc-sans">səlilwətaɬ</span> (Tsleil-Waututh) Nations, and has been stewarded by them since time immemorial.

The term unceded acknowledges the dispossession of the land and the inherent rights that Musqueam, Squamish and Tsleil-Waututh hold to the territory. The term serves as a reminder that Musqueam, Squamish and Tsleil-Waututh have never left their territories and will always retain their jurisdiction and relationships with the territory. We are grateful to have the opportunity to gather on this territory.

_We credit [The City of Vancouver](https://vancouver.ca/people-programs/land-acknowledgement) for the language acknowledging the unceded territories._

<pre role="img" aria-label="ASCII divider" class="font-display-mono aliased text-10 inline-flex max-w-prose overflow-hidden w-100">
.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*
</pre>

{:.font-display}

## Organizers

{% for organizer in site.data.organizers %}

  <p class="mb-05">
    <strong id="{{ organizer.organizerID }}">{{ organizer.name }}</strong>&nbsp;{% if organizer.bio %}{{ organizer.bio }}{% endif %}
  </p>
  {% if organizer.link or organizer.twitter or organizer.github %}
  <ul class="flex flex-wrap p-0 mb-2 gap-4 list-none text-base">
    {%- if organizer.link -%}<li class="bio-sm-list-item"><a href="https://{{ organizer.link }}" target="_blank" rel="noopener" data-proofer-ignore>{{ organizer.link }}</a></li>{%- endif -%}
    {%- if organizer.fediverse -%}<li class="bio-sm-list-item"><a href="https://{{ organizer.fediverseLink }}" target="_blank" rel="noopener">{{ organizer.fediverse }}</a></li>{%- endif -%}
    {%- if organizer.bsky -%}<li class="bio-sm-list-item"><a href="https://bsky.app/profile/{{ organizer.bsky }}" target="_blank" rel="noopener">{{ organizer.bsky }}</a></li>{%- endif -%}
    {%- if organizer.twitter -%}<li class="bio-sm-list-item"><a href="https://twitter.com/{{ organizer.twitter }}" target="_blank" rel="noopener">@{{ organizer.twitter }}</a></li>{%- endif -%}
    {%- if organizer.github -%}<li class="bio-sm-list-item"><a href="https://github.com/{{ organizer.github }}" target="_blank" rel="noopener">{{ organizer.github }}</a></li>{%- endif -%}
  </ul>
  {% endif %}
{% endfor %}

<pre role="img" aria-label="ASCII divider" class="font-display-mono aliased text-10 inline-flex max-w-prose overflow-hidden w-100">
--..,___.--,--'`,---..-.--+--.,,-,,..._.--..-._.-a:f--..-.--
</pre>

{:.font-display}

### Graphics & Typography

Logo by [Marlo Yarlo](https://www.instagram.com/marloyarlo/).

ASCII drawings adapted from original work by [Joan G. Stark](https://en.wikipedia.org/wiki/Joan_Stark) (a.k.a. jgs, Spunk) and Adel Faure.

Headings: [Hershey-Futural](https://gitlab.com/swrs/hershey-futural), a typeface designed by Dr. A.V. Hershey in the late 60s. Originally designed to be rendered using vectors on early cathode ray tube displays. SIL Open Font License.

ASCII drawings: [jgs](https://gitlab.com/velvetyne/jgs/-/tree/main), designed by Adel Faure as a tribute to jgs. This font has been specifically designed to draw ASCII art. SIL Open Font License.

Indigenous Languages: [BC Sans](https://github.com/bcgov/bc-sans), a "living" typeface developed to support special characters and syllabics found in Indigenous Languages in British Columbia. [More on BC Sans](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity/bc-sans). SIL Open Font License.
