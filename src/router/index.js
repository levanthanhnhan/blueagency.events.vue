import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SericeView from "../views/SericeView.vue";
import Service from "../components/home/Service.vue";
import Adversiting from "../components/service/Adversiting.vue";
import Media from "../components/service/Media.vue";
import Activation from "../components/service/Activation.vue";
import Entertainment from "../components/service/Entertainment.vue";
import RoadShow from "../components/service/RoadShow.vue";
import Opening from "../components/service/Opening.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/service",
      component: SericeView,
      children: [
        {
          path: "",
          component: Service,
        },
        {
          path: "adversiting",
          component: Adversiting,
        },
        {
          path: "media",
          component: Media,
        },
        {
          path: "activation",
          component: Activation,
        },
        {
          path: "entertainment",
          component: Entertainment,
        },
        {
          path: "roadshow",
          component: RoadShow,
        },
        {
          path: "opening",
          component: Opening,
        },
      ],
    },
  ],
});

export default router;
