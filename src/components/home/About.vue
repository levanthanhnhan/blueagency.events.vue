<script>
import ScrollReveal from "scrollreveal";

export default {
  data() {
    return {
      about: [
        {
          title: "about.subtitle1",
          description: "about.dessubtitle1",
        },
        {
          title: "about.subtitle2",
          description: "about.dessubtitle2",
        },
        {
          title: "about.subtitle3",
          description: "about.dessubtitle3",
        },
      ],
    };
  },
  mounted() {
    ScrollReveal().reveal(".about", { origin: "left" });
    ScrollReveal().reveal(".about-description", { origin: "left" });
    ScrollReveal().reveal(".about-video", { origin: "bottom" });
  },
};
</script>

<template>
  <section id="about" class="bg-white pt-16 text-gray-900">
    <div class="container mx-auto">
      <h2
        class="w-full py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase about"
      >
        {{ $t("about.header") }}
      </h2>
      <div class="w-full">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>

      <!-- description -->
      <div class="pt-6 flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-primary font-medium leading-none mb-3">
            {{ $t("about.title") }}
          </h3>
          <ul class="text-gray-600 mb-8">
            <li class="py-2">
              {{ $t("about.description1") }}
            </li>
            <li class="py-2">
              {{ $t("about.description2") }}
            </li>
            <li class="pt-2">
              {{ $t("about.description3") }}
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img
            class="w-5/6 sm:h-64 mx-auto"
            src="../../assets/images/about.svg"
            alt="Event"
          />
        </div>
      </div>

      <!-- description card -->
      <div class="pb-6 flex flex-wrap">
        <div
          class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink services-cards"
          v-for="item in about"
          v-bind:key="item.title"
        >
          <div
            class="flex flex-col flex-grow flex-shrink justify-center mt-auto p-6 rounded-xl service-card-shadow overflow-hidden border-2 border-primary border-opacity-30 hover:border-opacity-100"
          >
            <h6 class="flex-none mb-2">
              <span class="font-bold text-xl text-primary">{{
                $t(item.title).toUpperCase()
              }}</span>
            </h6>
            <small class="flex-1 text-sm">{{ $t(item.description) }}</small>
          </div>
        </div>
      </div>

      <!-- youtube video -->
      <iframe
        class="w-full mx-auto aspect-video px-6 about-video"
        height="500"
        src="https://www.youtube.com/embed/IcFogOzWusQ"
        title="Blue Agency Events"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <!-- process working -->
      <div class="px-6 pt-12 mx-auto">
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <h3 class="text-3xl text-primary font-bold leading-none mb-3">
            {{ $t("about.workingprocess") }}
          </h3>
        </div>
        <div class="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <div
            class="p-5 duration-300 transform bg-white border-2 border-dashed rounded-xl shadow-sm border-primary hover:-translate-y-2"
          >
            <div class="flex items-center mb-2">
              <p
                class="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary"
              >
                1
              </p>
              <p class="text-lg font-bold leading-5">
                {{ $t("about.titleprocess1") }}
              </p>
            </div>
            <div class="text-sm text-gray-900">
              <ul class="list-disc px-6 py-2">
                <li>{{ $t("about.detailprocess11") }}</li>
                <li>{{ $t("about.detailprocess12") }}</li>
                <li>{{ $t("about.detailprocess13") }}</li>
                <li>{{ $t("about.detailprocess14") }}</li>
                <li>{{ $t("about.detailprocess15") }}</li>
                <li>{{ $t("about.detailprocess16") }}</li>
              </ul>
            </div>
          </div>
          <div
            class="p-5 duration-300 transform bg-white border-2 border-dashed rounded-xl shadow-sm border-primary hover:-translate-y-2"
          >
            <div class="flex items-center mb-2">
              <p
                class="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary"
              >
                2
              </p>
              <p class="text-lg font-bold leading-5">
                {{ $t("about.titleprocess2") }}
              </p>
            </div>
            <div class="text-sm text-gray-900">
              <ul class="list-disc px-6 py-2">
                <li>{{ $t("about.detailprocess21") }}</li>
                <li>{{ $t("about.detailprocess22") }}</li>
                <li>{{ $t("about.detailprocess23") }}</li>
                <li>{{ $t("about.detailprocess24") }}</li>
              </ul>
            </div>
          </div>
          <div
            class="relative p-5 duration-300 transform bg-white border-2 rounded-xl shadow-sm border-primary hover:-translate-y-2"
          >
            <div class="flex items-center mb-2">
              <p
                class="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary"
              >
                3
              </p>
              <p class="text-lg font-bold leading-5">
                {{ $t("about.titleprocess3") }}
              </p>
            </div>
            <div class="text-sm text-gray-900">
              <ul class="list-disc px-6 py-2">
                <li>{{ $t("about.detailprocess31") }}</li>
                <li>{{ $t("about.detailprocess32") }}</li>
                <li>{{ $t("about.detailprocess33") }}</li>
                <li>{{ $t("about.detailprocess34") }}</li>
                <li>{{ $t("about.detailprocess35") }}</li>
                <li>{{ $t("about.detailprocess36") }}</li>
              </ul>
            </div>
            <p
              class="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-primary sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10"
            >
              <svg
                class="text-white w-7"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  points="6,12 10,16 18,8"
                ></polyline>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
