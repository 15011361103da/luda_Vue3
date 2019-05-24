<template>
  <div class="hello">
    <ul>
      <li v-for="banner in list">
        <p>{{banner.title}}</p>
        <img :src="banner.img" alt="">
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[]
    }
  },
  created() {
    //默认是get请求
    this.$axios("http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php",
      //参数
      /*{param:{
        type:'junshi',
        count:30
      }
      }*/).then(res =>{
        this.list = res.data.banner;
      console.log(res.data)
    })
      .catch(error =>{
        console.log(error)
      })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  li{
    list-style: none;
  }
  img{
    display: block;


  }
</style>
