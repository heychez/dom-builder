# DOMBuilder JS
Builds Html elements from your JavaScript code in a simple and fast way.

[![NPM](https://img.shields.io/badge/npm-package-orange.svg)](https://www.npmjs.com/package/dom-builder)
[![Github](https://img.shields.io/badge/github-repo-lightgrey.svg)](https://www.github.com/heychez/dom-builder)

## Guide

### Installation
> npm install dom-builder

### Use it
```html
    <script type="text/javascript" src="node_modules/dom-builder/dom-builder.js"></script>
```
or
```js
    var DOMBuilder = require('dom-builder');
```
    

My div container
```html
    <div id="fruits"></div>
```

JS Code
```js
    var myElement = new DOMBuilder();
```
```js
    myElement.ele('ul', {class: 'delicious'})
                  .ele('li', 'apple')
                  .ele('li')
                      .ele('a', {href: '#', class: 'orange'}, 'orange')
                  .cl()
                  .ele('li', 'coconut')
                  .ele('br')
                  .ele('li')
                      .val('berries')
                  .cl()
              .cl();
```
```js
    var fruits = document.getElementById('fruits');
    fruits.appendChild(myElement.parse(document));
```
> Self closing tags like **BR** or **INPUT** don't need to close, just write **.ele('br')** without to add **.cl()**

> You can get the **string** html code with **myElement.body** or **myElement.toString()**

Finally
```html
    <div id="fruits">
        <ul class="delicious">
            <li>apple</li>
            <li>
                <a href="#" class="orange">orange</a>
            </li>
            <li>coconut</li>
            <br>
            <li>berries</li>
        </ul>
    </div>
```

### And that's all!
