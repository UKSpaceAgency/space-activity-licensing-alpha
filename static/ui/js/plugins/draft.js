'use strict'

var $ = window.$

/**
 * Helper function to reveal commenting system and mock
 * comment flow on a per-question basis
 */
function Draft(element) {

  // Default options
  var options = {}

  // Private variables
  var el = $(element)
  var textarea = el.find('textarea')
  var booleans = el.find('[data-boolean]')
  var isInitiallyChecked = false
  var radios;

  function debounce(func) {
    var timeout
    return function() {
      var context = this
      var args = arguments
      clearTimeout(timeout)
      timeout = setTimeout(function() {
        timeout = null
        func.apply(context, args)
      }, 200)
    }
  }

  var textCounter = debounce(function() {
    debounce(length(textarea))
  }, 250)

  // base setup
  function init() {
    if (!booleans.length) {
      return
    }

    radios = booleans.find('input:radio')

    radios.each(function(i, v) {
      if (v.hasAttribute('checked')) {
        isInitiallyChecked = true
      }
    })

    if (isInitiallyChecked) {
      return
    }

    if (textarea.length) {
      length(textarea)

      textarea.on('keyup', function() {
        textCounter()
      })
    }

  }


  function length(textarea) {
    if (textarea.val().length === 0) {
      radios.eq(0).prop('checked', false)
    }

    else {
      radios.eq(0).prop('checked', true)
    }
  }


  /**
   * Expose public methods
   */
  var self = {
    init: init
  }

  return self

}
