<script setup lang="ts">
import { ref } from 'vue';
type onairInfoType = { platform: string, link: string, time: string };
const onairInfoList = ref<Array<onairInfoType>>([
    { platform: 'bilibili', link: 'https://space.bilibili.com/1459104794', time: '官方 bilibili 账号，北京时间每周五更新一话（中国大陆）' },
    { platform: 'YouTube', link: 'https://www.youtube.com/@MuseHK', time: '木棉花 HK，香港时间每周四晚间 21:35 首播最新一话字幕版（香港）' },
    { platform: 'ABEMA 动画频道', link: 'https://abema.tv/now-on-air/abema-anime', time: '日本时间每周四晚间 22:30 播出最新一话（日本全境）'},
    { platform: 'MX 电视台', link: 'https://s.mxtv.jp/index.html', time: '日本时间每周四晚间 23:00 播出最新一话（首都圈）'},
    { platform: 'BS 日本电视', link: 'https://www.bs4.jp/', time: '日本时间每周四晚间 23:00 播出最新一话（日本全境）'},
])
</script>

<template>
    <div id="page2">
        <div class="min-h-screen w-full p-10 md:py-32 md:px-20 font-['Lato',sans-serif]">
            <h1 class="text-center font-bold text-3xl">ON AIR</h1>
            <p class="text-center text-sm mb-5">播　出　信　息</p>
            <div class="flex justify-center">
                <table class="border-collapse table-auto w-full text-sm md:w-1/2 w-full">
                    <thead>
                        <tr>
                            <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left text-center">平台</th>
                            <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="info in onairInfoList">
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center"><a :href="info.link">{{ info.platform }}</a></td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{ info.time }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>