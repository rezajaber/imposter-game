<script setup lang="ts">
import DynamicHeadings from "@/components/DynamicHeadings.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-24">
    <DynamicHeadings mainTitle="YOU ARE AN" role="IMPOSTER" />
    <DynamicHeadings
      mainTitle="YOU ARE A"
      role="SECRET AGENT"
      suffixColor="text-green-500"
    />
  </div>
</template>
