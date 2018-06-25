/* global $ */
/* global jQuery */

$(document).ready(function () {

  var accordion = $('[data-accordion]');
  var commentTarget = $('[data-comment]');
  var redirect = $('[data-redirect]');

  if (redirect) {
    redirect.each(function(i, target) {
      var re = new Redirect(target);
      re.init();
    })
  }

  if (commentTarget) {
    var tabs = $('[data-tab]');
    commentTarget.each(function(i, target) {
      var comment = new Comment(target, tabs);
      comment.init();
    })
  }

  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  // loop through target items and apply the plugin function
  accordion.each(function(i, target) {
    new Accordion(target);
  });


  $('#autocomplete').tinyAutocomplete({
    url: '/ui/data/flat.json',
    maxItems: 7,
    showNoResults: true,
    onSelect: function(el, val) {
      if (val === null) {
        $('.results').html('All results for "' + $(this).val() + '"" would go here');
      }
      else {
        $(this).val(val.title);
        $('.results').html('<h1>' + val.title + '</h1>');
        if (val.target) {
          // ghastly - quick n dirty
          $(val.target).removeClass('js-hidden');
        }
      }
    }
  });


})
