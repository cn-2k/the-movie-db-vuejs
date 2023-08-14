<template>
  <article class="flex p-5 space-x-4 items-start">
    <img
      :src="`https://image.tmdb.org/t/p/w400${movie.poster_path}`"
      loading="lazy"
      decoding="async"
      alt=""
      width="60"
      height="88"
      class="flex-none rounded-md bg-slate-100 shadow-lg shadow-zinc-400"
    />
    <div class="min-w-0 relative flex-auto">
      <h2 class="font-semibold text-slate-900 truncate sm:pr-20">
        {{ movie.title }}
      </h2>
      <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
        <div
          class="hidden absolute top-0 right-0 sm:flex items-center space-x-1"
        >
          <dt class="text-sky-500">
            <span class="sr-only">Star rating</span>
            <svg width="16" height="20" fill="currentColor">
              <path
                d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"
              ></path>
            </svg>
          </dt>
          <dd class="font-bold text-zinc-600">{{ movie.vote_average }}</dd>
        </div>
        <div>
          <dt class="sr-only">Rating</dt>
          <dd class="px-1.5 ring-1 ring-slate-200 rounded">
            {{ movie.original_language.toString().toUpperCase() }}
          </dd>
        </div>
        <div class="ml-2">
          <dt class="sr-only">Year</dt>
          <dd>{{ dayjs(movie.release_date).format("YYYY") }}</dd>
        </div>
        <div class="flex flex-col justify-center">
          <dd class="flex items-center">
            <svg
              width="2"
              height="2"
              fill="currentColor"
              class="my-auto mx-2 text-slate-300"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 256 256"
              class="cursor-pointer text-red-400 hover:text-red-500"
              @click="addFavorite(movie)"
              v-if="!isFavorite"
            >
              <path
                fill="currentColor"
                d="M128 226.2a20.1 20.1 0 0 1-14.2-5.8l-83.1-83.1a64.1 64.1 0 0 1 2.5-92.9a62.1 62.1 0 0 1 46-15.6a68.8 68.8 0 0 1 44.1 20l4.7 4.7l6.7-6.8a64.1 64.1 0 0 1 92.9 2.5a62.1 62.1 0 0 1 15.6 46a68.8 68.8 0 0 1-20 44.1l-81.1 81.1a19.8 19.8 0 0 1-14.1 5.8Zm5.6-14.3ZM75 52.7a38.1 38.1 0 0 0-25.7 9.5a40 40 0 0 0-1.6 58.1l80.3 80.3l78.2-78.2c15.9-16 17.5-41.6 3.6-57.1a40 40 0 0 0-58.1-1.6l-15.2 15.2a12 12 0 0 1-17 0l-13.2-13.1A44.2 44.2 0 0 0 75 52.7Z"
              />
            </svg>
            <svg
              v-if="isFavorite"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              class="cursor-pointer text-red-500"
            >
              <path
                fill="currentColor"
                d="M12 20.325q-.35 0-.713-.125t-.637-.4l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125Z"
              />
            </svg>
          </dd>
        </div>
        <!-- GENRE LIST  -->
        <!-- <div class="flex w-full mt-4 font-normal space-x-1">
          <div
            v-for="item in state.movieGenres"
            :key="item.id"
            href="#"
            class="w-fit cursor-pointer hover:bg-slate-200 text-zinc-600 text-xs bg-slate-100 px-2 py-1 rounded-full"
          >
            {{ item.name }}
          </div>
        </div> -->
      </dl>
    </div>
  </article>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { useFavorites } from "@/store/favorites";
import { ref } from "vue";

const props = defineProps<{
  movie: any;
}>();

const favorites: any = useFavorites().favorites;

const isFavorite = ref(false);

const addFavorite = (movie: any) => {
  isFavorite.value = true;
  console.log("add", movie);
  favorites.push(movie);
};
</script>
