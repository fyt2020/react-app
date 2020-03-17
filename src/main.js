import Vue from 'vue'
import App from './App.vue'
import router from './router'
import reset  from './assets/style/reset.css'
import store from './store/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(ViewUI);


Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{

  const needLogin = to.matched.some(item => item.meta && item.meta.login)
  if(needLogin){
     const isLogined = document.cookie.includes('login=true');
     if(isLogined){
       next()
     }else{
        const toLogin = window.confirm('去登陆？');
        if(toLogin){
            next('/login')
        }else{
          return
        }
     }
     
    }
  next();
})



var vm = new Vue({
  router,
  store,

 
 data:{
   "name":'fyt'
 },

  
  // render(h){
  //      return (
  //        <h1 class="haha" 
  //            style={{color:'red',fontSize:'15px',}}  on-click={()=>{
  //              console.log('haha')
  //            }}>iamaiconman</h1>
  //      )
  // }
  render: h => h(App)
}).$mount('#app')
