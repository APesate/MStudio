<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function getImages(prefix: string) {
  let images = []
  for (let i = 0; i < 5; i++) {
    images.push(`https://picsum.photos/500?random=${prefix}${i}`)
  }
  return images
}

const studioImages = getImages('a')

const navigateToProject = (slug: string) => {
  router.push(`/projects/${slug}`)
}
</script>

<template>
  <div class="w-full bg-secondary pb-12" id="projects">
    <div class="mx-auto mb-10 min-w-64 max-w-[60%] justify-center pt-12">
      <p class="mb-2 text-4xl font-bold text-primary">Our Projects</p>
      <p class="text-semibold text-2xl font-semibold text-platinum">
        Curious about what we can do for you?
      </p>
    </div>

    <SHCarousel
      class="relative w-full"
      :opts="{
        align: 'center',
        loop: true,
      }"
    >
      <SHCarouselContent class="">
        <SHCarouselItem
          v-for="(image, index) in studioImages"
          :key="index"
          class="flex md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
        >
          <img :src="image" class="h-[250px] w-full rounded-3xl object-cover" />
        </SHCarouselItem>
      </SHCarouselContent>
      <SHCarouselPrevious class="absolute z-10 translate-x-16" />
      <SHCarouselNext class="absolute z-10 -translate-x-16" />
      <div class="embla__dots">
        <button
          class="embla__dot embla__dot--active"
          aria-label="Previous slide"
        ></button>
        <button class="embla__dot" aria-label="Next slide"></button>
      </div>
    </SHCarousel>
  </div>
</template>
