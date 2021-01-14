<template>
  <div>
    <button @click="show = !show">Animate</button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated swing"
      leave-active-class="animated bounceIn"
    >
      <div v-if="show">example</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
</style>