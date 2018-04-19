'use strict'
var $ = window.$

/**
 * Helper function to change basic look of file upload
 */
function Fileupload(element, config) {

  // Default options
  var options = {
    file: '[data-file-input]',
    text: '[data-file-text]',
    class: 'form-control-file',
    textClass: 'form-control__text--full'
  };

  $.extend(options, config)

  // Private variables
  var el = $(element);
  var input = el.find(options.file);
  var text = el.find(options.text);

  // base setup
  function init() {
    input.on('change',function(){
      update(input.val())
    })
    .addClass(options.class); // @joel - removed to preserve form control appearance
  }

  function update(val) {
    text.text(input.val());
    if (text.text() !== '') {
      text.addClass(options.textClass);
    }
  }

  function getValue() {
    return input.val();
  }

  function clearText() {
    text.text('').removeClass(options.textClass);
  }

  function destroy() {
    input.off('change');
  }
  /**
   * Expose public methods
   */
  var self = {
    init: init,
    update: update,
    getValue: getValue,
    clearText: clearText,
    destroy: destroy
  };

  return self;

}
