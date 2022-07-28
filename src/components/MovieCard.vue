<template>
  <div class="flex flex-col gap-1 ">
    <!-- Image -->
    <a href="#">
      <img :src="imageUrl ? 'https://image.tmdb.org/t/p/w400' + imageUrl : fallBackImage"
        class="hover:shadow-md hover:shadow-cyan-500/50 border-2 border-transparent hover:border-[#01b4e4] focus:hover:hover:border-[#01b4e4] focus:outline-none transition-colors" :title="movieTitle" />
    </a>


    <!-- Images can be:
        https://image.tmdb.org/t/p/w400 - width 400
        https://image.tmdb.org/t/p/original - .svg and .png -->

    <!-- Movie Title -->
    <p class="text-gray-200 font-semibold">{{ movieTitle }}</p>

    <!-- Genre Tags -->
    <div class="flex flex-row flex-wrap gap-2">
      <p class="w-full text-xs text-gray-400 font-bold subpixel-antialiased">
        Genres:
      </p>
      <a v-for="item in state.movieGenres" :key="item.id" href="#"
        class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import fallBackImage from "../assets/images/fallback-image.png";
import service from "../services";

onMounted(() => {
  getGenres();
});

const props = defineProps<{
  imageUrl: string;
  movieTitle: string;
  genre: Array<any>;
}>();

const state = reactive({
  movieGenres: <Array<any>>[],
});

// TODO: Put it in a store to avoid making multiple requests
const getGenres = async () => {
  const { data } = await service.movies.getMovieGenres();
  state.movieGenres = data.genres.filter((item1: any) =>
    props.genre.some((item2: any) => item1.id == item2)
  );
};
</script>

<style  scoped>
</style>
