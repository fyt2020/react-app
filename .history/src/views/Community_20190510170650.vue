

<template>
    <div class="header">
        <ul class="nav">
            <router-link tag='li' to="/community/env">社区环境</router-link>
            <router-link tag='li' to='/community/peo'>社区人员</router-link>
            <router-link tag='li' to='/community/eve'>社区事件</router-link>
        </ul>
        <router-view class="view"/>
    </div>
</template>


<style scoped>
.header{

    width: 500px;
    height: 50px;
    line-height:50px;
    font-size: 30px;
    border-radius:18px;
    box-shadow: 2px 2px 8px red;  
    margin: 20px; 
}
.nav{
    width: 500px;
    display: flex;
    justify-content: space-between;
}
.nav li{
    width: 100px;
    border:1px solid black;
    font-size:20px;
    border-radius:18px;
}
.active{
   background: black;
   color:white;
}
.view{
margin: 18px;
}
</style>
