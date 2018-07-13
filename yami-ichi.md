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
endTime: "24:00"
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
    if (leftPos > window.innerWidth - 50 || leftPos < -50) {
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

/****************************
*  Tinkerbell Magic Sparkle *
* (c) 2005 mf2fm web-design *
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var colour="#000000";
var sparkles=50;
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}};

function sparkle() {
  var c;
  if (x!=ox || y!=oy) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      starx[i]+=(i%5-2)/5;
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tinyx[i]+=(i%5-2)/5;
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  set_scroll();
  y=(e)?e.pageY:event.y+sdown;
  x=(e)?e.pageX:event.x+sleft;
}

function set_scroll() {
  if (typeof(self.pageYOffset)=="number") {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
  sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  if (typeof(self.innerWidth)=="number") {
    swide=self.innerWidth;
    shigh=self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
    swide=document.documentElement.clientWidth;
    shigh=document.documentElement.clientHeight;
  }
  else if (document.body.clientWidth) {
    swide=document.body.clientWidth;
    shigh=document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  div.style.backgroundColor=colour;
  return (div);
}
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

... followed 9:00-12:00 by our kickoff party at the Toronto Media Arts Centre with DJ <a href="https://soundcloud.com/the-loving-echo">Julia Dickens</a>

<img src="/images/yami-ichi/Bloodbar.gif" alt="dripping blood gif" />

<a href="https://bitbazaar.world/" class="button button-primary" target="_blank">Check out the full list of vendors! </a>

<img src="/images/yami-ichi/Starline.gif" alt="rainbow line with star" />

### Network Field Trip

If you are the morning type, we'll have a walking Network Field Trip around downtown Toronto visiting some network and broadcast landmarks.

Free!  
10:00 am - 11:00 am  
In front of the Four Seasons Centre of Performing Arts  
[University Ave and Queen St intersection](https://osm.org/go/ZX6BsFiXX?m=) (Osgoode TTC Stop)  


<img src="/images/yami-ichi/Starline.gif" alt="rainbow line with star" />

<img src="https://user-images.githubusercontent.com/227587/42612595-2caa7188-856a-11e8-8bee-86e2d32c85a2.gif" alt="zooming doge meme">