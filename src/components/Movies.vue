<template>
  <div class="divide-y divide-slate-100">
    <Nav>
      <NavItem to="/">Popular Movies</NavItem>
      <NavItem to="/favorites">
        <template #favorites>
          Favorites
          <span
            v-if="favorites.favorites"
            class="absolute top-3 text-white bg-red-500 border border-white rounded-full px-1 ml-1 font-bold align-middle text-xs"
          >
            {{ favorites.totalFavorites }}
          </span>
        </template>
      </NavItem>
    </Nav>

    <List>
      <ListItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        :is-favorite="favorites.isFavorite(movie.id)"
      />
    </List>
  </div>
</template>

<script setup lang="ts">
import Nav from "./Nav.vue";
import NavItem from "./NavItem.vue";
import List from "./List.vue";
import ListItem from "./ListItem.vue";
import { useFavorites } from "../store/favorites";

defineProps<{
  movies?: any;
}>();

const favorites = useFavorites();
</script>
