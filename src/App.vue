<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/nav/Nav.vue'
import Footer from './components/footer/Footer.vue'
</script>

<template>
  <header>
    <Nav />
  </header>
  <RouterView />
  <Footer />
</template>