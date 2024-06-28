---
layout: page
order: 8
title: "Recorded talks"
titleDisplay: "Recorded talks"
redirect_from:
  - "/conference/recorded-talks"
---

## Our Networks 2022 archive
{:.font-display}

There are only local archives for 2022.

<pre role="img" aria-label="ASCII divider" class="font-display-mono aliased text-10 inline-flex max-w-prose overflow-hidden w-100">
--..,___.--,--'`,---..-.--+--.,,-,,..._.--..-._.-a:f--..-.--
</pre>

## Our Networks 2020 archive
{:.font-display}

Full archives of 2020 videos are available:

- IPFS: [ipfs://QmSgVLXPu4ZASkbcebkhXsgx7NjjJx1Xa1ymqkNWaTU4Jt]({{ site.ipfs_gateway }}/ipfs/QmSgVLXPu4ZASkbcebkhXsgx7NjjJx1Xa1ymqkNWaTU4Jt/){: .break-all}
- Mirror: [Toronto Mesh Alexandria Mirror](https://alexandria.tomesh.net/ournetworks/2020){:data-proofer-ignore=""}
- Internet Archive: [Our Networks 2020 Talks](https://archive.org/details/ournetworks2020) (torrent available)
- YouTube playlist: [Our Networks 2020 — Growing Our Networks in Uncertain Times↔Places](https://www.youtube.com/playlist?list=PLx7_J32Ys60eSNBStqqEeVN1cbA-dKf9q)

Thank you to our A/V volunteers: [Henry Wilkinson](https://github.com/Shrinks99), and [Elon Li](https://github.com/ASoTNetworks).


{:.font-display}

### Our Networks 2020 videos

{:.mb-1.mt-2}

{% assign sorted2020Sessions = site.data.sessions[2020] | sort: "title" %}

<div class="flex flex-wrap flex-justify-space-between">
{%- for session in sorted2020Sessions -%}
  {%- if session.ipfs720 or session.ipfs1080 or session.youtube -%}
    {% include session-video.html year=2020 %}
  {%- endif -%}
{%- endfor -%}
</div>

<pre role="img" aria-label="ASCII divider" class="font-display-mono aliased text-10 inline-flex max-w-prose overflow-hidden w-100">
`\\//`,.\|/|//.|/\\|/\\|,\|/ //\|/\|.\\\| // \|\\ |/,\|/\|\\
</pre>

{:.font-display}

## Our Networks 2019 archive

{:.mb-025}
Full archives of 2019 videos are available:

- IPFS: [ipfs://QmQQfD1ztg1aG82VmUmutusbxn7tL4c2o1qHv1ivyWbNj6]({{ site.ipfs_gateway }}/ipfs/QmaWc83FvLkyvw8p7Q45prW7HTXAaLgk8jxmkdciokaE1K/){: .break-all}
- Mirror: [Toronto Mesh Alexandria Mirror](https://alexandria.tomesh.net/ournetworks/2019){:data-proofer-ignore=""}
- Internet Archive: [Our Networks 2019 Talks](https://archive.org/details/ournetworks2019) (torrent available)
- YouTube playlist: [Our Networks 2019 RE: Infrastructures](https://www.youtube.com/playlist?list=PLx7_J32Ys60cAmBbdDtx1-THpDU4XbtdV)

{:.font-display}

#### Live stream

- [September 20, 2019](https://2019.ournetworks.ca/livestream/?m3u8=live-2019-09-20.m3u8)
- [September 21, 2019](https://2019.ournetworks.ca/livestream/?m3u8=live-2019-09-21.m3u8)
- [September 22, 2019](https://2019.ournetworks.ca/livestream/?m3u8=live-2019-09-22.m3u8)

Thank you to our A/V volunteers: [Yurko](https://github.com/YurkoWasHere), [Henry Wilkinson](https://github.com/Shrinks99), [Elon Li](https://github.com/ASoTNetworks), and [Benedict Lau](https://github.com/benhylau).

{:.font-display}

### Our Networks 2019 videos

{:.mb-1.mt-2}

{% assign sorted2018Sessions = site.data.sessions[2019] | sort: "title" %}

<div class="flex flex-wrap flex-justify-space-between">
{%- for session in sorted2018Sessions -%}
  {%- if session.ipfs720 or session.ipfs1080 or session.youtube -%}
    {% include session-video.html year=2019 %}
  {%- endif -%}
{%- endfor -%}
</div>

<pre role="img" aria-label="ASCII divider" class="font-display-mono aliased text-10 inline-flex max-w-prose overflow-hidden w-100">
.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*
</pre>

{:.font-display}

## Our Networks 2018 Archive

Full archives of 2018 videos are available:

- IPFS: [ipfs://QmQQfD1ztg1aG82VmUmutusbxn7tL4c2o1qHv1ivyWbNj6]({{ site.ipfs_gateway }}/ipfs/QmQQfD1ztg1aG82VmUmutusbxn7tL4c2o1qHv1ivyWbNj6/){: .break-all}
- Mirror: [Toronto Mesh Alexandria Mirror](https://alexandria.tomesh.net/ournetworks/2018){:data-proofer-ignore=""}
- Internet Archive: [Our Networks 2018 Talks](https://archive.org/details/ournetworks2018) (torrent available)
- YouTube playlist: [Our Networks 2018 Beyond DIY: Do It With Others](https://www.youtube.com/playlist?list=PLx7_J32Ys60ey2bgSn2soAoBy0v9bBUbT)

A/V volunteers: [Yurko](https://github.com/YurkoWasHere), [Henry Wilkinson](https://github.com/Shrinks99), [Elon Li](https://github.com/ASoTNetworks), and [Benedict Lau](https://github.com/benhylau).

{:.font-display}

### Our Networks 2018 Videos

{:.mb-1.mt-2}

{% assign sorted2018Sessions = site.data.sessions[2018] | sort: "title" %}

<div class="flex flex-wrap flex-justify-space-between">
{%- for session in sorted2018Sessions -%}
  {%- if session.ipfs720 or session.ipfs1080 or session.youtube -%}
    {% include session-video.html program-path="conference/program" year=2018 %}
  {%- endif -%}
{%- endfor -%}
</div>
