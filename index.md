---
layout: splash
redirect_from:
  - "/cfp/"
  - "/conference/"
  - "/2019/"
---

**RE: Infrastructures** explores the collective care and maintenance of alternative networking practices—new protocols, peer-to-peer connections, offline-first computing, and community-based governance. 

How can these emerging **Infrastructures of <span class="word"></span>** provide spaces to imagine<span class="word-spacer"></span>  
radically different futures, resist easy co-option by the forces of late-stage capitalism, and work in solidarity as plural networks seeking emancipatory change? To answer this we draw on insights from organizers, technologists, artists, and scholars to ensure the focus is not only on the technical aspects of infrastructure, but also the social and cultural. Their diverse perspectives suggest ways we can make space for livelihoods, solidarity, and survival; draw on history and place to bring our fullest imaginations to this moment; and open ways to think these questions together as we build transitional forms.

This year will have a mix of scheduled talks and workshops alongside open space, as well as screenings, a zine library, and an art exhibition. Topics include:

- Practices of reparative networking
- Remediation practices for communication infrastructures
- Uncooptable computing reconfigurations
- Reconstructing technology after refusal
- Regenerative approaches that resist status quo tech

### Registration

We have three admission levels: Organization Supporter, Supporter, and Reduced Cost. While the cost for us to host this event is $78 per person, we want to ensure all can attend. We are looking for volunteers (in return for complimentary admission) and are able to offer a limited number of scholarships, please contact us at [{{ site.email }}](mailto:{{ site.email }})

| Admission              | Price* | Details |
|:-----------------------|:------|:--------|
| Organization Supporter | $110 | If your org or company is paying or your registration can be reimbursed, consider registering as organization supporter. This allows us to offer reduced cost admissions and scholarships. |
| Supporter              | $60 | The suggested admission for those employed or otherwise financially comfortable. At this rate we can sustain the event. |
| Reduced Cost           | $25 | A lower cost admission for those who are unwaged, a student, or otherwise in need of a reduced cost. |

<a class="button button-primary" href="https://www.brownpapertickets.com/event/4308694">{% include icons/ticket.svg %}&nbsp;&nbsp;Register on Brown Paper Tickets</a>

<small><em>*Brown Paper Tickets charges CA$0.99 + 5.0% of the ticket price in buy fees.</em></small>

***

### Want to know more? Ask us!

We have more open hours for people to ask questions and discuss activities for open spaces at the conference. No prior registration needed, just visit: [https://meet.jit.si/ournetworks](https://meet.jit.si/ournetworks).

<!-- Call section -->
<section class="sections events-grid flex flex-wrap">
  {% comment %} initialize 'now_day' for displaying posts {% endcomment %}

  {% capture now_year %}{{'now' | date: '%Y'}}{% endcapture %}
  {% capture now_day %}{{'now' | date: '%j'}}{% endcapture %}
  {% assign now_day = now_day | minus: 0 %}
  {% for call in site.data.calls %}      
    {% capture call_year %}{{call.date | date: '%Y'}}{% endcapture %}
    {% capture call_day %}{{call.date | date: '%j'}}{% endcapture %}
    {% assign call_day = call_day | plus: 0 %}
    {% if call_year > now_year or call_day >= now_day and call_year >= now_year %}
    <div class="w-50 event mb-2">
      {% include openhour.html event="openhour" %}
    </div>
    {% endif %}
  {% endfor %}
</section>

If you have any additional questions let us know at [{{ site.email }}](mailto:{{ site.email }})!
