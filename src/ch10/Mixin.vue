<template>
  <div>
    mixin 테스트
    <h1>콘솔을 확인하세요</h1>
    <button @click="sameMethod">같은 이름의 메소드 호출</button>
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
      this.onlyMixin("test");
    },
  },
};
</script>

<style>
</style>