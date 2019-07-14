<template>
<div>
     <div class="con">
        <Navlist v-for="(v,i) in arr" :key="i" :name="v.name" :content="v.content" :colorstyle="v.colorstyle" :linkurl="v.linkurl"></Navlist>
    </div>
    <div>
        <router-link to="/reg"><p>{{obj[0].title}}</p></router-link>
        <span>{{obj[1].title}}</span><span>|</span><span>{{obj[2].title}}</span>
    </div>
</div>
   
</template>

<script>
import Navlist from './navitem'
export default {
    data(){
        return{
           arr:[],
           obj:[
               {title:"登录豆瓣"},
               {title:"使用桌面版"},
               {title:"使用豆瓣App"}
           ]

        }
    },
    created(){
        this.axios({
            url:"../../mock/json/nav.json",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.arr;
        })
    },
    components:{
        Navlist
    }
}
</script>

<style scoped>
 .con{
     display:flex;
     flex-wrap:wrap;
     border-top:0.05rem solid #ccc;
     border-bottom:0.05rem solid #ccc;
     padding:10px;
     padding-bottom:24px;
 }
 p{
     width:100%;
     height:40px;
     text-align:center;
     line-height:30px;
     border-bottom:0.05rem solid #ccc;
     color:#42bd56;
 }
span{
    display:inline-block;
    width:49.4%;
    height:40px;
    text-align:center;
    line-height:30px;
    border-bottom:0.05rem solid #ccc;
    color:#42bd56;
}
span:nth-of-type(2){
    color:#ccc;
    display:inline;
    font-weight:lighter;
}

</style>