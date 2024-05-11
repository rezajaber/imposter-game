<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { DialogTitle, type DialogTitleProps, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
  DialogTitleProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DialogTitle
    v-bind="forwardedProps"
    :class="
      cn(
        'font-creepster text-4xl font-semibold leading-none tracking-wider',
        props.class,
      )
    "
  >
    <slot />
  </DialogTitle>
</template>
