<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'

defineProps<{
  images: string[]
}>()

const plugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})
</script>

<template>
  <SHCarousel
    :opts="{
      align: 'center',
      loop: true,
    }"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play()]"
  >
    <SHCarouselContent class="ml-0">
      <SHCarouselItem
        v-for="(_, index) in images"
        :key="index"
        class="rounded-3xl pl-0"
      >
        <img
          :src="images[index]"
          class="h-[250px] w-full rounded-3xl object-cover"
        />
      </SHCarouselItem>
    </SHCarouselContent>
  </SHCarousel>
</template>
