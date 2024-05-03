<script lang="ts" setup></script>

<template>
  <div>
    <div class="content">
      <p class="title">Mihai Cluj's Studio</p>
      <p class="subtitle">Content Creators Paradise</p>
      <p class="body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        tempora incidunt labore earum! Debitis nihil ad cumque architecto
        placeat illo eius explicabo pariatur, vero autem iure facere nemo
        aperiam? Aliquam?
      </p>
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  /* height: 250px; */
  background-color: var(--color-primary-dark);
}

.content {
  padding: 48px 0;
  margin-inline: auto;
  max-width: 60%;
  min-width: 250px;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-primary-light);
  text-align: center;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 1.25rem;
}

.body {
  color: white;
  text-align: center;
}
</style>
