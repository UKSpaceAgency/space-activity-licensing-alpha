/* global $ */
/* global jQuery */

$(document).ready(function () {

  var accordion = $('[data-accordion]');
  var commentTarget = $('[data-comment]');
  var fileUpload = $('[data-file]');

  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  // loop through target items and apply the plugin function
  accordion.each(function(i, target) {
    new Accordion(target);
  });


  fileUpload.each(function(i, target) {
    var file = new Fileupload(target);
    file.init();
  });

  if (commentTarget) {
    var tabs = $('[data-tab]');
    commentTarget.each(function(i, target) {
      var comment = new Comment(target, tabs);
      comment.init();
    })
  }

})
