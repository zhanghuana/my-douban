<template>
    <div class="item" >
        <router-link :to="linkurl">
            <h2 :style="{color:colorstyle}">{{name}}</h2>
            <p>{{content}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        name:String,
        content:String,
        colorstyle:String,
        linkurl:String
    },
   
}
</script>

<style scoped>
 .item{
     width:33%;
     text-align:center; 
 }
h2,p{
     margin:0;padding:0;  
 }
 h2{
    margin-top:14px;
     font-weight:normal;
     margin-bottom:2px;
 }
 p{
     color:#999;
     font-size:14px;
 }

</style>