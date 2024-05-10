<template>
  <section id="service" class="bg-white pt-16 text-gray-900">
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
                class="flex flex-wrap flex-col"
              >
                <img class="h-60 mb-6" :src="item.src" :alt="item.src" />
                <h6 class="mb-2 px-6">
                  <span class="font-bold text-xl text-primary">{{
                    $t(item.title)
                  }}</span>
                </h6>
                <small class="px-6 pb-6 text-sm">{{
                  $t(item.description)
                }}</small>
              </router-link>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="flex items-center justify-start">
                <button
                  @click="
                    this.$router.push(
                      `/services/${item.title
                        .split('.')[2]
                        .replace(' ', '')
                        .toLowerCase()}`
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
import eventThumb from "@/assets/images/events_thumb.jpeg";
import mediaThumb from "@/assets/images/media_thumb.jpeg";
import designThumb from "@/assets/images/design_thumb.png";

export default {
  data() {
    return {
      services: [
        {
          src: eventThumb,
          title: "services.items.events.title",
          description: "services.items.events.description",
        },
        {
          src: mediaThumb,
          title: "services.items.media.title",
          description: "services.items.media.description",
        },
        {
          src: designThumb,
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
