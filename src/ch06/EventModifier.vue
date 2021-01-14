<template>
  <div>
    <button @click.once="onClickOnce">click once</button>{{ clickOnce }}<br />
    <button @click="onClick">click</button>{{ clickNum }}<br />

    <a href="http://naver.com" @click="onLinkClick" target="_blank"
      >original click</a
    ><br />
    <a href="http://naver.com" @click.prevent="onLinkClick" target="_blank"
      >prevent click</a
    ><br />

    <input
      type="text"
      @keyup.enter="onEnter"
      placeholder="이름을 입력하고 enter키를 치세요"
    />
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickOnce: 0,
      clickNum: 0,
      name: "",
    };
  },
  methods: {
    onClickOnce() {
      this.clickOnce++;
    },
    onClick() {
      this.clickNum++;
    },
    onLinkClick() {
      console.log("onLinkClick");
      alert("onLinkClick called");
    },
    onEnter(event) {
      this.name = event.target.value;
    },
  },
};
</script>

<style>
</style>