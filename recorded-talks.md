---
layout: page
order: 4
fullWidth: true
title: "Recorded Talks"
titleDisplay: "Recorded Talks"
redirect_from:
  - "/2018/conference/recorded-talks"
  - "/conference/recorded-talks"
---

## Our Networks 2019 archive

Full archives of 2019 videos are available:

- IPFS: [ipfs://QmQQfD1ztg1aG82VmUmutusbxn7tL4c2o1qHv1ivyWbNj6]({{ site.ipfs_gateway }}/ipfs/QmaWc83FvLkyvw8p7Q45prW7HTXAaLgk8jxmkdciokaE1K/)
- Mirror: [Toronto Mesh Alexandria Mirror](https://alexandria.tomesh.net/ournetworks/2019)
- Internet Archive: [Our Networks 2019 Talks](https://archive.org/details/ournetworks2019) (torrent available)
- YouTube playlist: [Our Networks 2019 RE: Infrastructures](https://www.youtube.com/playlist?list=PLx7_J32Ys60cAmBbdDtx1-THpDU4XbtdV)

#### Live stream
- [September 20, 2019](https://2019.ournetworks.ca/livestream/?m3u8=live-2019-09-20.m3u8)
- [September 21, 2019](https://2019.ournetworks.ca/livestream/?m3u8=live-2019-09-21.m3u8)
- [September 22, 2019](https://2019.ournetworks.ca/livestream/?m3u8=live-2019-09-22.m3u8)

We want to thank our A/V volunteers again, without whom the sharing of these videos would have been impossible: [Yurko](https://github.com/YurkoWasHere), [Henry Wilkinson](https://github.com/Shrinks99), [Elon Li](https://github.com/ASoTNetworks), and [Benedict Lau](https://github.com/benhylau).
{:.content-width}

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

---
{:.extended}

## Our Networks 2018 Archive

Full archives of 2018 videos are available:

- IPFS: [ipfs://QmQQfD1ztg1aG82VmUmutusbxn7tL4c2o1qHv1ivyWbNj6]({{ site.ipfs_gateway }}/ipfs/QmQQfD1ztg1aG82VmUmutusbxn7tL4c2o1qHv1ivyWbNj6/)
- Mirror: [Toronto Mesh Alexandria Mirror](https://alexandria.tomesh.net/ournetworks/2018)
- Internet Archive: [Our Networks 2018 Talks](https://archive.org/details/ournetworks2018) (torrent available)
- YouTube playlist: [Our Networks 2018 Beyond DIY: Do It With Others](https://www.youtube.com/playlist?list=PLx7_J32Ys60ey2bgSn2soAoBy0v9bBUbT)


We want to thank our A/V volunteers again, without whom the sharing of these videos would have been impossible: [Yurko](https://github.com/YurkoWasHere), [Henry Wilkinson](https://github.com/Shrinks99), [Elon Li](https://github.com/ASoTNetworks), and [Benedict Lau](https://github.com/benhylau).
{:.content-width}

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
