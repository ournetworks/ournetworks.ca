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

### Note: 
- we can accept digital or paper copies of zines mailed directly to us 
- the library will be a lending library with patrons able to "check out" [make copies] of zines
- we will be making a catalog to list all zines submitted to the Zine Library

## Send us your zines!
{:.mt-1}

<form action="https://formspree.io/orga@ournetworks.ca" class="form-container" method="POST">
  <div class="mb-2">
    <div class="w-33">
      <label class="fw-bold" for="zine-name">Zine title:</label>
      <input type="text" id="zine-name" class="input mb-1 w-100" name="zine-name" required>
    </div>
    <div class="w-33">
      <label class="fw-bold" for="zine-format">Zine format:</label><br />
      <select name="zine-format" id="zine-format" class="input input-select mb-1" required>
        <option value="">Select a format</option>
        <option>Dat</option>
        <option>Digital</option>
        <option>Paper</option>
        <option>Other</option>
      </select>
    </div>
    <div class="w-33">
      <label class="fw-bold" for="zine-link">Link to zine:</label>
      <input type="text" id="zine-link" class="input mb-1 w-100" name="zine-link" required>
    </div>
    <div class="w-33">
      <label class="fw-bold" for="zine-purchase-link">If selling the zine, link to purchase:</label>
      <input type="text" id="zine-purchase-link" class="input mb-1 w-100" name="zine-purchase-link" required>
    </div>
    <fieldset class="p-0 m-0">
      <legend class="mb-1">Let us know if:</legend>
      <div class="flex mb-05 flex-align-baseline">
        <input type="checkbox" class="mr-05" id="mailed" name="zine-mailed" value="mailed"><label class="fw-bold" for="mailed">I would like to mail the zine</label>
      </div>
      <div class="flex mb-05 flex-align-baseline">
        <input type="checkbox" class="mr-05" id="copied" name="zine-copy-permission" value="not copied"><label class="fw-bold" for="copied">I do not want this zine copied/checked out</label>
      </div>
    </fieldset>
  </div>
  <div class="mb-2">
    <h3>Contact</h3>
    <fieldset class="p-0 m-0">
    <div class="flex">
      <div class="w-33">
        <label class="fw-bold" for="author">Author name:</label>
        <input type="text" id="author" class="input mb-1 w-100" name="author" required>
      </div>
      <div class="w-33 ml-1">
        <label class="fw-bold" for="contact">Contact info:</label>
        <input type="text" id="contact" class="input mb-1 w-100" name="contact">
      </div>
    </div>
    </fieldset>
  </div>
  <input type="submit" name="submit" value="Submit your zine" class="button button-primary mb-2">
  <input type="hidden" name="_format" value="plain">
  <input type="hidden" name="_subject" value="zine submitted">
  <input type="hidden" name="_next" value="//ournetworks.ca/zine-library?update=submitted">
</form>
