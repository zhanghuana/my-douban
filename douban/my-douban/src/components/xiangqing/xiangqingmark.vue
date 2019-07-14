<template>
    <div class="item">
        <div class="item1">
            <div class="item2">
                <img :src="imgurl" alt="">
            </div>
            <div >
                <p class="item3">
                    <span>{{name}}</span>
                    <el-rate class="star"
                        v-model="value5"
                        disabled
                        show-score
                        text-color="#aaa"
                        score-template="{value}">
                    </el-rate> 
                </p>
                <p>{{time}}</p>
            </div>
        </div>
        <div class="item4">
            <p>{{content}}</p>
            <div>
                <span><img src="../../../static/img/1.svg" alt=""><span>{{count}}</span></span>
                <span>···</span>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
     data(){
        return{
            value5: 4,
        }
    },
    props:{
        name:String,
        imgurl:String,
        time:String,
        count:String,
        content:String
    }
}
</script>
<style scoped>
.item{
    width:100%;
    margin-top:20px;
}
.item1{
    display:flex;
}
.item2{
    width:40px;
    height:40px;
    
}
.item2>img{
    width:100%;
    height:100%;
    border-radius: 50%;
}
.item1 p{
    display:flex;
    margin:0;
    margin-left:8px;
}
.item3>span{
    font-weight:bold;
}
.item3+p{
    font-size:12px;
    color:#aaa;
    margin-top:4px;
}
.item4{
    margin-left:48px;
}
.item4>p{
    color:#494949;
    font-size:15px;
    line-height:20px;
}
.item4>div{
    display:flex;
    padding:0 4px;
    justify-content: space-between;
    letter-spacing: 1px;
    font-size:14px;
    color:#aaa;
}
.item4>div>span:nth-of-type(1){
    width:80px;
    height:20px;
    display:flex;

}
.item4>div>span>img{
    width:20px;
    height:20px;
    display:flex;

}
.item4>div>span:nth-of-type(2){
    letter-spacing: 4px;
    font-weight:bold; 
}
</style>
