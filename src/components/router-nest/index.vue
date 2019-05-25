<template>
  <div>
    <!--测试路由嵌套-->
    <NavList/>
    首页
  </div>
</template>

<script>
  import NavList from './NavList'
    export default {
        name: "index",
      components:{
        NavList
      }
    }
</script>

<style scoped>

</style>
