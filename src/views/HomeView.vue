<script setup>
import Cover from "../components/home/Cover.vue";
import About from "../components/home/About.vue";
import Service from "../components/home/Service.vue";
import Client from "../components/home/Client.vue";
import Contact from "../components/home/Contact.vue";
</script>

<template>
  <Cover ref="cover" />
  <About ref="about" />
  <Service ref="service" />
  <Client ref="client" />
  <Contact ref="contact" />
</template>

<script>
import common from "@/utils/common";
export default {
  mounted() {
    var header = document.getElementById("header");
    var navMenuDiv = document.getElementById("nav-content");

    if (!common.isUrlHasSub() && navMenuDiv.classList.contains("hidden")) {
      header.classList.remove("gradient-animation");
    }
  },
};
</script>
