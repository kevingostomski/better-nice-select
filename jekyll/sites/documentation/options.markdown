---
layout: "documentation-options"
permalink: "documentation/options"
description: "Documentation for Options API of Better-Nice-Select - Gives an overview how to implement each option for the component and which options are available"
title: "Documentation [Options]"
---

# Select Options

#### The Select Options API of Better-Nice-Select

---

#### Default Settings

You can change the default settings for better-nice-select by modifying `betterNiceSelect.DEFAULTS` object as example:

{% highlight javascript %}
betterNiceSelect.DEFAULTS.tags = true;
{% endhighlight %}

&nbsp;

---

&nbsp;

&nbsp;

## **animation**

- **Attribute:** `data-animation`
- **Type:** `Boolean`
- **Detail:**
  Set to `false` if you do not want to have animation effects.
- **Default:** `true`
- **Example:** [Animation]({% link sites/examples/options/animation.markdown %})

&nbsp;

&nbsp;

## **customOptiongroupLabels**

- **Attribute:** `data-custom-optiongroup-labels`
- **Type:** `String` &#124; `Function`
- **Detail:**
  Used to load the optiongroups for a select field if you do not want to prerender them in the HTML. The function needs to return elements in a `string[]` to work properly.
- **Default:** `undefined`
- **Example:** [Remote Data]({% link sites/examples/options/customSearch.markdown %})

&nbsp;

&nbsp;

## **customSearch**

- **Attribute:** `data-custom-search`
- **Type:** `String` &#124; `Function`
- **Detail:**
  Used to load the select field data for adding new items. The function needs to return elements in a specific JSON format to work properly.
- **Default:** `undefined`
- **Example:** [Remote Data]({% link sites/examples/options/customSearch.markdown %})

&nbsp;

&nbsp;

## **customTagCheck**

- **Attribute:** `data-custom-tag-check`
- **Type:** `String` &#124; `Function`
- **Detail:**
  Used to add some logic to the select field to return a `Boolean` if an invalid value is entered.
- **Default:** `undefined`
- **Example:** [Constraining Tag Creation]({% link sites/examples/options/customTagCheck.markdown %})

&nbsp;

&nbsp;

## **disabled**

- **Attribute:** `disabled="disabled"`
- **Type:** `String`
- **Detail:**
  You can disable the whole `<select>` component so you can not add or delete already selected `<option>` tags. You can also disable single `<option>` tags to add them and make them unremovable.
  Works with `data-custom-search` - JSON format needs to be expanded with `disabled: true` as attribute for a single `item`. Default is `disabled: false` and does not need to be added.
- **Default:** `undefined`
- **Example:** [From HTML]({% link sites/examples/initialization/from-html.markdown %})

&nbsp;

&nbsp;

## **init**

- **Attribute:** `data-toggle`
- **Type:** `String`
- **Detail:**
  Activate better-nice-select with HTML after adding a bit of JavaScript.
- **Default:** `'better-nice-select'`
- **Example:** [From HTML]({% link sites/examples/initialization/from-html.markdown %})

&nbsp;

&nbsp;

## **icons**

- **Attribute:** `data-icons`
- **Type:** `Object`
- **Detail:**
  Set own custom icons via Javascript or HTML for the placeholder icons.
- **Default:** 
  
<div class="mb-4">
{% highlight javascript %}
{
search: '<svg class="better-nice-select-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>',
delete: '<svg class="better-nice-select-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>',
add: '<svg class="better-nice-select-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>',
tag: '<svg class="better-nice-select-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>'
}
{% endhighlight %}
</div>

- **Example:** [Icons]({% link sites/examples/options/icons.markdown %})

&nbsp;

&nbsp;

## **inputDelay**

- **Attribute:** `data-input-delay`
- **Type:** `Number`
- **Detail:**
  Debounce functionality of the search input in ms
- **Default:** 400
- **Example:** [Input Delay]({% link sites/examples/options/inputdelay.markdown %})

&nbsp;

&nbsp;

## **locale**

- **Attribute:** `data-locale`
- **Type:** `String`
- **Detail:**
  Sets the locale to use (i.e. `'de-DE'`). Locale files currently all inside file and do not need to be pre-loaded. If left `undefined`, an empty string or a locale which is not allowed, errors are thrown. 
- **Default:** `'en-US'`
- **Example:** [Locale]({% link sites/examples/options/locale.markdown %})

&nbsp;

&nbsp;

## **scrollable**

#### **on**
- **Attribute:** `data-scrollable-on`
- **Type:** `Boolean`
- **Detail:**
  Set `true` to enable virtual scroll to display a virtual, "infinite" list. Needs `data-scrollable-height` to be set to work.
- **Default:** `false`
- **Example:** [Scrollable]({% link sites/examples/options/scrollable.markdown %})

&nbsp;

&nbsp;

#### **height**
- **Attribute:** `data-scrollable-height`
- **Type:** `String`
- **Detail:**
  Set a valid CSS `height` to display a virtual, "infinite" list. Needs `data-scrollable-on` to be set to work. 
- **Default:** `undefined`
- **Example:** [Scrollable]({% link sites/examples/options/scrollable.markdown %})

&nbsp;

&nbsp;

## **tags**

- **Attribute:** `data-tags`
- **Type:** `Boolean`
- **Detail:**
  Set `true` to enable dynamic item creation on input search field with pressing "," or "Enter". The separators that should be used when tokenizing can be specified using the `tokenSeparators` option.
- **Default:** `false`
- **Example:** [Tagging]({% link sites/examples/options/tags.markdown %})

&nbsp;

&nbsp;

## **tokenSeparators**

- **Attribute:** `data-token-separators`
- **Type:** `Array`
- **Detail:**
  The separators that should be used when tokenizing.
- **Default:** `[",", "Enter"]`
- **Example:** [Token Separators]({% link sites/examples/options/tokenSeparators.markdown %})