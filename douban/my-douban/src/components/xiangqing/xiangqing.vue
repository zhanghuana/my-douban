<template>
   <div>
        <!-- <Loading v-if="bool1"></Loading> -->
        <div class="con" >
        <h3>{{arr.title}}</h3>
        <div class="big">
            <div class="con1">
                <div class="con3">
                    <el-rate class="star"
                        v-model="value5"
                        disabled
                        show-score
                        text-color="#aaa"
                        score-template="{value}">
                    </el-rate> 
             
                <span class="mark">{{arr.collect_count}}人已评论</span>
                </div>
                <div class="con2" v-if="arr.subtype=='movie'">
                     {{arr.time}} / {{arr.genres[0]}}{{arr.genres[1]}} / {{arr.directors[0].name}} / {{arr.casts[0].name}} / {{arr.casts[1].name}} / {{arr.casts[2].name}} / {{arr.year}}年上映
                </div> 
               
                <div class="con2" v-else-if="arr.subtype=='book'">
                    {{newauther}} {{arr.publisher}} / {{arr.pages}}页 / {{arr.binding}} / {{arr.price}} / {{arr.pubdate}}
                </div>
            </div>
            <img :src="arr.images.small" alt="">
        </div> 
        <a class="source">{{span1}}<span>{{span2}}</span></a>
        <router-link to="" class="rout1">想看</router-link>
        <router-link to="" class="rout2">看过</router-link>
        <h4>{{arr.title}}的剧情介绍</h4>
        <div>
            <p class="content" v-if="bool">{{arr.summary}}</p>
            <p class="content1" v-else>{{arr.summary1}}<a @click="funa()">(展开)</a></p>
        </div>
        <h4>影人</h4>
        <div class="m2">
            <div class="m3">
                <Xiangqingitem v-for="v in darr" :key="v.id" :image="v.imgurl" :name="v.name" :posit="v.posit"></Xiangqingitem> 
            </div>
        </div>
        <h4>{{arr.title}}的预告片(1)、视频评论(2)、和图片(538)</h4>
        <div class="m2">
            <div class="m3">
                <Xiangqingitem1 v-for="v in carr" :key="v.id" :image="v.imgurlp"></Xiangqingitem1> 
            </div>
        </div>
        <h4>{{arr.title}}的短评({{arr.collect_count}})</h4>
        <Xiangqingmark v-for="v in mark" :key="v.id" :imgurl="v.imgurl" :name="v.name" :time="v.time" :content="v.content" :count="v.count"></Xiangqingmark> 
        <!-- 我的评论 -->
        <Xiangqingmark v-for="(v,i) in mymark" :key="i" :imgurl="imgurl" :name="name" :time="time" :content="v" :count="count"></Xiangqingmark> 
        <div class="mymark">
            <input type="text" name="" id="" v-model="val">
            <button @click="fun()">发送</button>
        </div>
        <div class="moremark">打开App看更多热门短评</div>
        <h4>喜欢肖申克的救赎的人也喜欢</h4>
        <div class="m2">
            <div class="m3">
                <Xiangqingitem2 v-for="(v,l) in like" :key="l" :image="v.imgurl" :name="v.name" :posit="v.posit"></Xiangqingitem2> 
            </div>
        </div>
        <h4>{{arr.title}}的影评</h4>
        <Xiangqingmark1 v-for="v in mark1" :key="v.id" :title="v.title" :name="v.name" :content="v.content" :count="v.count"></Xiangqingmark1> 
        <div class="moremark">打开App看更多热门影评</div>
        <h4>推荐{{arr.title}}的豆列</h4>
        <div class="doulist1">
            <div class="doulist2">
                <Haodianying v-for="(v,g) in tuijian" :key="g"   :title="v.content"  color="#42bd56" borderColor="#42bd56"></Haodianying>
            </div>
        </div>
        <h4>了解更多电影信息</h4>
        <Sortlist v-for="v in sort" :key="v.id" :name="v.name" :more="v.more"></Sortlist> 
        <div>
            <div class="one"><img src="../../../static/img/logo1.png" alt=""><span>豆瓣</span></div >
            <p class="two">去 App Store 免费下载 iOS 客户端</p>
        </div>
    </div>
   </div>
</template>

<script>
import Xiangqingitem from './xiangqingitem'
import Xiangqingitem1 from './xiangqingitem1'
import Xiangqingitem2 from './xiangqingitem2'
import Xiangqingmark from './Xiangqingmark'
import Xiangqingmark1 from './Xiangqingmark1'
import Haodianying from '../movie/haodianying'
import Sortlist from '../movie/sortlist'

