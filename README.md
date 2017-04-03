Barfiller.js
=========

A simple jQuery plugin that gives you percentage-based animated bar filling...

[View Demo](http://9bitstudios.github.com/barfiller/) | [Buy Author a Beer at the Bar](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NNCJ79B2W6MUL)

### How to Use 

Set up some HTML like the following...

```html
<div id="bar1" class="barfiller">
    <span class="tip"></span>
    <span class="fill" data-percentage="50"></span>
</div>
```

And then call Barfiller on it...

```javascript
$(document).ready(function(){
    $('#bar1').barfiller();
});
```

The data-percentage attribute is what sets the percentage that the bar animates to.

### Options

Below are some options that you can pass in to Barfiller...

| Option | Value | Default Value | Description | Example |
| --- | --- | --- | --- | --- |
barColor | String (Hex value) | #16b597 | Sets the color of the animating fill bar | barColor: "#990000"
tooltip | Boolean | true | Sets whether or not to show the tooltip above the animating bar | tooltip: false
duration | Integer (in milliseconds) | 1000 | Sets the amount of time the fill animation takes in milliseconds | duration: 500
animateOnResize | Boolean | true | Sets whether or not to redo the animation when the user resizes the window or switches device views | animateOnResize: false
symbol | String | % | Allows you to set the symbol used in tooltips | symbol: ""
