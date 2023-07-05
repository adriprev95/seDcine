import type { ResApi } from '@/structs/resApi'
import type { Movie } from '@/structs/movie'
import { ref } from 'vue'

const resApi = ref<ResApi>()
const movies = ref<Array<Movie>>()
const movie = ref<Movie>()

const api_key = import.meta.env.VITE_API_KEY

export async function getMovies(lang: string, page: number) {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?' +
        new URLSearchParams({
          include_adult: 'false',
          include_video: 'true',
          language: lang,
          page: page.toString(),
          sort_by: 'popularity.desc',
          api_key: api_key
        })
    )
    if (response.status != 200) {
      throw new Error('Error http:' + response.status)
    }
    resApi.value = await response.json()
    movies.value = resApi.value?.results
    return movies.value
  } catch (error) {
    console.log(error)
  }
}

export async function geMovieById(
  lang: string | string[],
  id: string | string[]
): Promise<Movie | undefined> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?` +
        new URLSearchParams({
          language: lang,
          api_key: api_key
        })
    )
    movie.value = await response.json()
    return movie.value
    if (response.status != 200) {
      throw new Error('Error http:' + response.status)
    }
  } catch (error) {
    console.log(error)
  }
}
