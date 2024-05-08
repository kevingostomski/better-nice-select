---
layout: "gettingstarted-introduction"
permalink: "getting-started/introduction"
title: "Getting Started [Introduction]"
description: "Getting Started introduction webpage for how to download and use Better-Nice-Select and how it can be used to make your webpage better"
---

# Introduction

#### An overview of Better-Nice-Select, how to download and use it, basic templates, and more.

---

&nbsp;

## **Quickstart**

Looking to quickly add Better-Nice-Select to your project? Use CDN, provided for free by the folks at UNPKG, using a package manager or need to download the source files? [Head to the downloads page]({% link sites/getting-started/download.markdown %}). 

&nbsp;

#### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load the CSS.

{% highlight html %}
<link rel="stylesheet" href="https://unpkg.com/better-nice-select@1.0.0/dist/css/better-nice-select.min.css">
{% endhighlight %}

&nbsp;

#### JS

Place the following `script`/s near the end of your pages, right before the closing `</body>` tag, to enable them.
{% highlight html %}
<script src="https://unpkg.com/better-nice-select@1.0.0/dist/js/better-nice-select.min.js"></script>
{% endhighlight %}

&nbsp;

## **Template**

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and a viewport meta tag for proper responsive behaviors.

For the Better-Nice-Select component, we use [Font Awesome 6](https://fontawesome.com/search) as the default icons, but we do not need to import the icons link. If you want to change the icons, look in the docs and set a different default icon set or use your own icons.

Put it all together, your pages should look like the following:

{% highlight html %}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hello, Better-Nice-Select!</title>
    <link rel="stylesheet" href="https://unpkg.com/better-nice-select@1.0.0/dist/css/better-nice-select.min.css">
  </head>
  <body>
    <div>
    ...
    </div>

    <script src="https://unpkg.com/better-nice-select@1.0.0/dist/js/better-nice-select.min.js"></script>
  </body>
</html>
{% endhighlight %}

&nbsp;