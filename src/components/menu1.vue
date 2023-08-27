<script setup lang="ts">
import { ref } from 'vue';
import smoothScroll from '../assets/smoothScroll.ts';

const toggleMenu = ref<boolean>(false);
type linkListType = { name: string, link: string; };
const linkList = ref<Array<linkListType>>([
    {name: 'TOP', link: '#page1'},
    {name: 'ABOUT', link: '#page2'},
]);
</script>

<template>
    <TransitionGroup name="slide">
        <div v-if="toggleMenu" class="fixed w-full h-screen bg-black opacity-40 z-40">
        </div>
        <div v-if="toggleMenu" class="fixed right-0 w-[80vw] md:w-[40vw] h-screen bg-[#3388bb] z-40 flex">
            <div class="w-full p-10 flex flex-col justify-center text-white">
                <div class="grid grid-cols-1 md:grid-cols-2 font-['Lato'] text-xl">
                    <div v-for="link in linkList" class="my-2">
                        <a :href="link.link" v-on:click.prevent="smoothScroll(link.link);toggleMenu=!toggleMenu"><p>{{ link.name }}</p></a>
                    </div>
                </div>
            </div>
        </div>
    </TransitionGroup>
    <div class="fixed top-0 right-0 z-40 w-16 h-28 md:w-20 md:h-36">
        <button class="w-full h-full bg-[#3388bb] hover:bg-[#287aac] duration-500 ease" v-on:click="toggleMenu = !toggleMenu">
            <div class="text-white rotate-90">
                <p class="font-['Lato']">{{ toggleMenu ? 'CLOSE' : 'MENU' }}</p>
            </div>
        </button>
    </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>