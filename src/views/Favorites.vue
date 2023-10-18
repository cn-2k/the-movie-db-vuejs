<template>
  <main
    class="overflow-auto scrollbar-thin scrollbar-thumb-sky-500 hover:scrollbar-thumb-sky-600 scrollbar-track-transparent h-[calc(100%_-_68px)]"
  >
    <Movies :movies="favoriteMovies" />
    <div v-if="!favoriteMovies.length" class="mx-10 mt-4">
      <div
        class="flex items-center p-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50"
        role="alert"
      >
        <svg
          class="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <div>No favorite movie has been selected!</div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Movies from "@/components/Movies.vue";
import { useFavorites } from "@/store/favorites";
import { computed } from "vue";

const favoriteMovies = computed(() => {
  return useFavorites().favorites as Array<any>;
});
</script>

<style></style>
