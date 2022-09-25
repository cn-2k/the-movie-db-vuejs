<template>
    <div class="w-full h-auto lg:h-screen p-7 lg:p-0 flex flex-col justify-center items-center">
      <div class="max-w-7xl items-center flex flex-wrap">
        <!-- MOVIE CONTAINER  -->
        <div class="w-full lg:w-1/2 lg:pr- 10 mb-6 lg:mb-0">
          <div
            class="overflow-auto scrollbar-hide bg-white h-[30rem] rounded-xl ring-1"
          >
            <Movies :movies="popularMovies" />
          </div>
        </div>
        <!-- IMAGE CONTAINER  -->
        <img
          class="w-full lg:w-1/2 h-64 lg:h-auto px-10"
          src="../assets/images/tmdb-logo.svg"
        />
      </div>
    </div>
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
  popularMovies.value = data;
  console.log(popularMovies.value.results);
};
</script>

<style></style>
