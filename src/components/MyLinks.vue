<script setup lang="ts">
  import { ref } from 'vue'
  defineProps<{ msg: string }>()
  const count = ref(0)
  const increaseCounter = (e: MouseEvent, n?: number) => {
    count.value += (n || 1)
  }
</script>

<template>
 <ul>
  <li>Hello World</li>
  <li>Hello World</li>
  <li>Hello World</li>
  <li>Hello World</li>
 </ul>
</template>

<style scoped>
</style>
