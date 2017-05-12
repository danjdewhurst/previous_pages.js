# previous_pages.js
This JavaScript library builds an array of the page title and URL of every page that's visited with the library included. This can be useful for things like dynamic back buttons, analytics, 404 pages etc.

## Depenedencies
https://github.com/js-cookie/js-cookie

## Functions
* get_previous_page(int index) - Returns the previous page, or the previous page with the given index.
* clear_previous_pages() - Removes the `previous_pages` cookie.

## Notes
Out of the box, this library gets the page title, and takes the part before ` | `. If this doesn't suit your needs, change the following:
```javascript
var new_page = {
  url: window.location.href,
  title: document.title.split(' | ')[0], // <-------
};
```
