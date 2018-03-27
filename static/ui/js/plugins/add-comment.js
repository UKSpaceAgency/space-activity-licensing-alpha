'use strict'

var $ = window.$
var mustache = window.Mustache;

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
    template: '<article class="box box--padded has-byline comment-admin" data-comment-block="true"><div class="byline spacing-bottom--single"><i class="icon icon--byline icon-account-admin"><span class="visually-hidden">account</span></i><h3 class="heading-small">Rachel Griffith</h3><time class="time" datetime="2018-03-26T19:34:15+00:00">{{date}}</time></div><article><div class="long-form">{{text}}</div></article><div class="comment-attachments">{{#file}}<p><strong>Comment attachments</strong></p><ul class="list list-inline"><li class=""><a href="/pdfs/disposal-discovery.pdf">{{file}}</a></li></ul>{{/file}}</div></article>'
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
  var input = el.find(options.input);

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
      comment();
    })

    discardButton.on('click', function(event) {
      discard();
    })
  }

  function discard() {
    textarea.val('');
    addButton.removeClass(options.buttonHideClass);
    el.removeClass(options.activeClass);
    input.replaceWith(input.clone(true));
    open = false;
  }

  function calculateComments() {
    if (comments.length > 0) {
      total.text(comments.length);
    }
  }

  function comment() {
    if (textarea.val() !== '' || textarea.val().length > 0) {
      submitButton.addClass('spinner spinner--active');
      post();
    }
  }

  function post() {
    var commentObject = {
      text: textarea.val(),
      file: input.val(),
      date: new Date(Date.now()).toLocaleString()
    };

    var post = $(Mustache.render(options.template, commentObject));
    setTimeout(function () {
      submitButton.removeClass('spinner spinner--active');
      addCommentBlock.after(post);
      discard();
    }, 1000);

  }

  /**
   * Expose public methods
   */
  var self = {
    init: init
  };

  return self;

}
