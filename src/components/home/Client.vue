<template>
  <section id="client" class="bg-white pt-8 lg:pt-20 text-gray-900">
    <div class="container mx-auto flex flex-wrap">
      <h2
        class="w-full py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase clients"
      >
        {{ $t("client.header") }}
      </h2>
      <div class="w-full">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>
      <div
        class="w-full px-6 lg:pt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          class="p-8 grayscale transition duration-200 hover:grayscale-0 clients-item"
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
import ScrollReveal from "scrollreveal";
const CLOUDINARY_BASE_CLIENT =
  "https://res.cloudinary.com/dss6pknik/image/upload/v1704790860/";

export default {
  data() {
    return {
      clients: [
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/wy4kfl3e4uyixdvdaxek.png",
          alt: "SaigonTourist",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/w3mupjt57ghm60jqpmj2.png",
          title: "Azaki",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/bno7uzvvnbcpxvckfohy.png",
          title: "ShareTea",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/bbbutpd1rmwelcfzfqni.png",
          title: "RainGod",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/b1ub516b6qgzbys5y0nj.png",
          alt: "DMH",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/aio5nvbsvzo8qkwgtw9q.png",
          title: "Olmix AsianLand",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/wuyqjnd72lebug81hgno.png",
          title: "LocThinh Head",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/gnks46onbryi4gh3p70r.png",
          title: "Gongcha",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/qhsruezlygpywgdyhr1c.png",
          alt: "BKAV",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/liuqyoxidqvseolkzwne.png",
          title: "VNPay",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/coyuzqrqh4c0zegnqrot.png",
          title: "ShareKafe",
        },
        {
          src: CLOUDINARY_BASE_CLIENT + "clients/uwe9gzhusax9qyulsmqk.png",
          title: "Ecopark",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    ScrollReveal().reveal(".clients", { origin: "left" });
    ScrollReveal().reveal(".clients-item", { origin: "left", interval: 100 });
  },
};
</script>
