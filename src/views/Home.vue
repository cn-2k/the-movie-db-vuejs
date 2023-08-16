<template>
  <Movies :movies="movies.popularMovies" />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useFavorites } from "@/store/favorites";
import Movies from "@/components/Movies.vue";

const movies = useFavorites();

onMounted(() => {
  movies.getMovies();
});
</script>

<style></style>
