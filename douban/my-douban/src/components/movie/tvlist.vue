<template>
    <div >
        <div  v-for="(v,i) in arr" :key="i">
            <Movienav :title="obj[i].title" :more="obj[i].more"></Movienav>
            <div class="m2">
                <div class="m3">
                    <Movieitem  v-for="(v,j) in arr[i]" :key="j"  :type="v.subtype" :num="v.id" :image="v.images.small" :title="v.title" :score="v.rating.average"></Movieitem>             
                </div>
            </div>
        </div>
     
    </div>
</template>

<script>
import Movienav from './Movienav'
import Movieitem from './movieitem'
export default {
    data(){
        return {
            arr:[],
            obj:[
                {title:"近期值得看的国产剧",more:"更多"},
                {title:"近期值得看的综艺节目",more:"更多"},
                {title:"近期值得看的英美剧",more:"更多"},
            ]
        }
    },
    created(){
        var arr1=[],arr2=[],arr3=[];
        this.axios({
            url:"../../mock/json/data.json",
            method:"get"
        }).then((ok)=>{
            ok.data.movie.forEach((v,i)=>{
               if(i>=24&&i<32){
                   arr1.push(v)
               }else if(i>=32&&i<40){
                   arr2.push(v)
               } else if(i>=40&&i<48){
                   arr3.push(v)
               }
            })
            this.arr.push(arr1,arr2,arr3)
            console.log(this.arr)
        })
    },
    

   
    
    components:{
        Movieitem,
        Movienav
    }
}
</script>

<style scoped>

.m2{
      width:100%;
      overflow:auto;
  }
 .m3{
   width:870px;  
   display:flex;
 }
</style>