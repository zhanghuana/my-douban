<template>
    <div>
        <el-row :gutter="20">   
        <el-col :span="1"><div class="grid-content bg-purple"></div></el-col> 
        <el-col :span="4"><div class="grid-content bg-purple close"  @click="fun()" >关闭</div></el-col>
        <el-col :span="18">
            <div class="grid-content bg-purple">
                <input type="text" >
                <img src="../../../static/img/sou.png" alt="">
            </div>
        </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
data() {
    return {
      input2: '',
      input21: '',
      input22: '',
      input23: ''
    }
},
methods:{
    fun(){
        this.$router.go(-1)
    }
}
}
</script>

<style scoped>
    .el-row {
        margin-top:20px;
    }
  .el-col {
    border-radius: 4px;
  }
  .close{
      line-height:30px;
      text-align: right;
      /* margin-right:10px; */
      color:#42bd56;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  input{
      width:90%;
      height:30px;
      /* border-radius:4px; */
      background: #f3f3f3;
      border:none;
      outline: lightblue;
  }
  img{
      width:14px;
      height:14px;
      position:absolute;
      left:210px;
      top:8px;
  }
 
 
</style>