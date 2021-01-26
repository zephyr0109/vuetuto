<template>
  <div>
    <label>only number binding</label>
    <input type="number" v-model.number="age" />
    {{ age }}
    <br />
    <label>lazy binding</label><input v-model.lazy="message" />{{ message }}
    <br />
    <label>trim binding</label><input v-model.trim="trimmsg" />{{ trimmsg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 0,
      message: "",
      trimmsg: "",
    };
  },
};
</script>

<style>
</style>