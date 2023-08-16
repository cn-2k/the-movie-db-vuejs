import { defineStore } from "pinia";
import { computed, ref } from "vue";
import services from "@/services";

export const useFavorites = defineStore("favorites", () => {
  const favorites = ref<any>([]);
  const popularMovies = ref<any>([]);

  const totalFavorites = computed(() => {
    return favorites.value.length
  })

  const isFavorite = (movie_id: number) => {
    return favorites.value.some((x: any) => x.id === movie_id)
  }

  const getMovies = async () => {
    const { data } = await services.movies.getPopularMovie();
    popularMovies.value = data.results;
  }

  const addFavoriteMovie = (movie_id: number) => {
    const selectedMovie = popularMovies.value.find((x: any) => x.id === movie_id)

    favorites.value = [...favorites.value, selectedMovie]
  }

  const removeFavoriteMovie = (movie_id: number) => {
    favorites.value = favorites.value.filter((x: any) => x.id !== movie_id)
  }

  return { favorites, totalFavorites, addFavoriteMovie, removeFavoriteMovie, isFavorite, getMovies, popularMovies };
});
