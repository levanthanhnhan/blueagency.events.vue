<script>
import ScrollReveal from "scrollreveal";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },
  mounted() {
    ScrollReveal().reveal(".about", { origin: "left" });
    ScrollReveal().reveal(".about-description", { origin: "right" });
    ScrollReveal().reveal(".about-video", { origin: "bottom" });
  },
};
</script>

<template>
  <section id="about" class="bg-white py-8 text-gray-900">
    <div class="container mx-auto flex flex-wrap pt-4 pb-10">
      <h2
        class="w-full my-2 sm:text-xl md:text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase about"
      >
        {{ t("about.header") }}
      </h2>
      <div class="w-full">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <p
        class="py-6 text-xl max-w-3xl mx-auto text-gray-500 text-center about-description"
      >
        {{ t("about.description") }}
        <!-- With the criteria of being enthusiastic and always creative at work. We
        hope our customers will have a different and wonderful experience coming
        to Blue team. -->
      </p>
      <iframe
        class="w-full aspect-video px-6 about-video"
        height="500"
        src="https://www.youtube.com/embed/vlq_mMjr0Og"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
