---
layout: "gettingstarted-usage"
permalink: "getting-started/usage"
title: "Getting Started [Usage]"
description: "Getting Started webpage for how to use Better-Nice-Select"
---

# Usage

#### The Better-Nice-Select plugin displays data in a modern format, via data attributes or JavaScript.

---

&nbsp;

## **Options**

As options can be passed via data attributes or JavaScript, you can append an option name to `data-`, as in `data-animation="{value}"`. Make sure to change the case type of the option name from “camelCase” to “kebab-case” when passing the options via data attributes. For example, use `data-custom-search="searcher"` instead of `data-customSearch="searcher"`.

&nbsp;

## **Via data attributes**

<div class="mb-3">
{% highlight html %}
<select data-toggle="better-nice-select">
    <option value="Banana">Banana</option>
    <option value="Apple">Apple</option>
    <option value="Orange">Orange</option>
    <option value="Lemon">Lemon</option>
    <option value="Pepper">Pepper</option>
    <option value="Mushrooms">Mushrooms</option>
    <option value="Cabbages">Cabbages</option>
    <option value="Celery">Celery</option>
    <option value="Garlic">Garlic</option>
    <option value="Brocoli">Brocoli</option>
</select>
{% endhighlight %}
<hr>
{% highlight javascript %}

let elements = document.querySelectorAll('[data-toggle="better-nice-select"]');
elements.forEach(element => new betterNiceSelect.BetterNiceSelect(element));

{% endhighlight %}
</div>

For pre-selecting options you can use `selected="selected"` or for multiple select, you can use `multiple="multiple"` or just `multiple`.

<div class="mb-3">
{% highlight html %}
<select data-toggle="better-nice-select" multiple>
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
{% endhighlight %}
</div>

You can even use `<optgroup>` tags to render options in a group and search for group texts in the items search overlay field.

<div class="mb-3">
{% highlight html %}
<select data-toggle="better-nice-select" multiple="multiple">
    <optgroup label="Fruit">
        <option value="Banana" selected="selected">Banana</option>
        <option value="Apple">Apple</option>
        <option value="Orange">Orange</option>
        <option value="Lemon">Lemon</option>
    </optgroup>
    <optgroup label="Vegetable">
        <option value="Pepper">Pepper</option>
        <option value="Mushrooms">Mushrooms</option>
        <option value="Cabbages" selected="selected">Cabbages</option>
        <option value="Celery">Celery</option>
        <option value="Garlic">Garlic</option>
        <option value="Brocoli">Brocoli</option>
    </optgroup>
</select>
{% endhighlight %}
</div>

The `<select>` data is now supported for remote URL data through the initialization with a data attribute or via JavaScript.

&nbsp;

## **Via JavaScript**

Call a better-nice-select field with an `id` or `class`.

<div class="mb-3">
{% highlight html %}
<select id="my-select"></select>
{% endhighlight %}
</div>

<div class="mb-3">
{% highlight javascript %}
let select = new betterNiceSelect.BetterNiceSelect("#my-select");
{% endhighlight %}
</div>

For setting available options, create a javascript object and append it to the initialization. You can set something like the `locale` option, the `scrollable` feature or many more.

<div class="mb-3">
{% highlight javascript %}
let select = new betterNiceSelect.BetterNiceSelect("#my-select", {
    locale: "de",
    tags: true,
    ...
});
{% endhighlight %}
</div>

For using remote URL data, give the option `customSearch` the function name you created or a callback function and return the data in JSON format. When using remote URL data, predefined options
which are not already `selected="selected"` are ignored but the select field need to be HTML conform, if your JSON data is using `<optgroup>` tags or other available data options.
{% highlight javascript %}
let dbData = {
    items: [
        {
        id: "Banana",
        text: "Banana",
        label: "Fruit"
        },
        {
        id: "Apple",
        text: "Apple",
        label: "Fruit"
        },
        {
        id: "Pepper",
        text: "Pepper",
        label: "Vegetable"
        },
        {
        id: "Garlic",
        text: "Garlic",
        label: "Vegetable"
        }
    ]
}

function callRemoteData(filter) {
    filter = filter.toLowerCase();
    // put AJAX or Fetch for Remote JSON object here and use the filter string to only return items searched
    let toRet = structuredClone(dbData);
    toRet.items = toRet.items.filter(data => data.text.toLowerCase().indexOf(filter) > -1);
    return toRet;
}

let select = new betterNiceSelect.BetterNiceSelect("#my-select", {
    customSearch: 'callRemoteData'
});
{% endhighlight %}