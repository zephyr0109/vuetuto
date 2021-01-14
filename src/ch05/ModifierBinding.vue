<template>
  <div>
    <label>Enter Age</label><input v-model.number="age" />{{ age }}
    <br />
    <label>Enter Message</label><input v-model.lazy="message" />{{ message }}
    <br />
    <label>trim message</label><input v-model.trim="trimmsg" />{{ trimmsg }}
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