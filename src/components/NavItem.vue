<template>
  <router-link :to="to" v-slot="{ isExactActive }">
    <div
      class="px-3 py-2 rounded-md text-slate-700 cursor-pointer font-bold tracking-wide shadow-sm bg-[#f2f2f2] hover:bg-[#ebedef]"
      :class="{ 'router-link-exact-active': isExactActive }"
    >
      <slot></slot>
      <slot name="favorites"></slot>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  to?: any;
}>();
</script>

<style scoped lang="postcss">
.router-link-exact-active {
  @apply bg-sky-500 text-white rounded-md;
}
</style>

