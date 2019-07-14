<template>
    <div class="con">
        <el-row type="flex" class="row-bg" justify="space-around" v-for="(v,i) in arr" :key="i">
            <el-col :span="6">
                <div class="grid-content bg-purple img">
                    <router-link to="/index"><img :src="v.img1" alt="" class="img1"></router-link>
                    <router-link to="/nav"><img :src="v.img2" alt="" class="img2"></router-link>
                </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple title">
                    {{v.title}}
                </div>
            </el-col>
        </el-row>
    </div>

    
</template>

<script>
export default {
    data(){
        return{
            arr:[{img1:"../../../static/img/logo.png",img2:"../../../static/img/m.png",title:"打开豆瓣App"}]
        }
    }
}
</script>

<style scoped>
    .el-row {
    margin-bottom: 6px;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .bg-purple {

    margin-top:10px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 32px;
    font-size:13px;
    
  }
  .title{
      background: #42bd56;
      margin-top:2px;
      text-align:center;
      line-height:30px;
      color:white
  }
  .row-bg {
    padding: 10px 0 0 10px;
  }
  .img1{
      width:46px;
      height:20px; 
  }
  .img{
      display:flex;
  }
  .img2{
      width:20px;
      height:18px; 
      padding-top:2px;
      margin-left:20px;
      margin-right:10px;
  }
  .con{
      border-bottom:0.07rem solid #f3f3f3;
        
      position: sticky;
      top:0;
      background: white;
      z-index:10;
  }
</style>
