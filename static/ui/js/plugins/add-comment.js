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
    checkbox: ':checkbox',
    commentBlock: '[data-comment-block]',
    file: '[data-file]',
    textarea: '[data-textarea]',
    template: '<article class="box box--padded has-byline comment-admin" data-comment-block="true"><div class="grid-row"><div class="byline column-half spacing-bottom--single"><i class="icon icon--byline icon-account"><span class="visually-hidden">account</span></i><h3 class="heading-small"><span>Simon Griffith</span></h3><time class="time" datetime="2018-03-26T19:34:15+00:00">10.04am 22nd March 2018</time></div>{{#high}}<div class="column-half"><div class="notice"><i class="icon icon-warning icon-warning--orange icon--large"><span class="visually-hidden">High priority</span></i><strong class="bold-small">High priority</strong></div></div>{{/high}}</div><article><div class="long-form">{{text}}</div></article><div class="grid-row"><div class="column-half"><p class="heading-small"><span><span class="quiet">Deadline</span><br>4 June 2018</span></p></div><div class="column-half"><p class="heading-small"><span><span class="quiet">Assigned to</span><br>Joel Hobbs</span></p></div></div><div class="grid-row spacing-top--single"><div class="column-full">{{#file}}<p><strong>Comment attachments</strong></p><p><a href="/pdfs/disposal-discovery.pdf">{{file}}</a></p>{{/file}}</div></div></article>'
  }

  $.extend(options, config)

  // Private variables
  var open = false;
  var el = $(element);
  var file = el.find(options.file);
  var check = el.find(options.checkbox);
  var total = el.find(options.totalComments);
  var addButton = el.find(options.addComment);
  var submitButton = el.find(options.buttonSubmit);
  var textarea = el.find(options.textarea);

  var fileUpload = new Fileupload(file);
  fileUpload.init();

  // base setup
  function init() {
    calculateComments();

    addButton.on('click', function() {
      if (!open) {
        this.classList.add(options.buttonHideClass);
        el.addClass(options.activeClass);
        open = !!open;
        textarea.focus();
      }
    })

    submitButton.on('click', function(event) {
      comment();
    })

    el.find(options.buttonDiscard).on('click', function(event) {
      discard();
    })
  }

  function discard() {
    fileUpload.clearText();
    textarea.val('');
    var newInput = file.clone(true);
    addButton.removeClass(options.buttonHideClass);
    file.replaceWith(newInput).val('');
    fileUpload = new Fileupload(file);
    fileUpload.init();
    check.prop('checked', false);

    open = false;
    el.removeClass(options.activeClass);
  }

  function calculateComments() {
    var comments = el.find(options.commentBlock);
    total.text(comments.length);
  }

  function comment() {
    if (textarea.val() !== '') {
      submitButton.addClass('spinner spinner--active');
      post();
    }
  }

  function checked() {
    return check.is(':checked')
  }

  function post() {
    var commentObject = {
      text: textarea.val(),
      file: fileUpload.getValue(),
      date: new Date(Date.now()).toLocaleString(),
      high: checked()
    };

    // populate the template in the absence of using React client side...
    var post = $(Mustache.render(options.template, commentObject));

    // fake a 1 second loading period
    setTimeout(function () {
      submitButton.removeClass('spinner spinner--active');
      el.find(options.addCommentBlock).after(post);
      calculateComments();
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
