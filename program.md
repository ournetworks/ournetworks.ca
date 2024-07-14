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
        <th class="text-left">Sessions</th>
    </tr>
    <tr>
        <td class="font-mono text time-cell">9:30</td>
        <td>Doors Open</td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">10:00 ↓<br />10:20</td>
        <td>Welcome</td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">10:20 ↓<br />11:00</td>
        <td><strong><span class="font-mono">PAST</span> / <a href="#lori">Lori Emerson</a></strong>
        </td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">11:00 ↓ <br />12:00</td>
        <td>
            <strong><span class="font-mono">PAST</span> / </strong>
            <table class="w-100">
                <tr class="border-0">
                    <td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Sound</em><br />
                            LAN Interaction
                    </td>
                    <td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Reach</em><br />Workshop -<br /> Tiny Dreams: Ecomedia and Small File Web Art <br /> <a href="#joni">Joni Schinkel</a></td>
                    <!--<td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Spillover</em><br />Open</td>-->
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">12:00 ↓<br />13:30 </td>
        <td><strong><span class="font-mono">LUNCH</span></strong></td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">13:30 ↓<br />14:10</td>
        <td><strong><span class="font-mono">PRESENT</span> / <a href="#brooklyn">Brooklyn Zelenka</a> </strong></td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">14:10 ↓<br />15:00</td>
        <td>
            <strong><span class="font-mono">PRESENT</span> / </strong>
            <table class="w-100">
                <tr class="border-0">
                    <td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Sound & ⌂ Reach</em><br />
                        <strong>Lightning Talks</strong>
                    </td>
                    <td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Spillover</em><br />Open</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">15:00 ↓<br />15:30 </td>
        <td><strong>BREAK</strong></td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">15:30 ↓<br />16:10</td>
        <td><strong><span class="font-mono">FUTURE</span> / <a href="#esther">Esther Han Beol Jang</a></strong></td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">16:10 ↓<br />17:40</td>
        <td>
            <strong><span class="font-mono">FUTURE</span> / </strong>
            <table class="w-100">
                <tr class="border-0">
                    <td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Sound</em><br />Roundtable -<br /> Repair Futures <a href="#michelle">Michelle Kaczmarek</a></td>
                    <td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Reach</em><br />Open</td>
                    <!--<td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Spillover</em><br />Open</td>-->
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">17:45 ↓<br />18:00</td>
        <td>Closing</td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">18:00 ↓<br />19:00</td>
        <td><strong><span class="font-mono"></span></strong></td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">19:00 ↓<br />??:??</td>
        <td><strong><span class="font-mono">AFTER PARTY</span></strong></td>
    </tr>
</table>

---
{:.mt-2}

{:.font-display}

{% assign sortedSessions = site.data.sessions[2024] | sort: "title" %}

{% assign title_present = false %}

{% for session in sortedSessions %}
  {% if session.title and session.title != "" %}
    {% assign title_present = true %}
    {% break %}
  {% endif %}
{% endfor %}

{% if title_present %}
## Sessions
{% endif %}

{% for session in sortedSessions %}
  {% include session-details.html year=2024 %}
{% endfor %}

{:.font-display}

## Presenters

{% assign sortedPresenters = site.data.presenters[2024] | sort: "name" %}

{%- for presenter in sortedPresenters -%}
  {% include presenter-details.html %}
{%- endfor -%}
