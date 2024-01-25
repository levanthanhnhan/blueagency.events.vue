<template>
  <section id="service" class="bg-white pb-8 text-gray-900">
    <div class="container mx-auto flex flex-wrap pt-4 pb-10">
      <h2
        class="w-full my-2 sm:text-xl md:text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase services"
      >
        {{ t("service.header") }}
      </h2>
      <div class="w-full">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div
        class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink services-cards"
        v-for="service in services"
        v-bind:key="service.title"
      >
        <div class="service-card-shadow rounded-xl overflow-hidden">
          <!-- Image -->
          <div class="flex-0 shadow-md">
            <img :src="service.src" :alt="service.title" />
          </div>
          <!-- card body -->
          <div class="flex-1 mt-auto p-6">
            <div class="flex flex-col flex-grow flex-shrink justify-start">
              <h6 class="flex-none mb-2">
                <a href="../service/adversiting" class="font-bold text-xl">{{
                  service.title
                }}</a>
              </h6>
              <small class="flex-1 text-sm">{{ service.description }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollReveal from "scrollreveal";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },
  data() {
    return {
      services: [
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Adversiting",
          description: "Best for hotel, listing and directory website",
        },
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Entertainment",
          description: "Best for hotel, listing and directory website",
        },
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Activation",
          description: "Best for hotel, listing and directory website",
        },
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Media",
          description: "Best for hotel, listing and directory website",
        },
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Opening",
          description: "Best for hotel, listing and directory website",
        },
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Road Show",
          description: "Best for hotel, listing and directory website",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    ScrollReveal().reveal(".services", { origin: "right" });
    ScrollReveal().reveal(".services-cards", { origin: "left", interval: 100 });
  },
};
</script>
