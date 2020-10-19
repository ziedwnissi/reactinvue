<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js from Vue"/>
    <MyComponent message="Welcome to Your Vue.js from React"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import MyComponent from '@/components/MyComponent';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
    MyComponent,
  },
});
</script>
