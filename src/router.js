
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router);
export default new Router({
  mode:'history',
  linkExactActiveClass:'exact-active',
  linkActiveClass:'active',
  routes:[
    {
      path:'/home',
      name:'home',
      component:Home,
    },
    {
      path:'/learn',
      name:'Learn',
      component:()=> import ('_v/Learn'),
    },
    {
      path:'/show',
      name:'Show',
      component:()=> import ('./views/Show'),
      meta:{
        login:true
      }
    },
    {
      path:'/about1',
      name:'About1',
      component:()=> import ('./views/About1'),
    },
    {
      path:'/community',
      name:'Community',
      component:()=> import ('./views/Community'),
      redirect:'/community/env',
      meta:{
        login:true
      },
      children:[
        {
           path:'env',
           name:'env',
           component:()=> import ('./views/Env')
        },
        {
          path:'eve',
          name:'eve',
          component:()=> import ('./views/Eve')
        },
        {
          path:'peo',
          name:'peo',
          component:()=> import ('./views/Peo')
        },
      ]
    },
    {
      path:'/notfound',
      name:'notfound',
      component:()=> import ('./views/Notfound'),
    },
    {
      path:'*',
      redirect(to){
        if(to.path === '/'){
          return '/home'
        }else{
          return '/notfound'
        }
      }
    },
    {
      path:'/question/:id',
      name:'question',
      component:()=> import ('./views/Question')
    },
    {
      path:'/login',
      name:'login',
      component:()=> import ('./views/Login')
    }
  ]
})



































// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
