<template>
  <div id="dataBinding">
    <div id="countEventExample">
      <p style="font-size: 25px">언어 선택:</p>
      <p>{{ selectedLang }}</p>
      <button-counter
        v-for="(item, index) in languages"
        :item="item"
        :key="index"
        @showLanguage="langDisp"
      ></button-counter>
    </div>
  </div>
</template>

<script>
import ButtonCounter from "./ButtonCounter";
export default {
  components: {
    ButtonCounter,
  },

  data() {
    return {
      selectedLang: "",
      languages: ["java", "javascript", "c++", "python"],
    };
  },
  methods: {
    langDisp(lang) {
      this.selectedLang = lang;
    },
  },
};
</script>

<style>
</style>