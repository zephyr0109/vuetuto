<template>
  <button @click="displayLanguage(item)">
    <span>{{ item }}</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  props: {
    item: {
      type: String,
    },
  },

  methods: {
    displayLanguage(lang) {
      this.$emit("showLanguage", lang);
    },
  },
};
</script>

<style>
</style>