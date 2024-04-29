<template>
  <section id="service" class="bg-white pt-8 lg:pt-20 text-gray-900">
    <div class="container mx-auto flex flex-wrap">
      <h2
        class="mx-auto py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase services"
      >
        {{ $t("services.header") }}
      </h2>
      <div class="w-full">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>

      <!-- description card -->
      <div class="pt-4 flex flex-wrap">
        <div
          class="w-full md:w-1/3 p-6 services-cards flex flex-col flex-grow flex-shrink"
          v-for="item in services"
          v-bind:key="item.title"
        >
          <div
            class="flex flex-col flex-grow flex-shrink rounded-xl service-card-shadow overflow-hidden border-2 border-primary border-opacity-30 hover:border-opacity-100"
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <router-link
                :to="`/services/${item.title
                  .split('.')[2]
                  .replace(' ', '')
                  .toLowerCase()}`"
                class="flex flex-wrap flex-col px-6"
              >
                <img class="h-60 mx-auto" :src="item.src" :alt="item.title" />
                <h6 class="mb-2">
                  <span class="font-bold text-xl text-primary">{{
                    $t(item.title)
                  }}</span>
                </h6>
                <small class="pb-6 text-sm">{{ $t(item.description) }}</small>
              </router-link>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="flex items-center justify-start">
                <button
                  @click="
                    this.$router.push(
                      `/services/${item.title.replace(' ', '').toLowerCase()}`
                    )
                  "
                  class="w-[110px] py-2 px-5 border border-solid border-primary rounded-full text-xs font-semibold transition-all duration-500 text-primary hover:bg-primary hover:text-white"
                >
                  {{ $t("services.readmore") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollReveal from "scrollreveal";
import common from "@/utils/common";

export default {
  data() {
    return {
      services: [
        {
          src: "src/assets/images/event.svg",
          title: "services.items.events.title",
          description: "services.items.events.description",
        },
        {
          src: "src/assets/images/media.svg",
          title: "services.items.media.title",
          description: "services.items.media.description",
        },
        {
          src: "src/assets/images/design.svg",
          title: "services.items.design.title",
          description: "services.items.design.description",
        },
      ],
    };
  },
  mounted() {
    ScrollReveal().reveal(".services", { origin: "left" });
    ScrollReveal().reveal(".services-cards", { origin: "left", interval: 100 });

    if (common.isUrlHasSub()) {
      var header = document.getElementById("header");
      header.classList.add("gradient-animation");
      document.getElementById("service").classList.add("pt-[90px]");
    }
  },
};
</script>
