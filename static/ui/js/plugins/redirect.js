'use strict'

var $ = window.$

/**
 * Change link on an id item to redirect it
 */
function Redirect(element) {

  // Default options
  var options = {}

  // Private variables
  var el = $(element);
  var data = '';
  var initialLink;
  var action;

  // base setup
  function init() {
    data = el.data('redirect').split(',');
    action = $(data[0]);
    initialLink = action.prop('href');
    var input = el.find('input');
    input.on('click', function(e) {
      if ($(e.target).is(':checked')) {
        action.prop('href', data[1]);
      }
      else {
        action.prop('href', initialLink);
      }
    });
  }

  /**
   * Expose public methods
   */
  var self = {
    init: init
  }

  return self
}
