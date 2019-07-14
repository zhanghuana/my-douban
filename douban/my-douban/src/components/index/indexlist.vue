<template>
        <div>
            <ul >
                <li v-for="(v,i) in arr" :key="i">{{v}}</li>
            </ul>
        </div>
</template>

<script>
export default {
    data(){
      return{
          arr:["影院热映","最受关注图书","豆瓣时间","使用豆瓣app"]
      }  
    },
    
}

</script>

<style scoped>
 ul{
     width:90%;
     margin:0 auto;
     padding:6% 0;
 }
 li{
     text-align:center;
     width:46%;
     display:inline-block;
     height:40px;
     line-height:40px;
     background:#f6f6f6;
     margin:2%;
 }
</style>