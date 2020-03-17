<template>
     <div>
        <h1>正在增加:</h1>
        <span>name:{{nameF}}age:{{ageF}}</span><br/>
        name:
        <input type="text" v-model="nameF">
        age:
        <input type="text" v-model="ageF" ><br/>
         <button @click='handleAdd'>add</button>
     </div>
</template>


<script>

import {mapState,mapGetters,mapMutation, mapActions} from 'vuex'
export default {
    

    data(){
        return {
            nameF:'',
            ageF:null
        }
    },
    computed:{
         ...mapState('about',['name','age'])
    },
    methods:{
        ...mapActions('about',['add']),
        handleAdd(){
            
            const obj = {

                name:this.nameF,
                age:this.ageF,
                id: new Date().getTime()
            }
             this.add(obj);

      
        }

    }
    


    
}
</script>


