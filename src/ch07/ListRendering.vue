<template>
  <div>
    <input
      v-model="inputItem"
      @keypress.enter="addItem"
      placeholder="item name"
    /><button @click="addItem">add Item</button>
    <div v-if="items.length > 0">
      <h1>item list</h1>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputItem: "",
      items: [],
    };
  },
  methods: {
    addItem() {
      this.items.push(this.inputItem);
      this.inputItem = "";
    },
  },
};
</script>

<style>
</style>