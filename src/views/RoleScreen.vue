<script setup lang="ts">
import DynamicHeadings from "@/components/DynamicHeadings.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <DynamicHeadings mainTitle="YOU ARE AN" role="IMPOSTER" />
    <img
      src="../../src/assets/img/imposter.png"
      class="w-96 animate-pulse"
      alt=""
    />
    <p class="suffix-shadow font-creepster text-3xl tracking-wider text-white">
      WIN BY FOOLING THE OTHERS
    </p>

    <!-- <DynamicHeadings mainTitle="YOU ARE AN" />
    <img src="../../src/assets/img/agent.png" class="w-96" alt="" />
    <DynamicHeadings suffixColor="text-green-500" role="SECRET AGENT" />
    -->
  </div>
</template>

<style scoped>
.suffix-shadow {
  text-shadow: 4px 4px #a10c0c;
}
</style>
