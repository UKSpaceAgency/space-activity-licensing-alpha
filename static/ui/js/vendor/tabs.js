/* global window, location, document */
// http://jonathantneal.github.io/posthtml-aria-tabs/

document.addEventListener('DOMContentLoaded', function () {
  var cache = {};
  var last;

  Array.prototype.forEach.call(document.querySelectorAll('[role="tablist"]'), function (tablist) {
    Array.prototype.forEach.call(tablist.querySelectorAll('[href^="#"][role="tab"]'), function (tab, index, tabs) {
      cache[tab.hash] = [tab, document.getElementById(tab.getAttribute('aria-controls'))];

      if (tab.getAttribute('aria-selected') === 'true') {
        last = cache[''] = cache[tab.hash];
      } else {
        tab.setAttribute('tabindex', -1);
      }

      tab.addEventListener('keydown', function (event) {
        var next = event.keyCode === 37 ? tabs[index - 1] : event.keyCode === 39 ? tabs[index + 1] : null;

        if (next) {
          location.hash = next.hash;
          next.focus();
        }
      });

      // added this to deselect a tab on second click
      // might need polyfilling
      tab.addEventListener('click', function (event) {
        var href = tab.href.split('#')[1];
        href = '#' + href;

        if (location.hash === href) {
          if ('replaceState' in history) {
            event.preventDefault();
            window.history.replaceState({}, document.title, window.location.pathname);
            onhashchange();
          }

        }
      });
    });
  });

  window.addEventListener('hashchange', onhashchange);

  onhashchange();

  function onhashchange() {
    var tab = cache[location.hash];

    if (tab) {
      if (last) {
        last[0].removeAttribute('aria-selected');
        last[0].setAttribute('tabindex', -1);
        last[1].setAttribute('hidden', '');
      }

      tab[0].setAttribute('aria-selected', 'true');
      tab[0].removeAttribute('tabindex');
      tab[1].removeAttribute('hidden', '');

      last = tab;
    }

    else if (!tab) {
      if (last) {
        last[0].removeAttribute('aria-selected');
        last[0].setAttribute('tabindex', -1);
        last[1].setAttribute('hidden', '');
      }
    }
  }
});