<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="h-screen flex flex-col justify-center">
        <div class="flex flex-row justify-center items-center font-[sans-serif]">
            <h1 class="text-2xl font-bold">404</h1>
            <div class="bg-gray-400 h-12 w-[0.5px] mx-4"></div>
            <p class="font-sm">This page could not be found.</p>
            <button class="btn btn-circle ml-2" v-on:click="$router.push('/')">
                <Icon icon="material-symbols:door-back-outline" class="text-2xl" />
            </button>
        </div>
    </div>
</template>

<style scoped></style>