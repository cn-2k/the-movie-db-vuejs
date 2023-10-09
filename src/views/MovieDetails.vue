<template>
  <div class="movie rounded-xl w-full h-full" v-if="currentMovieDetail">
    <div class="movie-img" :style="{
      backgroundImage: `url('https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}')`,
    }">
      <div class="w-full flex justify-end p-4">
        <router-link to="/" class="p-1 bg-[#0BB5E0] rounded-full shadow-xl"><svg xmlns="http://www.w3.org/2000/svg"
            width="18" height="18" viewBox="0 0 24 24">
            <path fill="white"
              d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.425 12q0-.2.063-.375T4.7 11.3l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.825Z" />
          </svg></router-link>
      </div>


    </div>
    <div class="w-full p-5">
      <div class="flex gap-2">
        <p class="text-white text-2xl leading-tight font-bold tracking-wider">
          {{ currentMovieDetail.original_title }}
        </p>
        <div class="my-auto">
          <!-- FAVORITE  -->
          <svg v-if="!favorites.isFavorite(currentMovieDetail.id)" width="18" height="18" viewBox="0 0 24 24"
            @click="toggleFavoriteMovie(currentMovieDetail.id)"
            class="cursor-pointer fill-transparent stroke-2 stroke-red-500"
            :class="{ 'fill-red-500': favorites.isFavorite(currentMovieDetail.id) }">
            <path
              d="M12 20.325q-.35 0-.713-.125t-.637-.4l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125Z" />
          </svg>
          <!-- DESFAVORITO  -->
          <svg width="18" height="18" viewBox="0 0 24 24" class="cursor-pointer text-red-500"
            @click="removeSelectedMovie(currentMovieDetail.id)" v-if="favorites.isFavorite(currentMovieDetail.id)">
            <path fill="currentColor"
              d="M15 14v-2h8v2h-8Zm-4 7l-3.175-2.85q-1.8-1.625-3.088-2.9t-2.125-2.4q-.837-1.125-1.225-2.175T1 8.475q0-2.35 1.575-3.913T6.5 3q1.3 0 2.475.537T11 5.075q.85-1 2.025-1.538T15.5 3q2.125 0 3.563 1.288T20.85 7.3q-.45-.175-.9-.262t-.875-.088q-2.525 0-4.3 1.763T13 13q0 1.3.525 2.463T15 17.45q-.475.425-1.238 1.088T12.45 19.7L11 21Z" />
          </svg>
        </div>
      </div>
      <span class="bg-gray-300 text-gray-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded">{{
        dayjs(currentMovieDetail.release_date).format('YYYY') }}</span>
      <span v-for="genre in currentMovieDetail.genres" :key="genre.id"
        class="bg-gray-100 text-gray-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{{ genre.name }}</span>
      <p class="text-zinc-400 text-sm leading-tight mt-4">
        {{ currentMovieDetail.overview }}
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import services from "@/services";
import dayjs from "dayjs";
import { useFavorites } from "@/store/favorites";

const currentMovieDetail = ref();
const route = useRoute();

onMounted(() => {
  getMovieDetail();
});

interface GenrePros {
  id: number,
  name: string
}

const getMovieDetail = async () => {
  const { data } = await services.movies.getMovieDetails(route.params.id);

  currentMovieDetail.value = data;
  console.log(currentMovieDetail.value.id);
};

const formattedGenres = computed(() => {
  if (currentMovieDetail.value.genres) {
    return currentMovieDetail.value.genres.map((genre: GenrePros) => genre.name).join(', ');
  }
  return '';
})

const favorites = useFavorites();
const selectedFavorite = ref<boolean>(false);

const toggleFavoriteMovie = (movie_id: number) => {
  selectedFavorite.value = !selectedFavorite.value;
  if (selectedFavorite.value) {
    if (favorites.isFavorite(movie_id)) {
      favorites.removeFavoriteMovie(movie_id);
      selectedFavorite.value = false
      return;
    }
    favorites.addFavoriteMovie(movie_id);
    selectedFavorite.value = true
  } else {
    favorites.removeFavoriteMovie(movie_id);
    selectedFavorite.value = false
  }
};

const removeSelectedMovie = (movie_id: number) => {
  favorites.removeFavoriteMovie(movie_id)
  selectedFavorite.value = false
}
</script>

<style>
.movie-img {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  position: relative;
}

.movie-img::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 100%);
  z-index: 1;
}
</style>

<style lang="scss">
.movie-img {
  width: 100%;
  height: 380px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 111 !important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-mask-image: -webkit-gradient(linear,
      left top,
      left bottom,
      color-stop(0, rgba(0, 0, 0, 1)),
      color-stop(0.35, rgba(0, 0, 0, 1)),
      color-stop(0.5, rgba(0, 0, 0, 1)),
      color-stop(0.65, rgba(0, 0, 0, 1)),
      color-stop(0.85, rgba(0, 0, 0, 0.6)),
      color-stop(1, rgba(0, 0, 0, 0)));
  position: relative;
}

.movie {
  background: -moz-linear-gradient(top,
      rgba(255, 255, 255, 0) 38%,
      rgba(255, 255, 255, 0.06) 39%,
      rgba(30, 27, 38, 0.88) 53%,
      rgba(30, 27, 38, 1) 55%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(top,
      rgba(255, 255, 255, 0) 38%,
      rgba(255, 255, 255, 0.06) 39%,
      rgba(30, 27, 38, 0.88) 53%,
      rgba(30, 27, 38, 1) 55%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,
      rgba(255, 255, 255, 0) 38%,
      rgba(255, 255, 255, 0.06) 39%,
      rgba(30, 27, 38, 0.88) 53%,
      rgba(30, 27, 38, 1) 55%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background-size: cover;
  z-index: 1 !important;
  display: block;
  border-radius: 4px;
}
</style>
