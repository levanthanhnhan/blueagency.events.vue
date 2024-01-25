<template>
  <section id="home" class="relative px-0 py-0 text-white bg-black">
    <video
      class="w-full h-screen object-cover"
      src="../../../src/assets/data/cover.mp4"
      autoplay
      loop
      playsinline
      muted
    ></video>
    <div
      class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center justify-center"
    >
      <div
        id="sologanChanel"
        class="sm:text-4xl md:text-7xl lg:text-7xl cover-description"
      >
        ONE TEAM - ONE DREAM
      </div>
    </div>
  </section>
</template>
<script>
import ScrollReveal from "scrollreveal";

export default {
  methods: {
    channelSplit(el) {
      if (el) {
        const inner = el.innerHTML;
        el.innerHTML = "";

        const spanHidden = document.createElement("span");
        spanHidden.classList.add("channel-split-static");
        spanHidden.innerHTML = inner;
        el.appendChild(spanHidden);

        ["red", "green", "blue"].forEach((x) => {
          const span = document.createElement("span");
          span.classList.add("channel-split");
          span.classList.add(`channel-split-${x}`);
          span.innerHTML = inner;
          el.appendChild(span);
        });
      }
    },
  },
  mounted() {
    ScrollReveal().reveal(".cover-description", {
      delay: 300,
      origin: "right",
    });
    this.channelSplit(document.getElementById("sologanChanel"));
  },
};
</script>

<style>
.channel-split-wrapper {
  position: relative;
  font-size: 64px;
}
.channel-split-static {
  opacity: 0;
}
.channel-split {
  position: absolute;
  left: 0;
  mix-blend-mode: difference;
}
.channel-split-red {
  color: #f00;
  animation: ANIMATE-RED 2000ms infinite;
}
.channel-split-green {
  color: #0f0;
}
.channel-split-blue {
  color: #00f;
  animation: ANIMATE-BLUE 2000ms infinite;
}
@keyframes ANIMATE-RED {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(5px, 5px);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes ANIMATE-BLUE {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
