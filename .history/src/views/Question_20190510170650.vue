<template>
    <ul class="nav">
        <li class="question">{{question}}
            <button v-if="key" @click="handle" class="btn">next</button>
            <button v-else @click="goback" class="btn">返回</button>
        </li>
    </ul>
</template>



<script>
export default {
    beforeRouteUpdate(to, from, next){
        const nextId = to.params.id;
        this.getData(nextId)
    //  const questionId =
    next();
    },
    mounted(){
      const questionId = this.$route.params.id;
      this.getData(questionId);
    },
    data(){
        return{
            question:'没有问题',
            questionId:null,
            key:'true',
            questionList:[
                {
                   questionId:201901,
                   question:'是你送五随便外出是我哦蛋白质好担心闹你才行啊'
                },
                {
                   questionId:201902,
                   question:'为了去看的剧情我拍下哦去完成阿上了低片吃'
                },
                {
                  questionId:201903,
                  question:'当前哦去想你你的手机看得起我擦破小阿拉才能深刻'
                }
            ]
        }     
    },
    methods:{
        handle(){
            this.$router.push({
                name:'question',
                params:{
                    id:this.questionId + 1,
                }
            })
        },
        getData(id){
        const index = this.questionList.findIndex(item => item.questionId === id);
        if(index!=-1){
        this.question = this.questionList[index].question;
        this.questionId = id;
        }else{
            this.key = false;
        }
        

        },
        goback(){
          this.$router.push({
                name:'question',
                params:{
                    id:201901,
                }
          })
          this.key = true;
        }
    }
}
</script>

<style scoped>
.nav{
  
}
.nav li{
      padding: 10px;
    border:1px solid black;
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
}
.nav li .btn{
    height:30px;
    width: 60px;
}
</style>
