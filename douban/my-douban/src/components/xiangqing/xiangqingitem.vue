<template>
    <div>
        <router-link to="/mxiangqing">
            <div class="m4">
              <img :src="image" alt="">
              <h5>{{name}}</h5>
              <p class="art">{{posit}}</p>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        image:String,
        name:String,
        posit:String,
    }
}
</script>

<style scoped>
  .m4{
    width:74px;
    margin-right:8px;
    text-align:center;
 }
  .m4 img{
     width:74px;
     height:110px;
 }
  p{
     height:30px;
     line-height:30px;
     margin:0;  
     color:black; 
 }
 .m4>p{
     width:100%;
     white-space: nowrap;
     text-overflow:ellipsis;
     word-wrap:break-word;  
 }
 h5{
     margin:0;
     font-weight:normal;
     font-size:14px;
     line-height:22px;
     color:#494949;
 }
 .art{
     color:#aaa;
     font-size:14px;
 }
</style>