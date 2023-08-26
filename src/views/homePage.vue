<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

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
function imgSortFunc(): void {
    setInterval(() => {
        if (imgSort.value < 2) {
            imgSort.value++;
        } else {
            imgSort.value = 0;
        }
    }, 1000);
}
</script>

<template>
    <div class="min-h-screen">
        <div class="flex min-h-screen w-full absolute p-10 md:p-16 bg-gray-400">
            <div class="w-full bg-blue-950">
                <div>
                    <div class=" text-gray-100 md:relative absolute">
                        <div class="">
                            <img src="../assets/img/logo.svg" class="w-[60vw] m-3 md:w-[20vw] md:m-5" />
                        </div>
                        <div class="flex flex-row font-serif text-2xl md:text-5xl">
                            <div class="flex flex-col">
                                <div class="flex flex-row"><p class="pl-5 pb-1 my-2 bg-[#3388bb]">纵使是迷路的孩子也无妨</p></div>
                                <div class="flex flex-row"><p class="pl-5 pb-1 my-2 bg-[#3388bb]">继续前进。</p></div>
                            </div>
                        </div>
                        <div class="pl-3 md:pl-10 flex flex-row">
                            <ul>
                                <li v-for="link in linkList" class=" flex flex-row items-center">
                                    <a :href="link.link" class="text-xl text-gray-100 hover:text-gray-300">{{ link.name }}</a>
                                    <Icon icon="akar-icons:arrow-up-right" class="text-gray-100" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>