<template>
  <div id="app">
    <div id="header">
      <div class="title" @click="handclick" v-if="flag">渡一教育</div>
      <ul class="nav">
      <router-link tag='li' to="/home">首页</router-link>
      <router-link tag='li' to="/learn">课程学习</router-link>
      <router-link tag='li' to="/show">学员展示</router-link>
      <router-link tag='li' to="/about1">关于</router-link>
      <router-link tag='li' to="/community">社区</router-link>
      </ul>

    </div>
    <router-view class="view"/>
  </div>
</template>
<script>
export default {
  mounted(){

   
  },
  methods:{
    handclick(){
      this.$router.replace('/home')
    },
    show(){
       var self = this
      setInterval(function(){
        var flag = self.flag;
        self.flag = !flag
       
      },1000)
    }

   
  },
   data(){
      return{
         flag:true
      }
    }
}


</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#header{
 
  display: flex;
  justify-content: space-between;
  background: black;
  border-radius: 20px;

}
.title{
  height:80px;
  line-height: 80px;
  font-size:25px;
   box-sizing:border-box;
  padding: 0 50px;
  color:@color;
}
.nav{
  display: flex;
  justify-content:space-round;
  margin-right: 50px;
}
.nav li{
  height:80px;
  line-height: 80px;
  color:azure;
  font-size:20px;
  margin:  0 15px;
  border:1px solid #fff;
}
.active{
  transform:scale(1.3);
  font-weight: bold;

}
</style>
