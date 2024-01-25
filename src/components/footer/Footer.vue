<template>
  <footer
    class="relative z-10 bg-white pt-20 pb-10 lg:pb-20 gradient-animation"
  >
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-around">
        <!-- Logo -->
        <div class="w-full px-4 md:w-1/3">
          <div class="w-full mb-10">
            <a href="../" class="mb-6 inline-block max-w-[160px]">
              <img src="../../../src/assets/images/logo.png" alt="" />
            </a>
            <p class="text-white mb-7 text-sm">
              BLUE AGENCY EVENT AND COMMUNICATION COMPANY LIMITED
            </p>
          </div>
        </div>
        <!-- Contact -->
        <div class="w-full px-4 md:w-1/3">
          <div class="w-full mb-10">
            <h4 class="text-3xl font-semibold text-white mb-9">
              {{ $t("footer.contact.header") }}
            </h4>
            <ul class="space-y-3">
              <li class="flex items-center">
                <p
                  class="flex items-center justify-center w-8 h-8 mr-3 border rounded-full border-stroke sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <span
                  class="text-lg font-light text-gray-200 leading-[1.5px]"
                  >{{ $t("footer.contact.address") }}</span
                >
              </li>
              <li class="flex items-center text-sm font-medium">
                <p
                  class="flex items-center justify-center w-8 h-8 mr-3 border rounded-full border-stroke sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <span class="text-lg font-light text-gray-200 leading-[1.5px]"
                  >+84 935 66 33 97</span
                >
              </li>
              <li class="flex items-center text-sm font-medium">
                <p
                  class="flex items-center justify-center w-8 h-8 mr-3 border rounded-full border-stroke sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
                    />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
                    />
                  </svg>
                </p>
                <span class="text-lg font-light text-gray-200 leading-[1.5px]"
                  >group@blueagency.events</span
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- Follow -->
        <div class="w-full px-4 md:w-1/3">
          <div class="w-full mb-10">
            <h4 class="text-3xl font-semibold text-white mb-9">
              {{ $t("footer.follow.header") }}
            </h4>
            <div class="flex items-center mb-6">
              <a
                href="javascript:void(0)"
                class="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  class="fill-current"
                >
                  <path
                    d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z"
                  />
                </svg>
              </a>
              <a
                href="javascript:void(0)"
                class="flex items-center justify-center w-8 h-8 mr-3 border rounded-full text-dark hover:border-primary hover:bg-primary border-stroke hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  class="fill-current"
                >
                  <path
                    d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z"
                  />
                </svg>
              </a>
            </div>
            <p class="text-base text-gray-200">
              &copy; 2021, Blue Agency Events
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Facebook Chat -->
    <div id="fb-root"></div>
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="560849977295975"
    ></div>

    <!-- Button Scroll To Top -->
    <ButtonScrollTop />
  </footer>
</template>

<script>
import ButtonScrollTop from "./ButtonScrollTop.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    ButtonScrollTop,
  },
  methods: {
    registerFacebook() {
      /* Register Fb Messenger */
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: "v10.0",
        });
      };
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    },
  },
  mounted() {
    //this.registerFacebook();
  },
};
</script>
