---
layout: splash
redirect_from:
  - "/cfp/"
  - "/conference/"
  - "/2020/"
---

This year we’re taking a different approach given the rapidly evolving COVID-19 situation. A lot remains unknown about how travel and ways to gather will develop between now and Our Networks 2020, and we take seriously our obligations as hosts and to our local community. 

We are moving beyond an in-person event, instead inviting you all to collectively invent the future of our networks in virtual spaces. In the presence of so many unknowns, how can alternative network infrastructures support the creation of radically equitable futures? What tactics of distributed collective care allow us to offer mutual aid in this moment? How can we apply more broadly what we learn as we go about decentralizing the conference across time and place?  

**This is a call to face the uncertainty together—come meet us online.** We’re looking for a range of virtual activations through the month of July leading up to and including the weekend of August 7–9! There will be room for familiar formats, including streamed talks and virtual workshops, but we are especially interested in activations that break free from the bounds of an “online conference.” For example, you could host a durational study group, run a meetup in a game world, exhibit an art project using a platform in some unexpected way, experiment with collective forms of distributed expression (à la Twitch Plays Pokémon). We are excited to draw on the possibilities for shared online experiences that a remote event affords. Leaning into new forms of interaction that build collective experiences at a distance, we can collectively cultivate virtual experiences that feel intimate, exploratory, and expansive.

## Submission deadline

The deadline for proposals is **June 1, 2020**. We highly encourage you to email us or [**attend an open hour**](#not-sure-ask-us) if you have questions about formats and activations—we’re here to offer support. Submissions should [follow our template](https://raw.githubusercontent.com/ournetworks/2020-submissions/master/.github/ISSUE_TEMPLATE/submission.md) and be [submitted as a GitHub issue](https://github.com/ournetworks/2020-submissions/issues/new) in our submissions repository. There will be additional opportunities closer to and during the event to put forward ideas and actively participate. We encourage you to sign up to our mailing list to hear more.

<a href="https://github.com/ournetworks/2020-submissions/issues/new?template=submission.md&title=%5BSubmission+Title%5D" class="button" target="_blank" rel="noopener">Submit your proposal</a>

_First time GitHub users will need to [create a free account](https://github.com/join) before they can [open an issue](https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue)._

## Who can submit?

Anyone interested in how we can build better online futures! Our Networks is excited for sessions that centre the voices of those less often heard at technical events. We encourage BIPOC and LGBTQ2S folks to lead sessions and acknowledge the multiple marginalizations those with intersecting identities face. For 2020 we are also seeking to support those voices in their preferred language. If you are interested in leading a session in a language other than English please indicate so in your submission.

We want to provide a welcoming space for those speaking for the first time, email us if you’d like assistance workshopping a proposal. 

## Not sure? Ask us!

If you have any additional questions let us know at [{{ site.email }}](mailto:{{ site.email }})!  We're also hosting two open hours while the CFP is open for any questions:

<!-- Call section -->
{% capture now_year %}{{'now' | date: '%Y'}}{% endcapture %}
{% capture now_day %}{{'now' | date: '%j'}}{% endcapture %}
{% assign now_day = now_day | minus: 0 %}

<section class="sections">
  <div class="container m-0 mt-2">
    <div class="row events-grid">
      {% for event in site.data.events %}
        {% capture event_year %}{{event.date | date: '%Y'}}{% endcapture %}
        {% capture event_day %}{{event.date | date: '%j'}}{% endcapture %}
        {% assign event_day = event_day | plus: 0 %}

        {% if event_year > now_year or event_day >= now_day and event_year >= now_year %}
          <div class="six columns event">
            {% include event.html event=event %}
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>
