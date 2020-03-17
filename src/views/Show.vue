<template>
    <div class="show">
        <addStudent class=""></addStudent>
        <studentList class=""></studentList>
    </div>
</template>

<script>
import addStudent from '@/components/student/addStudent';
import studentList from '@/components/student/studentList';
export default {
    components:{
      addStudent,
      studentList,
    }
}
</script>

<style scoped>
.show{
    width: 800px;
    margin: 100px auto;
}
</style>
