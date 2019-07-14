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
import Movienav from '../movie/movienav'
import Movieitem from '../movie/movieitem'
export default {
    data(){
        return {
            arr:[],
            obj:[
                {title:"最受关注图书｜虚构类",more:"更多"},
                {title:"最受关注图书｜非虚构类",more:"更多"},
                {title:"豆瓣书店",more:"更多"},
            ]
        }
    },
    created(){
        var arr1=[],arr2=[],arr3=[];
        this.axios({
            url:"../../mock/json/data.json",
            method:"get"
        }).then((ok)=>{
            ok.data.books.forEach((v,i)=>{
                if(i<8){
                   arr1.push(v)
               }else if(i>=8&&i<16){
                   arr2.push(v)
               } else if(i>=16&&i<24){
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