<script setup lang="ts">
import {onMounted, ref} from 'vue';
import loading from './components/loading.vue';

const onLoading = ref<boolean>(true);
const showLoading = ref<boolean>(true);

function waitLoading(): void {
  window.addEventListener('load', () => {
    onLoading.value = false;
    setInterval(() => {
      showLoading.value = false;
    }, 2000);
  })
}

waitLoading();
</script>

<template>
  <Transition name="slide">
    <div v-if="showLoading" class="absolute h-screen w-full bg-[#3388bb] z-10">
      <loading :page-loaded='onLoading'/>
    </div>
  </Transition>
  <div class="reletive z-0">
    <RouterView />
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
