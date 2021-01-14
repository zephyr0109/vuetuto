<template>
  <div>
    <a href="link" target="_blank">original tag</a><br />
    <!-- <a href="{{link}}" target="_blank"> something wrong tag</a> -->
    <a v-bind:href="link" target="_blank">binding tag</a><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Data Binding",
      link: "http://www.naver.com",
    };
  },
};
</script>

<style>
</style>