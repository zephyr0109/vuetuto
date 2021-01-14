<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Instance></Instance> -->
    <!-- <TemplateTest></TemplateTest> -->
    <!-- <ComputedPropsTest /> -->
    <!-- <WatchProperty /> -->
    <!-- <BasicBinding />
    <hr />
    <ClassBinding />
    <hr />
    <FormBinding />
    <hr />
    <ModifierBinding /> -->
    <!-- <Events />
    <hr />
    <EventModifier />
    <hr />
    <CustomEvent /> -->
    <!-- <ConditionRendering />
    <hr />
    <ListRendering /> -->
    <Transition />
    <hr />
    <Animation />
    <hr />
    <CustomTransition />
    <hr />
    <MethodTransition />
  </div>
</template>

<script>
// import Instance from "@/ch01/Instance.vue";
// import TemplateTest from "@/ch02/TemplateTest";
// import HelloWorld from "./components/HelloWorld.vue";
// import ComputedPropsTest from "@/ch03/ComputedPropsTest.vue";
// import WatchProperty from "@/ch04/WatchProperty.vue";
// import BasicBinding from "@/ch05/BasicBinding";
// import ClassBinding from "@/ch05/ClassBinding";
// import FormBinding from "@/ch05/FormBinding";
// import ModifierBinding from "@/ch05/ModifierBinding";
// import Events from "@/ch06/Events.vue";
// import EventModifier from "@/ch06/EventModifier";
// import CustomEvent from "@/ch06/CustomEvent";
// import ConditionRendering from "@/ch07/ConditionRendering";
// import ListRendering from "@/ch07/ListRendering";
import Transition from "@/ch08/Transition";
import Animation from "@/ch08/Animation";
import CustomTransition from "@/ch08/CustomTransition";
import MethodTransition from "@/ch08/MethodTransition";
export default {
  name: "App",
  components: {
    // WatchProperty,
    // BasicBinding,
    // ClassBinding,
    // FormBinding,
    // ModifierBinding,
    // Events,
    // EventModifier,
    // CustomEvent,
    // ConditionRendering,
    // ListRendering,
    Transition,
    Animation,
    CustomTransition,
    MethodTransition,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
