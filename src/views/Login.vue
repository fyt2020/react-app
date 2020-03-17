<template>
    <div class="login">
        登陆
        <button @click="login">login</button>
    </div>
   
</template>
<script>
export default {
    methods:{
        login(){
           const expire = 10 * 24 * 60 * 60 *1000;
           const date = new Date(  +new Date() + expire);
           document.cookie = `login=true;expires=${date.toString()}`
        }
    }
}
</script>
