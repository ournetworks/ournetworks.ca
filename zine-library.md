---
layout: page
order: 4
title: "Zine Library"
titleDisplay: "Zine Library"
---

We're hosting a free and open zine library throughout the conference that will feature both paper and digital zines. To help grow our library, we're calling for zines that fall under this year's theme. 

We're seeking to curate resources will help us in the collective care and maintenance of alternative networking practices. 

> How can our networking be reparative? In what ways can we remediate existing communication infrastructures? Are there uncooptable computing reconfigurations? How can we reconstruct technology after refusal? What are regenerative approaches to resist status quo tech?
{:.border-left.pl-1.ml-1}

Got a digital/paper zine or any printed ephemera that fits along those lines? Submit it below!

Note: 
- we can accept digital or paper copies of zines mailed directly to us 
- the library will be a lending library with patrons able to "check out" [make copies] of zines 

## Send us your zines!

<form action="https://formspree.io/orga@ournetworks.ca" class="form-container" method="POST">
  <div class="mb-2">
    <div class="w-33">
      <label class="fw-bold" for="zine-name">Zine Name:</label>
      <input type="text" id="zine-name" class="input mb-1 w-100" name="zine-name" required>
    </div>
    <div class="w-33">
      <label class="fw-bold" for="zine-link">Zine format:</label><br />
      <select name="zine-format" required>
        <option>dat</option>
        <option>digital</option>
        <option>paper</option>
        <option>other</option>
      </select>
    </div>
    <div class="w-33">
      <label class="fw-bold" for="zine-link">Link to zine:</label>
      <input type="text" id="zine-link" class="input mb-1 w-100" name="zine-link" required>
    </div>
    <div class="w-33">
      <label class="fw-bold" for="zine-payment">Link to purchase?:</label>
      <input type="text" id="zine-payment" class="input mb-1 w-100" name="zine-payment" required>
    </div>
    <fieldset class="p-0 m-0">
      <legend class="mb-1">Let us know if:</legend>
      <div class="flex mb-05 flex-align-baseline">
        <input type="radio" class="mr-05" id="copied" name="zine" value="not copied" required><label class="fw-bold" for="copied">I do not want this zine copied / checked out</label>
      </div>
    </fieldset>
  </div>
  <div class="mb-2">
    <h3>Contact</h3>
    <fieldset class="p-0 m-0">
    <legend class="mb-1">Please confirm your preferred pronunciation and pronouns as presenter(s):</legend>
    <div class="flex">
      <div class="w-33">
        <label class="fw-bold" for="author">Author Name:</label>
        <input type="text" id="author" class="input mb-1 w-100" name="author" required>
      </div>
      <div class="w-33 ml-1">
        <label class="fw-bold" for="contact">Contact Info:</label>
        <input type="text" id="contact" class="input mb-1 w-100" name="contact">
      </div>
    </div>
    </fieldset>
  </div>
  <input type="submit" name="submit" value="Submit Zine" class="button button-primary mb-2">
  <input type="hidden" name="_format" value="plain">
  <input type="hidden" name="_subject" value="zine submitted">
  <input type="hidden" name="_next" value="//ournetworks.ca/zine-library?update=submitted">
</form>
