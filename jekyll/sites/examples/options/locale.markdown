---
layout: "examples"
permalink: "examples/options/locale"
selected: "Locale"
description: "Example how to set the 'locale' option of Better-Nice-Select - Gives an overview how to implement the option and how it looks like"
title: "Examples [Options - Locale]"
---

# **Locale**

---

Use `locale` option via JavaScript or `data-locale` via attribute to set the internationalization for the placeholder texts.

You update the placeholder texts the following way:

{% highlight javascript %}

betterNiceSelect.LOCALISATION.en.formatSearch = function() {
    return "Search Vegetables, Fruits..."
}

{% endhighlight %}

&nbsp;

Possible placeholder texts are:

- `formatSearch()`
- `formatHelpForTagging()`
- `formatAlertOptiongroups()`
- `formatLoadingMessage()`
- `formatCheckingMessage()`

There exists multiple [preexisting language output files](https://github.com/kevingostomski/better-nice-select/tree/main/src/ts/locale). If you want english and a predefined language, select the right file to load into your browser before a BetterNiceSelect initialization.

There exists also a file with all predefined languages, which is called `better-nice-select-locale-all.js` which you can load into your browser!

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select multiple="multiple" data-toggle="better-nice-select" data-locale="ja-JP" hidden="hidden">
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
    <select multiple="multiple" data-toggle="better-nice-select" data-locale="ja-JP">
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
