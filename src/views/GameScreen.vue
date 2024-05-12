<script setup lang="ts">
import GameButtons from "@/components/GameButtons.vue";
import GameHeadings from "@/components/GameHeadings.vue";
import { ref } from "vue";

const players = ref([
  { id: 1, name: "Louis Savariz" },
  { id: 2, name: "Jona Muske" },
  { id: 3, name: "Yagizalp Zaimoglu" },
  { id: 4, name: "Kira" },
  { id: 5, name: "Dani" },
  { id: 6, name: "Tom Walter" },
  { id: 7, name: "Fabian Brock" },
  { id: 8, name: "Reza Jaber" },
]);

const getBloodDrip = (id) => {
  return id === 4 ? "../../src/assets/img/blood-drip.png" : null;
};
</script>

<template>
  <div class="flex flex-col items-center gap-12">
    <GameHeadings
      mainTitle="TIME IS"
      mainTitleSuffix="RUNNING OUT..."
      subtitle="IS THE IMPOSTER REALLY BETTER THAN YOU..."
    />

    <div class="grid grid-cols-2 gap-10">
      <div
        v-for="player in players"
        :key="player.id"
        :class="{
          'name-shadow': true,
          'relative z-20 w-80 rounded-xl border bg-gradient-to-br from-[#3d3d3d] to-background py-3': true,
          'bloody-background': getBloodDrip(player.id),
        }"
        :style="
          getBloodDrip(player.id)
            ? `background-image: url('${getBloodDrip(player.id)}')`
            : ''
        "
      >
        <p
          class="font-creepster relative z-10 px-4 text-3xl tracking-wider text-white"
        >
          {{ player.name }}
        </p>
      </div>
    </div>

    <p
      class="suffix-shadow font-creepster text-6xl tracking-wider text-primary"
    >
      45s
    </p>

    <!--
    <GameHeadings
      mainTitle="WHO IS THE"
      mainTitleSuffix="IMPOSTER?"
      subtitle="VOTE OR LOSE - AND BY LOSE WE MEAN DIE"
    />
    <GameButtons buttonText="VOTE" />
    -->
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
