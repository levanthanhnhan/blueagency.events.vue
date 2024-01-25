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
