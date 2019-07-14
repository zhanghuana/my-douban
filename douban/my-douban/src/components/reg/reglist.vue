<template>
    <div>
        <Loading v-if="bool2"></Loading>
        <div v-else>
            <div class="con"  v-if="bool1">
                <i class="el-icon-close"  @click="funa()"></i>
                <h2>{{newarr.title}}</h2>
                <p>登录注册表示同意 <span>豆瓣使用协议、隐私政策</span></p>
                <div class="con1">
                    <div><span>{{newarr.inp1}}</span><input type="text" :placeholder="newarr.inp2"  @input="fund()" v-model="val1"><i class="el-icon-error" v-if="bool5"></i> <i class="el-icon-success" v-if="bool4"></i></div>
                    <div><input type="text" :placeholder="newarr.inp3" v-model="val2" @input="fune()"><span class="sp1"  @click="funi()">{{newarr.inp4}}</span></div>
                </div>
                <input type="submit" value="登录" :class="name" @click="funh()">
                <div class="con2">
                    <span><span @click="funb()">{{newarr.span1}}</span><span>{{newarr.span2}}</span></span>
                    <span>{{newarr.span3}}</span>
                </div>
                <Regitem></Regitem>
            </div>

            <!-- 账号密码登录 -->
            <div class="con" v-else>
                <i class="el-icon-close" @click="funa()"></i>
                <h2>{{newarr.title}}</h2>
                <p>登录注册表示同意 <span>豆瓣使用协议、隐私政策</span></p>
                <div class="con1">
                    <div><span v-if="bool3">{{newarr.inp1}}</span><input type="text" :placeholder="newarr.inp2"  @input="funf()" v-model="val1"><i class="el-icon-error" v-if="bool5"></i> <i class="el-icon-success" v-if="bool4"></i></div>
                    <div><input type="text" :placeholder="newarr.inp3" v-model="val2"  @input="fung()"><span class="sp1">{{newarr.inp4}}</span></div>
                </div>
                <input type="submit" value="登录" :class="name" @click="funh()">
                <div class="con2">
                    <span><span  @click="funb()">{{newarr.span1}}</span><span @click="func()">{{newarr.span2}}</span></span>
                    <span>{{newarr.span3}}</span>
                </div>
                <Regitem></Regitem>
                
            </div>

        </div>
    </div>

    
