<script setup lang="ts">
import { ref } from 'vue';

const imgSort = ref<number>(0);

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
            <div class=" text-gray-100 absolute">
                <div class="">
                    <img src="../assets/img/logo.svg" class="w-[60vw] m-3 md:w-[20vw] md:m-5" />
                </div>
                <div class="flex flex-row font-serif text-2xl">
                    <div>
                        <p class="pl-5 my-2 bg-[#3388bb]">纵使是迷路的孩子也无妨</p>
                        <p class="pl-5 my-2 bg-[#3388bb]">迷路的孩子也会继续前进</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
</template>

<style scoped>

</style>