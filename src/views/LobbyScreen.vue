<script setup lang="ts">
import GameHeadings from "@/components/GameHeadings.vue";
import GameButtons from "@/components/GameButtons.vue";

import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <GameHeadings
      mainTitle="SETUP YOUR"
      mainTitleSuffix="GAME!"
      subtitle="HOW DO YOU LIKE TO PLAY IT..."
    />

    <Dialog>
      <DialogTrigger as-child>
        <GameButtons buttonText="CONFIGURE" />
      </DialogTrigger>
      <DialogContent class="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>GAME PARAMETERS</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div class="font-creepster grid justify-center gap-6 py-4 text-3xl">
          <div class="flex justify-between gap-10">
            <div class="flex flex-col items-start gap-1.5">
              <p>IMPOSTERS</p>
              <Input type="text" placeholder="Amount of Imposters..." />
            </div>
            <div class="flex flex-col items-start gap-1.5">
              <p>ROUNDS</p>
              <Input type="text" placeholder="How many Rounds..." />
            </div>
            <div class="flex flex-col items-start gap-1.5">
              <p>DURATION</p>
              <Input type="text" placeholder="How long?..." />
            </div>
          </div>

          <div class="flex flex-col items-start gap-1.5">
            <p>CATEGORIES</p>
            <Input type="text" placeholder="What Categories" />
          </div>
        </div>

        <DialogFooter>
          <GameButtons buttonText="START" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
