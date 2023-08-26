<script setup lang="ts">
import {onMounted, ref} from 'vue';

const onloading = ref<boolean>(true);

function waitLoading(): void {
  window.addEventListener('load', () => {
    setInterval(() => {
      onloading.value = false;
    }, 1000);
  })
}

onMounted(() => {
  waitLoading();
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
