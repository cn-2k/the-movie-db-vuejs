<template>
  <Movies :movies="popularMovies" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Movies from "@/components/Movies.vue";
import services from "@/services";

onMounted(() => {
  getMovies();
});

const popularMovies = ref<any>([]);

const getMovies = async () => {
  const { data } = await services.movies.getPopularMovie();
  popularMovies.value = data.results;
  console.log(popularMovies.value.results);
};
</script>

<style></style>
