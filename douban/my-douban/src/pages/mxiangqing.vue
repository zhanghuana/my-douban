<template>
<div>
    <Loading v-if="bool1"></Loading>
    <div v-else>
        <Topitem></Topitem>
        <!-- {{this.$route.query.type}} -->
        <Xiangqing :arr="newarr[0]" :span1="title1" span2="两个播放源"  ></Xiangqing>
    </div>
</div>
    
</template>

<script>
import Topitem from '../components/top/topitem'
import Xiangqing from '../components/xiangqing/xiangqing'
import Loading from "../components/loading/loading"
export default {
    components:{
        Topitem,
        Xiangqing,
        Loading,
    },
    data(){
        return{
            arr:[],
            title1:"",
            bool1:true
        }
    },
    computed:{
        newarr(){
            var newarr=this.arr.filter((v,i)=>{
                if(v.id==this.$route.query.id){
                //   console.log(this.$route.query.id);
                //   console.log(v.id);
                  console.log(v);
                  return v;
                }
            })
            console.log(newarr[0]);
            return newarr
        }
    },
    
    created(){
        this.axios({
            url:"../../mock/json/data.json",
            method:"get"
        }).then((ok)=>{
            console.log(this.arr=ok.data.movie)
            if(this.$route.query.type=="movie"){
                this.arr=ok.data.movie;
                this.title1="在哪儿看这部电影"
            }
            if(this.$route.query.type=="book"){
                this.arr=ok.data.books;
                // console.log(this.arr)
                this.title1="在哪儿看这本书";
                // console.log(this.title1)
            }
            this.bool1=false;
            
            console.log("bbb"+this.arr)
        })
    },
}
</script>

<style scoped>
 
</style>