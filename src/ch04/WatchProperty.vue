<template>
  <div>
    killometers : <input type="text" v-model="kilometers" /><br />
    meters : <input type="text" v-model="meters" />
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
  methods: {},
  computes: {},
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