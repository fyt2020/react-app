<template>
    <ul>
        <li v-for="item in studentList" :key='item.id'>name:{{item.name}} age:{{item.age}}</li>
    </ul>
</template>
<script>
import {mapState,mapGetters,mapMutation} from 'vuex'
export default {
     data(){
         return{
            list:[]
         }
     },
     computed:{
         ...mapState('about',['studentList'])
     },
     beforeUpdate(){

         console.log(this.studentList)
     }

    
}
</script>
