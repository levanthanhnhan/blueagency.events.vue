<template>
  <section id="client" class="bg-white pb-8 text-gray-900">
    <div class="container mx-auto flex flex-wrap pt-4 pb-10">
      <h2
        class="w-full my-2 sm:text-xl md:text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase clients"
      >
        Clients
      </h2>
      <div class="w-full">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="w-full mt-12 grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4">
        <div
          class="p-4 grayscale transition duration-200 hover:grayscale-0 clients-item"
          v-for="client in clients"
          v-bind:key="client.alt"
        >
          <img
            class="h-16 w-auto mx-auto"
            :src="client.src"
            :alt="client.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollReveal from 'scrollreveal';

export default {
  data() {
    return {
      clients: [
        {
          src: "../../../src/assets/images/brands/brand1.png",
          alt: "SaigonTourist",
        },
        {
          src: "../../../src/assets/images/brands/brand2.png",
          title: "Azaki",
        },
        {
          src: "../../../src/assets/images/brands/brand3.png",
          title: "ShareTea",
        },
        {
          src: "../../../src/assets/images/brands/brand4.png",
          title: "RainGod",
        },
        {
          src: "../../../src/assets/images/brands/brand5.png",
          alt: "DMH",
        },
        {
          src: "../../../src/assets/images/brands/brand6.png",
          title: "Olmix AsianLand",
        },
        {
          src: "../../../src/assets/images/brands/brand7.png",
          title: "LocThinh Head",
        },
        {
          src: "../../../src/assets/images/brands/brand8.png",
          title: "Gongcha",
        },
        {
          src: "../../../src/assets/images/brands/brand9.png",
          alt: "BKAV",
        },
        {
          src: "../../../src/assets/images/brands/brand10.png",
          title: "VNPay",
        },
        {
          src: "../../../src/assets/images/brands/brand11.png",
          title: "ShareKafe",
        },
        {
          src: "../../../src/assets/images/brands/brand12.png",
          title: "Ecopark",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    ScrollReveal().reveal('.clients', { origin: 'left' });
    ScrollReveal().reveal('.clients-item', { origin: 'right', interval: 100 });
  },
};
</script>
