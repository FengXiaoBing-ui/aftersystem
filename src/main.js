import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/publicstyle/public.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

//限制按钮网络差时多次点击 点击事件@click换成btn-control
Vue.directive("btn-control", {
  // 插入dom 时做的事情
  inserted: function(el, bind) {
      el.addEventListener("click", () => {
          el.disabled = true;
          bind.value().then(res => {
              el.disabled = false;
          });
      });
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
