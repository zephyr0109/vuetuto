<template>
  <div>
    <div v-changestyle="{ color: 'green' }">custom directive{{ test }}</div>
  </div>
</template>

<script>
import Vue from "vue";
Vue.directive("changestyle", {
  bind(el, binding, vnode) {
    console.log(binding, vnode);
    el.style.color = binding.value.color;
    el.style.fontSize = "30px";
  },
});

export default {
  data() {
    return {
      test: "value",
    };
  },
};
</script>

<style>
</style>