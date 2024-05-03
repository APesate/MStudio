<script lang="ts" setup>
defineProps({
  videoSource: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <video autoplay muted loop playsinline class="w-full h-screen object-cover">
    <source :src="videoSource" type="video/mp4" />
  </video>
</template>
