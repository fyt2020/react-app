<template>
    <div class="env">
        <ul class="nav">
            <router-link 
            v-for="item in questionList" :key=item.questionId
            tag='li' :to="{name:'question',params:{
                id:item.questionId}}">{{item.question}}
            </router-link>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return{
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
    }
}
</script>


<style scoped>
.nav{
    /* border:1px solid black; */
}
.nav li{
  font-size: 20px;
  text-align: left;
}
.nav li:hover{
    box-shadow:1px 1px 2px orange;
}
</style>
