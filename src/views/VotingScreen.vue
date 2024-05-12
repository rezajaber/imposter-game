<script setup lang="ts">
import GameButtons from "@/components/GameButtons.vue";
import GameHeadings from "@/components/GameHeadings.vue";
import { ref } from "vue";

const players = ref([
  { id: 1, name: "Louis" },
  { id: 2, name: "Jona" },
  { id: 3, name: "Yagizalp" },
  { id: 4, name: "Kira" },
  { id: 5, name: "Dani" },
  { id: 6, name: "Tom" },
  { id: 7, name: "Fabian" },
  { id: 8, name: "Reza" },
]);
</script>

<template>
  <div class="flex flex-col items-center gap-12">
    <GameHeadings
      mainTitle="WHO IS THE"
      mainTitleSuffix="IMPOSTER?"
      subtitle="VOTE OR LOSE - AND BY LOSE WE MEAN DIE"
    />

    <div class="grid grid-cols-2 gap-6 sm:gap-x-10">
      <div
        v-for="player in players"
        :key="player.id"
        class="name-shadow z-20 cursor-pointer rounded-xl border-2 border-primary bg-gradient-to-br from-[#3d3d3d] to-background py-3 duration-300 ease-in-out hover:scale-105 md:w-80"
      >
        <p
          class="relative z-10 px-4 font-creepster text-3xl tracking-wider text-white"
        >
          {{ player.name }}
        </p>
      </div>
    </div>

    <GameButtons buttonText="VOTE" />
  </div>
</template>

<style scoped>
.bloody-background {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.suffix-shadow {
  text-shadow: 2px 2px #ffffff;
}

.name-shadow {
  text-shadow: 3px 3px #a10c0c;
}
</style>
