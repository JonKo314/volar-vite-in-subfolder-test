<script setup>
  import { storeToRefs } from "pinia";
  import { useStore } from "../store";

  const store = useStore();
  const { todos } = storeToRefs(store);

  const fetchItems = () => store.fetch();
</script>

<template>
  <button v-on:click="fetchItems()">Load to-do items</button>
  <ul>
    <li v-for="item in todos">{{ item.title }}</li>
  </ul>
</template>
