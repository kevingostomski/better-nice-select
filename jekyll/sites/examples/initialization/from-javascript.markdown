---
layout: "examples"
permalink: "examples/initialization/from-javascript"
selected: "From-JavaScript"
description: "Example how to initialize the Better-Nice-Select component via JavaScript - Gives an overview how to implement it and how it looks like"
title: "Examples [Initialization - From JavaScript]"
---

# **Select from JavaScript**

---

Use `new betterNiceSelect.BetterNiceSelect(selector, options)` to initialize the select field data. To size the created select field, wrap it with a `<div>` tag and set the `width` and `height` CSS style of it.

The overlay which will be shown when clicked on the add icon is keyboard navigable with the `Tab` key to switch between the input and the first founded option. In addition, the `Arrow` keys can be used to navigate through the founded options, when you want to add it to the list. It got typeahead autocomplete functionality too!

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select id="from-javascript" multiple="multiple" hidden="hidden">
            <option value="Banana">Banana</option>
            <option value="Apple">Apple</option>
            <option value="Orange">Orange</option>
            <option value="Lemon" selected="selected">Lemon</option>
            <option value="Pepper">Pepper</option>
            <option value="Mushrooms">Mushrooms</option>
            <option value="Cabbages">Cabbages</option>
            <option value="Celery">Celery</option>
            <option value="Garlic">Garlic</option>
            <option value="Brocoli">Brocoli</option>
        </select>
    </div>
    <div class="bg-highlight rounded">
{% highlight html %}
<div class="container">
    <select id="my-select" multiple="multiple">
      <option value="Banana">Banana</option>
      <option value="Apple">Apple</option>
      <option value="Orange">Orange</option>
      <option value="Lemon" selected="selected">Lemon</option>
      <option value="Pepper">Pepper</option>
      <option value="Mushrooms">Mushrooms</option>
      <option value="Cabbages">Cabbages</option>
      <option value="Celery">Celery</option>
      <option value="Garlic">Garlic</option>
      <option value="Brocoli">Brocoli</option>
    </select>
</div>
{% endhighlight %}
<hr>
{% highlight javascript %}

let select = new betterNiceSelect.BetterNiceSelect("#my-select");

{% endhighlight %}
    </div>
</div>
