<template>
<div>
    <a  class="item" :href="href" v-if="line==false" :style="{color:color,borderColor:color}">
         {{title}}
    </a>
    <br v-else>
    
    
</div>
         
</template>

<script>
export default {
    data(){
        return{
            arr:[]
        }
    },
    props:{
        href:String,
        title:String,
        color:String,
        line:{
            type:Boolean,
            default:false
        }
    }
    
}
</script>

<style scoped>

 .item{
     
     display:inline-block;
     border-radius:4px;
     float:left;
     border:1px solid red;
     padding:12px 24px;
     margin:10px 10px 4px 10px;
     
 }
</style>