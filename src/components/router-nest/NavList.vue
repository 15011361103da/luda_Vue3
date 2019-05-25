<template>
    <div>
      <ul>
        <li>
          <!--
          "是否激活" 默认类名的依据是 inclusive match (全包含匹配)。 举个例子，如果当前的路径是 /a 开头的，
          那么 <router-link to="/a"> 也会被设置 CSS 类名。
          按照这个规则，每个路由都会激活<router-link to="/">！想要链接使用 "exact 匹配模式"，则使用 exact 属性：
          -->
          <router-link to="/" exact>
            首页
          </router-link>
        </li>
        <li>
          <router-link to="/course">
            课程
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'master',params:{count:100}}">
            专家
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "NavList"
    }
</script>

<style scoped>
  div{
    width: 100%;
    height: 50px;
    background-color: #f1f1f1;
    line-height: 50px;
  }
  ul{
    list-style:none;
  }
  li{
    float: left;
    margin: 0 20px;
  }

</style>
