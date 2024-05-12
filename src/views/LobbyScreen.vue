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

      <DialogContent class="sm:max-w-[825px]">
        <DialogHeader class="mb-2">
          <DialogTitle class="text-primary">GAME PARAMETERS</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div class="font-creepster grid justify-center gap-6 py-4 text-3xl">
          <div class="flex justify-between gap-10">
            <div class="flex flex-col items-start gap-1.5 text-primary">
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

            <div class="mt-1 flex flex-wrap gap-2.5">
              <Badge><X class="mr-1 h-4 w-4" />Badge</Badge>
              <Badge><X class="mr-1 h-4 w-4" />Badge</Badge>
              <Badge><X class="mr-1 h-4 w-4" />Badge</Badge>
              <Badge><X class="mr-1 h-4 w-4" />Badge</Badge>
            </div>
          </div>
        </div>

        <DialogFooter class="mt-2">
          <RouterLink to="/role"><GameButtons buttonText="START" /></RouterLink>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
