'use strict'

var $ = window.$
var mustache = window.Mustache

/**
 * Helper function to reveal commenting system and mock
 * comment flow on a per-question basis
 */
function Comment(element, tabs) {

  // Default options
  var options = {
    buttonHideClass: 'hidden',
    activeClass: 'comments--active',
    totalComments: '[data-tab-count]',
    addComment: '[data-comment-add-comment]',
    addCommentBlock: '[data-comment-add]',
    buttonSubmit: '[data-comment-add-submit]',
    buttonDiscard: '[data-comment-add-discard]',
    subject: '[data-subject]',
    select: 'select',
    checkbox: ':checkbox',
    commentBlock: '[data-comment-block]',
    file: '[data-file]',
    textarea: '[data-textarea]',
    template: '<article class="box box--flat has-byline {{extra}}" data-comment-block="true"><div class="grid-row"><div class="byline column-half spacing-bottom--single"><i class="icon icon--byline icon-account"><span class="visually-hidden">account</span></i><h3 class="heading-small"><span>{{by}}</span></h3><time class="time" datetime="2018-03-26T19:34:15+00:00">10.04am 22nd March 2018</time></div>{{#high}}<div class="column-half"><div class="notice"><i class="icon icon-warning icon-warning--red icon--large"><span class="visually-hidden">High priority</span></i><strong class="bold-small red">High priority</strong></div></div>{{/high}}</div><article>{{#subject}}<h3 class="heading-small spacing-bottom--single">{{subject}}</h3>{{/subject}}<div class="long-form">{{text}}</div></article><div class="grid-row"><div class="column-half"><p class="heading-small"><span><span class="quiet">Deadline</span><br>4 June 2018</span></p></div><div class="column-half"><p class="heading-small"><span><span class="quiet">Assigned to</span><br>{{assigned}}</span></p></div></div><div class="grid-row spacing-top--single"><div class="column-full">{{#file}}<p><strong>Comment attachments</strong></p><p><a href="/pdfs/disposal-discovery.pdf">{{file}}</a></p>{{/file}}</div></div></article>'
  }


  // Private variables
  var open = false
  var el = $(element)
  var file = el.find(options.file)
  var check = el.find(options.checkbox)
  var total = el.find(options.totalComments)
  var addButton = el.find(options.addComment)
  var submitButton = el.find(options.buttonSubmit)
  var select = el.find(options.select)
  var textarea = el.find(options.textarea)

  var tab = tabs.filter(function(i, v) {
    return v.getAttribute('data-tab') === el.data('comment')
  })

  var fileUpload = new Fileupload(file)
  fileUpload.init()

  // base setup
  function init() {
    calculateComments()

    addButton.on('click', function() {
      if (!open) {
        this.classList.add(options.buttonHideClass)
        el.addClass(options.activeClass)
        open = !!open
        textarea.focus()
      }
    })

    submitButton.on('click', function(event) {
      comment()
    })

    el.find(options.buttonDiscard).on('click', function(event) {
      discard()
    })
  }

  function discard() {
    fileUpload.clearText()
    textarea.val('')
    var newInput = file.clone(true)
    addButton.removeClass(options.buttonHideClass)
    file.replaceWith(newInput).val('')
    fileUpload = new Fileupload(file)
    fileUpload.init()
    check.prop('checked', false)

    open = false
    el.removeClass(options.activeClass)
  }

  function calculateComments() {
    var comments = el.find(options.commentBlock)
    var len = comments.length
    tab.find('[data-tab-count]').text('(' + len + ')')
    if (len > 0) {
      addButton.text('Reply')
      el.addClass('hide-subject')
    }
  }

  function comment() {
    if (textarea.val() !== '') {
      submitButton.addClass('spinner spinner--active')
      post()
    }
  }

  function checked() {
    return check.is(':checked')
  }

  function post() {
    var sel = select.val()
    var person = el.find(options.addCommentBlock).data('comment-add')
    var commentObject = {
      text: textarea.val(),
      file: fileUpload.getValue(),
      date: new Date(Date.now()).toLocaleString(),
      by: person || 'Admin',
      subject: el.find(options.subject).val() || null,
      high: checked(),
      extra: person === 'Andy Assessor' ? '' : 'comment-admin',
      assigned: sel !== '' ? sel : 'No action'
    }

    // populate the template in the absence of using React client side...
    var post = $(Mustache.render(options.template, commentObject))

    // fake a 1 second loading period
    setTimeout(function () {
      submitButton.removeClass('spinner spinner--active')
      el.find(options.addCommentBlock).before(post)
      calculateComments()
      discard()

      setTimeout(function() {
        $('#spinner').removeClass('hidden')
      }, 1000)
    }, 1000)

  }

  /**
   * Expose public methods
   */
  var self = {
    init: init
  }

  return self

}
