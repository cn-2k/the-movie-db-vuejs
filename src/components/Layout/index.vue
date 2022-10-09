<template>
  <div
    class="w-full h-auto lg:h-screen p-7 lg:p-0 flex flex-col justify-center items-center"
  >
    <div class="max-w-7xl items-center flex flex-wrap">
      <!-- MOVIE CONTAINER  -->
      <div class="w-full lg:w-[35rem] mb-6 lg:mb-0">
        <div
          class="overflow-auto scrollbar-hide bg-white h-[30rem] rounded-xl ring-1"
        >
          <RouterView />
        </div>
      </div>
      <!-- IMAGE CONTAINER  -->
      <img
        class="w-full lg:w-[30rem] px-10"
        src="@/assets/images/tmdb-logo.svg"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
