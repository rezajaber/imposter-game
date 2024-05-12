<script setup lang="ts">
import DynamicHeadings from "@/components/DynamicHeadings.vue";
import GameButtons from "@/components/GameButtons.vue";
</script>

<template>
  <div>
    <!--
    <div class="flex flex-col items-center gap-6">
      <DynamicHeadings
        mainTitle="YOU GOT IT"
        role="SECRET AGENTS WIN"
        suffixColor="text-green-500"
      />
      <img
        src="../../src/assets/img/agent.png"
        class="w-96"
        alt="Secret Agent"
      />

      <div class="flex flex-col items-center gap-4">
        <RouterLink to="/lobby">
          <GameButtons buttonText="NEW GAME" buttonBackground="bg-green-500" />
        </RouterLink>

        <RouterLink to="/">
          <GameButtons buttonText="LEAVE" />
        </RouterLink>
      </div>
    </div>
     -->

    <div class="flex flex-col items-center gap-6">
      <DynamicHeadings mainTitle="YOU GOT IT" role="IMPOSTER WIN" />
      <img
        src="../../src/assets/img/imposter.png"
        class="w-96"
        alt="Secret Agent"
      />

      <div class="flex flex-col items-center gap-4">
        <RouterLink to="/lobby">
          <GameButtons buttonText="NEW GAME" buttonBackground="bg-green-500" />
        </RouterLink>

        <RouterLink to="/">
          <GameButtons buttonText="LEAVE" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
