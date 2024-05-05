<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import Button from './ui/button/Button.vue'
</script>

<template>
  <div class="bg-secondary py-8">
    <div class="flex flex-wrap px-8">
      <div class="flex w-1/3 flex-row">
        <img src="~/assets/icons/logo.png" class="h-16 w-16 object-contain" />
        <div class="pl-2">
          <h1 class="mb-4 text-xl font-semibold text-white">MStudio</h1>
          <p class="text-sm font-light text-platinum">Avram Iancu nr. 5</p>
          <p class="text-sm font-light text-platinum">Cluj, Romania</p>
        </div>
      </div>
      <div class="w-1/3">
        <h1 class="mb-4 text-xl font-semibold text-white">Contact</h1>
        <a
          href="tel:+40734660945"
          class="cursor-pointer text-sm font-light text-platinum underline-offset-2 hover:underline"
        >
          +40 734 660 945
        </a>
        <a
          href="mailto:mihailuncan@mikeluncproduction.com"
          class="cursor-pointer text-sm font-light text-platinum underline-offset-2 hover:underline"
        >
          mihailuncan@mikeluncproduction.com
        </a>
      </div>
      <div class="w-1/3">
        <h1 class="mb-4 text-end text-xl font-semibold text-white">
          Opening Hours
        </h1>
        <div class="-mx-2 flex justify-end">
          <div class="w-fit px-2 text-end">
            <p class="text-sm font-bold text-platinum">Monday - Friday:</p>
            <p class="text-sm font-bold text-platinum">Saturday:</p>
            <p class="text-sm font-bold text-platinum">Sunday:</p>
          </div>
          <div class="w-fit px-2 text-end">
            <p class="w-fit text-sm font-light text-platinum">9:00 - 18:00</p>
            <p class="w-fit text-sm font-light text-platinum">9:00 - 17:00</p>
            <p class="w-fit text-sm font-light text-platinum">Closed</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="mx-4 my-4 border-y-[1px] border-platinum" />
    <div class="flex flex-row px-8">
      <p class="text-light text-sm text-slate-400">
        Copyright © 2024 MStudio All rights reserved
      </p>
      <SocialMediaSection class="ml-auto" />
    </div>
  </div>
</template>
