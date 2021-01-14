<template>
  <div>
    firstname : <input type="text" v-model="firstname" /><br />
    lastname : <input type="text" v-model="lastname" /><br />
    <h1>{{ firstname }} {{ lastname }}</h1>
    <h1>computed method : {{ getfullname }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      birthyear: "",
    };
  },
  computed: {
    getfullname: function () {
      return this.firstname + " " + this.lastname;
    },
  },
};
</script>

<style>
</style>