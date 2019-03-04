---
slug: '/webfonts'
date: '2019-03-04'
title: 'Using webFonts'
---

### Installing Webfonts

Webfonts are supported by all major browser platforms but not all in the same way. There are currently four different font formats that must be included in order to target all browsers. This includes TTF, WOFF, EOT and SVG.

## Upload your webfonts

You must upload your webfont kit to your website. They should be in or near the same directory as your CSS files.

## Include the webfont stylesheet

A special CSS @font-face declaration helps the various browsers select the appropriate font it needs without causing you a bunch of headaches. Learn more about this syntax by reading the Fontspring blog post about it. The code for it is as follows:

```javascript
@font-face{
	font-family: 'MyWebFont';
	src: url('WebFont.eot');
	src: url('WebFont.eot?#iefix') format('embedded-opentype'),
	     url('WebFont.woff') format('woff'),
	     url('WebFont.ttf') format('truetype'),
	     url('WebFont.svg#webfont') format('svg');
}
```

_All_ you have to do is link to the stylesheet in your HTML, like this:

```javascript
<link rel="stylesheet" href="stylesheet.css" type="text/css" charset="utf-8" />
```
