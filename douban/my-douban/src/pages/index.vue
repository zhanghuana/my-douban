<template>
    <div>
        <Topitem></Topitem>
        <Indexlist></Indexlist>
        <div>
            <Indexitem v-for="(v,i) in arr" :key="i" :image="v.image" :avatar="v.owner.avatar" :image_hlarge="v.image_hlarge"  :title="v.title" :content="v.content" :address="v.address"></Indexitem>
        </div>
    </div>
</template>

<script>
import Topitem from '../components/top/topitem'
import Indexitem from '../components/index/indexitem'
import Indexlist from '../components/index/indexlist'
export default {
    data(){
        return {
            arr:[]
        }
    },
    created(){
        this.axios({
            url:"../../mock/json/data.json",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.shouye;
            console.log(this.arr)
        })
    },
    components:{
        Topitem,
        Indexlist,
        Indexitem
    },
    
}
</script>

<style scoped>
 
</style>
