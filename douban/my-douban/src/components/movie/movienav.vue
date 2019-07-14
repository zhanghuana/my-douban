<template>
    <div>
        <div class="m1">
            <span>{{title}}</span>
            <span>{{more}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
       return{
           
       } 
    },
    props:{
        title:String,
        more:String
    }
}
</script>

<style scoped>
   .m1{
     display:flex;
     padding:16px;
     justify-content: space-between ;
 }
 .m1>span:nth-of-type(1){
     font-size:18px;
 }
  .m1>span:nth-of-type(2){
     font-size:16px;
     color:#42bd56;
 }
</style>