<script setup lang="ts">
const props = defineProps({
  mainTitle: {
    type: String,
    required: true,
  },
  mainTitleSuffix: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="grid gap-1 text-center">
    <h1 class="title-shadow font-creepster text-8xl tracking-wider text-white">
      {{ props.mainTitle }}
      <span class="suffix-shadow text-primary">{{
        props.mainTitleSuffix
      }}</span>
    </h1>
    <h3 class="title-shadow font-creepster text-3xl tracking-wider text-white">
      {{ props.subtitle }}
    </h3>
  </div>
</template>

<style scoped>
.title-shadow {
  text-shadow: 4px 4px #a10c0c;
}

.suffix-shadow {
  text-shadow: 3px 3px #ffff;
}
</style>
