<script setup lang="ts">
import GameButtons from "@/components/GameButtons.vue";
import GameHeadings from "@/components/GameHeadings.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-12">
    <GameHeadings
      mainTitle="TIME IS"
      mainTitleSuffix="RUNNING OUT..."
      subtitle="IS THE IMPOSTER REALLY BETTER THAN YOU..."
    />

    <p
      class="suffix-shadow font-creepster text-6xl tracking-wider text-primary"
    >
      45s
    </p>

    <GameHeadings
      mainTitle="WHO IS THE"
      mainTitleSuffix="IMPOSTER?"
      subtitle="VOTE OR LOSE - AND BY LOSE WE MEAN DIE"
    />
    <GameButtons buttonText="VOTE" />
  </div>
</template>

<style scoped>
.suffix-shadow {
  text-shadow: 2px 2px #ffffff;
}
</style>
