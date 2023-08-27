<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import 'animate.css';
import { linkList } from '../config.ts';

const imgSort = ref<number>(0);
const toggleSound = ref<boolean>(true);

const playAnimation = ref<boolean[]>([
    false,
    false,
    false
]);

function imgSortFunc(): void {
    setInterval(() => {
        if (imgSort.value < 2) {
            imgSort.value++;
        } else {
            imgSort.value = 0;
        }
    }, 1000);
}

onMounted(() => {
    setInterval(() => {
        let i: number = 0;
        for (i = 0; i < 3; i++) {
            playAnimation.value[i] = true;
        }
    }, 1000);
});
</script>

<template>
    <div class="min-h-screen" id="page1">
        <div class="flex h-screen absolute w-full p-8 md:p-16 bg-gray-400 z-0">
            <div class="w-full bg-blue-950 overflow-hidden text-center">
                <video autoplay playsinline :muted="toggleSound" loop class=" min-h-full max-w-full object-cover inline">
                    <source src="../assets/vid/bg.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="flex h-screen w-full p-8 md:p-16 absolute z-10">
            <div class="w-full bg-blue-950 bg-opacity-40">
            </div>
        </div>
        <div class="h-screen w-full text-gray-100 absolute z-20">
            <div class="pt-8 pl-8 md:pt-16 md:pl-16">
                <img src="../assets/img/logo.svg" class="w-[60vw] m-3 md:w-[20vw] md:m-5" />
            </div>
            <div class="flex flex-row font-serif text-2xl md:text-5xl">
                <div class="flex flex-col">
                    <div class="flex flex-row">
                        <p class="pl-8 md:pl-16 pb-1 my-1 bg-[#3388bb]">纵使是迷路的孩子也无妨</p>
                    </div>
                    <div class="flex flex-row">
                        <p class="pl-8 md:pl-16 pb-1 my-1 bg-[#3388bb]">继续前进。</p>
                    </div>
                </div>
            </div>
            <div class="ml-12 md:ml-20 flex flex-row">
                <ul>
                    <TransitionGroup name="groupAnimation">
                        <li v-for="link in linkList">
                            <a :href="link.link"
                                class="text-xl text-gray-100 hover:text-[#3388bb] ease duration-100 flex flex-row items-center">
                                <p>{{ link.name }}</p>
                                <Icon icon="akar-icons:arrow-up-right" />
                            </a>
                        </li>
                    </TransitionGroup>
                </ul>
            </div>
        </div>
        <div class=" bottom-0 right-0 absolute m-8 md:m-16 z-20">
            <button v-on:click="toggleSound = !toggleSound" class="text-white text-2xl mr-2">
            <Icon v-if="toggleSound" icon="charm:sound-mute" />
            <Icon v-else icon="charm:sound-up" />
            </button>
        </div>
    </div>
</template>

<style scoped></style>