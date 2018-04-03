'use strict'

var $ = window.$
var mustache = window.Mustache;

// Default options
var options = {
  activated: 'data-assign-active',
  template: '<div class="tags"><ul class="tags__items">{{#items}}<li data-index="{{index}}" data-tag="{{value}}"><a href="#" class="tag">{{label}}<span class="tag-remove">&times;</span></a></li>{{/items}}</ul></div>'
}

/**
 * Helper function to extend a <select multiple
 * so as to create tags for assigning / priorities etc
 */
function Tag(element, config) {

  $.extend(options, config)

  // Private variables
  var el = $(element);
  var select = el.find('select');
  var html;
  var initArray; // keep a clean version for reference

  // base setup
  function init() {
    initArray = updateArray();
    renderTags();

    select.on('change', function() {
      renderTags();
    });

    el.on('click', '[data-tag]', function(event) {
      console.log(event.target)
      event.preventDefault();
      remove(event.target.value);
    });
  }

  function updateArray() {
    // @todo @refactor - weirdly, mapping returns on object rather than an array
    // of objects, so doing this like this temporarily
    var arr = [];
    select.find('option').each(function(i, v) {
      arr.push({
        value: v.value,
        label: v.text,
        selected: v.selected,
        index: i
      })
    });

    return arr;
  }

  function renderTags() {
    if (html) {
      html.remove();
    }
    var arr = updateArray();
    var items = arr.filter(function(v) {
      return v.selected;
    });
    html = $(mustache.render(options.template, {items: items}));
    el.after(html);
  }

  function add(item) {

  }

  function remove(item) {

  }

  function getValues() {
    return initArray;
  }

  function removeAll() {

  }

  function destroy() {

  }

  /**
   * Expose public methods
   */
  var self = {
    init: init,
    add: add,
    remove: remove,
    removeAll: removeAll
  };

  return self;

}
