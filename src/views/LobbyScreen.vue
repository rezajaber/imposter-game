<script setup lang="ts">
import GameHeadings from "@/components/GameHeadings.vue";
import GameButtons from "@/components/GameButtons.vue";

import { X } from "lucide-vue-next";
import { Badge } from "@/components/ui/badge";
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
      <div class="flex flex-col items-center gap-4 sm:flex-row">
        <GameButtons buttonText="COPY LINK" />
        <DialogTrigger as-child>
          <GameButtons buttonText="CONFIGURE" />
        </DialogTrigger>
      </div>

      <DialogContent class="max-w-[300px] px-4 py-6 sm:max-w-[680px]">
        <DialogHeader class="mb-2 text-start">
          <DialogTitle class="text-3xl text-primary sm:text-4xl"
            >GAME PARAMETERS</DialogTitle
          >
          <DialogDescription
            class="text-md -mt-1.5 w-[280px] sm:-mt-0 sm:w-full sm:text-xl"
          >
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div
          class="font-creepster grid justify-center gap-6 py-4 pr-4 text-3xl"
        >
          <div class="flex justify-between sm:gap-10">
            <div class="flex flex-col items-center gap-1.5 text-primary">
              <p class="text-xl sm:text-3xl">IMPOSTERS</p>
              <Input
                type="text"
                placeholder="2/3/4"
                class="h-10 w-16 sm:w-full"
              />
            </div>
            <div class="flex flex-col items-center gap-1.5">
              <p class="text-xl sm:text-3xl">ROUNDS</p>
              <Input
                type="text"
                placeholder="3/4/5"
                class="h-10 w-16 sm:w-full"
              />
            </div>
            <div class="flex flex-col items-center gap-1.5">
              <p class="text-xl sm:text-3xl">DURATION</p>
              <Input
                type="text"
                placeholder="45sec"
                class="h-10 w-16 sm:w-full"
              />
            </div>
          </div>

          <div class="flex flex-col items-start gap-1.5">
            <p class="text-xl sm:text-3xl">CATEGORIES</p>
            <Input
              type="text"
              placeholder="What Categories"
              class="h-10 w-full"
            />

            <div class="mt-1 flex flex-wrap gap-y-2 sm:gap-2.5">
              <Badge class="scale-90 sm:scale-100"
                ><X class="mr-1 h-4 w-4" />Badge</Badge
              >
              <Badge class="scale-90 sm:scale-100"
                ><X class="mr-1 h-4 w-4" />Badge</Badge
              >
              <Badge class="scale-90 sm:scale-100"
                ><X class="mr-1 h-4 w-4" />Badge</Badge
              >
              <Badge class="scale-90 sm:scale-100"
                ><X class="mr-1 h-4 w-4" />Badge</Badge
              >
            </div>
          </div>
        </div>

        <DialogFooter class="mr-4 mt-2 items-end">
          <RouterLink to="/role"><GameButtons buttonText="START" /></RouterLink>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
