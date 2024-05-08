---
layout: "examples"
permalink: "examples/methods/destroy"
selected: "Destroy"
description: "Example for the method 'Destroy' of Better-Nice-Select - Gives an overview how to use the methods and how it looks like"
title: "Examples [Methods - Destroy]"
---

# **Destroy**

---
The method `.destroy()` can be used to remove the initialized HTML node in the DOM.

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="d-flex justify-content-start align-items-center m-4">
        <button type="button" class="btn btn-outline-primary me-2" id="methods-destroy-destroy">destroy</button>
        <button type="button" class="btn btn-outline-primary ms-2" id="methods-destroy-recreate">recreate</button>
    </div>
    <div class="p-5 border-bottom">
        <select multiple="multiple" id="methods-destroy" hidden="hidden">
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
        <button type="button" class="btn btn-outline-primary me-2" id="select-destroy-destroy">destroy</button>
        <button type="button" class="btn btn-outline-primary ms-2" id="select-destroy-recreate">recreate</button>
    </div>
    <select multiple="multiple" id="select-destroy">
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

let select = new betterNiceSelect.BetterNiceSelect("#select-destroy");

document.querySelector("#select-destroy-destroy").addEventListener("click", function () {
    select.destroy();
});

document.querySelector("#select-destroy-recreate").addEventListener("click", function () {
    select = new betterNiceSelect.BetterNiceSelect("#select-destroy");
});
{% endhighlight %}
    </div>
</div>