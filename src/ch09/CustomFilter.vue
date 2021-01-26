<template>
  <div>
    <input v-model="name" placeholder="Enter Name" /><br />
    <span style="font-size: 25px"
      ><b
        >name -> countLetters -> multiple :
        {{ name | countLetters | multiple }}</b
      ></span
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
    countLetters: function (value) {
      return value.length;
    },
    multiple(value) {
      return value * 2;
    },
  },
};
</script>

<style>
</style>