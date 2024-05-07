<script setup>
import Breadcrumb from "../nav/Breadcrumb.vue";
</script>

<template>
  <div
    class="pt-12 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-5"
  >
    <Breadcrumb :titles="breadcrumbs"></Breadcrumb>
  </div>
  <h2
    class="w-full py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase events-scroll-reveal"
  >
    {{ $t("services.items.events.title") }}
  </h2>
  <div class="w-full mb-3">
    <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
  </div>
  <div class="py-4 px-4">
    <div
      class="w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-16"
      v-for="item in services"
      v-bind:key="item.title"
    >
      <div
        class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl events-scroll-reveal"
      >
        <div>
          <p
            class="inline-block px-3 py-3 mb-2 text-xs font-bold tracking-wider text-teal-900 uppercase rounded-full bg-[#20EBB9]"
          >
            {{ $t(item.header).toUpperCase() }}
          </p>
        </div>
        <h2
          v-show="$t(item.title) != ''"
          class="w-full font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span class="relative inline-block">
            <span class="text-2xl font-medium leading-none">
              {{ $t(item.title) }}</span
            >
          </span>
        </h2>
        <p class="text-base text-gray-700 md:text-md mt-6">
          {{ $t(item.description) }}
        </p>
      </div>
      <div class="grid gap-2 sm:gap-1">
        <div v-for="src in item.src" v-bind:key="src.src">
          <img class="mx-auto events-scroll-reveal" :src="src" :alt="src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";
import event1 from "@/assets/images/events-1.png";
import event2 from "@/assets/images/events-2.png";
import event3 from "@/assets/images/events-3.png";
import event4 from "@/assets/images/events-4.png";
import event5 from "@/assets/images/events-5.png";
import event6 from "@/assets/images/events-6.png";
import eventrs1 from "@/assets/images/events-rs-1.png";
import eventrs2 from "@/assets/images/events-rs-2.png";
import eventrs3 from "@/assets/images/events-rs-3.png";
import eventrs4 from "@/assets/images/events-rs-4.png";

export default {
  data() {
    return {
      breadcrumbs: "services.items.events.title",
      services: [
        {
          header: "services.items.events.content1.header",
          title: "services.items.events.content1.title",
          description: "services.items.events.content1.description",
          src: [event1],
        },
        {
          header: "services.items.events.content2.header",
          title: "services.items.events.content2.title",
          description: "services.items.events.content2.description",
          src: [event2],
        },
        {
          header: "services.items.events.content3.header",
          title: "services.items.events.content3.title",
          description: "services.items.events.content3.description",
          src: [event3],
        },
        {
          header: "services.items.events.content4.header",
          title: "services.items.events.content4.title",
          description: "services.items.events.content4.description",
          src: [event4],
        },
        {
          header: "services.items.events.content5.header",
          title: "services.items.events.content5.title",
          description: "services.items.events.content5.description",
          src: [event5],
        },
        {
          header: "services.items.events.content6.header",
          title: "services.items.events.content6.title",
          description: "services.items.events.content6.description",
          src: [event6],
        },
        {
          header: "services.items.events.content7.header",
          title: "services.items.events.content7.title",
          description: "services.items.events.content7.description",
          src: [eventrs1, eventrs2, eventrs3, eventrs4],
        },
      ],
    };
  },
  mounted() {
    var header = document.getElementById("header");
    header.classList.add("gradient-animation");
    window.scrollTo({ top: 0, behavior: "smooth" });

    ScrollReveal().reveal(".events-scroll-reveal", { origin: "left" });
  },
};
</script>
