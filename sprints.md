---
layout: page
order: 4
section: "2018"
title: "Sprints"
titleDisplay: "Sprints"
startDate: 2018-07-16
endDate: 2018-07-18
startTime: "10:30"
endTime: "21:30"
locationName: "Semaphore Demo Room"
location: "Room 417, Claude T. Bissell building, 140 St. George Street"
locationLink: http://osm.org/go/ZX6Bw~WNh--?m=
redirect_from:
  - "/2018/sprints/"
---

<div class="event-time-location">
  <div class="event-meta">
    {% include icons/ticket.svg %}
    <p class="event-cost event-meta-item">Free entrance, <a href="#propose-a-sprint">propose a sprint below</a>
    </p>
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

***

Modelled after [PyCon](https://us.pycon.org/2018/community/sprints/), we are holding project sprints after the conference. Sprints provide an opportunity for people interested in a project to come together in a truly Do It With Others (DIWO) environment. The goal is to make friends and build lasting relationships by sharing knowledge, building features, hacking on prototypes, and polishing resources.

We've secured space from {{ page.startTime | date:"%-I:%M %P "}} – {{ page.endTime | date:"%-I:%M %P "}} Monday thru Wednesday with hi-speed internet, power bars, post-its, and markers. To attend, all you need to do is [propose a sprint topic](#propose-a-sprint) or [join a sprint](#join-a-sprint) below.

***

## Join a Sprint

Add your name to the list in advance by <a href="https://github.com/ournetworks/ournetworks.ca/edit/master/sprints.md">editing this page on GitHub</a> (we can help with formatting!) and make sure to watch the sprint project lead provide an overview during the <a href="/conference/program/#sunday--july-15">sprint pitches</a> on Sunday.



| Project Name            | Project Lead | Description and Goals | Attending |
|:------------------------|:-------------|:----------------------|:----------|
| From Learning To Building Networks | @benhylau, ben.hy.lau@gmail.com | Share network literacy efforts by Toronto Mesh, then together explore workshop-based approaches to building and maintaining community network infrastructure. From 10am to 12pm on Monday, July 16. | |
|                         |              |                       |           |

<br />

## Propose a Sprint

Anyone can propose a sprint on new or existing projects. If a topic or idea emerges during Our Networks, we encourage you to propose a sprint to explore further!

Pitching a sprint involves <a href="https://github.com/ournetworks/ournetworks.ca/edit/master/sprints.md">editing this page on GitHub</a> to add a short description about the idea, along with the following information:

- Project name with a website or link if one exists
- Sprint lead with contact email
- Two or three sentence project description and sprint goals

Template (the pipes `|` help format submissions as a table):

```
| [Name] | [Contact] | [Description and Goals] | |
```

For example:

```
| Toronto Mesh | @benhylau, benhylau@example.com
| Toronto Mesh is a local mesh network initiative in Toronto. The
sprint will focus on improving our setup documentation for new nodes
including all services on existing software. From 10am to 1pm on July
16 there will be introductory presentations and anyone can pitch a
presentation throughout the sprint. | |
```


After that, all you have to do is attend the [sprint pitches](/conference/program/#sunday--july-15) on Sunday to give us a 5 minute overview of the project.
