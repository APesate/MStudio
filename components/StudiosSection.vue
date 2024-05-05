<script lang="ts" setup>
import Button from './ui/button/Button.vue'

function getImages(prefix: string) {
  let images = []
  for (let i = 0; i < 5; i++) {
    images.push(`https://picsum.photos/500?random=${prefix}${i}`)
  }
  return images
}

const studioImages = [
  getImages('a'),
  getImages('b'),
  getImages('c'),
  // getImages('d'),
]
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto grid w-[60%] grid-cols-1 gap-4 py-12 md:grid-cols-2">
      <div
        v-for="(images, index) in studioImages"
        :key="index"
        class="relative"
      >
        <StudioCard :images="images" />
        <Button class="absolute bottom-2 right-2 text-white">Book Now</Button>
      </div>
      <div class="w-full">
        <p class="mb-4 text-4xl font-bold">Book Now</p>
        <p class="mb-4 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi
          nam maiores. Veritatis illo perferendis exercitationem maiores, sequi,
          ratione sint corporis veniam itaque necessitatibus delectus obcaecati,
          dignissimos nesciunt id alias.
        </p>
        <div class="float-end">
          <Button class="text-white">Calendar</Button>
        </div>
      </div>
    </div>
  </div>
</template>
