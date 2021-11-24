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
    <label for="name" class="col-4 col-form-label">What type of job are you looking for?</label>
    <div class="col-8">
      <div class="input-group">
        <input id="jobtype" name="jobtype" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>

  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">Tell us more about your job</label>
    <div class="col-8">
      <div class="input-group">
        <input id="jobdetail" name="jobdetail" type="message" required="required" class="form-control">
      </div>
    </div>
  </div>

  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">Post Code</label>
    <div class="col-8">
      <div class="input-group">
        <input id="postcode" name="postcode" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>

  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">First Name</label>
    <div class="col-8">
      <div class="input-group">
        <input id="firstname" name="firstname" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>

  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">Last Name</label>
    <div class="col-8">
      <div class="input-group">
        <input id="lastname" name="lastname" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>

  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">Last Name</label>
    <div class="col-8">
      <div class="input-group">
        <input id="lastname" name="lastname" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>

  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">Phone Number</label>
    <div class="col-8">
      <div class="input-group">
        <input id="phone" name="phonee" type="text" required="required" class="form-control">
      </div>
    </div>
  </div>

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
