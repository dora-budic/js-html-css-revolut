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
    var menus = $('.header-right .dropdown-menus > div');

    // Tolgo la classe al menu aperto
    menus.removeClass('active');
    // Prendo il menu con la stessa posizione di this e gli do la classe active
    var menuPos = menus.eq(linkPos);
    menuPos.addClass('active');

    // Quando esco dal menu o dal div che contiene i link tolgo la classe al menu
    $('.dropdown-menus, .header-right div.nav').mouseleave(function () {
      menuPos.removeClass('active');
    });

  });

}
