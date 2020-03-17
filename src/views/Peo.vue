<template>
    <div class="peo">iam a people</div>
</template>
<script>
export default {
    beforeRouteEnter(to,from,next){
        console.log(to,from,next)
        next()
    }
}
</script>
