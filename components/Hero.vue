<script lang="ts" setup>
defineProps({
  videoSource: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <video autoplay muted loop playsinline>
    <source :src="videoSource" type="video/mp4" />
  </video>
</template>

<style scoped>
video {
  object-fit: cover;
  height: 100vh;
  min-width: 100%;
  background: hsl(0, 0%, 0%);
}
</style>
