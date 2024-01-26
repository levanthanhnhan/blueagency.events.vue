(function ($) {
  "use strict";

  // /* Register Fb Messenger */
  // window.fbAsyncInit = function () {
  // 	FB.init({
  // 		xfbml: true,
  // 		version: 'v10.0'
  // 	});
  // };

  // (function (d, s, id) {
  // 	var js, fjs = d.getElementsByTagName(s)[0];
  // 	if (d.getElementById(id)) return;
  // 	js = d.createElement(s);
  // 	js.id = id;
  // 	js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
  // 	fjs.parentNode.insertBefore(js, fjs);
  // }(document, 'script', 'facebook-jssdk'));

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
    async getOfferGallery() {
      await $.ajax({
        url: "/api/offers/adversiting",
        success: function (res) {
          var appendItems = "";
          res.items.forEach((item) => {
            var appendItem =
              "<a" +
              " href='" +
              item.url +
              "'" +
              " data-pswp-width='" +
              item.width +
              "'" +
              " data-pswp-height='" +
              item.height +
              "'" +
              " target='_blank'" +
              " >" +
              " <img" +
              " class='lazyload blur-img w-100 shadow-1-strong rounded'" +
              " src='" +
              res.scaleURL +
              `${item.public_id}.${item.format}` +
              "' />" +
              " </a>";
            appendItems += appendItem;
          });

          localStorage.setItem("offers", appendItems);
        },
      });
    },
    init: async function () {
      themeApp.mobileMenu();
      //await themeApp.getOfferGallery();
    },
  };

  $(document).ready(function () {
    themeApp.init();

    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
    });
  });
})(jQuery);
