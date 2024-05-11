import { createRouter, createWebHistory } from "vue-router";

import LandingScreen from "@/views/LandingScreen.vue";
import LobbyScreen from "@/views/LobbyScreen.vue";
import GameScreen from "@/views/GameScreen.vue";
import RoleScreen from "@/views/RoleScreen.vue";
import ResultScreen from "@/views/ResultScreen.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingScreen,
    },
    {
      path: "/lobby",
      name: "lobby",
      component: LobbyScreen,
    },
    {
      path: "/role",
      name: "role",
      component: GameScreen,
    },
    {
      path: "/game",
      name: "game",
      component: RoleScreen,
    },
    {
      path: "/result",
      name: "result",
      component: ResultScreen,
    },
  ],
});

export default router;
