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
    class="w-full py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase events-scroll-reveal"
  >
    {{ $t("services.items.events.title") }}
  </h2>
  <div class="w-full mb-3">
    <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
  </div>
  <div class="py-4 px-4">
    <div
      class="w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-16"
      v-for="item in services"
      v-bind:key="item.title"
    >
      <div
        class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl events-scroll-reveal"
      >
        <div>
          <p
            class="inline-block px-3 py-3 mb-2 text-xs font-bold tracking-wider text-teal-900 uppercase rounded-full bg-[#20EBB9]"
          >
            {{ item.header }}
          </p>
        </div>
        <h2
          v-show="item.title != ''"
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
      <div class="grid gap-2 sm:gap-1">
        <div v-for="src in item.src" v-bind:key="src.title">
          <img class="mx-auto events-scroll-reveal" :src="src" :alt="src" />
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
      breadcrumbs: "services.items.events.title",
      services: [
        {
          header: "TỔ CHỨC SỰ KIỆN",
          title: "Trung Quân and Friends - Trót Yêu tại Huế & Đà Nẵng 2019",
          description:
            "Đêm liveshow đầu tiên trong sự nghiệp mang tên Trót Yêu của Trung Quân đã khiến hàng nghìn khán giả vỡ òa trong cảm xúc. Không chỉ mang đến những ca khúc hit gắn liền với tên tuổi của mình, Trung Quân và những người bạn Ái Phương, Khổng Tú Quỳnh, Đào Bá Lộc, Đạt G, Hoàng Tôn, Hằng Bingboong, Phương Anh Idol, Huỳnh Tú còn chia sẻ nhiều câu chuyện thú vị về tình bạn của họ.",
          src: ["../src/assets/images/events-1.png"],
        },
        {
          header: "TỔ CHỨC SỰ KIỆN",
          title: "Họp mặt CLB VIPHAVET PLATINUM lần thứ 11",
          description:
            "Họp mặt CLB Viphavet Platinum là sự kiện được Viphavet tổ chức hai lần một năm bắt đầu từ năm 2014 và chỉ dành riêng cho các nhà phân phối hàng đầu của công ty. Sự kiện cũng như là món quà tri ân mà Viphavet dành tặng cho quý khách hàng đã đồng hành cùng chúng tôi trong suốt thời gian qua. Ngoài việc cung cấp những kiến thức mới, những chương trình tập huấn kỹ năng mềm, đặc biệt là những chương trình khuyến mãi cực kỳ hấp dẫn chỉ dành riêng cho quý hội viên, Viphavet Platinum còn là nơi để quý khách có thể gặp gỡ, giao lưu và tận hưởng kỳ nghỉ tại các khách sạn, khu nghỉ dưỡng cao cấp.",
          src: ["../src/assets/images/events-2.png"],
        },
        {
          header: "TỔ CHỨC SỰ KIỆN",
          title: "Cynosure Apac Summit 2023 tại Singapore",
          description:
            "Cynosure Apac Summit 2023 tại Singapore là chuỗi Event mà BlueAgency - Events & Media rất may mắn khi được góp một phần công sức từ các khâu lên ý tưởng đến sản xuất thiết kế và thi công.",
          src: ["../src/assets/images/events-3.png"],
        },
        {
          header: "TỔ CHỨC SỰ KIỆN",
          title: "Grand Opening",
          description:
            "Grand Opening là một trong những sự kiện quan trọng và không thể thiếu của mỗi doanh nghiệp. Tổ chức lễ khai trương mang ý nghĩa tích cực, đánh dấu sự khởi đầu may mắn và thành công của doanh nghiệp về sau này. Ngoài ra, sự kiện khai trương còn mang yếu tố truyền thông mạnh mẽ, giúp doanh nghiệp có thể tiếp cận khách hàng một cách nhanh nhất và giới thiệu, quảng bá sản phẩm, tìm kiếm các khách hàng tiềm năng. Chính những ý nghĩa đó mà việc tổ chức lễ khai trương ngày càng được nhiều doanh nghiệp lựa chọn đầu tư bài bản, chi tiết nhằm giới thiệu hình ảnh công ty và khẳng định vị thế của doanh nghiệp.",
          src: ["../src/assets/images/events-4.png"],
        },
        {
          header: "TỔ CHỨC SỰ KIỆN",
          title: "Hội thảo",
          description:
            "Hội thảo là sự kiện của doanh nghiệp được tổ chức thường niên với mục đích duy trì mối quan hệ khách hàng hiện tại và thu hút các khách hàng tiềm năng. Các hoạt động chính trong hội thảo là thảo luận về một vấn đề thực tiễn; đối thoại, thăm dò ý kiến khách hàng hoặc chia sẻ kiến thức về ngành nghề. Tổ chức hội thảo sẽ là cơ hội để doanh nghiệp gặp gỡ, giao lưu với các đối tác; tăng cường mối quan hệ với cơ quan truyền thông và nâng cao hình ảnh của công ty.",
          src: ["../src/assets/images/events-5.png"],
        },
        {
          header: "TỔ CHỨC SỰ KIỆN",
          title: "Sản xuất và cho thuê thiết bị sự kiện",
          description:
            "Chúng tôi chuyên cung cấp dịch vụ cho thuê thiết bị sự kiện trọn gói. Với nhiều năm kinh nghiệm cùng tôn chỉ: “CHUYÊN NGHIỆP - TẬN TÌNH - SÁNG TẠO”. ",
          src: ["../src/assets/images/events-6.png"],
        },
        {
          header: "ROADSHOW",
          title: "",
          description:
            "Trong marketing hiện đại, chạy roadshow là một trong những phương thức truyền thông quen thuộc, được nhiều nhãn hàng triển khai trong nhiều chiến dịch quảng bá thương hiệu, sản phẩm, dịch vụ hoặc các sự kiện đặc biệt.",
          src: [
            "../src/assets/images/events-rs-1.png",
            "../src/assets/images/events-rs-2.png",
            "../src/assets/images/events-rs-3.png",
            "../src/assets/images/events-rs-4.png",
          ],
        },
      ],
    };
  },
  mounted() {
    var header = document.getElementById("header");
    header.classList.add("gradient-animation");
    window.scrollTo({ top: 0, behavior: "smooth" });

    ScrollReveal().reveal(".events-scroll-reveal", { origin: "left" });
  },
};
</script>
