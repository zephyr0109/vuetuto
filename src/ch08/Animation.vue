<template>
  <div>
    <button @click="show = !show">click me</button>
    <transition name="shiftx">
      <div v-show="show">
        <img :src="imgSrc" style="width: 100px; height: 100px" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      imgSrc: require("@/assets/logo.png"),
    };
  },
};
</script>

<style>
.shiftx-enter-active {
  animation: shift-in 2s;
}
.shiftx-leave-active {
  animation: shift-in 2s reverse;
}
@keyframes shift-in {
  0% {
    transform: rotateX(0deg);
  }
  25% {
    transform: rotateX(90deg);
  }
  50% {
    transform: rotateX(180deg);
  }
  75% {
    transform: rotateX(270deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
</style>