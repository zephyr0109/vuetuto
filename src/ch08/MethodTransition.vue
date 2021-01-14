<template>
  <div>
    <button @click="show = !show">toggle</button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <div v-if="show" style="font-size: 25px">
        animation example with velocity
      </div>
    </transition>
  </div>
</template>

<script>
import Velocity from "velocity-animate";
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    beforeEnter(e) {
      e.style.opacity = 0;
    },
    enter(e, done) {
      Velocity(e, { opacity: 1, fontSize: "25px" }, { duration: 1000 });
      Velocity(e, { fontSize: "10px" }, { complete: done });
    },
    leave(e, done) {
      Velocity(e, { translateX: "15px", rotateZ: "50deg" }, { duration: 1500 });
      Velocity(e, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        e,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0,
        },
        { complete: done }
      );
    },
  },
};
</script>

<style>
</style>