---
layout: "documentation-methods"
permalink: "documentation/methods"
description: "Documentation for Methods API of Better-Nice-Select - Gives an overview how to implement methods for the component, which methods are available and what parameters each method has"
title: "Documentation [Methods]"
---

# Select Methods

#### The Select Methods API of Better-Nice-Select

---

&nbsp;

Methods can currently be called like the following:

{% highlight javascript %}
let select = new betterNiceSelect.BetterNiceSelect('#my-selector');

select.[functionName](parameter);
{% endhighlight %}

&nbsp;

The `parameter` correspond to the [rest parameter syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) and can be useful as example for selecting or deselecting more as one `<option>` tag.

&nbsp;

&nbsp;

## **deselect**

- **Parameter:** `...ids`
- **Detail:** Deselect already added `<option>` elements via their setted `val`
- **Example:** [Select Methods]({% link sites/examples/methods/select.markdown %})

&nbsp;

&nbsp;

## **deselectAll**

- **Parameter:** `undefined`
- **Detail:** Deselect all possible `<option>` elements
- **Example:** [Select Methods]({% link sites/examples/methods/select.markdown %})

&nbsp;

&nbsp;

## **destroy**

- **Parameter:** `undefined`
- **Detail:** Destroy the initialized select HTML node
- **Example:** [Destroy]({% link sites/examples/methods/destroy.markdown %})

&nbsp;

&nbsp;

## **hide**

- **Parameter:** `undefined`
- **Detail:** Hide the initialized select HTML node
- **Example:** [Visibility]({% link sites/examples/methods/show-hide.markdown %})

&nbsp;

&nbsp;

## **open**

- **Parameter:** `searchInput`
- **Detail:** Open the HTML overlay with the search container to add new items
- **Example:** [Overlay]({% link sites/examples/methods/open.markdown %})

&nbsp;

&nbsp;

## **show**

- **Parameter:** `undefined`
- **Detail:** Shows the initialized select HTML node
- **Example:** [Visibility]({% link sites/examples/methods/show-hide.markdown %})

&nbsp;

&nbsp;

## **select**

- **Parameter:** `...items`
- **Detail:** Creates new `<option>` elements for the select field 
- **Example:** [Select Methods]({% link sites/examples/methods/select.markdown %})

&nbsp;

&nbsp;

## **selectAll**

- **Parameter:** `undefined`
- **Detail:** Select all possible `<option>` elements which are available
- **Example:** [Select Methods]({% link sites/examples/methods/select.markdown %})