/* global $ */
/* global jQuery */

$(document).ready(function () {

  var commentTarget = $('[data-comment]')
  var fileUpload = $('[data-file]')

  // shim file upload
  fileUpload.each(function(i, target) {
    var file = new Fileupload(target)
    file.init()
  })

  if (commentTarget) {
    var activeCommentBlocks = []

    // loop through target items and apply the plugin function
    commentTarget.each(function(i, target) {
      var comment = new Comment(target)
      comment.init()
    })
  }

})
