<template>
  <div>
    mixin test
    <h1>see console log</h1>
    <button @click="sameMethod">call same method</button>
  </div>
</template>

<script>
import mixinTest from "./mixinTest";
export default {
  mixins: [mixinTest],
  created() {
    console.log("component created");
  },
  methods: {
    sameMethod() {
      console.log("same method in component");
    },
  },
};
</script>

<style>
</style>