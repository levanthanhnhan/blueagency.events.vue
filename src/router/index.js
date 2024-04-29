import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SericesView from "../views/ServicesView.vue";
import Services from "../components/home/NewService.vue";
import Media from "@/components/services/Media.vue";
import Events from "@/components/services/Events.vue";
import Design from "@/components/services/Design.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/services",
      component: SericesView,
      children: [
        {
          path: "",
          component: Services,
        },
        {
          path: "events",
          component: Events,
        },
        {
          path: "media",
          component: Media,
        },
        {
          path: "design",
          component: Design,
        },
      ],
    },
  ],
});

export default router;
