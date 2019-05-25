import Vue from 'vue'
import vuerouter from 'vue-router'
import hello from './hello-router'
import helloworld from '../HelloWorld'
import herfrouter from './router-href'
import Index from '../router-nest/index'
import course from '../router-nest/course'
import master from '../router-nest/master'
import java from '../router-nest/pages/java'
import h5web from '../router-nest/pages/h5web'
Vue.use(vuerouter);
/*此文件是从main.js抽出来的，注意使用export default 将对象router导出供外部使用*/
export default new vuerouter({
  linkActiveClass:'active',
  /*hash和history：都不会向后端发送请求，为前端路由；history没有#符号,*/
  mode:'history',
  routes:[
    {
      path:"/",
      name:'Index',
      component: Index
    },
    {
      path:"/hello",
      name:'hello',
      component: hello
    },
    {
      path:"/herfrouter",
      name:'herfrouter',
      component: herfrouter
    },
    {
      path:"/course",
      name:'course',
      component: course,
      /*默认进到course下显示java在组件*/
      redirect:'/course/java',
      /*注意嵌套路由：直接写组件的名字，不要写根目录*/
      children:[
        {
          path:"java",
          component: java
        },
        {
          path:"h5web",
          component: h5web
        },
      ]
    },
    {
      path:"/master/:count",
      name:'master',
      component: master
    },
  ]
});