</template>
<script>
import Regitem from "./regitem"
import Loading from "../../components/loading/loading"
export default {
    data(){
        return{
            arr:[],
            bool1:true,
            bool2:true,
            bool3:false,
            bool4:false,
            bool5:true,
            val1:"",
            val2:"",
            name:"btn",
        }
    },
    created(){
        this.axios({
            url:"../../mock/json/reg.json",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data.reg);
            this.arr=ok.data.reg;
            this.bool2=false;  
        })
    },
    computed:{
        newarr(){
             if(this.bool1==true){
                return this.arr[0];
                console.log(this.arr) 
            }else{
                console.log(2222)
                return  this.arr[1];
                console.log(this.arr)
            }
        }
    },
     methods:{
        funa(){
            this.$router.go(-1)
        },
        funb(){
            this.bool1=!this.bool1;
            // this.bool3=false;
            this.val1="";
            this.val2="";
            this.name="btn"
        },
        func(){
            this.bool3=!this.bool3;
            this.val1="";
            this.val2="";
        },
        fund(){
            var reg=/^1[3,5,7,8,9]\d{9}$/;
            if(reg.test(this.val1)==true){
                this.bool5=false;
                this.bool4=true;
            }else{
                this.bool5=true;
                this.bool4=false;
            };
            if(this.val1!=""&&this.val2!=""){
                this.name="btn1";
            }else{
                this.name="btn"
            }
            
        },
        fune(){
            
            if(this.val1!=""&&this.val2!=""){
                this.name="btn1";
            }else{
                this.name="btn"
            }
        },
        funf(){
            var reg1=/^1[3,5,7,8,9]\d{9}$/;
            var reg2=/^\d{6,}@\w{2}\.(com|cn|net|com.cn)$/;
            if(reg1.test(this.val1)==true||reg2.test(this.val1)==true){
                    console.log(11111111111111)
                    this.bool5=false;
                    this.bool4=true;
            }else{
                this.name="btn";
                this.bool5=true;
                this.bool4=false;
            };
            if(this.val1!=""&&this.val2!=""){
                this.name="btn1";
            }else{
                this.name="btn"
            }
        },
        fung(){
          
            if(this.val1!=""&&this.val2!=""){
                this.name="btn1";
            }else{
                this.name="btn"
            } 
        },
        funi(){
            let str="";
            for(let i=0;i<6;i++){
                str+=Math.round(Math.random()*10);
            }
            this.newarr.inp4=str;
        },
        // 点击登录
        funh(){
            console.log(this.newarr,this.newarr.type)
            if(this.name=="btn"){
                return;
            }else{
                if(this.newarr.type=="reg1"){
                    var reg1=/^1[3,5,7,8,9]\d{9}$/;
                    // var reg2=/^[1-9]\d{5}$/;
                    if(reg1.test(this.val1)!=true){
                        alert("请正确填写手机号");
                        this.name="btn"
                    }else if(this.val2!=this.newarr.inp4){
                        alert("请正确填写验证码")
                        this.name="btn"
                    }else if(reg1.test(this.val1)!=true&&this.val2!=this.newarr.inp4){
                        alert("请正确填写手机号和验证码")
                        this.name="btn"
                    }else{
                        //  var serverToken=localStorage.getItem("token");
                          var val1=this.val1;
                          var param=new URLSearchParams();
                            param.append("uphone",val1);
                        //  var param=new URLSearchParams();
                        //      param.append("token",serverToken);
                        //      console.log(serverToken,param);
                        this.axios({
                            url:"http://localhost:9000/reglist",
                            method:"post",
                            // params:{token:serverToken},
                            data:param
                        }).then((ok)=>{
                            console.log(ok.data.content)
                            if(ok.data.status==200&&ok.data.content==6){
                                alert("主人 欢迎回来");
                                this.$router.push("/index");
                            }else{
                                this.$router.push("/reg1?phone="+this.val1);
                            }
                        })
                        
                    }
                }else if(this.newarr.type=="reg2"){
                    var reg1=/^1[3,5,7,8,9]\d{9}$/;
                    var reg2=/^\d{6,}@\w{2}\.(com|cn|net|com.cn)$/;
                    var reg3=/^\w{6,16}$/;
                    if((reg1.test(this.val1)==true||reg2.test(this.val1)==true)&&reg3.test(this.val2)==true){
                            var val1=this.val1,val2=this.val2;
                            console.log(val1,val2)
                            var param=new URLSearchParams();
                            param.append("uphone",val1);
                            param.append("upwd",val2);
                            this.axios({
                                url:"http://localhost:9000/login",
                                method:"post",
                                data:param
                            }).then((ok)=>{
                                console.log(ok.data.token);
                                if(ok.data.status==200&&ok.data.content==2){
                                    alert("登录成功")
                                    // 得到token并且存起来
                                    // var serverToken=ok.data.token;
                                    // console.log(serverToken);
                                    // // 开始往本地存储中存
                                    // window.localStorage.setItem("token",serverToken)
                                    this.$router.push("/index");
                                }else{
                                    alert("登录失败");
                                    this.$router.push("/reg");
                                }
                            }).catch((err)=>{
                                console.log(err)
                            })
                    }else if(reg3.test(this.val2)!=true){
                        alert("密码错误")
                        this.name="btn"
                    }else{
                       alert("用户名错误")
                       this.name="btn"
                    }
                }
            }
        }
    },
    components:{
        Loading,
        Regitem
    }
    
}
</script>
<style scoped>
.con{
    margin:16px; 
}
.el-icon-close{
    font-size:28px;
    color:#494949;
    font-weight: lighter;
}
h2{
    margin:4px auto;
    text-align:center;
    font-size:30px;
    font-weight:normal;
}
p{
    margin:0;
    color:#aaa;
    text-align:center;
}
p>span{
    color:#42bd56; 
}
.con1{
    width:100%;
    margin-top:24px;
}
.con1>div{
    width:100%;
    border:1px solid #ccc;
    height:46px;
    line-height:46px;
    position:relative;
}
.con1>div:nth-of-type(2){
    border-top:none;
}
.con1>div>input{
    outline: none;
    border:none;
    margin-left:10px;
    font-size:15px;
    height:36px;
    width:200px;
}
.con1>div>span{
    margin-left:8px;
    padding-right:10px;
    border-right:1px solid #ccc;
}
.con1>div>i{
    position:absolute;
    right:10px;
    top:10px;
    color:#ccc;
    font-size:20px;
}
.con1>div>span.sp1{
    /* margin-left:40px; */
    color:#42bd56;
    border:none;
    position: absolute;
    right:10px;
}
.btn{
    width:100%;
    height:46px;
    border-radius:4px;
    margin-top:20px;
    background-color:#42bd56;
    border:none;
    color:white;
    font-size:18px;
    opacity: 0.6;
}
.btn1{
    width:100%;
    height:46px;
    border-radius:4px;
    margin-top:20px;
    background-color:#42bd56;
    border:none;
    color:white;
    font-size:18px;
}
.con2{
    width:100%;
    margin-top:20px;  
    font-size:0.94rem;
}
.con2>span:nth-of-type(1){
    color:#42bd56;
}
.con2>span:nth-of-type(2){
color:#494949;
   position:absolute;
   right:16px;
}

</style>