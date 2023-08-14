<template>
  <div class="divide-y divide-slate-100">
    <Nav>
      <NavItem to="/">Popular Movies</NavItem>
      <NavItem to="/favorites">
        <template #favorites>
          Favoritos
          <span
            v-if="hasFavorites"
            class="absolute top-3 text-white bg-[#0EA5E9] border border-white rounded-full px-1 ml-1 font-bold align-middle text-xs"
          >
            {{ favorites.totalFavorites }}
          </span>
        </template>
      </NavItem>
    </Nav>

    <List>
      <ListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
    </List>
  </div>
</template>

<script setup lang="ts">
import Nav from "./Nav.vue";
import NavItem from "./NavItem.vue";
import List from "./List.vue";
import ListItem from "./ListItem.vue";
import { useFavorites } from "../store/favorites";
import { computed } from "vue";

defineProps<{
  movies?: any;
}>();

const favorites = useFavorites();

const hasFavorites = computed(() => {
  return favorites.favorites.length > 0;
});
</script>
