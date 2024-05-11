<script setup lang="ts">
import GameHeadings from "@/components/GameHeadings.vue";
import GameButtons from "@/components/GameButtons.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <GameHeadings
      mainTitle="SETUP YOUR"
      mainTitleSuffix="GAME!"
      subtitle="HOW DO YOU LIKE TO PLAY IT..."
    />

    <GameButtons buttonText="CONFIGURE" />
  </div>
</template>
