export default{
    namespaced:true,
    state:{
        name:'duyi',
        age:12
    },
    getters:{
         course(state){
            return '#' + state.age
         }
    },
    mutations:{
        add(state,{newage}){
            state.age = newage
        }
    },
    actions:{

    },
}
