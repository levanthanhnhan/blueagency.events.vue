<template>
  <section id="service" class="bg-white pt-8 lg:pt-20 text-gray-900">
    <div class="container mx-auto flex flex-wrap">
      <h2
        class="mx-auto py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase services"
      >
        {{ $t("service.header") }}
      </h2>
      <div class="w-full">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>

      <!-- description card -->
      <div class="pt-4 flex flex-wrap">
        <div
          class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink services-cards"
          v-for="item in services"
          v-bind:key="item.title"
        >
          <div
            class="flex flex-col flex-grow flex-shrink justify-center mt-auto p-6 rounded-xl service-card-shadow overflow-hidden border-2 border-primary border-opacity-30 hover:border-opacity-100"
          >
            <img class="sm:h-60 mx-auto" :src="item.src" :alt="item.title" />
            <h6 class="flex-none mb-2">
              <span class="font-bold text-xl text-primary">{{
                item.title
              }}</span>
            </h6>
            <small class="pb-6 flex-1 text-sm">{{ item.description }}</small>
            <button
              class="w-[110px] py-2 px-5 border border-solid border-primary rounded-full text-xs font-semibold transition-all duration-500 text-primary hover:bg-primary hover:text-white"
            >
              Xem thêm
            </button>
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
          title: "EVENTS",
          description:
            "Với hơn 10 năm kinh nghiệm tổ chức thành công nhiều chương trình, dự án trong và ngoài nước, Blue Agency tự hào là sự lựa chọn đúng đắn, người đồng hành tin cậy tạo nên những sự kiện chuyên nghiệp, nâng tầm thương hiệu cho doanh nghiệp đối tác.",
        },
        {
          src: "src/assets/images/media.svg",
          title: "MEDIA",
          description:
            'Với triết lý "Mang đến sản phẩm tốt nhất cho khách hàng". Chúng tôi luôn đầu tư nhiều trang thiết bị hiện đại, đội ngũ nhân sự hàng đầu trong ngành sản xuất phim ảnh, nhằm mang lại cho khách hàng những sản phẩm (video/hình ảnh) ấn tượng và độc đáo. Qua đó góp phần cho sự thắng lợi trong các chiến dịch Marketing',
        },
        {
          src: "src/assets/images/design.svg",
          title: "3D DESIGN",
          description:
            "Với hơn 10 năm kinh nghiệm tổ chức thành công nhiều chương trình, dự án trong và ngoài nước, Blue Agency tự hào là sự lựa chọn đúng đắn, người đồng hành tin cậy tạo nên những sự kiện chuyên nghiệp, nâng tầm thương hiệu cho doanh nghiệp đối tác.",
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
