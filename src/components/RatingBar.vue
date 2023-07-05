<template>
    <div class="flex flex-row h-20 w-20">
        <div v-for="(rating, index) in ratingBool" :key="index">
            <div v-if="rating" class="flex">
                <img src="@/assets/img/pngwing.com (1).png" class="h-full w-full" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onBeforeMount } from 'vue';

const props = defineProps<{
    rating: number;
}>();

let rating = ref<number>(props.rating)
let ratingBool = ref<Array<Boolean>>()

function ratingUse() {
    rating.value /= 2
    ratingBool.value = [rating.value > 1 ? true : false, rating.value > 2 ? true : false, rating.value > 3 ? true : false, rating.value > 4 ? true : false, rating.value == 5 ? true : false]
}

onBeforeMount(() => ratingUse())
</script>

<style scoped></style>