import Vue from 'vue'  //让当前文件夹引入Vue
import Vuex from 'vuex' //让当前文件夹引入Vuex
import axios from 'axios'

Vue.use(Vuex)   //让Vue使用Vuex

export const store=new Vuex.Store({
    state:{
        arr:[],
        arr1:[]
    },
    mutations:{
        savedata(state,payloadok){
            state.arr=payloadok.data;
            // console.log(state.arr.movie)
        }
    },
    getters:{
        gettersarr(state){
          state.arr1=state.arr.movie[0];
          console.log(state.arr1)
        }
    },

    actions:{
        axiosdata(context){
            axios({
                url:"/index/link",
                method:"get"
            }).then((ok)=>{  
                context.commit("savedata",ok)
            })
        }
        
    }
})