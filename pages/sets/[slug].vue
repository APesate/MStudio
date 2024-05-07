<script lang="ts" setup>
const { slug } = useRoute().params
</script>

<template>
  <div>
    <h1>{{ slug }}</h1>
    <p>This is the page for {{ slug }}</p>
  </div>
</template>

<style></style>
