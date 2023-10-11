<template>
  <div class="w-full h-auto lg:h-screen p-7 lg:p-0 flex flex-col justify-center items-center">
    <div class="max-w-7xl items-center flex flex-wrap ">
      <!-- MOVIE CONTAINER  -->
      <div class="w-full lg:w-[35rem] mb-6 lg:mb-0 ">
        <div class=" bg-white h-[40rem] rounded-l-xl rounded-tr-xl">
          <Nav class="rounded-xl" v-if="$route.name !== 'movieDetail'" @refresh="favorites.getMovies()">
            <template #menu>
              <NavItem to="/">Popular Movies</NavItem>
              <NavItem to="/favorites">
                <template #favorites>
                  Favorites
                  <span v-if="favorites.favorites"
                    class="absolute top-3 text-white bg-red-500 border border-white rounded-full px-1 ml-1 font-bold align-middle text-xs">
                    {{ favorites.totalFavorites }}
                  </span>
                </template>
              </NavItem>
            </template>
            <div class="flex-1">
              <div class="flex flex-row w-full ml-2 gap-3">
                <input type="text" v-model="favorites.searchMovieQuery" id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md block w-full p-2 ml-4 focus:outline-none"
                  placeholder="Search movie..." />
                <div v-if="$route.path === '/'" @click="syncMovies()" title="Sync popular movies"
                  class="flex justify-end my-auto px-3 py-2 rounded-md text-slate-700 cursor-pointer font-bold tracking-wide shadow-sm bg-[#f2f2f2] hover:bg-[#ebedef]">
                  <svg xmlns="http://www.w3.org/2000/svg" :class="{ 'animate-spin direction-reverse': syncMoviesFlag }"
                    width="18" height="18" viewBox="0 0 24 24">
                    <path fill="gray"
                      d="M6 12.05q0 1.125.425 2.188T7.75 16.2l.25.25V15q0-.425.288-.713T9 14q.425 0 .713.288T10 15v4q0 .425-.288.713T9 20H5q-.425 0-.713-.288T4 19q0-.425.288-.713T5 18h1.75l-.4-.35q-1.3-1.15-1.825-2.625T4 12.05Q4 9.7 5.2 7.787T8.425 4.85q.35-.2.738-.025t.512.575q.125.375-.013.75t-.487.575q-1.45.8-2.313 2.213T6 12.05Zm12-.1q0-1.125-.425-2.187T16.25 7.8L16 7.55V9q0 .425-.288.713T15 10q-.425 0-.713-.288T14 9V5q0-.425.288-.713T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6h-1.75l.4.35q1.225 1.225 1.788 2.663T20 11.95q0 2.35-1.2 4.263t-3.225 2.937q-.35.2-.737.025t-.513-.575q-.125-.375.013-.75t.487-.575q1.45-.8 2.313-2.212T18 11.95Z" />
                  </svg>
                </div>
              </div>
            </div>
          </Nav>
          <div class="overflow-auto scrollbar-thin scrollbar-thumb-sky-500 hover:scrollbar-thumb-sky-600 scrollbar-track-transparent h-full" :class="{'h-[calc(100%_-_68px)]' : $route.name !== 'movieDetail'}">
            <router-view />
          </div>
        </div>
      </div>
      <!-- IMAGE CONTAINER  -->
      <img class="w-full lg:w-[30rem] px-10" src="@/assets/images/tmdb-logo.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Nav from "@/components/Nav.vue";
import NavItem from "@/components/NavItem.vue";
import { useFavorites } from "@/store/favorites";

const favorites = useFavorites();
const syncMoviesFlag = ref<boolean>(false);

const syncMovies = async () => {
  try {
    syncMoviesFlag.value = true;
    await favorites.getMovies();
    syncMoviesFlag.value = false;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style>
</style>
