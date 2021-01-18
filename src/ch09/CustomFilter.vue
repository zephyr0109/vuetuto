<template>
  <div>
    <input v-model="name" placeholder="Enter Name" /><br />
    <span style="font-size: 25px"
      ><b>letter count is : {{ name | countletters | addTwice }}</b></span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  filters: {
    countletters: function (value) {
      return value.length;
    },
    addTwice(value) {
      return value * 2;
    },
  },
};
</script>

<style>
</style>