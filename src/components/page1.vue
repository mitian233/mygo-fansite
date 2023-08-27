<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import 'animate.css';

const imgSort = ref<number>(0);
type linkListType = { name: string, link: string; };
const linkList = ref<Array<linkListType>>([
    {
        name: '官方 Twitter/X',
        link: 'https://twitter.com/bang_dream_mygo'
    },
    {
        name: '官方 Bilibili',
        link: 'https://space.bilibili.com/1459104794'
    },
    {
        name: '官方 Youtube',
        link: 'https://www.youtube.com/channel/UC80p_16pSSHA8YmtCVdX51w?sub_confirmation=1'
    }
]);
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
                <video autoplay muted loop class=" min-h-full max-w-full object-cover inline">
                    <source src="../assets/vid/bg.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="flex h-screen w-full p-8 md:p-16 absolute z-10">
            <div class="w-full bg-blue-950 bg-opacity-40">
            </div>
        </div>
        <div class="h-screen w-full p-8 md:p-16 text-gray-100 absolute z-20">
            <div class="">
                <img src="../assets/img/logo.svg" class="w-[60vw] m-3 md:w-[20vw] md:m-5" />
            </div>
            <div class="flex flex-row font-serif text-2xl md:text-5xl">
                <div class="flex flex-col">
                    <div class="flex flex-row">
                        <p class="pl-5 pb-1 my-2 bg-[#3388bb]">纵使是迷路的孩子也无妨</p>
                    </div>
                    <div class="flex flex-row">
                        <p class="pl-5 pb-1 my-2 bg-[#3388bb]">继续前进。</p>
                    </div>
                </div>
            </div>
            <div class="pl-3 md:pl-10 flex flex-row">
                <ul>
                    <TransitionGroup name="groupAnimation">
                        <li v-for="link in linkList">
                            <a :href="link.link"
                                class="text-xl text-gray-100 hover:text-[#3388bb] ease duration-100 flex flex-row items-center">
                                <p>{{ link.name }}</p>
                                <Icon icon="akar-icons:arrow-up-right" class="text-gray-100" />
                            </a>
                        </li>
                    </TransitionGroup>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped></style>