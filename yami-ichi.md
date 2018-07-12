---
layout: page
order: 2
section: "2018"
title: "Kickoff Party: Bit Bazaar × Internet Yami-ichi"
titleDisplay: "Yami-Ichi"
locationName: "Toronto Media Arts Centre"
location: "32 Lisgar Street"
locationLink: https://osm.org/go/ZX6BIz1xQ?m=&way=66233699
startDate: 2018-07-13
startTime: "15:00"
endTime: "12:00"
redirect_from:
  - "/2018/kickoff-yami-ichi/"
---

<style type="text/css">* {cursor: url(http://cur.cursors-4u.net/anime/ani-12/ani1136.ani), url(http://cur.cursors-4u.net/anime/ani-12/ani1136.gif), auto !important;}</style>

<style type="text/css">
  #globe {
    position: fixed;
    z-index: 100
  }

  .email {
    position: absolute;
    z-index: 90
  }
</style>

<script type="text/javascript">
  let topPos = 100;
  let lastTopPos = 95;
  let leftPos = 100;
  let lastLeftPos = 95;

  const animateTop = () => {
    if (topPos > window.innerHeight || topPos < 0) {
      const temp = lastTopPos;
      lastTopPos = topPos;
      topPos = temp;
    } else if (lastTopPos > topPos) {
      lastTopPos = topPos;
      topPos -= 5;
    } else {
      lastTopPos = topPos;
      topPos += 5;
    }
  }

  const animateLeft = () => {
    if (leftPos > window.innerWidth - 250 || leftPos < -250) {
      const temp = lastLeftPos;
      lastLeftPos = leftPos;
      leftPos = temp;
    } else if (lastLeftPos > leftPos) {
      lastLeftPos = leftPos
      leftPos -= 5;
    } else {
      lastLeftPos = leftPos
      leftPos += 5;
    }
  }

  const bounce = () => {
    setTimeout(() => {
      const globe = document.getElementById("globe");
      globe.style.top = `${topPos}px`;
      globe.style.left = `${leftPos}px`;
      animateTop();
      animateLeft();
      bounce();
    }, 10);
  }

  const placeEmails = () => {
    const amount = Math.floor(Math.random() * 10); 
    for (let i = 0; i < amount; i++) {
      const email = document.createElement("img");
      email.src = "/images/yami-ichi/email.gif";
      email.className = "email";
      email.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      email.style.right = `${Math.floor(Math.random() * window.innerWidth)}px`;
      document.body.appendChild(email);
    }
  }

  placeEmails();
  bounce();
</script>

<img src="/images/yami-ichi/globe.gif" alt="globe" id="globe" />

<img src="/images/yami-ichi/Starline.gif" alt="rainbow line with star" />

<div class="event-time-location">
  <div class="event-meta">
    {% include icons/ticket.svg %}
    <p class="event-cost event-meta-item">Free entrance!</p>
  </div>
  <div class="event-meta">
    {% include icons/calendar-o.svg %}
    <p class="event-time event-meta-item"><strong>{{page.startTime | date:"%-I:%M %P "}}</strong> – <strong>{{page.endTime | date:"%-I:%M %P"}}</strong></p>
  </div>
  <div class="event-meta">
    {% include icons/map-marker.svg %}
    <p class="event-location event-meta-item">
    {% if page.locationName %}
      {{ page.locationName }},
    {% endif %}    
    {% if page.locationLink %}
      <a href="{{page.locationLink}}" target="_blank">{{ page.location }}</a> <!--_-->
    {% else %}
      {{ page.location }}
    {% endif %}
    </p>
  </div>
</div>

<img src="/images/yami-ichi/Bloodbar.gif" alt="dripping blood gif" />

In town early?  We're joined forces with our friends from Bit Bazaar, Toronto's 🎮 video game flea market, 📚 pop up zine shop, and  🌮 food celebration, and are throwing Toronto's first Internet Yami-ichi! 

What's a yami-ichi you ask?

<blockquote>
  S*%t happens. Didn't used to. Like when some small off-handed private comment
  turns into an SNS flame war. Or worrying about not getting enough “Likes”. The
  Youtube videos you can't watch anymore because somebody complained. Or the apps
  you can't play because they were rejected by Apple. Once upon a time, the
  Internet was supposed to be a place for "liberty". Nowadays it's so uptight.

  So let's turn off, log-out, and drop in, on the real world. The Internet
  Yami-Ichi is a flea market for “browsing” face-to-face.

  Take your own Internet liberties* here, with us.

  * But no dangerous or illegal goods, please! This black market wants to remain
  free and useful!
</blockquote>

<p style="text-align: right;"> — <a href="http://yami-ichi.biz/">IDPW, a secret society on the internet that goes back more than 100 years</a></p>

On 🎃 Friday the 13th 🎃 from 3:00 to 9:00 we'll have vendors tabling all kinds of weird, wonderful, digital artefacts in one physical location: one-of-a-kind, limited-edition and handmade/DIY items—pins, zines, boxed games, card decks, art prints, posters, comics, t-shirts, game soundtracks on vinyl, mixtapes, papercraft and toys 

... followed 9:00-12:00 by our kickoff party at the Toronto Media Art Centre with DJ <a hred="https://soundcloud.com/the-loving-echo">Julia Dickens</a>

<img src="/images/yami-ichi/Bloodbar.gif" alt="dripping blood gif" />

<a href="https://bitbazaar.world/" class="button button-primary" target="_blank">Check out the full list of vendors! </a>

<img src="/images/yami-ichi/Starline.gif" alt="rainbow line with star" />