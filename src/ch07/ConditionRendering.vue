<template>
  <div>
    <input type="checkbox" v-model="show" />change "show"<br />
    <span style="font-size: 25px"
      ><b>show : {{ show }}</b></span
    >
    <h1 v-if="show">it depends on "show"</h1>
    <h2 v-else>this tag will appear when "show" is false</h2>
    <div v-show="show">
      <pre><b>
            it depends on "show"
          check this tag when "show" is false
          </b></pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      styleObj: {
        backgroundColor: "#2196F3 !important",
        cursor: "pointer",
        padding: "8px 16px",
        verticalAlign: "middle",
      },
    };
  },
};
</script>

<style>
</style>