---
layout: page
order: 4
title: "Zine Library"
titleDisplay: "Zine Library"
---

We're hosting a free and open zine library throughout the conference that will feature both paper and digital zines. To help grow our library, we're calling for zines that fall under this year's theme. 

We're seeking to curate resources will help us in the collective care and maintenance of alternative networking practices. 

> How can our networking be reparative? In what ways can we remediate existing communication infrastructures? Are there uncooptable computing reconfigurations? How can we reconstruct technology after refusal? What are regenerative approaches to resist status quo tech?

Got a digital/paper zine or any printed ephemera that fits along those lines? Submit it below!

Note: 
- we can accept digital or paper copies of zines mailed directly to us 
- the library will be a lending library with patrons able to "check out" [make copies] of zines 

## Send us your zines!

- Zine Name 
- Format 
    - dat 
    - digital 
    - paper 
    - other : (describe)
- This zine is okay to be copied (Y/N)
- Link:  (link to PDF elsewhere?)

- Author Name
- Contact

- Payment info? "Link to purchase"


<form action="https://formspree.io/orga@ournetworks.ca" class="form-container" method="POST">
  <div class="mb-2">
    <h3>Zine</h3>
    <div class="w-33">
      <label class="fw-bold" for="presenters">Zine Name:</label>
      <input type="text" id="presenters" class="input mb-1 w-100" name="presenters" required>
    </div>
    <div class="w-33">
      <label class="fw-bold" for="presenters">Link to zine:</label>
      <input type="text" id="presenters" class="input mb-1 w-100" name="presenters" required>
    </div>
    <fieldset class="p-0 m-0">
      <legend class="mb-1">Let us know if you can attend:</legend>
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
        <label class="fw-bold" for="presenters">Presenter:</label>
        <input type="text" id="presenters" class="input mb-1 w-100" name="presenters" required>
      </div>
      <div class="w-33 ml-1">
        <label class="fw-bold" for="pronunciation">Pronunciation notes:</label>
        <input type="text" id="pronunciation" class="input mb-1 w-100" name="pronunciation">
      </div>
    </div>
    </fieldset>
  </div>
  <input type="submit" name="submit" value="Submit Zine" class="button button-primary mt-1 mb-2">
  <input type="hidden" name="_format" value="plain">
  <input type="hidden" name="_subject" value="zine submitted">
  <input type="hidden" name="_next" value="//ournetworks.ca/zine-library?update=submitted">
</form>
