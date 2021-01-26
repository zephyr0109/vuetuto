<template>
  <div>
    <SubComponent id="test1" subkey="sub component">sub component</SubComponent>
    <SubComponent id="test2" subkey="zep">zephyr</SubComponent>
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