<template>
  <div class="home">
   
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <p>sdsad</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  mounted(){
    // console.log(1)
    axios.get('/api/chat/sendMsg',{
      params:{
        msg:'haha',
        appkey:'fyt2019_1547904500155'
      }
    }).then(res=>{
      // console.log(res)
    })
  }
}
</script>
