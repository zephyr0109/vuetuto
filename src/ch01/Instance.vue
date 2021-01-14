<template>
  <div id="vue_det">
    <h1>firstname : {{ firstname }}</h1>
    <h1>lastname : {{ lastname }}</h1>
    <h1>{{ mydetails() }}</h1>
    <h1>{{ fullname }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "ria",
      lastname: "singh",
      address: "mumbai",
    };
  },
  methods: {
    mydetails() {
      return "I am " + this.firstname + " " + this.lastname;
    },
  },
  computed: {
    fullname: {
      set: function (fullName) {
        let namearr = fullName.split(" ");
        this.firstname = namearr[0];
        this.lastname = namearr[1];
      },
      get: function () {
        return this.firstname + " " + this.lastname;
      },
    },
  },
};
</script>

<style>
</style>