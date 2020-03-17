<template>
    <div class="box">
        <h3>添加学生：{{person}}</h3>
        <div class="studentList">
            <div class="name">
                姓名：<input type="text" v-model="name">
            </div>
            <div class="age">
                年龄：<input type="text" v-model="age"> 
            </div>
            <button @click="handleclick">提交</button>
        </div>
        <hr/>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    data(){
        return{
           name:'',
           age:null
        }
    },
    methods:{
        ...mapMutations(['changeStudent']),
        ...mapActions(['changeStudent']),
        handleclick(){
            const student = {
                name:this.name,
                age:this.age,
                id: +new Date()
            }
            // this.$store.state.student.push(student);
            // this.$store.commit('changeStudent',{student,name:'ccc'});
            this.changeStudent({student,name:'ccc'})
            // this.$store.dispatch('changeStudent',{student,name:'ccc'})
        }
    },
    computed:{
        ...mapGetters(['person'])
        // ...mapState(['age']),
        // ...mapState({
        //     stateName:state => state.name
        // })
    }
}
</script>
<style scoped>

</style>


