export default{
    state: {
        name:'fyt',
        age:18,
        student:[],
        
      },
    
      getters:{
         person(state){
             return `name:${state.name} age:${state.age}`
         },
         newStudent(state){
             return  state.student.map(item => `name:${item.name} age:${item.age}`)
         }
      },
      mutations: {
        changeStudent(state,{student,name}){
    
          // setTimeout(()=>{
            state.student.push(student);
            state.name = name;
          // },1000)
          
        }
      },
      actions: {
        changeStudent( {commit},payload ){
          setTimeout(()=>{
            commit('changeStudent',payload)
          },1000)
            
        }
      }
}