---
layout: page
order: 0
title: "Video Player"
titleDisplay: "Video Player"
---

<style type="text/css">
  #globe {
    position: fixed;
    z-index: 100
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

  bounce();
</script>

<img src="/images/yami-ichi/globe.gif" alt="globe" id="globe" />

{% include vod-stream-embed.html %}
