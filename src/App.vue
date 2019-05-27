<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<posts/>-->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import posts from './components/posts'


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {

}
  *{
    margin: 0;
    padding: 0;
  }
  /*全局设置高亮 .*/
  .router-link-active{
    color:red;
  }
  .active{
    color: aqua;
  }
  a{
    text-decoration:none;
  }
</style>
