import { ref } from "vue";
import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", () => {
  const isActive = ref<string>('/');

  const makeAtive = (item: string) => {
    isActive.value = item
  }

  return { isActive, makeAtive };
});
