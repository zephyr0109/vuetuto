<template>
  <div>
    <!-- v-changestyle이라는 자기만의 directive생성 -->
    <div v-changestyle="{ color: 'green' }">custom directive{{ test }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "value",
    };
  },
  directives: {
    changestyle(el, binding, vnode) {
      console.log(binding, vnode);
      el.style.color = binding.value.color;
      el.style.fontSize = "30px";
    },
  },
};
</script>

<style>
</style>