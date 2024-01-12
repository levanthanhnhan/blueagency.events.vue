import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OffersView from '../views/OffersView.vue'
import Offers from '../components/offers/Offers.vue'
import Adversiting from '../components/offers/Adversiting.vue'
import Media from '../components/offers/Media.vue'
import Activation from '../components/offers/Activation.vue'
import Entertainment from '../components/offers/Entertainment.vue'
import RoadShow from '../components/offers/RoadShow.vue'
import Opening from '../components/offers/Opening.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/offers',
      component: OffersView,
      children: [
        {
          path: "",
          component: Offers,
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
      ]
    }
  ]
})

export default router
