/* global $ */
/* global jQuery */

$(document).ready(function () {

  var accordion = $('[data-accordion]');
  var commentTarget = $('[data-comment]');

  // loop through target items and apply the plugin function
  accordion.each(function(i, target) {
    new Accordion(target);
  });

  if (commentTarget) {

    commentTarget.each(function(i, target) {
      var comment = new Comment(target);
      comment.init();
    })
  }

})
