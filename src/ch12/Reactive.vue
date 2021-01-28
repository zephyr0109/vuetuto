<template>
  <div>
    <p style="font-size: 25px">counter : {{ counter }}</p>
    <button @click="counter++" style="font-size: 25px">incr count</button>
    <div>obj : {{ JSON.stringify(this.obj) }}</div>
  </div>
</template>

<script>
let obj = {};
export default {
  data() {
    return {
      counter: 1,
      obj: obj,
    };
  },

  watch: {
    counter(nval, oval) {
      console.log("counter is incremented : ", oval, " to ", nval);
    },
  },
  created() {
    this.$set(obj, "settest", 1);
    setTimeout(() => {
      console.log("incremented 200");
      this.counter = 200;
      this.$delete(obj, "settest");
    }, 2000);
  },
};
</script>

<style>
</style>