export default {
    data(){
        return{
            value5: 3.7,
            bool:false,
            bool1:true,
            darr:[],
            carr:[],
            mark:[],
            mark1:[],
            author:[],
            like:[],
            tuijian:[],
            sort:[],
            mymark:[],
            val:"",
            // 添加评论需要的个人信息
            imgurl:"../../../static/img/3.png",
            name:"爱不解释欢",
            time:"",
            count:""
        }
    },
    props:{
        arr:Object,
        span1:String,
        span2:String,
    },
    created(){
        this.value5=(this.arr.rating.average/2).toFixed(1);
        
        this.axios({
            url:"../../mock/json/nav.json",
            method:"get"
        }).then((ok)=>{
            this.darr=ok.data.darr;
            this.carr=ok.data.carr;
            this.mark=ok.data.mark;
            this.like=ok.data.like;
            this.mark1=ok.data.mark1;
        })
        this.axios({
            url:"../../mock/json/nav.json",
            method:"get"
        }).then((ok)=>{
            this.tuijian=ok.data.tuijian;
            console.log(this.tuijian);
        })
        this.axios({
            url:"../../mock/json/sort.json",
            method:"get"
        }).then((ok)=>{
           var sort=ok.data.sort.filter((v,i)=>{
                if(i<6){
                    return v
                }
            })
            this.sort=sort;
            console.log(this.sort);
        })
        
    },
    components:{
        Xiangqingitem,
        Xiangqingitem1,
        Xiangqingmark,
        Xiangqingitem2,
        Xiangqingmark1,
        Haodianying,
        Sortlist,
    },
    computed:{
        newauther(){
            var str=""
            var newauter=this.arr.author.filter((v,i)=>{
                str+=v+"/";
                console.log(str)
                return str
            });
            return str
        }
       
    },
   
    methods:{
        funa(){
            this.bool="true"
        },
        fun(){
            let num1=parseInt(Math.random()*20);
            let num2=parseInt(Math.random()*20000);
            this.mymark.push(this.val);
            this.val="";
            this.time=num1+"年前";
            this.count=num2;
        }
    }
}
</script>

<style scoped>
.con{
    padding-left:20px;
    padding-right:20px;
}
.con h3{
    font-size:22px;
    font-weight:normal;
    color:#111;
}
.big{
    display:flex;
}
.con1{
    width:65%;
    display:flex;
    flex-direction: column;
}
.star{
    display:inline-block;
}
.mark{
    font-size:15px;
    color:lightgray;
}
.con2{
    width:100%;
    font-size:14px;
    letter-spacing: 2px;
    margin:14px 0;
    color:#494949;
    display:inline-block;
}
.con img{
    width:100px;
    height:140px;
    margin-left:20px;
}
.source{
    display:flex;
    justify-content: space-between;
    margin-top:24px;
}
.source{
    color:#42bd56;
    font-size:14px;
    padding-top:14px;
    padding-bottom:14px;
    border-top:0.07rem solid lightgray;
    border-bottom:0.04rem solid lightgray;
}
.source>span{
    color:#ccc;
}
.rout1,.rout2{
    display:inline-block;
    width:48%;
    margin:30px 0;
    padding:8px 0;
    text-align:center;
    border:1px solid #ffb712;
    color:#ffb712;
    font-size:14px;
    border-radius: 4px;
}
.rout2{
    margin-left:2px;
}
h4{
    font-weight:normal;
    color:#aaa;
    margin:0;
}
.content,.content1{
    min-height:80px;
    font-size:14px;
    letter-spacing: 1px;
    line-height: 22px;
    color:#494949;  
    
}
.content1>a{
    color:#42bd56;
}
.m2{
      width:100%;
      overflow:auto;
      margin-top:18px;
      margin-bottom:18px;
}
.m3{
   width:650px;  
   display:flex;
 }
.moremark{
    width:100%;
    height:40px;
    border-radius:20px;
    text-align:center;
    line-height:40px;
    background:#42bd56;
    color:white;
    margin:30px auto;
    font-size:0.95rem;
}
.doulist1{
    margin-top:10px;
    width:100%;
    overflow:auto;
    margin-bottom:20px;
   
}
.doulist2{
    width:1400px;
}
 .one>img{
     width:50px;
     height:50px;
     margin:20px;
     margin-left:36%;
     margin-top:80px;
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

/* 添加评论功能 */
.mymark{
    padding:10px;
    padding-bottom:0px;
    margin-top:30px;
}
.mymark>input{
    width:70%;
    height:40px;
    font-size:16px;
    border:1px solid #ccc;
}
.mymark>button{
    width:22%;
    margin-left:14px;
    height:40px;
    border:none;
    font-size:16px;
}



</style>