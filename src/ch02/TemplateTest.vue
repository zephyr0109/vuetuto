<template>
  <div>
    <hr />
    <h1>{{ lastname }} {{ firstname }}</h1>
    <div v-html="htmlcontent"></div>
    <h3>img bind test</h3>
    <img v-bind:src="imgsrc" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "준열",
      lastname: "임",
      htmlcontent: "<div><h1>html bind  test</h1></div>",
      imgsrc: require("@/assets/logo.png"),
    };
  },
};
</script>

<style>
</style>