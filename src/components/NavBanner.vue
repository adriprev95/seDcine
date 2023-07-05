<template>
    <nav class="navbar bg-cover bg-coral-red-500 h-24 fixed z-40">
        <div class="flex-1 h-24 -ml-2">
            <img class="h-full" src="@/assets/img/bannerV2.jpg" alt="">
        </div>
        <div class="flex-none mr-20">
            <button class="btn btn-ghost btn-circle" @click="$emit('changeES')">
                <img class="h-7 w-7" src="@/assets/img/ES.png">
            </button>
            <button class="btn btn-ghost btn-circle" @click="$emit('changeEU')">
                <img class="h-7 w-7" src="@/assets/img/EU.png">
            </button>
        </div>
    </nav>
    <!-- <header class="bg-cover bg-coral-red-500 h-24 w-full">
        <img class="h-full" src="@/assets/img/bannerV2.jpg" alt="">
    </header> -->
</template>

<script setup lang="ts">

</script>

<style scoped></style>