<template>
  <div :id="id">
    <h1><slot></slot></h1>
    <h2>subkey : {{ subkey }}</h2>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$slots);
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    subkey: {
      type: String,
    },
  },
};
</script>

<style>
</style>