<script setup lang="ts">
import DynamicHeadings from "@/components/DynamicHeadings.vue";
</script>

<template>
  <div>
    <div class="flex flex-col items-center gap-24">
      <DynamicHeadings mainTitle="YOU FUCKED UP" role="IMPOSTER WINS" />
      <DynamicHeadings
        mainTitle="YOU GOT IT"
        role="SECRET AGENTS WIN"
        suffixColor="text-green-500"
      />
    </div>
  </div>
</template>
