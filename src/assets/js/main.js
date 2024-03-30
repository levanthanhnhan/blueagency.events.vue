(function ($) {
  "use strict";

  var themeApp = {
    mobileMenu() {
      $(".navbar-nav")
        .find(".menu-item-has-children")
        .prepend('<span class="submenu-button"></span>');
      $(".menu-item-has-children")
        .find(".submenu-button")
        .on("click", function () {
          $(this).toggleClass("opened");
          $(this).siblings("ul").slideToggle();
        });
    },
    init: async function () {
      themeApp.mobileMenu();
    },
  };

  $(document).ready(function () {
    themeApp.init();

    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
    });
  });
})(jQuery);
