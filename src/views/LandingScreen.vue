<script setup lang="ts">
import GameHeadings from "@/components/GameHeadings.vue";
import GameButtons from "@/components/GameButtons.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <GameHeadings
      mainTitle="WHO IS THE"
      mainTitleSuffix="IMPOSTER?"
      subtitle="CAN YOU TRUST EACH OTHER..."
    />

    <RouterLink to="/lobby">
      <GameButtons buttonText="PLAY ONLINE" />
    </RouterLink>
  </div>
</template>
