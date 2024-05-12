<script setup lang="ts">
const props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  buttonBackground: {
    type: String,
    required: true,
    default: "bg-primary",
  },
});
</script>

<template>
  <div class="">
    <Button
      :class="`button-74 cursor duration-50 font-creepster ${buttonBackground} rounded-full border-2 border-white px-6 py-2 text-2xl text-white ease-in-out hover:opacity-85`"
    >
      {{ props.buttonText }}
    </Button>
  </div>
</template>

<style scoped>
/* CSS */
.button-74 {
  box-shadow: #ffffff 6px 4px 0 0;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}
</style>
