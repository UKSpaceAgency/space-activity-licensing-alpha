'use strict'

var $ = window.$
var mustache = window.Mustache;

// Default options
var options = {
  activated: 'data-assign-active',
  template: '<div class="tags"><ul class="tags__items">{{#items}}<li class="tag"><span class="tag__text">{{label}}</span><a class="close" href="#" data-index="{{index}}" data-tag="{{value}}">&times;</a></li>{{/items}}</ul></div>'
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

  // base setup
  function init() {
    renderTags();

    select.on('change', function() {
      renderTags();
    });

    // delegate the tag close click to the container
    el.on('click', '[data-tag]', function(event) {
      event.preventDefault();
      remove(event.target);
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

  //
  function renderTags() {
    if (html) {
      html.remove();
    }
    var arr = updateArray();
    var items = arr.filter(function(v) {
      return v.selected;
    });
    html = $(mustache.render(options.template, {items: items}));
    select.after(html);
  }

  // accepts element and toggles the index of the option
  // element to de-select. Removes tag
  function remove(element) {
    var index = element.getAttribute('data-index');
    select[0].options[index].selected = false;
    element.parentNode.parentNode.removeChild(element.parentNode);
  }

  /**
   * Expose public methods
   */
  var self = {
    init: init
  };

  return self;

}
