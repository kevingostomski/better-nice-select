---
layout: "examples"
permalink: "examples/methods/visibility"
selected: "Visibility"
description: "Example for the methods 'Show' & 'Hide' of Better-Nice-Select - Gives an overview how to use the methods and how it looks like"
title: "Examples [Methods - Show & Hide]"
---

# **Visibility**

---
Better-Nice-Select exposes methods for hooking into the select visibility. The methods `.show()` and `.hide()` can be used like the following:

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="d-flex justify-content-start align-items-center m-4">
        <button type="button" class="btn btn-outline-primary me-2" id="methods-animation-hide">Hide</button>
        <button type="button" class="btn btn-outline-primary ms-2" id="methods-animation-show">Show</button>
    </div>
    <div class="p-5 border-bottom">
        <select multiple="multiple" id="methods-animation" hidden="hidden">
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
    <div class="d-flex justify-content-start align-items-center m-4">
        <button type="button" class="btn btn-outline-primary me-2" id="select-animation-hide">Hide</button>
        <button type="button" class="btn btn-outline-primary ms-2" id="select-animation-show">Show</button>
    </div>
    <select multiple="multiple" id="select-animation">
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

let select = new betterNiceSelect.BetterNiceSelect("#select-animation");

document.querySelector("#select-animation-hide").addEventListener("click", function () {
    select.hide();
});

document.querySelector("#select-animation-show").addEventListener("click", function () {
    select.show();
});
{% endhighlight %}
    </div>
</div>