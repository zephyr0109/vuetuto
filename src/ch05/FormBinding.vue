<template>
  <div>
    <label>text box</label>
    <input v-model="name" placeholder="Enter name" /><br />
    <div>name :{{ name }}</div>
    <hr />

    <label>text area</label><textarea v-model="details" placeholder="details" />
    <div>
      <p>{{ details }}</p>
    </div>
    <hr />

    <label>check box</label>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <div>checked : {{ checked }}</div>
    <hr />

    <label>color</label>
    <input type="radio" id="black" value="Black" v-model="color" />Black
    <input type="radio" id="white" value="White" v-model="color" />White
    <div>color : {{ color }}</div>
    <hr />

    <label>programming language</label>
    <select v-model="lang">
      <option disabled value="">select language</option>
      <option>java</option>
      <option>javascript</option>
    </select>
    <div>selected language : {{ lang }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      details: "",
      checked: false,
      color: "",
      lang: "",
    };
  },
};
</script>

<style>
</style>