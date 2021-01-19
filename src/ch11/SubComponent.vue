<template>
  <div :id="id">
    <h1><slot></slot></h1>
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
  },
};
</script>

<style>
</style>