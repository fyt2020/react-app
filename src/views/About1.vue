<template>
    <div class="about1">
      <my-add/>
      <my-list/>
    

    </div>
</template>

<script>
import myAdd from '@/components/about/add.vue'
import myList from '@/components/about/stuList.vue'


export default {
    components:{
         myAdd,
         myList
    }
}
</script>

<style scoped>
.about1{
    margin: 0 auto;
    

    padding: 20px;
    width: 600px;
    border-radius:18px;
    box-shadow: 2px 2px 8px red;
   
}
</style>
