---
layout: "examples"
permalink: "examples/options/customsearch"
selected: "customSearch"
description: "Example how to set the 'customSearch' option of Better-Nice-Select - Gives an overview how to implement the option and how it looks like"
title: "Examples [Options - Custom Search]"
---

# **Custom Search**

---

Use `customSearch` option via JavaScript or `data-custom-search` via attribute to load the select field data. For predefined `<option>` tags, you need to add them in HTML. If data is already added, it will be silently skipped and nothing will happen. You can use the name of a function to set the option or a callback function. 

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select id="option-searchdata" multiple="multiple" hidden="hidden">
            <option value="Apple" selected="selected">Apple</option>
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
let remoteSearchData = {
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
            id: "Orange",
            text: "Orange",
            label: "Fruit"
        },
        {
            id: "Blackberry",
            text: "Blackberry",
            label: "Fruit"
        },
        {
            id: "Coconut",
            text: "Coconut",
            label: "Fruit"
        },
        {
            id: "Papaya",
            text: "Papaya",
            label: "Fruit"
        },
        {
            id: "Mango",
            text: "Mango",
            label: "Fruit"
        },
        {
            id: "Grapes",
            text: "Grapes",
            label: "Fruit"
        },
        {
            id: "Cherry",
            text: "Cherry",
            label: "Fruit"
        }, {
            id: "Guava",
            text: "Guava",
            label: "Fruit"
        },
        {
            id: "Lime",
            text: "Lime",
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
        },
        {
            id: "Eggplant",
            text: "Eggplant",
            label: "Vegetable"
        },
        {
            id: "Fennel",
            text: "Fennel",
            label: "Vegetable"
        },
        {
            id: "Corn",
            text: "Corn",
            label: "Vegetable"
        }, {
            id: "Cucumber",
            text: "Cucumber",
            label: "Vegetable"
        },
        {
            id: "Carrot",
            text: "Carrot",
            label: "Vegetable"
        },
        {
            id: "Chili",
            text: "Chili",
            label: "Vegetable"
        }, {
            id: "Potato",
            text: "Potato",
            label: "Vegetable"
        },
        {
            id: "Squash",
            text: "Squash",
            label: "Vegetable"
        },
    ]
}

function callRemoteData(filter, selectedOptgroup) {
    // put AJAX or Fetch for Remote JSON object here
    return new Promise(function (resolve, reject) {
        let toRet = structuredClone(remoteSearchData);
        let ret = toRet.items.filter(data => {
            if (selectedOptgroup) {
                return data.label === selectedOptgroup && data.text.toLowerCase().indexOf(filter.toLowerCase()) > -1;
            } else {
                return data.text.toLowerCase().indexOf(filter.toLowerCase()) > -1;
            }
        });
        setTimeout(() => resolve(ret), 3000);
    });
}

let select = new betterNiceSelect.BetterNiceSelect("#my-select", {searchData: 'callRemoteData'});
{% endhighlight %}
    </div>
</div>
