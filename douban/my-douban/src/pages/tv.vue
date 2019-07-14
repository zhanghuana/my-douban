<template>
    <div>
        <Topitem></Topitem>
        <Tvlist ></Tvlist>
        <h3>发现好电视剧</h3>
        <div class="con">
            <div class="con1">
                <Haodianying v-for="(v,i) in arr1" :key="i"  :line="v.line" :title="v.title" :href="v.href" :color="v.color" :borderColor="v.color"></Haodianying>
            </div>
        </div>
        <h3>分类浏览</h3>
        <Sortlist v-for="(v,i) in arr" :key="i" :name="v.name" :more="v.more"></Sortlist> 
       
         <div>
            <div class="one"><img src="../../static/img/logo1.png" alt=""><span>豆瓣</span></div >
            <p class="two">去 App Store 免费下载 iOS 客户端</p>
        </div>
    </div>
</template>

<script>
import Topitem from '../components/top/topitem'
import Movienav from '../components/movie/Movienav'
import Tvlist from '../components/movie/tvlist'
import Haodianying from '../components/movie/Haodianying'
import Sortlist from '../components/movie/sortlist'
export default {
        data(){
        return{
            arr:[],
            arr1:[]
        }
    },
    created(){
        this.axios({
            url:"../../mock/json/data.json",
            method:"get"
        }).then((ok)=>{
            this.arr1=ok.data.faxianhaodianying;
            console.log(this.arr1);
        })
        this.axios({
            url:"../../mock/json/sort.json",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.sort1;
            console.log(this.arr);
        })
    },
    components:{
        Topitem,
        Tvlist,
        Haodianying,
        Sortlist
    }
    
}
</script>

<style scoped>
 h3{
     font-weight: normal;
     font-size:18px;
     padding:10px;
 }

.con{
    width:100%;
    overflow:auto;
   
}
.con1{
    width:1200px;
    /* min-height:70px; */
     /* display:flex;
    flex-wrap: wrap; */
}

 .one>img{
     width:50px;
     height:50px;
     margin:20px;
     margin-left:36%;
     margin-top:66px;
 }
 .one>span{
     display:inline-block;
     font-size:25px;
     position: relative;
     top:-35px;
     
 }
 .two{
     text-align:center;
     color:#42bd56;
 }

 
</style>