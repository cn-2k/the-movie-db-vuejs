import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFavorites = defineStore("favorites", () => {
  const favorites = ref<any>([]);

  const totalFavorites = computed(() => {
    return favorites.value.length
  })

  const isFavorite = (movie_id: number) => {
    return favorites.value.some((x: any) => x.id === movie_id)
  }

  const addFavoriteMovie = ({movies, movie_id}: any) => {
    const selectedMovie = movies.find((x: any) => x.id === movie_id)

    favorites.value = [...favorites.value, selectedMovie]
  }

  const removeFavoriteMovie = (movie_id: number) => {
    favorites.value = favorites.value.filter((x: any) => x.id !== movie_id)
  }

  return { favorites, totalFavorites, addFavoriteMovie, removeFavoriteMovie, isFavorite };
});
