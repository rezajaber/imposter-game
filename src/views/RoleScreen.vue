<script setup lang="ts">
import DynamicHeadings from "@/components/DynamicHeadings.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <!-- 
    <DynamicHeadings mainTitle="YOU ARE AN..." role="IMPOSTER" />
    <img
      src="../../src/assets/img/imposter.png"
      class="w-96 animate-pulse"
      alt=""
    />
    
    <p class="suffix-shadow-imposter font-creepster text-3xl tracking-wider text-white">
      WIN BY FOOLING THE OTHERS
    </p>
  --></div>

  <div class="flex flex-col items-center gap-12">
    <DynamicHeadings
      mainTitle="YOU WORD IS..."
      suffixColor="text-green-500"
      role="GENSHIN IMPACT"
    />
    <img
      src="../../src/assets/img/genshin-impact.webp"
      class="w-[40rem] rounded-3xl"
      alt=""
    />
    <p
      class="suffix-shadow-agent font-creepster text-3xl tracking-wider text-white"
    >
      WIN BY VOTING OUT THE IMPOSTERS
    </p>
  </div>
</template>

<style scoped>
.suffix-shadow-imposter {
  text-shadow: 4px 4px #a10c0c;
}

.suffix-shadow-agent {
  text-shadow: 4px 4px #22c55e;
}
</style>
