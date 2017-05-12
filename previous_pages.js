/**
 * previous_pages.js
 * https://github.com/danjdewhurst/previous_pages.js
 */

/**
 * Setup our initial vars.
 */
var combined_pages = [];

/**
 * Grab the current page details.
 * @type {Object}
 */
var new_page = {
  url: window.location.href,
  title: document.title.split(' | ')[0],
};

/**
 * Grab our cookie if it exists.
 * @type {Object}
 */
var previous_pages = Cookies.getJSON('previous_pages');

/**
 * Loop through our previous_pages object, and push them into our combined_pages array.
 */
if(previous_pages) {
  for (var i = 0; i < previous_pages.length; i++) {
    combined_pages.push(previous_pages[i]);
  }
}

/**
 * Add the new_page object into oru combined_pages array.
 */
if (combined_pages.length > 0) {
  /**
   * Check that the last item in our array isn't the same as our new_page object.
   */
  if (combined_pages[combined_pages.length - 1].url != new_page.url) {
    combined_pages.push(new_page);
  }
} else {
  combined_pages.push(new_page);
}

/**
 * Set/update our cookie.
 */
Cookies.set('previous_pages', combined_pages);

/**
 * Helper functions.
 */

/**
 * Get the previous page.
 */
function get_previous_page(var index = null) {
  if(index != null) {
    return previous_pages[index];
  }

  return previous_pages[previous_pages.length];
}

/**
 * Get all previous pages.
 */
function get_previous_pages() {
  return previous_pages;
}

/**
 * Clear the cookie.
 */
function clear_previous_pages() {
  Cookies.remove('previous_pages');
}
