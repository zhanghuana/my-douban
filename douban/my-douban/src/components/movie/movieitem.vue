<template>
    <div>
            <div class="m4" @click="fun()">
              <img :src="image" alt="">
              <p>{{title}}</p>
               <el-rate
                        v-model="value5"
                        disabled
                        show-score
                        text-color="#aaa"
                        score-template="{value}">
              </el-rate>  
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            value5: 3.7
        }
    },
    created(){
        this.value5=(this.score/2).toFixed(1);
    },
    props:{
        image:String,
        title:String,
        num:String,
        type:String,
        score:String
    },
    methods:{
        fun(){
            console.log("aaaaa");
            this.$router.push("/mxiangqing?id="+this.num+"&type="+this.type);
        }
    }
}
</script>

<style scoped>


 .m4{
    width:100px;
    margin-left:10px;
    text-align:center;
 }
  .m4 img{
     width:100px;
     height:142px;
 }
  p{
     height:30px;
     line-height:30px;
     margin:0;  
     color:black; 
 }
 .m4>p{
     width:100%;
     overflow: hidden;
     white-space: nowrap;
     text-overflow:ellipsis;
     
 }


</style>