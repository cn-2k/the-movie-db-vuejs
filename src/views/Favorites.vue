<template>
  <Movies :movies="favorites" />
</template>

<script setup lang="ts">
import Movies from "@/components/Movies.vue";
import { useFavorites } from "@/store/favorites";

const favorites = useFavorites().favorites;
</script>

<style></style>
