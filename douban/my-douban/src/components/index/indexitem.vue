<template>
    <div class="item">
        <div  class="item3">
            <img :src="image" alt="">
            <div class="item2">
                <img :src="image_hlarge" alt="">
                <img :src="avatar" alt="">
            </div>
        </div>
        <div class="item1">
            <h3>{{title}}</h3>
            <p>{{content}}</p>
            <span>{{address}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        image:String,
        image_hlarge:String,
        title:String,
        avatar:String,
        content:String,
        address:String
    }
}
</script>

<style scoped>
    .item{
        width:100%;
    }
    .item2{
        display:inline-block;
        display:flex;
        flex-direction: column;
        width:30%;
    }
    .item3{
        display:flex;
    }
    .item img:nth-of-type(1){
        width:62%;
        height:180px;
        margin-right:10px;
        margin-left:10px;
    }
    .item2 img:nth-of-type(1){
        width:100%;
        height:85px;
        margin-left:0px;
    }
    .item2 img:nth-of-type(2){
        width:100%;
        height:85px;
        margin-top:10px;
    }
    h3{
        font-size:18px;
        font-weight: normal;
        margin-left:6px;
    }
    p{
        font-size:12px;
        color:gray;  
        margin-left:6px;
        margin-right:6px;
    }
    span{
        font-size:12px;
        color:lightgray;
        display:inline-block;
        margin-bottom: 6px;
        margin-left:6px;
    }
    .item1{
        border-bottom: 0.06rem solid #ccc;
        margin-bottom:24px;
        padding-bottom:14px;
    }
    
</style>