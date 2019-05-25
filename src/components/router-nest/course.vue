<template>
    <div>
      <NavList/>
      <div class="left">
        课程
        <ul>
          <li>
            <router-link to="/course/java">java</router-link>
          </li>
          <li>android</li>
          <li>
            <router-link to="/course/h5web">h5web</router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <!--视图区域-->
        <!--嵌套的路由在这里显示-->
        <router-view></router-view>
      </div>
    </div>
</template>

<script>

  import NavList from './NavList'
    export default {
      name: "course",
      components:{
        NavList
      }
    }
</script>

<style scoped>
  .left,.right{
    float: left;
  }
  .right{
    margin-left: 50px;
  }
</style>
