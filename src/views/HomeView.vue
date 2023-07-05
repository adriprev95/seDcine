<script setup lang="ts">
import { onBeforeMount } from 'vue';

import FilmCard from '@/components/FilmCard.vue';
import NavBanner from '@/components/NavBanner.vue';
import PaginationFilm from '@/components/PaginationFilm.vue';
import { ref } from 'vue'
import type { Movie } from '@/structs/movie'

import { getMovies } from '@/function/ApiAcces'

let page = ref<number>(1);
let lang = ref<string>('es-ES');
let movies = ref<Array<Movie>>();
let loading = ref<boolean>(true);


/* movies.value = await getMovies(lang.value, page.value) */


const upPage = async () => {
  loading.value = true
  if (page.value < 44977) {
    page.value++
  }
  movies.value = await getMovies(lang.value, page.value)
  loading.value = false
  console.log(page.value)
}

const downPage = async () => {
  loading.value = true
  if (page.value > 1)
    page.value--
  movies.value = await getMovies(lang.value, page.value)
  loading.value = false
  console.log(page.value)
}

const langES = async () => {
  loading.value = true
  lang.value = 'es-ES'
  movies.value = await getMovies(lang.value, page.value)
  loading.value = false
}

const langEU = async () => {
  loading.value = true
  lang.value = 'en-US'
  movies.value = await getMovies(lang.value, page.value)
  loading.value = false
}

onBeforeMount(async () => {
  movies.value = await getMovies(lang.value, page.value)
  loading.value = false
})

</script>

<template>
  <header>
    <NavBanner @changeES="langES" @changeEU="langEU" />
  </header>
  <main class="bg-coral-red-950 min-h-screen h-full z-10">

    <section class="pt-28 flex flex-col justify-center content-center">
      <Transition>
        <section v-if="loading === false" class="flex flex-col justify-center content-center">

          <PaginationFilm class="mx-auto" @next="upPage" @down="downPage" />
          <div class="grid grid-cols-7 justify-center content-between gap-3 mx-20 mt-5">
            <div v-for="movie, i in movies" :key="i">
              <FilmCard :film=movie @click="$router.push({ name: 'detail', params: { id: movie.id, lang: lang } })">
              </FilmCard>
            </div>
          </div>
          <PaginationFilm class="mx-auto my-5" />

        </section>
      </Transition>
      <section v-if="loading === true">
        <div class="flex flex-wrap justify-center content-center h-screen -mt-16">
          <span class="loading loading-spinner loading-lg text-primary"></span>
        </div>

      </section>

    </section>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
