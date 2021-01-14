<template>
  <div>
    num1 : <input v-model.number="num1" /><br />
    num2 : <input v-model.number="num2" /><br />
    <button v-on:click="plus">+(v-on)</button>
    <button @click="plus">+(@)</button>
    {{ total }}
    <br />
    <div
      v-bind:style="styleObj"
      v-on:mouseover="changeBGColor"
      v-on:mouseout="originalColor"
    ></div>
    <br />
    <div :style="styleObj" @mouseover="changeBGColor" @mouseout="originalColor">
      short hand
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 100,
      num2: 200,
      total: "",
      styleObj: {
        width: "100px",
        height: "100px",
        backgroundColor: "red",
      },
    };
  },
  methods: {
    plus(event) {
      console.log(event);
      return (this.total = this.num1 + this.num2);
    },
    changeBGColor() {
      this.styleObj.backgroundColor = "green";
    },
    originalColor() {
      this.styleObj.backgroundColor = "red";
    },
  },
};
</script>

<style>
</style>