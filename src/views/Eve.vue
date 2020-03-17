<template>
    <div class="eve">
        name:<input class="inp" type="text" v-model="name"><button @click="tap">提交</button>
        <p>{{name}}</p>
    </div>
</template>
<script>
export default {


    beforeRouteLeave(to,from,next){
      
      if(this.name){
        
          const flag = window.confirm('确定离开？');
          if(flag){
              this.name='';
              next();
          }
      }else{
          next()
      }
    },
    data(){
        return{
            name:''
        }
    },
    methods:{
      tap(){
          this.name='';
      }
    }
}
</script>
