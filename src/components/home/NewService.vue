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

      <!-- description events -->
      <div class="pt-6 flex flex-wrap">
        <div class="w-4/6 p-6">
          <h3 class="text-3xl text-primary font-medium leading-none mb-3">
            EVENTS
          </h3>
          <p class="text-gray-600 mb-8">
            Với hơn 10 năm kinh nghiệm tổ chức thành công nhiều chương trình, dự
            án trong và ngoài nước, Blue Agency tự hào là sự lựa chọn đúng đắn,
            người đồng hành tin cậy tạo nên những sự kiện chuyên nghiệp, nâng
            tầm thương hiệu cho doanh nghiệp đối tác.
          </p>
          <button
            class="py-2 px-5 border border-solid border-primary rounded-full gap-2 text-xs text-primary font-semibold flex items-center justify-between transition-all duration-500 hover:bg-primary hover:text-white"
          >
            Xem thêm
            <svg
              class="stroke-primary"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div class="w-2/6">
          <img
            class="sm:h-64 mx-auto"
            src="../../assets/images/event.svg"
            alt="Event"
          />
        </div>
      </div>

      <!-- description media -->
      <div class="pt-6 flex flex-wrap">
        <div class="px-6">
          <img
            class="sm:h-64 mx-auto float-left"
            src="../../assets/images/media.svg"
            alt="Media"
          />
        </div>
        <div class="w-4/6">
          <h3 class="text-3xl text-primary font-medium leading-none mb-3">
            MEDIA
          </h3>
          <p class="text-gray-600 mb-8">
            Với triết lý "Mang đến sản phẩm tốt nhất cho khách hàng". Chúng tôi
            luôn đầu tư nhiều trang thiết bị hiện đại, đội ngũ nhân sự hàng đầu
            trong ngành sản xuất phim ảnh, nhằm mang lại cho khách hàng những
            sản phẩm (video/hình ảnh) ấn tượng và độc đáo. Qua đó góp phần cho
            sự thắng lợi trong các chiến dịch Marketing
          </p>
          <button
            class="py-2 px-5 float-right border border-solid border-primary rounded-full gap-2 text-xs text-primary font-semibold flex items-center justify-between transition-all duration-500 hover:bg-primary hover:text-white"
          >
            Xem thêm
            <svg
              class="stroke-primary"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- description design -->
      <div class="pt-6 flex flex-wrap">
        <div class="w-4/6 p-6">
          <h3 class="text-3xl text-primary font-medium leading-none mb-3">
            3D DESIGN
          </h3>
          <p class="text-gray-600 mb-8">
            Với hơn 10 năm kinh nghiệm tổ chức thành công nhiều chương trình, dự
            án trong và ngoài nước, Blue Agency tự hào là sự lựa chọn đúng đắn,
            người đồng hành tin cậy tạo nên những sự kiện chuyên nghiệp, nâng
            tầm thương hiệu cho doanh nghiệp đối tác.
          </p>
          <button
            class="py-2 px-5 border border-solid border-primary rounded-full gap-2 text-xs text-primary font-semibold flex items-center justify-between transition-all duration-500 hover:bg-primary hover:text-white"
          >
            Xem thêm
            <svg
              class="stroke-primary"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div class="">
          <img
            class="sm:h-64 mx-auto"
            src="../../assets/images/design.svg"
            alt="3D Design"
          />
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
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Adversiting",
          description: "Description...",
        },
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Entertainment",
          description: "Description...",
        },
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Activation",
          description: "Description...",
        },
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Media",
          description: "Description...",
        },
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Opening",
          description: "Description...",
        },
        {
          src: "https://booking.webestica.com/landing/assets/images/demos/05.jpg",
          title: "Road Show",
          description: "Description...",
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
