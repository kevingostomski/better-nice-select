---
layout: "examples"
permalink: "examples/options/scrollable"
selected: "Scrollable"
description: "Example how to set the 'scrollable' option of Better-Nice-Select - Gives an overview how to implement the option and how it looks like"
title: "Examples [Options - Scrollable]"
---

# **Scrollable**

---

Use `scrollable` option via JavaScript or `data-scrollable-on` via attribute to let the created component be scrollable. You also need to set a legit `data-scrollable-height` via attribute if you want to use this feature.

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select id="option-scrollable" multiple="multiple" hidden="hidden">
            <option value="Banana">Banana</option>
            <option value="Apple">Apple</option>
            <option value="Orange">Orange</option>
            <option value="Lemon" selected="selected">Lemon</option>
            <option value="Pepper">Pepper</option>
            <option value="Mushrooms">Mushrooms</option>
            <option value="Cabbages" selected="selected">Cabbages</option>
            <option value="Celery">Celery</option>
            <option value="Garlic" selected="selected">Garlic</option>
            <option value="Brocoli" selected="selected">Brocoli</option>
        </select>
    </div>
    <div class="bg-highlight rounded">
{% highlight html %}
<div class="container">
    <select id="scrollable-select" multiple="multiple">
        <option value="Banana">Banana</option>
        <option value="Apple">Apple</option>
        <option value="Orange">Orange</option>
        <option value="Lemon" selected="selected">Lemon</option>
        <option value="Pepper">Pepper</option>
        <option value="Mushrooms">Mushrooms</option>
        <option value="Cabbages" selected="selected">Cabbages</option>
        <option value="Celery">Celery</option>
        <option value="Garlic" selected="selected">Garlic</option>
        <option value="Brocoli" selected="selected">Brocoli</option>
    </select>
</div>
{% endhighlight %}
<hr>
{% highlight javascript %}

let select = new betterNiceSelect.BetterNiceSelect("#scrollable-select", {
    scrollable: {
        on: 'true',
        height: '200px'
    }
});

{% endhighlight %}
    </div>
</div>
