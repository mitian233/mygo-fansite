<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { linkList, sponsorList } from '../config.ts';
</script>

<template>
    <div class="p-8 md:p-16 lg:px-32 lg:py-24 bg-[#172c3f] font-['Lato','Noto_Serif_SC'] " id="footer">
        <div class="grid grid-cols-1 md:grid-cols-2 mb-5 text-white">
            <div class="mb-5 md:mb-0">
                <img src="../assets/img/logo.svg" class="w-1/2 md:w-1/3" />
            </div>
            <div>
                <div class="flex flex-wrap text-base md:text-xl">
                    <a v-for="link in linkList" :href="link.link" class="flex flex-row items-center mr-2 md:mr-10 hover:text-gray-300 duration-300 ease" >
                        <Icon :icon="link.icon"></Icon>
                        <p>&nbsp;{{ link.name }}</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-row mb-5 flex-wrap">
            <div class="flex justify-start flex-wrap">
                <a v-for="sponsor in sponsorList" :href="sponsor.link" class="h-6 m-1">
                    <img :src="sponsor.logo" class="h-full px-1" />
                </a>
            </div>
            <div>

            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 text-sm text-gray-300 font-sans">
            <div>
                <p>该动画中文应援站与 Bushiroad 及相关实体无任何关联</p>
                <p>所有内容为粉丝同人创作，请注意甄别</p>
            </div>
            <div class="md:text-right">
                <p>2023 ©BanG Dream! Project</p>
                <p>Designed by bangdream.moe</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>