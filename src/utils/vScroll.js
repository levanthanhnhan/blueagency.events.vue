import ScrollReveal from "scrollreveal";

// Init ScrollReveal
ScrollReveal({
  reset: false,
  distance: "100px",
  duration: 1500,
  delay: 100,
});

// Init v-scroll in nav
const vScroll = {
  mounted: (el) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      let id = el.getAttribute("name");
      let coord =
        document.querySelector(`#${id}`).getBoundingClientRect().top +
        window.scrollY -
        70;
      window.scroll({ top: coord, behavior: "smooth" });
    });
  },
};
export default vScroll;
