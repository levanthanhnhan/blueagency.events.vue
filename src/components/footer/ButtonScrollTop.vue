<template>
  <!-- <input type="submit" class="js-scroll-top w-10 rounded-md border-0 px-2 py-2 bg-primary hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-white"> -->
  <button
    class="btn-toggle-round scroll-top js-scroll-top is-active"
    type="button"
    title="Scroll to top"
  >
    <svg
      class="progress-circle"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-up"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="cuurentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="18" y1="11" x2="12" y2="5" />
      <line x1="6" y1="11" x2="12" y2="5" />
    </svg>
  </button>
</template>
<style>
.scroll-top {
  --ghost-accent-color: #f59e1d;
  position: fixed;
  z-index: 50;
  padding: 0;
  right: 35px;
  bottom: 100px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  height: 40px;
  width: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.4s ease;
  border: none;
  box-shadow: inset 0 0 0 2px #ccc;
  color: #ccc;
  background-color: #fff;
}

.scroll-top.is-active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.scroll-top .icon-tabler-arrow-up {
  position: absolute;
  stroke-width: 2px;
  stroke: #333;
}

.scroll-top svg path {
  fill: none;
}

.scroll-top svg.progress-circle path {
  stroke: #333;
  stroke-width: 4;
  transition: all 0.4s ease;
}

.scroll-top:hover {
  color: var(--ghost-accent-color);
}

.scroll-top:hover .progress-circle path,
.scroll-top:hover .icon-tabler-arrow-up {
  stroke: var(--ghost-accent-color);
}
</style>

<script>
export default {
  data() {
    return {
      pathLength: 0,
      progressPath: Element,
    };
  },
  methods: {
    scrollToTop() {
      const scrollTopBtn = document.querySelector(".js-scroll-top");

      if (scrollTopBtn) {
        scrollTopBtn.onclick = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        };

        this.progressPath = document.querySelector(".scroll-top path");
        this.pathLength = this.progressPath.getTotalLength();
        this.progressPath.style.transition =
          this.progressPath.style.WebkitTransition = "none";
        this.progressPath.style.strokeDasharray = `${this.pathLength} ${this.pathLength}`;
        this.progressPath.style.strokeDashoffset = this.pathLength;
        this.progressPath.getBoundingClientRect();
        this.progressPath.style.transition =
          this.progressPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";

        this.updateProgress();
        const offset = 100;

        var self = this;
        window.addEventListener(
          "scroll",
          function (event) {
            self.updateProgress();

            //Scroll back to top
            const scrollPos =
              window.scrollY ||
              window.scrollTopBtn ||
              document.getElementsByTagName("html")[0].scrollTopBtn;
            scrollPos > offset
              ? scrollTopBtn.classList.add("is-active")
              : scrollTopBtn.classList.remove("is-active");
          },
          false
        );
      }
    },
    updateProgress() {
      const scroll =
        window.scrollY ||
        window.scrollTopBtn ||
        document.documentElement.scrollTopBtn;

      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      const windowHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );

      const height = docHeight - windowHeight;
      var progress = this.pathLength - (scroll * this.pathLength) / height;
      this.progressPath.style.strokeDashoffset = progress;
    },
  },
  mounted() {
    this.scrollToTop();
  },
};
</script>
