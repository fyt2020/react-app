export default{
    namespaced:true,
    state:{
        name:'duyi',
        age:12,
        studentList:[]
    },
    getters:{
        ms(state){
               return `name:${state.name},age:${state.name}`
        } 
    },
    mutations:{
        add(state,payload){
            state.studentList.push(payload)
        }
    },
    actions:{
        add({commit},payload){
           setTimeout(()=>{
            commit('add',payload)
           },2000)
        }
    },
}