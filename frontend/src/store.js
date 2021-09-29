import { defineStore } from "pinia";

export const useStore = defineStore("todos", {
  state: () => ({
    todos: [{ title: "Always the same" }, { title: "So boring" }],
  }),

  actions: {
    async fetch() {
      console.log("fetching...");
      const response = await fetch("/api/todos");
      this.todos = await response.json();
    },
  },
});
