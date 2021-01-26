<template>
  <div>
    firstname : <input type="text" v-model="firstname" /><br />
    lastname : <input type="text" v-model="lastname" /><br />
    fullname : <input type="text" v-model="fullname" /><br />
    <h1>{{ firstname }} {{ lastname }}</h1>
    <h1>computed method : {{ fullname }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
    };
  },
  computed: {
    fullname: {
      get() {
        return this.firstname + " " + this.lastname;
      },
      set(fullname) {
        this.firstname = fullname.split(" ")[0];
        this.lastname = fullname.split(" ")[1];
      },
    },
  },
};
</script>

<style>
</style>