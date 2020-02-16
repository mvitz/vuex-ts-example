<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="onClick">Refresh</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop({ required: true }) private msg!: string;
  @Prop({ required: true }) private onRefresh!: () => void;

  onClick() {
    console.log(`onClick()`);
    this.onRefresh();
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
