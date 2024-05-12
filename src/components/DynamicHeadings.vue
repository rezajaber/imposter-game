<script setup lang="ts">
const props = defineProps({
  mainTitle: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: true,
  },
  suffixColor: {
    type: String,
    default: "text-red-600", // Default text color for the role
  },
});
</script>

<template>
  <div class="text-center">
    <h3 class="font-creepster text-3xl tracking-wider text-white sm:text-5xl">
      {{ props.mainTitle }}
    </h3>
    <h1
      :class="`role-shadow font-creepster ${suffixColor} text-7xl tracking-wider sm:text-8xl`"
    >
      {{ role }}
    </h1>
    <h5 class="font-creepster text-3xl tracking-wider text-white">
      {{ props.subtitle }}
    </h5>
  </div>
</template>

<style scoped>
.role-shadow {
  text-shadow: 3px 3px #ffff;
}
</style>
