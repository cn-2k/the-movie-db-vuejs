<template>
 <li>
    <div class="px-3 py-2 rounded-md text-slate-700 cursor-pointer"
    :class="[isActive ? 'bg-sky-500 text-white font-bold' : 'bg-[#F8FAFC]']"
    >
    <slot></slot>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
  isActive?: Boolean;
}>();
</script>
