export default {
  created() {
    //
    console.log("mixin called");
    this.startMixin();
  },
  methods: {
    startMixin() {
      alert("start mixin");
    },
    sameMethod() {
      console.log("same method in mixin");
    },
    onlyMixin(param) {
      console.log("onlyMixin] param : ", param);
    },
  },
};
