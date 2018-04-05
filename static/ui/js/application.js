/* global $ */
/* global jQuery */

$(document).ready(function () {

  // var selectAssign = $('[data-assign]');
  var commentTarget = $('[data-comment]');

  // loop through target items and apply the plugin function
  // selectAssign.each(function(i, target) {
  //   var tag = new Tag(target);
  //   tag.init();
  // });

  if (commentTarget) {

    commentTarget.each(function(i, target) {
      var comment = new Comment(target);
      comment.init();
    })
  }

})
