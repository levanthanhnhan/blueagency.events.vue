<script setup>
import Breadcrumb from "../nav/Breadcrumb.vue";
</script>

<template>
  <div
    class="pt-20 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-5"
  >
    <Breadcrumb :titles="breadcrumbs"></Breadcrumb>
  </div>
  <h2
    class="w-full py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase design-scroll-reveal"
  >
    {{ $t("services.items.design.title") }}
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
        class="max-w-xl mb-5 md:mx-auto text-center lg:max-w-2xl design-scroll-reveal"
      >
        <div>
          <p
            class="inline-block px-3 py-3 mb-2 text-xs font-bold tracking-wider text-teal-900 uppercase rounded-full bg-[#20EBB9]"
          >
            {{ item.header }}
          </p>
        </div>
      </div>
      <div class="grid gap-2">
        <div v-for="src in item.src" v-bind:key="src.title">
          <img class="mx-auto design-scroll-reveal" :src="src" :alt="src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  data() {
    return {
      imgHost: "",
      breadcrumbs: "services.items.design.title",
      services: [
        {
          header: "3D DESIGN",
          src: [
            "https://res.cloudinary.com/dss6pknik/image/upload/v1714384348/services/design/keiaypgyk06yh9urndtu.png",
            "https://res.cloudinary.com/dss6pknik/image/upload/v1714384348/services/design/npvpsfaip2otszdooizm.png",
          ],
        },
        {
          header: "BOOT DESIGN",
          src: [
            "https://res.cloudinary.com/dss6pknik/image/upload/v1714384348/services/design/ultujilkghkzjiqbjudv.png",
          ],
        },
        {
          header: "SOCIAL DESIGN",
          src: [
            "https://res.cloudinary.com/dss6pknik/image/upload/v1714384348/services/design/l5syuqzjeeosyay5gmhv.png",
          ],
        },
      ],
    };
  },
  mounted() {
    var header = document.getElementById("header");
    header.classList.add("gradient-animation");
    window.scrollTo({ top: 0, behavior: "smooth" });

    ScrollReveal().reveal(".design-scroll-reveal", { origin: "left" });
  },
};
</script>
