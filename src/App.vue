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
  <Transition name="slide-out-fwd-center">
    <div v-if="showLoading" class="fixed h-screen w-full bg-[#3388bb] z-50">
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

.slide-out-fwd-center-enter-active,
.slide-out-fwd-center-leave-active {
   transition: cubic-bezier(0.550, 0.085, 0.680, 0.530) 1s opacity,
               cubic-bezier(0.550, 0.055, 0.675, 0.190) 1s transform;
}

.slide-out-fwd-center-enter-from {
  transform: translateZ(1);
  opacity: 1;
}
.slide-out-fwd-center-leave-to {
  transform: translateZ(600px);
  opacity: 0;
}
</style>
