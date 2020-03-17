import Vue from 'vue'
import Vuex from 'vuex'
import student from './student'
import learn from './learn'
import about from './about'
Vue.use(Vuex)

export default new Vuex.Store({
  strict:process.env.NODE_env != 'production',
  modules:{
    student,
    learn,
    about
  },
  
})
