<template>
  <div id="app">
    <img src="./assets/logo.png">
    <posts/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import posts from './components/posts'

export default {
  name: 'App',
  components: {
    HelloWorld,
    posts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
