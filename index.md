---
layout: splash
---

<div style="margin-bottom: 2.25em;">
  <span style="font-size: 4.85rem; line-height: 1.2; font-weight: 600;">July 13–18, 2018</span><br />
  <span style="font-size: 3.5rem; line-height: 1.2;">{{ site.title }}</span><br />
  <h1>Beyond DIY: Do It With Others</h1>
  <h2>Toronto, Ontario</h2>
</div>

<!-- Event areas section -->
<section class="sections row featurette-events-row">
  <div class="four columns">
    <h3>Kickoff</h3>
    <span>Friday • 13</span>
    <p>We open with morning field trips and an afternoon-into-evening social event</p>
  </div>
  <div class="four columns">
    <h3>Conference</h3>
    <span>Saturday, Sunday • 14, 15</span>
    <p>The weekend is our main event, 2 days packed full of talks, demos, and workshops</p>

  </div>
  <div class="four columns">
    <h3>Sprints</h3>
    <span>Monday–Wednesday • 16–18</span>
    <p>The final 3 days are in-person, collaborative project sprints</p>
  </div>
</section>

## Conference Call for Participation

<mark>**Update:** Deadline extended to Monday, May 7, 2018!</mark>

Our theme this year focuses on how we **Do It With Others (DIWO)** as opposed to just ourselves, building on the "**distributed campaign for emancipatory, networked art practices**," instigated by UK-based [Furtherfield](http://archive.furtherfield.org/projects/diwo-do-it-others-resource) (2006) as a response to the Do It Yourself (DIY) movement. We have seen a growing number of peer-to-peer, inclusive, and privacy-respecting projects mobilizing in favour of resilient, accessible, equitable communications over the internet in 2017. And yet many open questions remain. In the face of threats to the open internet, which tools and tactics will help us recognize the opportunities and challenges of this moment? What kinds of creative and critical engagement with technology practices can enable meaningful change when we do it with others?

**We are inviting proposals for talks, workshops, discussions, demonstrations and interventions to explore these questions.**

Deadline for proposals is Monday ~~April 30~~ **May 7, 2018**, check out our full [**call for participation**](./2018) for submission instructions!

### Not sure? Ask us!

We will host two open hour calls for people to ask questions about potential topics and the conference itself. No prior registration needed, just visit: [https://appear.in/ournetworks](https://appear.in/ournetworks)

<!-- Call section -->
<section class="sections row featurette-events-row">
  {% for call in site.data.calls %}
  <div class="six columns">
    {% include event.html event=call %}
  </div>
  {% endfor %}
</section>

### Updates

Want to receive a update when registration launches?

<form action="https://formspree.io/orga@ournetworks.ca" method="POST">
  <div class="row form-group">
    <div class="four columns">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name">
    </div>
    <div class="four columns">
      <label for="email">Email</label>
      <input type="email" id="email" name="_replyto" placeholder="Email address" aria-required="true" required>
    </div>
  </div>
  <input type="submit" name="submit" value="Sign up for Updates" class="button button-primary">
  <input type="hidden" name="_format" value="plain">
  <input type="hidden" name="_subject" value="New SoON Sign Up">
  <input type="hidden" name="_next" value="//ournetworks.ca/?signup=confirmed">
</form>
