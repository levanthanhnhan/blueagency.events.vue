<template>
  <nav id="header" class="fixed w-full z-30 top-0 text-white">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center nav-logo">
        <router-link :to="'/'">
          <img
            class="w-24"
            id="imgLogo"
            src="../../../src/assets/images/logo.png"
          />
        </router-link>
      </div>
      <div class="block lg:hidden bg-blur border rounded-lg mr-[20px]">
        <div
          class="flex items-center p-2 text-gray-200 hover:text-primary focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          <div id="nav-toggle" class="tham tham-e-squeeze tham-w-6">
            <div class="tham-box">
              <div class="tham-inner bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="text-lg lg:flex justify-end flex-1 items-center uppercase">
          <li
            class="mr-3 nav-item"
            v-for="navItem in navItems"
            v-bind:key="navItem.id"
          >
            <p
              v-scroll
              @click="goTo(`${navItem.id}`)"
              :name="navItem.id"
              class="inline-block text-gray-100 no-underline hover:text-primary hover:scale-125 hover:font-semibold py-2 px-4 transition-all"
            >
              {{ $t("nav." + `${navItem.id}`) }}
            </p>
          </li>
        </ul>
        <div class="mr-3 nav-item">
          <div class="inline-block text-gray-100 no-underline py-2 px-4">
            <LanguageButton></LanguageButton>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageButton from "./LanguageButton.vue";
import common from "@/utils/common";

export default {
  components: { LanguageButton },
  data() {
    return {
      navItems: [
        {
          id: "home",
        },
        {
          id: "about",
        },
        {
          id: "service",
        },
        {
          id: "client",
        },
        {
          id: "contact",
        },
      ],
    };
  },
  methods: {
    goTo(id) {
      this.$router.push("/");
      const el = document.querySelector(`#${id}`);
      if (el != undefined) {
        let coord = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scroll({ top: coord, behavior: "smooth" });
      }
    },
    scrollNavBar() {
      var header = document.getElementById("header");
      var navMenuDiv = document.getElementById("nav-content");

      document.addEventListener("scroll", function () {
        /*Apply classes for slide in bar*/
        var scrollpos = window.scrollY;

        if (scrollpos > 10) {
          header.classList.add("gradient-animation");
        } else if (
          !common.isUrlHasSub() &&
          navMenuDiv.classList.contains("hidden")
        ) {
          header.classList.remove("gradient-animation");
        }
      });
    },
    toggleCheckParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    },
    toggleCheck(e) {
      var navMenuDiv = document.getElementById("nav-content");
      var navMenu = document.getElementById("nav-toggle");
      var header = document.getElementById("header");
      var tham = document.querySelector(".tham");
      var target = (e && e.target) || (event && event.srcElement);

      //Nav Menu
      if (!this.toggleCheckParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (this.toggleCheckParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
            header.classList.add("gradient-animation");
          } else {
            navMenuDiv.classList.add("hidden");
            if (!common.isUrlHasSub() && window.scrollY < 10) {
              header.classList.remove("gradient-animation");
            }
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
          tham.classList.remove("tham-active");
          if (!common.isUrlHasSub() && window.scrollY < 10) {
            header.classList.remove("gradient-animation");
          }
        }
      }
    },
    initMenuNav() {
      const tham = document.querySelector(".tham");

      tham.addEventListener("click", () => {
        tham.classList.toggle("tham-active");
      });
    },
  },
  mounted() {
    this.scrollNavBar();
    this.initMenuNav();
    document.onclick = this.toggleCheck;
  },
};
</script>
