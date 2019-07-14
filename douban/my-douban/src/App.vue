<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,div,ul,li,ol,dl,dd,dt,a,img,input{
  padding:0;
  margin:0;
  color:black;
}
a{
  text-decoration: none;
  color:block;
}
ul,li{
  list-style:0;
}
 .el-rate__icon{
     font-size:14px;
     margin-right:-1px;
 }
 .el-rate__text {
    font-size: 11px;
}


</style>
