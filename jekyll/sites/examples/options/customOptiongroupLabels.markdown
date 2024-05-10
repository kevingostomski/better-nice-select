---
layout: "examples"
permalink: "examples/options/customoptiongrouplabel"
selected: "customOptiongroupLabel"
description: "Example how to set the 'customOptiongroupLabel' option of Better-Nice-Select - Gives an overview how to implement the option and how it looks like"
title: "Examples [Options - Custom Optiongroup Label]"
---

# **Custom Optiongroup Labels**

---

Use `customOptiongroupLabel` option via JavaScript or `data-custom-optiongroup-label` via attribute to `string[]` of possible `<optiongroup>` labels if you do not want to prerender them in an empty select field to use the feature of selecting and searching only in specific defined optiongroup labels. Works best with `customSearch` option or this option will not make sense!

<div class="alert alert-light d-flex justify-content-start align-items-center font-size-13" role="alert">
        <i class="fa-solid fa-circle-info pe-2"></i>Possible options to search for are: <i class="ms-2">Banana, Apple, Orange, Lemon, Pepper, Mushrooms, Cabbages, Celery, Brocoli, Garlic</i>
</div>

<div class="container my-4 border rounded p-0">
    <div class="p-5 border-bottom">
        <select id="option-customoptiongrouplabel" multiple="multiple" hidden="hidden">
        </select>
    </div>
    <div class="bg-highlight rounded">
{% highlight html %}
<div class="container">
    <select id="my-select" multiple="multiple">
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
      return new Promise(function (resolve, reject) {
        console.log("Remote function got called for data (so you see the functionality of the `delayInput` option)");
        let toRet = structuredClone(remoteSearchData);
        let ret = toRet.items.filter(data => {
          if (selectedOptgroup) {
            return data.label === selectedOptgroup && data.text.toLowerCase().indexOf(filter.toLowerCase()) > -1;
          } else {
            return data.text.toLowerCase().indexOf(filter.toLowerCase()) > -1;
          }
        });
        setTimeout(() => resolve(ret), 3000);
        //resolve(ret);
      });
    }

    function callRemoteOptionGroups() {
        // you can put a FETCH/AJAX call here
      return new Promise(function (resolve, reject) {
        let arr = ["Fruit", "Vegetable"];
        setTimeout(() => resolve(arr), 6000);
      });
    };

let select = new betterNiceSelect.BetterNiceSelect("#my-select", {customOptiongroupLabels: 'callRemoteOptionGroups', customSearch: 'callRemoteData'});
{% endhighlight %}
    </div>
</div>
