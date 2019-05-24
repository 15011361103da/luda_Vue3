// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios = Axios;
Vue.prototype.HOST = "/api";
//请求的地址前缀
/*Axios.defaults.baseURL = 'http://baike.baidu.com/';*/
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  console.log("请求前"+config);
  console.log(config);
  //改变请求参数的数据类型：使用qs转换
  /*if(config.method == 'post'){
    config.data = qs.stringify(config.data);
  }*/
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  console.log("响应前"+response);
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
