<template>
    <figure class="relative z-10">
        <img :src="imageHttp + film.poster_path">
        <figcaption
            class="absolute top-0 left-0 opacity-0 w-full h-full bg-coral-red-950/70 transition duration-500 ease-in-out delay-200 hover:opacity-100 ">
            <div class="flex flex-col-reverse h-full w-full px-5 py-5 mt-10">
                <RatingBar :rating="film.vote_average"></RatingBar>
                <span class="text-coral-red-50 text-xl font-semibold">{{ year }}</span>
                <span class="text-coral-red-50 italic text-3xl font-extrabold">{{ film.title }}</span>
            </div>
        </figcaption>
    </figure>
</template>

<script setup lang="ts">
import type { Movie } from '@/structs/movie'
import { ref } from 'vue';
import RatingBar from '@/components/RatingBar.vue';
const props = defineProps<{
    film: Movie;
}>();




const rating = ref(props.film.vote_average / 2)
const releaseDate = new Date(props.film.release_date);
const year = ref(releaseDate.getFullYear());

let ratingBool: Array<Boolean> = [rating.value > 1 ? true : false, rating.value > 2 ? true : false, rating.value > 3 ? true : false, rating.value > 4 ? true : false, rating.value == 5 ? true : false]
console.log(year.value)
console.log(ratingBool)
let imageHttp: string = 'https://image.tmdb.org/t/p/original';
</script>

<style scoped></style>