<template>
    <div>
      <!--跳转的方式：router-link-->
      <!--<router-link to="herfrouter">
        href
      </router-link>-->
      <p @click="routertest()">6666666</p>
    </div>
</template>

<script>
    export default {
      name: "hello-router",
      data(){
        return{

        }
      },
      methods:{
        routertest(){
          console.log(this.$router);
          this.$router.push("/")
        },
      }
    }
</script>

<style scoped>

</style>
