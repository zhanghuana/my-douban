<template>
    <div class="item">
            <h3>{{title}}</h3>
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
            <p>{{content}}</p>
            <p class="last">{{count}}有用</p>
    </div>
</template>
<script>
export default {
     data(){
        return{
            value5: 5,
        }
    },
    props:{
        name:String,
        count:String,
        content:String,
        title:String
    }
}
</script>
<style scoped>
.item{
    width:100%;
    margin-top:20px;
}
h3{
    font-weight:normal;
    font-size:1.05rem;
    color:#494949;
    margin:0;
}
p{
    margin:6px;
}
.item3{
    display:flex
}
.item3>span{
    font-size:12px;
    color:#494949;
}
.item3+p,.last{
    font-size:12px;
    color:#aaa;
}




</style>