<template>
    <div>
        
        <ul>
            <router-link to="" class="con">
                <li>
                    <span>{{name}}</span>
                    <span>{{more}}</span>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        name:String,
        more:String
    }
}
</script>

<style scoped>
 ul{
     width:90%;
     margin:24px auto;
 }
 .con{
     width:50%;
     float:left;  
 }
 li{
border:1px solid #42bd56;
border-bottom:none;
list-style:none;
height:40px;
line-height:40px;
display:flex;
justify-content:space-between;
border-left:none;
border-right:none;
font-size:14px;
 }
 li span:nth-child(1){
     color:#42bd56;
 }
 li span:nth-child(2){
     display:inline-block;
     padding-right:16px;
     height:100%;
     color:lightgray
 }





</style>