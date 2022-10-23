<template>
  <li>
    <router-link :to="to"
      ><button
        @click="nav.makeAtive(props.to)"
        class="px-3 py-2 rounded-md text-slate-700 cursor-pointer"
        :class="[nav.isActive === props.to ? 'bg-sky-500 text-white font-bold' : 'bg-[#f2f2f2] hover:bg-[#ebedef] transition-colors']"
      >
        <slot></slot>
      </button>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { useNavStore } from '../store/nav'

const nav = useNavStore()

const props = defineProps<{
  to: string;
}>();
</script>
