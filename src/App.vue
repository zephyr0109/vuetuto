<template>
  <div id="app">
    <div class="leftarea">
      <img alt="Vue logo" src="./assets/logo.png" /><br />
      <router-link to="/ch01/instance">Ch01 - Instance link 1</router-link
      ><br />
      <router-link to="/ch02/TemplateTest">Ch02 - TemplateTest</router-link
      ><br />
      <router-link to="/ch03/ComputedPropsTest"
        >Ch03 - ComputedPropsTest</router-link
      ><br />
      <router-link to="/ch04/WatchProperty">Ch04 - WatchProperty</router-link
      ><br />
      <router-link to="/ch05">Ch05 - Binding</router-link><br />
      <router-link to="/ch06">Ch06 - Event</router-link><br />
      <router-link to="/ch07">Ch07 - Condition / List Rendering</router-link
      ><br />
      <router-link to="/ch08">Ch08 - Animation</router-link><br />
      <router-link to="/ch09">Ch09 - Directive / Filter</router-link><br />
      <router-link to="/ch10">Ch10 - mixins</router-link><br />
      <router-link to="/ch11/MainComponent">Ch11 - component</router-link><br />
      <router-link to="/ch12/Reactive">Ch12 - reactive</router-link>
    </div>
    <div class="rightarea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "App",
  router,
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
  display: flex;
}

.leftarea {
  width: 30%;
}
</style>
