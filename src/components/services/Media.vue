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
    class="w-full py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase media-scroll-reveal"
  >
    {{ $t("services.items.media.title") }}
  </h2>
  <div class="w-full mb-3">
    <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
  </div>
  <div class="py-4 px-4">
    <div
      class="w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-16"
      v-for="item in services"
      v-bind:key="item.src[0]"
    >
      <div
        class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl media-scroll-reveal"
      >
        <div>
          <p
            class="inline-block px-3 py-3 mb-2 text-xs font-bold tracking-wider text-teal-900 uppercase rounded-full bg-[#20EBB9]"
          >
            {{ $t(item.header).toUpperCase() }}
          </p>
        </div>
        <h2
          class="w-full mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span class="relative inline-block">
            <span class="text-2xl font-medium leading-none">{{
              $t(item.title)
            }}</span>
          </span>
        </h2>
        <p class="text-base text-gray-700 md:text-md">
          {{ $t(item.description) }}
        </p>
      </div>
      <div class="grid gap-2">
        <div v-for="src in item.src" v-bind:key="src.src">
          <img class="mx-auto media-scroll-reveal" :src="src" :alt="src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";
import media1 from "@/assets/images/media-1.png";
import media2 from "@/assets/images/media-2.png";
import media3 from "@/assets/images/media-3.png";
import media4 from "@/assets/images/media-4.png";
import media5 from "@/assets/images/media-5.png";
import media6 from "@/assets/images/media-6.png";
import media7 from "@/assets/images/media-7.png";
import media8 from "@/assets/images/media-8.png";
import media9 from "@/assets/images/media-9.png";

export default {
  data() {
    return {
      breadcrumbs: "services.items.media.title",
      services: [
        {
          header: "services.items.media.content1.header",
          title: "services.items.media.content1.title",
          description: "services.items.media.content1.description",
          src: [media1, media2],
        },
        {
          header: "services.items.media.content2.header",
          title: "services.items.media.content2.title",
          description: "services.items.media.content2.description",
          src: [media6, media7, media8, media9],
        },
        {
          header: "services.items.media.content3.header",
          title: "services.items.media.content3.title",
          description: "services.items.media.content3.description",
          src: [media3, media4, media5],
        },
      ],
    };
  },
  mounted() {
    var header = document.getElementById("header");
    header.classList.add("gradient-animation");
    window.scrollTo({ top: 0, behavior: "smooth" });

    ScrollReveal().reveal(".media-scroll-reveal", { origin: "left" });
  },
};
</script>
