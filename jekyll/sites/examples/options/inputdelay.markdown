---
layout: "examples"
permalink: "examples/options/inputdelay"
selected: "inputDelay"
description: "Example how to set the 'inputDelay' option of Better-Nice-Select - Gives an overview how to implement the option and how it looks like"
title: "Examples [Options - Input Delay]"
---

# **Input Delay**

---

Use the `inputDelay` option via JavaScript or `data-input-delay` in HTML to decide when to trigger the Event Listener for the modal search for debounce functionality. 

If you are using a complete and ready to use predefined and rendered `<select>` with all `<option>` elements possible and do not rely on AJAX/FETCH or async/await inside the `customSearch` option, it is best to set the `inputDelay = 0` to archive the maximum user experience by having no debounce and create interactions as smooth as possible!

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select multiple="multiple" data-toggle="better-nice-select" data-input-delay="0" hidden="hidden">
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
    <select multiple="multiple" data-toggle="better-nice-select" data-input-delay="0">
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

let elements = document.querySelectorAll('[data-toggle="better-nice-select"]');
elements.forEach(element => new betterNiceSelect.BetterNiceSelect(element));

{% endhighlight %}
    </div>
</div>
