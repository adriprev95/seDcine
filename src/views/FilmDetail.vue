<template>
    <header>
        <NavBanner @changeES="langES" @changeEU="langEU" />
    </header>
    <main>
        <section v-if="movie != undefined"
            class="pt-24 flex flex-col justify-center content-center h-screen min-h-screen z-10 overflow-hidden bg-[url('@/img/yuriy.jpg')]">
            <img :src="imageHttp + movie.backdrop_path" class="bg-cover h-screen w-screen">
            <figcaption v-if="movie"
                class="absolute top-0 left-0 h-screen grid grid-cols-2 gap-10 justify-center content-center pt-24 bg-coral-red-950/70 z-20 overflow-hidden min-h-screen">
                <div class="col-span-1 flex flex-wrap justify-center content-cente py-96 px-60">
                    <figure>
                        <img :src="imageHttp + movie.poster_path" class="">
                    </figure>
                </div>
                <div class="col-span-1 text-coral-red-50 py-96 px-24 h-screen">
                    <p class="text-6xl font-extrabold ">{{ movie?.title }}</p>
                    <p class="text-3xl font-bold italic mt-2">{{ year }}</p>
                    <div class="inline-flex">
                        <p v-for="genre, i in movie.genres" :key="genre.id" class="text-xl font-medium leading-snug mr-2">
                            <span v-if="i != 0">/</span>
                            {{ genre.name }}
                        </p>
                    </div>
                    <RatingBar :rating="movie.vote_average"></RatingBar>
                    <p class="text-3xl font-bold leading-snug">Sinopsis</p> <br>
                    <p class="text-2xl font-medium leading-snug">{{ movie?.overview }}</p><br>

                    <div class="flex flex-wrap h-20 justify-center content-start gap-5 mt-48">
                        <span class="w-full text-center text-3xl font-semibold">Produccion</span>
                        <p v-for="company in movie.production_companies" :key="company.id" class="text-lg">
                            {{ company.name }}
                        </p>
                    </div>
                </div>
            </figcaption>
        </section>
    </main>
</template>

<script setup lang="ts">
import NavBanner from '@/components/NavBanner.vue';
import RatingBar from '@/components/RatingBar.vue';

import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeMount } from 'vue';

import { geMovieById } from '@/function/ApiAcces'
import type { Movie } from '@/structs/movie'

const route = useRoute()
const id = route.params.id

let lang = route.params.lang;
const movie = ref<Movie>()
let year = ref<number>(0);

onBeforeMount(async () => {
    movie.value = await geMovieById(lang, id)
    const releaseDate = new Date(await movie.value.release_date);
    year.value = releaseDate.getFullYear();
})


let imageHttp: string = 'https://image.tmdb.org/t/p/original'

const langES = async () => {
    lang = 'es-ES'
    movie.value = await geMovieById(lang, id)
}

const langEU = async () => {
    lang = 'en-US'
    movie.value = await geMovieById(lang, id)
}
</script>

<style scoped></style>