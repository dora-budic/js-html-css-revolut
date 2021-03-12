$(document).ready(function () {
  dropdownMenu();
});

function dropdownMenu() {
  // Prendo i link della navbar
  var links = $('.header-right .menu li');

  links.mouseenter(function() {
    // Prendo la posizione di this
    var linkPos = links.index(this);

    // Prendo i dropdown menus
    var menus = $('.header-right .dropdown-menus div');

    // Prendo il menu con la stessa posizione di this e gli do la classe active
    menus.eq(linkPos).addClass('active');
  });

  links.mouseleave(function() {
    // Prendo la posizione di this
    var linkPos = links.index(this);

    // Prendo i dropdown menus
    var menus = $('.header-right .dropdown-menus div');

    // Prendo il menu con la stessa posizione di this e gli tolgo la classe active
    menus.eq(linkPos).removeClass('active');
  });
}
