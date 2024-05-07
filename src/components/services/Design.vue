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
            {{ $t(item.header).toUpperCase() }}
          </p>
        </div>
      </div>
      <div class="grid gap-2">
        <div v-for="src in item.src" v-bind:key="src.src">
          <img class="mx-auto design-scroll-reveal" :src="src" :alt="src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";
import design1 from "@/assets/images/design-1.png";
import design2 from "@/assets/images/design-2.png";
import design3 from "@/assets/images/design-3.png";
import design4 from "@/assets/images/design-4.png";

export default {
  data() {
    return {
      imgHost: "",
      breadcrumbs: "services.items.design.title",
      services: [
        {
          header: "services.items.design.content1.header",
          src: [design1, design2],
        },
        {
          header: "services.items.design.content2.header",
          src: [design3],
        },
        {
          header: "services.items.design.content3.header",
          src: [design4],
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
