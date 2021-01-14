<template>
  <div>
    <hr />
    <h1>{{ firstname }} {{ lastname }}</h1>
    <div v-html="htmlcontent"></div>
    <img v-bind:src="imgsrc" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "Ria",
      lastname: "singh",
      htmlcontent: "<div><h1>vue js template test </h1></div>",
      imgsrc: require("@/assets/logo.png"),
    };
  },
};
</script>

<style>
</style>