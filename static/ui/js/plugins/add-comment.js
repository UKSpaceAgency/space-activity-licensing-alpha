'use strict'

var $ = window.$

/**
 * Helper function to reveal commenting system and mock
 * comment flow on a per-question basis
 */
function Comment(element, config) {

  // Default options
  var options = {
    buttonHideClass: 'hidden',
    activeClass: 'comments--active',
    totalComments: '[data-comment-total]',
    addComment: '[data-comment-add-comment]',
    addCommentBlock: '[data-comment-add]',
    buttonSubmit: '[data-comment-add-submit]',
    buttonDiscard: '[data-comment-add-discard]',
    commentBlock: '[data-comment-block]',
    input: '[data-file-input]',
    textarea: '[data-textarea]',
    byline: '',
    template: ''
  }

  $.extend(options, config)

  // Private variables
  var open = false;
  var el = $(element);
  var total = el.find(options.totalComments);
  var addButton = el.find(options.addComment);
  var addCommentBlock = el.find(options.addCommentBlock);
  var submitButton = el.find(options.buttonSubmit);
  var discardButton = el.find(options.buttonDiscard);
  var comments = el.find(options.commentBlock);
  var textarea = el.find(options.textarea);

  // base setup
  function init() {
    calculateComments();

    addButton.on('click', function() {
      if (!open) {
        this.classList.add(options.buttonHideClass);
        el.addClass(options.activeClass);
        open = !!open;
      }
    })

    submitButton.on('click', function(event) {
      event.target.classList.add('loading');
    })

    discardButton.on('click', function(event) {
      var input = el.find(options.input);
      textarea.val('');
      addButton.removeClass(options.buttonHideClass);
      el.removeClass(options.activeClass);
      input.replaceWith(input.val('').clone(true));
      $('[data-file-text]', el).val('');
      open = false;
    })
  }

  function calculateComments() {
    if (comments.length > 0) {
      total.text(comments.length);
    }
  }

  function comment() {
    var commentObject = {};

    if (textarea.val() !== '' || textarea.val().length > 0) {
      commentObject['text'] = textarea.val();
    }

  }

  function upload() {



  }

  /**
   * Expose public methods
   */
  var self = {
    init: init,
    comment: comment,
    upload: upload
  };

  return self;

}
