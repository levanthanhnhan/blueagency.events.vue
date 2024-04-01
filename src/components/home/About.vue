<script>
import ScrollReveal from "scrollreveal";

export default {
  mounted() {
    ScrollReveal().reveal(".about", { origin: "left" });
    ScrollReveal().reveal(".about-description", { origin: "left" });
    ScrollReveal().reveal(".about-video", { origin: "bottom" });
  },
};
</script>

<template>
  <section id="about" class="bg-white pt-8 lg:pt-20 text-gray-900">
    <div class="container mx-auto">
      <h2
        class="w-full py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase about"
      >
        {{ $t("about.header") }}
      </h2>
      <div class="w-full">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>
      <p
        class="py-6 text-xl max-w-3xl mx-auto text-gray-500 text-center leading-tight about-description"
      >
        {{ $t("about.description") }}
      </p>
      <iframe
        class="w-full mx-auto aspect-video px-6 about-video"
        height="500"
        src="https://www.youtube.com/embed/IcFogOzWusQ"
        title="Blue Agency Events"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
