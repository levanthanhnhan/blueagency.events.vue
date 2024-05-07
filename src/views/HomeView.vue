<script setup>
import Cover from "../components/home/Cover.vue";
import About from "../components/home/About.vue";
import Service from "../components/home/Services.vue";
import Client from "../components/home/Client.vue";
import Contact from "../components/home/Contact.vue";
import NewService from "../components/home/NewService.vue";
</script>

<template>
  <div class="pb-8">
    <Cover />
    <About />
    <NewService />
    <Client />
    <Contact />
  </div>
</template>

<script>
import common from "@/utils/common";

export default {
  methods: {
    setHeaderNav() {
      var header = document.getElementById("header");
      var navMenuDiv = document.getElementById("nav-content");

      if (!common.isUrlHasSub() && navMenuDiv.classList.contains("hidden")) {
        header.classList.remove("gradient-animation");
      }
    },
  },
  mounted() {
    this.setHeaderNav();
    // common.getGallery();
  },
};
</script>
