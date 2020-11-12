<template>
    <div id="intro_wrap">
        <p id="title">Weolcome to Follow_Me</p>
        <div id="btn_wrap">
            <router-link :to="{name : 'Admin'}" id="adminImg" >
            <img src="../img/admin.png" width="300">
            <div id="AdminWords">관리자</div>
            </router-link>
            <router-link :to="{name : 'Medical'}" id="medicalImg" >
            <img src="../img/nurse.png" width="300px">
            <div id="MedicalWords">의료진</div>
            </router-link>
        </div>
    </div>
</template>
<script>

export default {
    name : "",
    data: () => ({
        image : []
    }),
}
</script>

<style>
#intro_wrap{
    width: 1200px;
    margin : 0 auto;
}
#title{
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    color: #000;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1.5em;
}
 #btn_wrap{
     width : 1200px;
     height : 480px;
     text-align: center;
     font-size: 30px;
     color: black;
 }
 #adminImg{
     display: inline-block;
     background-size: cover;
     text-decoration: none;
     
 }
 #medicalImg{
     display: inline-block;
     text-decoration: none;
     margin-left: 50px;
 }
 #AdminWords{
     margin-left: -30px;
 }
</style>