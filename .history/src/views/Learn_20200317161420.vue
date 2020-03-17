<template>
    <div class="learn">{{name}}{{course}}

        
          <h1>第三次提交</h1>


        <button @click="handle">dianji</button>
    </div>
</template>


<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    
    data(){
        return{

        }
    },
    methods:{
        ...mapMutations('learn',['add']),
        handle(){
           this.add({newage:20})
        }
    },
    computed:{
        ...mapState('learn',['name']),
        ...mapGetters('learn',['course'])
    }
}
</script>

<style>
.learn{
    height: 80px;
    line-height:80px;
    font-size: 30px;
    width: 200px;
    border-radius:18px;
    box-shadow: 2px 2px 8px red;
    margin: 10px 20px;
    
}
</style>
