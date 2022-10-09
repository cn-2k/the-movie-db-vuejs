<template>
  <div class="divide-y divide-slate-100">

    <Nav>
      <NavItem to="/">Popular Movies</NavItem>
      <NavItem to="/favorites">Favorites</NavItem>
    </Nav> 

    <List>
      <ListItem v-for="movie in movies.results" :key="movie.id" :movie="movie" />
    </List>

  </div>
</template>

<script setup lang="ts">
import Nav from "./Nav.vue";
import NavItem from "./NavItem.vue";
import List from "./List.vue";
import ListItem from "./ListItem.vue";
import { useNavStore } from '@/store/nav'

const nav = useNavStore()

defineProps<{
  movies?: any;
}>();
</script>
