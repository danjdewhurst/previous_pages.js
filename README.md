# previous_pages.js
This JavaScript library builds an array of the page title and URL of every page that's visited with the library included. This can be useful for things like dynamic back buttons, analytics, 404 pages etc.

## Depenedencies
https://github.com/js-cookie/js-cookie

## Functions
* `get_previous_page(int index)` - Returns the previous page, or the previous page with the given index.
* `get_previous_pages()` - Returns all previous pages.
* `clear_previous_pages()` - Removes the `previous_pages` cookie.

## Example Usage
```javascript
var previous_page = get_previous_page();
console.log('Title: '+previous_page.title+' URL: '+previous_page.url);
```

## Notes
Out of the box, this library gets the page title, and takes the part before ` | `. If this doesn't suit your needs, change the following:
```javascript
var new_page = {
  url: window.location.href,
  title: document.title.split(' | ')[0], // <-------
};
```
The array we store as a cookie is limited to 20 items to stop the cookie from becoming huge.
