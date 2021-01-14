<template>
  <div>
    <button @click="show = !show">click me</button>
    <transition name="fade">
      <div v-show="show" :style="styleObj">animaion example</div>
    </transition>
    <transition name="shiftx">
      <div v-show="show">
        <img :src="imgsrc" style="width: 100px; height: 100px" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      styleObj: {
        fontSize: "30px",
        color: "red",
      },
      imgsrc: require("@/assets/logo.png"),
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.shiftx-enter-active,
.shiftx-leave-active {
  transition: all 2s ease-in-out;
}

.shiftx-enter,
.shiftx-leave-to {
  transform: translateX(100px);
}
</style>