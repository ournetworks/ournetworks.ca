---
layout: page
order: 4
title: "Program"
titleDisplay: "Program"
---

## Saturday, July 27
{:.font-display.mb-1}

<table class="schedule-table w-100 mb-1">
    <tr class="sticky top-0 bg-beige">
        <th class="text-left">Time (PDT)</th>
        <th class="text-left" colspan="3">Sessions</th>
    </tr>
    <tr>
        <td class="font-mono text time-cell">9:00</td>
        <td colspan="3">Doors Open</td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">9:30 ↓<br />9:40</td>
        <td colspan="3">Welcome</td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">9:40 ↓<br />10:20</td>
        <td colspan="3"><strong><span class="font-mono">PAST</span> / <a href="#lori">Lori Emerson</a></strong></td>
    </tr>
    <tr>
        <td class="font-mono text time-cell" rowspan="2">10:30 ↓ <br />11:30</td>
        <td colspan="3"><strong>LAN Interaction</strong></td>
    </tr>
    <tr>
        <td><em>Sound</em><br />Open</td>
        <td><em>Reach</em><br />Open</td>
        <td><em>Spillover</em><br />Open</td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">11:30 ↓<br />13:00 </td>
        <td colspan="3"><strong><span class="font-mono">LUNCH</span></strong></td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">13:00 ↓<br />13:30</td>
        <td colspan="3"><strong><span class="font-mono">PRESENT</span> / <a href="#brooklyn">Brooklyn Zelenka</a> </strong></td>
    </tr>
    <tr>
        <td class="font-mono text time-cell" rowspan="2">13:40 ↓<br />15:00</td>
        <td colspan="3"><strong><span class="font-mono">PRESENT</span> / <a href="#joni">Joni Schinkel</a> </strong></td>
    </tr>
    <tr>
        <td><em>Sound</em><br />Open</td>
        <td><em>Reach</em><br />Open</td>
        <td><em>Spillover</em><br />Open</td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">15:00 ↓<br />15:30 </td>
        <td colspan="3"><strong>BREAK</strong></td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">15:30 ↓<br />16:00</td>
        <td colspan="3"><strong><span class="font-mono">FUTURE</span> / <a href="#michelle">Michelle Kaczmarek</a></strong></td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">16:00 ↓<br />17:20</td>
        <td colspan="3">Workshops/Discussions</td>
    </tr>
</table>

---
{:.mt-2}

{:.font-display}

## Sessions

{% assign sortedSessions = site.data.sessions[2024] | sort: "title" %}

{% for session in sortedSessions %}
  {%- unless session.sessionType == "orga" or session.sessionType == "keynote" or session.sessionType == "exhibit" or session.sessionType == "para" or session.sessionType == "lightning-talk" -%}
    {% include session-details.html year=2024 %}
  {%- endunless -%}
{% endfor %}

{:.font-display}

## Presenters

{% assign sortedPresenters = site.data.presenters[2024] | sort: "name" %}

{%- for presenter in sortedPresenters -%}
  {% include presenter-details.html %}
{%- endfor -%}
