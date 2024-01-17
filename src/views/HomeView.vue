<script setup>
import Cover from '../components/home/Cover.vue'
import About from '../components/home/About.vue'
import Offers from '../components/home/Offers.vue'
import Clients from '../components/home/Clients.vue'
import Contact from '../components/home/Contact.vue'
</script>

<template>
  <Cover ref="cover"/>
  <About ref="about"/>
  <Offers ref="offers"/>
  <Clients ref="clients"/>
  <Contact ref="contact"/>
</template>