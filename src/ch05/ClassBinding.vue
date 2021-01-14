<template>
  <div>
    <h1 v-bind:class="{ active: isactive }">{{ title }}</h1>
    <h2 v-bind:class="{ active: isactive, displayError: hasError }">
      class binding test
    </h2>
    <h2 v-bind:class="[classes.info, classes.error]">class test using array</h2>
    <div v-bind:style="style">inline style</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Data Binding",
      link: "http://www.naver.com",
      isactive: true,
      hasError: true,
      classes: {
        info: "info",
        error: "error",
      },
      style: {
        color: "red",
        fontSize: "20px",
      },
    };
  },
};
</script>

<style>
.info {
  color: #00529b;
  background-color: #bde5f8;
}
div {
  margin: 10px 0;
  padding: 12px;
}
.active {
  color: #4f8a10;
  background-color: #dff2bf;
}
.displayError {
  color: #d8000c;
  background-color: #ffbaba;
}
</style>