<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="message" :onRefresh="onRefresh" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import message from "./store/message";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  private get message() {
    return message.message;
  }

  private onRefresh() {
    message.refreshMessage("Refresh");
  }
}
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
