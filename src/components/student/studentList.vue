<template>
    <div class="show-box">
        <h3>学生列表</h3>
        <ul class="show">
            <li class="list" v-for="item in student" :key="item.id">name:{{item.name}}
                age:{{item.age}}
            </li>
        </ul>
        <hr>
        <ul class="show">
            <li class="list" v-for="(item,index) in newStudent" :key="index">{{item}}
            </li>
        </ul>
    </div>
</template>


<script>
import {mapState,mapGetters} from 'vuex'
 export default {
     data(){
        return{     
        }
    },
    methods:{
        
    },
    computed:{
        ...mapState(['student']),
        ...mapGetters(['newStudent'])
    }
}
</script>


<style scoped>
 .list{
     border: 1px solid black;
     font-size: 20px;
     font-weight: bold;
 }
</style>
