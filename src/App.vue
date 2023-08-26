<script setup lang="ts">
import {onMounted, ref} from 'vue';

const onLoading = ref<boolean>(true);

function waitLoading(): void {
  window.addEventListener('load', () => {
    setInterval(() => {
      onLoading.value = false;
    }, 1000);
  })
}

onMounted(() => {
  waitLoading();
})
</script>

<template>
  <div>
    <div v-if="onLoading">
      
    </div>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
