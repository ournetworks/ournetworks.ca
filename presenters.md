---
layout: page
order: 0
title: "Presenters: Confirm Participation"
titleDisplay: "Presenter"
---

<p>In order to confirm your participation in Our Networks 2020, please complete the below form by Friday July 17, 2020.</p>

<hr />

<form action="https://ournetworks.ca/presenters-confirm/?next=https%3A%2F%2Fournetworks.ca%2Fpresenters%2F%3Fupdate%3Dconfirmed" class="form-container" method="POST">
  <div class="mb-2">
    <div class="flex flex-wrap">
      <label class="fw-bold w-100" for="session">Select your session or work:</label>
      <input list="sessions" id="session" class="input mb-1 w-75" name="session" required>
    </div>
    <datalist id="sessions">
      {% include forms/sessions-datalist.html %}
    </datalist>
    <div class="flex mb-05 flex-align-baseline">
      <input class="mr-05" type="checkbox" id="description" name="review_confirmation" value="reviewed"><label class="fw-bold" for="description">The description has been reviewed</label>
    </div>
  </div>
  <div class="mb-2">
    <h3 class="mb-05">Participation</h3>
    <p>Let us know if you can attend:</p>
    <div class="flex mb-05 flex-align-baseline">
      <input type="radio" class="mr-05" id="participation1" name="participation" value="will present" required><label class="fw-bold" for="participation1">I/we will be presenting</label>
    </div>
    <div class="flex mb-05 flex-align-baseline">
      <input type="radio" class="mr-05" id="participation2" name="participation" value="no longer presenting" required><label class="fw-bold" for="participation2">I/we can no longer present</label>
    </div>
  </div>
  <div class="mb-2">
    <h3 class="mb-05">Recording</h3>
    <p>Let us know if we can livestream and record your session or work (this will not include workshops):</p>
    <div class="flex mb-05 flex-align-baseline">
      <input type="checkbox" class="mr-05" id="recording1" name="recording" value="live stream"><label class="fw-bold" for="recording1">The presentation can be live streamed</label>
    </div>
    <div class="flex mb-05 flex-align-baseline">
      <input type="checkbox" class="mr-05" id="recording2" name="recording" value="record"><label class="fw-bold" for="recording2">The presentation can be recorded and posted on the Our Networks website under a Creative Commons License</label>
    </div>
    <small class="block mt-1">You have the right to withdraw consent for posting after the video is recorded. You can see an example of the previous recorded talks at: <a href="https://ournetworks.ca/recorded-talks/">https://ournetworks.ca/recorded-talks/</a></small>
  </div>
    <div class="mb-2">
    <h3 class="mb-05">Time zone</h3>
    <p>Let us know what time zone will you be presenting from:</p>
    <div class="flex mb-05 flex-align-baseline">
      <input list="timezones" id="timezone" name="timezone" class="input mb-1 w-75" required>
    </div>
    <datalist id="timezones">
      {% include forms/timezones-datalist.html %}
    </datalist>
    <div class="flex mb-05 flex-align-baseline">
      <input type="checkbox" class="mr-05" id="recording2" name="recording" value="record"><label class="fw-bold" for="recording2">The presentation can be recorded and posted on the Our Networks website under a Creative Commons License</label>
    </div>
    <small class="block mt-1">You have the right to withdraw consent for posting after the video is recorded. You can see an example of the previous recorded talks at: <a href="https://ournetworks.ca/recorded-talks/">https://ournetworks.ca/recorded-talks/</a></small>
  </div>
  <div class="mb-2">
    <h3 class="mb-05">Presenter details</h3>
    <p>Please confirm your preferred pronunciation and pronouns as presenter(s):</p>
    <div class="flex">
      <div class="w-50">
        <label class="fw-bold" for="presenters">Presenter:</label>
        <input list="presenters-list" id="presenters" class="input mb-1 w-100" name="presenters" required>
        <datalist id="presenters-list">
          {% include forms/presenters-datalist.html %}
        </datalist>
      </div>
      <div class="w-50 ml-1">
        <label class="fw-bold" for="pronunciation">Pronunciation notes:</label>
        <input type="text" id="pronunciation" class="input mb-1 w-100" name="pronunciation">
      </div>
    </div>
    <div class="flex">
      <div class="w-50">
        <label class="fw-bold" for="pronouns">Preferred pronouns:</label>
        <input type="text" id="pronouns" class="input mb-1 w-100" name="pronouns" placeholder="e.g., they/them, she/her, he/him, ze/zir">
      </div>
    </div>
    <div class="flex mb-05 flex-align-baseline flex-wrap">
      <input type="checkbox" class="mr-05 input-condition" id="presenter2" name="presenter2" value="The session has a second presenter:"><label class="fw-bold" for="presenter2">The session has a second presenter</label>
      <div id="second_presenter" class="input-condition-group mb-05 mt-1 ml-1 flex-wrap none">
        <div class="flex w-100">
          <div class="w-50">
            <label class="fw-bold" for="presenters2">Presenter:</label>
            <input list="presenters-list2" id="presenters2" class="input mb-1 w-100" name="presenters2" required>
            <datalist id="presenters-list2">
              {% include forms/presenters-datalist.html %}
            </datalist>
          </div>
          <div class="w-50 ml-1">
            <label class="fw-bold" for="pronunciation2">Pronunciation notes:</label>
            <input type="text" id="pronunciation2" class="input mb-1 w-100" name="pronunciation2">
          </div>
        </div>
        <div class="flex w-100">
          <div class="w-50">
            <label class="fw-bold" for="pronouns">Preferred pronouns:</label>
            <input type="text" id="pronouns2" class="input mb-1 w-100" name="pronouns2" placeholder="e.g., they/them, she/her, he/him, ze/zir">
          </div>
        </div>
      </div>
    </div>
    <div class="flex mb-05 flex-align-baseline flex-wrap">
      <input type="checkbox" class="mr-05 input-condition" id="presenter3" name="presenter3" value="The session has a third presenter:"><label class="fw-bold" for="presenter3">The session has a third presenter</label>
      <div id="third_presenter" class="input-condition-group mb-05 mt-1 ml-1 flex-wrap none">
        <div class="flex w-100">
          <div class="w-50">
            <label class="fw-bold" for="presenters3">Presenter:</label>
            <input list="presenters-list3" id="presenters3" class="input mb-1 w-100" name="presenters3" required>
            <datalist id="presenters-list3">
              {% include forms/presenters-datalist.html %}
            </datalist>
          </div>
          <div class="w-50 ml-1">
            <label class="fw-bold" for="pronunciation3">Pronunciation notes:</label>
            <input type="text" id="pronunciation3" class="input mb-1 w-100" name="pronunciation3">
          </div>
        </div>
        <div class="flex w-100">
          <div class="w-50">
            <label class="fw-bold" for="pronouns">Preferred pronouns:</label>
            <input type="text" id="pronouns3" class="input mb-1 w-100" name="pronouns3" placeholder="e.g., they/them, she/her, he/him, ze/zir">
          </div>
        </div>
      </div>
    </div>
    <div class="flex mb-05 flex-align-baseline flex-wrap">
      <input type="checkbox" class="mr-05 input-condition" id="presenter4" name="presenter4" value="The session has another presenter:"><label class="fw-bold" for="presenter4">The session has more than three presenters</label>
      <div id="multi_presenters" class="input-condition-group mb-05 mt-1 ml-1 flex-wrap none">
        <div class="flex w-100">
          <label class="fw-bold" for="multi_presenter">Please list all additional presenter names, pronunciation notes, and preferred pronouns:</label>
          <input type="text" id="multi_presenter" class="input mb-1 w-100" name="multi_presenter">
        </div>
      </div>
    </div>
  </div>
  <div class="mb-2">
    <h3 class="mb-05">Honoraria information</h3>
      <p>We are able to offer a modest honorarium to each presenter which will be distributed after the event. Please provide the information below:</p>
      <div class="flex mb-05 flex-align-baseline flex-wrap">
        <input type="radio" class="mr-05 input-condition" id="honoraria" name="honoraria" value="Here is my preferred payment:"><label class="fw-bold" for="honoraria">Here is my preferred payment:</label>
        <div id="payment_options" class="input-condition-group mb-05 mt-1 ml-1 flex-wrap none">
          <div class="flex mb-05 w-100 flex-align-baseline">
            <input type="radio" class="mr-05" id="payment_options1" name="payment_options" value="Interac"> <label class="fw-bold" for="payment_options1">Interac</label>
          </div>
          <div class="flex mb-05 w-100 flex-align-baseline">
            <input type="radio" class="mr-05" id="payment_options2" name="payment_options" value="PayPal"> <label class="fw-bold" for="payment_options2">PayPal</label>
          </div>
          <div class="flex mb-05 w-100 flex-align-baseline">
            <input type="radio" class="mr-05" id="payment_options3" name="payment_options" value="Cryptocurrency"> <label class="fw-bold" for="payment_options3">Cryptocurrency (ETH)</label>
          </div>
          <div class="w-100" id="payment_address">
            <label class="fw-bold" for="address">Address (Cryptocurrency/Paypal/Interac):</label>
            <input type="text" id="address" class="input mb-1 w-75" name="address" placeholder="(e.g., email address or cryptocurrency wallet)">
          </div>
        </div>
      </div>
      <div class="flex mb-05 flex-align-baseline">
        <input type="radio" class="mr-05" id="honoraria-decline" name="honoraria" value="I am declining the honoraria"><label class="fw-bold" for="honoraria-decline">I am declining the honoraria</label>
      </div>
  </div>
  <div class="mb-2">
      <h3 class="mb-05">Additional thoughts</h3>
    <div class="flex flex-wrap">
      <label class="fw-bold w-100" for="notes">Anything else you'd like to share:</label>
      <input type="text" id="notes" class="input mb-1 w-75" name="notes">
    </div>
  </div>
  <input type="submit" name="submit" value="Submit session update" class="button mt-1 mb-2">
  <input type="hidden" name="_format" value="plain">
  <input type="hidden" name="_subject" value="session update submitted">
  <input type="hidden" name="_next" value="//ournetworks.ca/sessions-form?update=confirmed">
</form>
