import { createRouter, createWebHistory } from "vue-router";

import LandingScreen from "@/views/LandingScreen.vue";
import LobbyScreen from "@/views/LobbyScreen.vue";
import RoleScreen from "@/views/RoleScreen.vue";
import GameScreen from "@/views/GameScreen.vue";
import VotingScreen from "@/views/VotingScreen.vue";
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
      component: RoleScreen,
    },
    {
      path: "/game",
      name: "game",
      component: GameScreen,
    },
    {
      path: "/vote",
      name: "vote",
      component: VotingScreen,
    },
    {
      path: "/result",
      name: "result",
      component: ResultScreen,
    },
  ],
});

export default router;
