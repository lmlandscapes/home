---
layout: page
title: Free Quote
permalink: /freequote
comments: false
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<form method="post" action="https://forms.un-static.com/forms/{{ site.contactusendpointreference }}">
  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">Name</label>
    <div class="col-8">
      <div class="input-group">
        <input id="name" name="name" placeholder="Please enter your name" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="email" class="col-4 col-form-label">E-mail address</label>
    <div class="col-8">
      <div class="input-group">
        <input id="email" name="email" placeholder="Your e-mail address" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="postcode" class="col-4 col-form-label">Post Code</label>
    <div class="col-8">
      <div class="input-group">
        <input id="postcode" name="postcode" placeholder="Your Post Code" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="message" class="col-4 col-form-label">Message</label>
    <div class="col-8">
      <textarea id="message" name="message" cols="40" rows="10" required="required" class="form-control"></textarea>
    </div>
  </div>
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Send</button>
    </div>
  </div>
</form>


</div>

<div class="col-md-4">

<div class="sticky-top sticky-top-80" style="background-color: indianred">
<p> <i class="fas fa-envelope"></i> <a href="mailto:{{site.emailid}}">Email</a> </p>
<p> <i class="fas fa-phone"></i> <a href="tel:{{ site.contactnumber }}" class="phone-link">{{site.contactnumber}}</a></p>
<p> <i class="fab fa-facebook"></i> <a href="{{ site.fburl }}" > Facebook </a> </p>
<p> <i class="fab fa-instagram"></i> <a href="{{ site.instaurl }}" > Instagram </a> </p>

</div>
</div>
</div>
