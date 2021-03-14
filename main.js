$(document).ready(function () {
  dropdownMenu();
});

function dropdownMenu() {
  // Prendo i link della navbar
  var links = $('.header-center .menu li');

  links.mouseenter(function() {
    // Prendo la posizione di this
    var linkPos = links.index(this);

    // Prendo i dropdown menus
    var menus = $('.header-center .dropdown-menus > div');

    // Prendo il menu con la stessa posizione di this e gli do la classe active
    var menuPos = menus.eq(linkPos);
    menuPos.addClass('active');

    // Quandro entro nell' altro li, tolgo la classe al menu aperto
    $(this).siblings('li').mouseenter (function() {
      menuPos.removeClass('active');
    });

    // Quando esco dal menu o dallo div che contiene i link tolgo la classe al menu
    $('.dropdown-menus, .header-center').mouseleave(function () {
      menuPos.removeClass('active');
    });

  });

}
