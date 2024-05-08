---
layout: "examples"
permalink: "examples/options/customtagcheck"
selected: "customTagCheck"
description: "Example how to set the 'customTagCheck' option of Better-Nice-Select - Gives an overview how to implement the option and how it looks like"
title: "Examples [Options - Custom Tag Check]"
---

# **Constraining Tag Creation**

---

Use `customTagCheck` option via JavaScript or `data-custom-tag-check` via attribute to add some logic to the select field to return a `Boolean` if an invalid value is entered. You can use the name of a function to set the option or a callback function. 

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select id="option-tagscheck" multiple="multiple" hidden="hidden">
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
        <option value="Apple" selected="selected">Apple</option>
    </select>
</div>
{% endhighlight %}
<hr>
{% highlight javascript %}
function checkTag(input) {
    return new Promise(function (resolve, reject) {
        let ret = true;
        if (input === "" || input.toLowerCase().includes("ä") || input.toLowerCase().includes("ö") || input.toLowerCase().includes("ü")) {
          ret = false;
        }
        setTimeout(() => resolve(ret), 5000);
    });
}

let select = new betterNiceSelect.BetterNiceSelect("#my-select", {customTagCheck: 'checkTag', tags: true});
{% endhighlight %}
    </div>
</div>
