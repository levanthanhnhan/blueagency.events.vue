<script setup>
import { RouterView } from 'vue-router'
import NavHome from './components/nav/NavHome.vue'
import NavSub from './components/nav/NavSub.vue'
import Footer from './components/footer/Footer.vue'

var isSubUrl = window.location.pathname.split("/").length > 2 ? true : false;
</script>

<template>
  <header class="main-header">
    <NavSub v-if="isSubUrl" />
    <NavHome v-else />
  </header>
  <RouterView />
  <Footer />
</template>