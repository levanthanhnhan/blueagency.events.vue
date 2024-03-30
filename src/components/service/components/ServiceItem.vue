<script setup>
import { onMounted } from "vue";
import common from "@/utils/common";
import Breadcrumb from "../../nav/Breadcrumb.vue";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const props = defineProps(["breadcrumbs"]);

onMounted(() => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: "#gallery",
    children: "a",
    pswpModule: () => import("photoswipe"),
  });
  lightbox.init();

  var header = document.getElementById("header");
  header.classList.add("gradient-animation");

  var storeData = localStorage.getItem(
    props.breadcrumbs.replace(" ", "").toLowerCase()
  );
  document.getElementById("gallery").innerHTML = storeData;

  common.setBlurLoadedGallery();
});
</script>

<template>
  <section>
    <div class="container mx-auto pt-20 sm:pb-6 pb-8">
      <Breadcrumb :titles="breadcrumbs"></Breadcrumb>
    </div>

    <div class="container mx-auto flex flex-wrap pb-10">
      <h2
        class="w-full my-2 sm:text-xl md:text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase"
      >
        {{ $t(`${breadcrumbs}`) }}
      </h2>
      <div class="w-full">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="w-full py-8 text-xl mx-auto text-gray-500 text-center">
        <!-- gallery -->
        <div class="pswp-gallery grid grid-cols-4 gap-4" id="gallery"></div>
      </div>
    </div>
  </section>
</template>
