<script>
import ScrollReveal from "scrollreveal";

export default {
  data() {
    return {
      about: [
        {
          title: "TẦM NHÌN",
          description:
            "Blue Agency cung cấp dịch vụ sự kiện chuyên nghiệp, đáp ứng yêu cầu cao nhất, khó nhất của khách hàng",
        },
        {
          title: "SỨ MỆNH",
          description:
            "Blue Agency không ngừng tích lũy, trau dồi kinh nghiệm chuyên môn, mang đến khách hàng sự “Tận tâm – Chu đáo – Khác biệtBlue Agency không ngừng tích lũy, trau dồi kinh nghiệm chuyên môn, mang đến khách hàng sự “Tận tâm – Chu đáo – Khác biệt",
        },
        {
          title: "GIÁ TRỊ CỐT LÕI",
          description:
            "Blue Agency xây dựng những giá trị vững chắc từ nội tại “Sáng tạo – Trách nhiệm – Trung thực – Hiệu quả”",
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
  <section id="about" class="bg-white pt-8 lg:pt-20 text-gray-900">
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
            Đôi nét về chúng tôi
          </h3>
          <ul class="text-gray-600 mb-8">
            <li class="py-2">
              BlueAgency – Events & Media là doanh nghiệp hoạt động chính trong
              các lĩnh vực tổ chức sự kiện, cung cấp thiết bị - nhân sự sự kiện
              và sản xuất hình ảnh.
            </li>
            <li class="py-2">
              Chúng tôi luôn sẵn sàng đáp ứng được những yêu cầu, ý tưởng mới
              lạ, độc đáo của khách hàng. Với phương châm “Sáng tạo không giới
              hạn” BlueAgency sẵn sàng tạo ra sự đột phá về phong cách tổ chức
              sự kiện cũng như các sản phẩm chúng tôi cung cấp.
            </li>
            <li class="pt-2">
              Với những kinh nghiệm đã tích lũy trong lĩnh vực tổ chức sự kiện
              và truyền thông, BlueAgency – Events & Media tự tin sẽ đem lại sự
              hài lòng cho Quý khách.
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
                item.title
              }}</span>
            </h6>
            <small class="flex-1 text-sm">{{ item.description }}</small>
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
            Quy trình làm việc
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
              <p class="text-lg font-bold leading-5">Trước khi ký hợp đồng</p>
            </div>
            <div class="text-sm text-gray-900">
              <ul class="list-disc px-6 py-2">
                <li>Nhận yêu cầu từ khách hàng</li>
                <li>Phân tích, trao đổi, gặp mặt làm rõ nhu cầu</li>
                <li>Xác nhận thông tin về yêu cầu của khách hàng</li>
                <li>Lập kế hoạch sơ bộ, gửi dự toán</li>
                <li>Khách hàng duyệt kế hoạch</li>
                <li>Hoàn thiện báo giá</li>
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
              <p class="text-lg font-bold leading-5">Ký hợp đồng</p>
            </div>
            <div class="text-sm text-gray-900">
              <ul class="list-disc px-6 py-2">
                <li>Trao đổi, thống nhất điều khoản hợp đồng</li>
                <li>Hoàn thiện hợp đồng, phụ lục</li>
                <li>Ký hợp đồng</li>
                <li>Thanh toán đợt 1</li>
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
              <p class="text-lg font-bold leading-5">Sau khi ký hợp đồng</p>
            </div>
            <div class="text-sm text-gray-900">
              <ul class="list-disc px-6 py-2">
                <li>Triển khai và thực hiện theo hợp đồng</li>
                <li>Điều chỉnh phát sinh (nếu có)</li>
                <li>Bàn giao sản phẩm trong quá trình thực hiện</li>
                <li>Nghiệm thu</li>
                <li>Thanh toán đợt 2</li>
                <li>Thanh lí hợp đồng</li>
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
