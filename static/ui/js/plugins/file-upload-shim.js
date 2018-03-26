'use strict'

var $ = window.$

/**
 * Helper function to change basic look of file upload
 */
function Fileupload(element, config) {

  // Default options
  var options = {
    file: '[data-file-input]',
    text: '[data-file-text]'
  }

  $.extend(options, config)

  // Private variables
  var input = $(options.file, element)
  var text = $(options.text, element)

  // base setup
  function init() {
    input.on('change',function(){
      text.html(input.val())
    })
  }

  /**
   * Expose public methods
   */
  var self = {
    init: init
  }

  return self

}
