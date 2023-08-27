<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    pageLoaded: Boolean
})


</script>

<template>
<div class="min-h-screen w-full flex flex-row justify-center">
    <div class="flex flex-col justify-center">
        <div class="text-center">
            <img src="../assets/img/icon_mark.svg" class="inline w-[40vw] m-3 md:w-[10vw] md:m-5 rotate-animation" />
        </div>
        <div class="h-10">
            <Transition name="slide" mode="in-out">
            <div v-if="!pageLoaded">
                <h1 class="font-serif text-xl text-white text-center">迷　惘　之　时　不　再　迷　惘</h1>
                <p class="text-sm text-white text-center">BanG Dream Anime It's MyGO!!!!!</p>
            </div>
        </Transition>
        </div>
    </div>
</div>
</template>

<style scoped>
.rotate-animation {
  animation-name: rotate;
  animation-duration: 6s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-delay: 0s;
}

@keyframes rotate {
0% {
  transform: rotate(0deg);
}
25% {
  transform: rotate(30deg);
}
50% {
  transform: rotate(0deg);
}
75% {
  transform: rotate(90deg);
}
100% {
  transform: rotate(0deg);
}
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

</style>