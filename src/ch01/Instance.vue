<template>
  <div>
    <h1>성 : {{ lastname }}</h1>
    <h1>이름 : {{ firstname }}</h1>
    <h1>{{ mydetails() }}</h1>
    <h1>computed : {{ fullname }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "준열",
      lastname: "임",
      address: "서울",
    };
  },
  methods: {
    mydetails() {
      return "나는 " + this.lastname + " " + this.firstname + " 입니다.";
    },
  },
  computed: {
    fullname: {
      set: function (fullName) {
        let namearr = fullName.split(" ");
        this.lastname = namearr[0];
        this.firstname = namearr[1];
      },
      get: function () {
        return this.lastname + " " + this.firstname;
      },
    },
  },
};
</script>

<style>
</style>