<template>
  <div>
    킬로미터 : <input type="text" v-model="kilometers" /><br />
    미터 : <input type="text" v-model="meters" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      kilometers: 0,
      meters: 0,
    };
  },
  watch: {
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function (val) {
      this.kilometers = val / 1000;
      this.meters = val;
    },
  },
};
</script>

<style>
</style>