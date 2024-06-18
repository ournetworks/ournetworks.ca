---
layout: page
order: 4
title: "Program"
titleDisplay: "Program"
---


## Saturday, July 27
{:.font-display}

<table class="schedule-table">
<thead>
<tr>
  <th class="schedule-time"></th>
  <th class="schedule-time"></th>
  <th class="schedule-main sticky-top relative font-display">Main Room</th>
</tr>
</thead>
<tbody>
<tr>
  <td>12</td>
  <td>:00</td>
</tr>
<tr>
  <td></td>
  <td>:15</td>
</tr>
<tr>
  <td></td>
  <td>:30</td>
</tr>
<tr>
  <td></td>
  <td>:45</td>
</tr>
<tr>
  <td>13</td>
  <td>:00</td>
  <td colspan="3" rowspan="4" class="session-block session-{% include session-type.html session-id=19990 %}">{% include session.html year=2019 session-id=19990 %}</td>
</tr>
<tr>
  <td></td>
  <td>:15</td>
</tr>
<tr>
  <td></td>
  <td>:30</td>
</tr>
<tr>
  <td></td>
  <td>:45</td>
</tr>
<tr>
  <td>14</td>
  <td>:00</td>
  <td colspan="1" rowspan="4" class="session-block session-{% include session-type.html session-id=19036 %}">{% include session.html year=2019 session-id=19036 %}</td>
  <td colspan="1" rowspan="16" class="session-block session-{% include session-type.html session-id=19018 %} overlap">{% include session.html year=2019 session-id=19018 %}[Note: Workshop materials cost $60CAD / $45USD]</td>
</tr>
<tr>
  <td></td>
  <td>:15</td>
</tr>
<tr>
  <td></td>
  <td>:30</td>
</tr>
<tr>
  <td></td>
  <td>:45</td>
</tr>
<tr>
  <td>15</td>
  <td>:00</td>
  <td colspan="1" rowspan="4" class="session-block session-{% include session-type.html session-id=19038 %}">{% include session.html year=2019 session-id=19038 %}</td>
</tr>
<tr>
  <td></td>
  <td>:15</td>
</tr>
<tr>
  <td></td>
  <td>:30</td>
</tr>
<tr>
  <td></td>
  <td>:45</td>
</tr>
<tr>
  <td>16</td>
  <td>:00</td>
  <td colspan="3" rowspan="2" class="session-block session-{% include session-type.html session-id=199901 %}">{% include session.html year=2019 session-id=199901 %}</td>
</tr>
<tr>
  <td></td>
  <td>:15</td>
</tr>
<tr>
  <td></td>
  <td>:30</td>
  <td colspan="1" rowspan="2" class="session-block session-{% include session-type.html session-id=19017 %}">{% include session.html year=2019 session-id=19017 %}</td>
</tr>
<tr>
  <td></td>
  <td>:45</td>
</tr>
<tr>
  <td>17</td>
  <td>:00</td>
  <td colspan="1" rowspan="2" class="session-block session-{% include session-type.html session-id=19013 %}">{% include session.html year=2019 session-id=19013 %}</td>
</tr>
<tr>
  <td></td>
  <td>:15</td>
</tr>
<tr>
  <td></td>
  <td>:30</td>
  <td colspan="1" rowspan="2" class="session-block session-{% include session-type.html session-id=19034 %}">{% include session.html year=2019 session-id=19034 %}</td>
</tr>
<tr>
  <td></td>
  <td>:45</td>
</tr>
<tr>
  <td>18</td>
  <td>:00</td>
</tr>
<tr>
  <td></td>
  <td>:15</td>
</tr>
<tr>
  <td></td>
  <td>:30</td>
  <td colspan="3" rowspan="4" class="session-block session-{% include session-type.html session-id=19994 %}">{% include session.html year=2019 session-id=19994 %}</td>
</tr>
<tr>
  <td></td>
  <td>:45</td>
</tr>
<tr>
  <td>19</td>
  <td>:00</td>
</tr>
<tr>
  <td></td>
  <td>:15</td>
</tr>
<tr>
  <td></td>
  <td>:30</td>
  <td colspan="3" rowspan="10" class="session-block session-{% include session-type.html session-id=19993 %}"></td>
</tr>
<tr>
  <td></td>
  <td>:45</td>
</tr>
<tr>
  <td>20</td>
  <td>:00</td>
</tr>
<tr>
  <td></td>
  <td>:15</td>
</tr>
<tr>
  <td></td>
  <td>:30</td>
</tr>
<tr>
  <td></td>
  <td>:45</td>
</tr>
<tr>
  <td>21</td>
  <td>:00</td>
</tr>
<tr>
  <td></td>
  <td>:15</td>
</tr>
<tr>
  <td></td>
  <td>:30</td>
</tr>
<tr>
  <td></td>
  <td>:45</td>
</tr>
</tbody>
</table>

---

{:.font-display}

## Sessions

{% assign sortedSessions = site.data.sessions[2019] | sort: "title" %}

{% for session in sortedSessions %}
  {%- unless session.sessionType == "orga" or session.sessionType == "keynote" or session.sessionType == "exhibit" or session.sessionType == "para" or session.sessionType == "lightning-talk" -%}
    {% include session-details.html year=2019 %}
  {%- endunless -%}
{% endfor %}

{:.font-display}

## Presenters

{% assign sortedPresenters = site.data.presenters[2024] | sort: "name" %}

{%- for presenter in sortedPresenters -%}
  {% include presenter-details.html %}
{%- endfor -%}
