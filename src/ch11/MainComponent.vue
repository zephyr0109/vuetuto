<template>
  <div>
    <SubComponent id="test1">sub component</SubComponent>
    <SubComponent id="test2">zephyr</SubComponent>
  </div>
</template>

<script>
import SubComponent from "./SubComponent";
export default {
  components: { SubComponent },
};
</script>

<style>
</style>