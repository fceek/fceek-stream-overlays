<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <div class="container">
    <main class="main">
      <h1 class="title">Hello there</h1>
      <p class="description">This page is {{ msg }}</p>
    </main>
  </div>
</template>

<style scoped>
</style>
