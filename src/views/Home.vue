<template>
  <div
    ref="el"
    class="overflow-auto scrollbar-thin scrollbar-thumb-sky-500 hover:scrollbar-thumb-sky-600 scrollbar-track-transparent h-[calc(100%_-_68px)]"
  >
    <Movies :movies="movies.popularMovies" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useFavorites } from "@/store/favorites";
import Movies from "@/components/Movies.vue";
import { useInfiniteScroll } from "@vueuse/core";

const movies = useFavorites();
const el = ref<HTMLElement | null>(null);
const page = ref(1);

onMounted(() => {
  getMoviesList();
});

const getMoviesList = async () => {
  try {
    const { data } = await movies.getMovies();
    movies.popularMovies = data;
  } catch (error) {
    console.log(error);
  }
};

const getMoviesOnScroll = async () => {
  try {
    page.value++;
    const { data } = await movies.getMovies(page.value);

    movies.popularMovies.push(...data);
  } catch (error) {
    console.log(error);
  }
};

useInfiniteScroll(el, () => {
  console.log("executei");

  if (movies.searchMovieQuery) {
    return;
  }
  getMoviesOnScroll();
});
</script>

<style></style>
