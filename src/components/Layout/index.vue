<template>
    <div class="w-full h-auto lg:h-screen p-7 lg:p-0 flex flex-col justify-center items-center">
      <div class="max-w-7xl items-center flex flex-wrap">
        <!-- MOVIE CONTAINER  -->
        <RouterView />
        <!-- IMAGE CONTAINER  -->
        <img
          class="w-full lg:w-1/2 h-64 lg:h-auto px-10"
          src="../assets/images/tmdb-logo.svg"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style></style>
