---
layout: page
order: 2
title: "Meetups"
titleDisplay: "Meetups"
---

Starting in 2019 we're organizing bimonthly meetups that bring together people from a variety of backgrounds who work with, want to learn about, or meet folks interested in the peer-to-peer (p2p) and decentralized web (dweb) as well as alternative networks. Some examples of projects include Beaker Browser, Dat, Secure Scuttle Butt, IPFS, mesh networking, and more...

We want to grow a community of folks interested in these topics here in Toronto who also want to have conversations that address creative and critical possibilities for building more sustainable, just, and equitable networks. Technologists welcome, but you don't have to be one to attend.

***

<!-- Call section -->
<section class="sections">
  <div class="row events-grid">
    {% for call in site.data.meetups %}
    <div class="six columns event">
      {% include event.html event=call %}
    </div>
    {% endfor %}
  </div>
</section>
