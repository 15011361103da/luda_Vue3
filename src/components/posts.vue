<template>
    <div>
      posts
    </div>
</template>

<script>
  /*import qs from 'qs'*/
    export default {
        name: "posts",
      data(){
        return{

        }
      },
      created() {
        //post请求：
        //form-data：？name=‘iwen’&age=18   注意：post参数为这种格式
        //x-www-form-urlencoded：｛name：‘iwen’，age=18｝
        //qs第三方插件可以转换参数类型
        /*this.$axios.post("sxtstu/blueberrypai/login.php",{
          user_id:'iwen@qq.com',
          password:'iwen123',
          verification_code:'crfvw'
        })
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          })*/
        var url = this.HOST+"/sug";
        console.log(url)
        this.$axios.post(url,{
          code:'utf-8',
          q:'ssss',
          callback:'cb'
        })
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
</script>

<style scoped>

</style>
