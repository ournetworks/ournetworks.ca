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
        <td class="font-mono text time-cell">10:00 ↓<br />10:15</td>
        <td>Welcome</td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">10:15 ↓<br />11:00</td>
        <td>
            <strong>
                <span class="font-mono">PAST</span> /
            </strong>
            {% include session.html year=2024 session-id=24001 %}
        </td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">11:00 ↓ <br />12:00</td>
        <td>
            <strong><span class="font-mono">PAST</span> / </strong>
            <table class="w-100">
                <tr class="border-0">
                    <td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Reach</em><br />Workshop -<br />
                    {% include session.html year=2024 session-id=24002 %}</td>
                    <td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Sound</em><br />
                            LAN Interaction
                    </td>
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
        <td>
            <strong><span class="font-mono">PRESENT</span></strong> /
            {% include session.html year=2024 session-id=24003 %}
        </td>
    </tr>
    <tr>
        <td class="font-mono text time-cell">14:10 ↓<br />15:00</td>
        <td>
            <strong><span class="font-mono">PRESENT</span> / </strong>
            <table class="w-100">
                <tr class="border-0">
                    <td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Reach & ⌂ Sound</em><br />
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
                    <td>
                        <em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Reach</em><br />Roundtable -<br />
                        {% include session.html year=2024 session-id=24004 %}
                    </td>
                    <td><em class="font-display-mono uppercase text-sm whitespace-nowrap not-italic tracking-wide">⌂ Sound</em><br />Open</td>
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

<pre role="img" aria-label="ASCII divider" class="font-display-mono aliased text-10 inline-flex max-w-prose overflow-hidden w-100">
--..,___.--,--'`,---..-.--+--.,,-,,..._.--..-._.-a:f--..-.--
</pre>

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

<pre role="img" aria-label="ASCII divider" class="font-display-mono aliased text-10 inline-flex max-w-prose overflow-hidden w-100">
.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*
</pre>

{:.font-display}

## Presenters

{% assign sortedPresenters = site.data.presenters[2024] | sort: "name" %}

{%- for presenter in sortedPresenters -%}
  {% include presenter-details.html %}
{%- endfor -%}
