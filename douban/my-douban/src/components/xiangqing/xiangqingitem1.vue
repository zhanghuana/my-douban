<template>
    <div>
        <router-link to="/mxiangqing">
            <div class="m4">
              <img :src="image" alt=""> 
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
    width:200px;
    margin-right:8px;
    text-align:center;
 }
  .m4 img{
     width:200px;
     height:110px;
 }
 .art{
     color:#aaa;
     font-size:14px;
 }
</style>