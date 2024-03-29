import { defineStore } from "pinia";
import { computed, ref } from "vue";
import services from "@/services";
import { useStorage } from "@vueuse/core";

export const useFavorites = defineStore("favorites", () => {
  const popularMovies = ref<any>(useStorage("popularMovies", []));
  const favorites = ref<any>(useStorage("favorites", []));
  const searchMovieQuery = ref<string>("");

  const getMovies = async (page = 1) => {
    const { data } = await services.movies.getPopularMovie({ page });

    return {
      data: data.results,
    };
  };

  const addFavoriteMovie = (movie_id: number) => {
    const selectedMovie = popularMovies.value.find(
      (x: any) => x.id === movie_id
    );

    favorites.value = [...favorites.value, selectedMovie];
  };

  const removeFavoriteMovie = (movie_id: number) => {
    favorites.value = favorites.value.filter((x: any) => x.id !== movie_id);
  };

  const totalFavorites = computed(() => {
    return favorites.value.length;
  });

  const isFavorite = computed(() => (movie_id: number) => {
    return favorites.value.some((x: any) => x.id === movie_id);
  });

  return {
    favorites,
    totalFavorites,
    addFavoriteMovie,
    removeFavoriteMovie,
    isFavorite,
    getMovies,
    popularMovies,
    searchMovieQuery,
  };
});
