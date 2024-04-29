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
    class="w-full py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase media-scroll-reveal"
  >
    {{ $t("services.items.media.title") }}
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
        class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl media-scroll-reveal"
      >
        <div>
          <p
            class="inline-block px-3 py-3 mb-2 text-xs font-bold tracking-wider text-teal-900 uppercase rounded-full bg-[#20EBB9]"
          >
            {{ item.header }}
          </p>
        </div>
        <h2
          class="w-full mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span class="relative inline-block">
            <span class="text-2xl font-medium leading-none">{{
              item.title
            }}</span>
          </span>
        </h2>
        <p class="text-base text-gray-700 md:text-md">
          {{ item.description }}
        </p>
      </div>
      <div class="grid gap-2">
        <div v-for="src in item.src" v-bind:key="src.title">
          <img class="mx-auto media-scroll-reveal" :src="src" :alt="src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  data() {
    return {
      breadcrumbs: "services.items.media.title",
      services: [
        {
          header: "Sản xuất hình ảnh",
          title: "Sản xuất hình ảnh doanh nghiệp & sản phẩm",
          description:
            "Với kinh nghiệm về sản xuất hình ảnh, chụp hình sản phẩm với nhiều ngành hàng, lĩnh vực khác nhau để đưa ra những lời tư vấn tốt nhất và phù hợp nhất với thương hiệu của bạn.",
          src: [
            "../src/assets/images/media-1.png",
            "../src/assets/images/media-2.png",
          ],
        },
        {
          header: "Sản xuất hình ảnh",
          title: "Sản xuất hình ảnh sự kiện",
          description:
            "Với đội ngũ ekip chuyên nghiệp & sáng tạo, chúng tôi sẽ tư vấn và thực hiện các video sự kiện với mọi quy mô ngân sách khác nhau, đảm bảo chất lượng hình ảnh tốt nhất, ghi lại những khoảnh khắc ấn tượng tại sự kiện của doanh nghiệp.",
          src: [
            "../src/assets/images/media-6.png",
            "../src/assets/images/media-7.png",
            "../src/assets/images/media-8.png",
            "../src/assets/images/media-9.png",
          ],
        },
        {
          header: "Sản xuất video",
          title: "Sản xuất video marketing",
          description:
            "Chúng tôi chuyên cung cấp dịch vụ sản xuất video marketing chuyên nghiệp cho doanh nghiệp, giúp xây dựng ý tưởng kịch bản, quay phim tiền kỳ, dựng phim hậu kỳ, phát hành video đạt hiệu quả tối ưu nhất.",
          src: [
            "../src/assets/images/media-3.png",
            "../src/assets/images/media-4.png",
            "../src/assets/images/media-5.png",
          ],
        },
      ],
    };
  },
  mounted() {
    var header = document.getElementById("header");
    header.classList.add("gradient-animation");
    window.scrollTo({ top: 0, behavior: "smooth" });

    ScrollReveal().reveal(".media-scroll-reveal", { origin: "left" });
  },
};
</script>
