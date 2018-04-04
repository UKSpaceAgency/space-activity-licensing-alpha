/* global $ */
/* global jQuery */

$(document).ready(function () {

  var commentTarget = $('[data-comment]');

  if (commentTarget) {
    var activeCommentBlocks = [];

    // loop through target items and apply the plugin function
    commentTarget.each(function(i, target) {
      var comment = new Comment(target);
      activeCommentBlocks.push(comment);
      comment.init();
    })
  }

})
