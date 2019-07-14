<template>
    <div class="con">
        <div class="con1">
            <span @click="func()">取消</span>
            <span>注册豆瓣账号</span>
        </div>
         <div class="con2">
            <h2>创建密码，设置昵称</h2>
            <input type="text" placeholder="输入昵称" v-model="val2"  @input="funb()">
            <input type="text" placeholder="输入密码" v-model="val3" @input="funa()">
            <button @click="fun()" :class="name">确定</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            val1:"",
            val2:"",
            val3:"",
            name:"btn",
        }
    },
    created(){
        this.val1=this.$route.query.phone;
        console.log(this.val1)
    },
    methods:{
        
        funa(){
            if(this.val1!=""&&this.val2!=""){
                this.name="btn1";
            }else{
                this.name="btn"
            }
        },
        funb(){
            if(this.val1!=""&&this.val2!=""){
                this.name="btn1";
            }else{
                this.name="btn"
            }
        },
        func(){
            this.$router.go(-1)
        },
        fun(){
            if(this.name=="btn"){
                return;
            }else{
                    var reg1=/^[a-zA-Z]\w{6,16}$/;
                    var reg2=/^\w{6,16}$/;
                    if(reg1.test(this.val2)!=true){
                        alert("昵称格式不正确");
                        this.name="btn"
                    }else if(reg2.test(this.val3)!=true){
                        alert("密码格式不正确");
                        this.name="btn"
                    }else if(reg1.test(this.val2)!=true&&reg2.test(this.val3)!=true){
                        alert("请正确填写手机号和验证码")
                        this.name="btn"
                    }else{
                        var val1=this.val1,val2=this.val2,val3=this.val3;
                        var param=new URLSearchParams();
                        param.append("uphone",val1);
                        param.append("uname",val2);
                        param.append("upwd",val3);
                        this.axios({
                            url:"http://localhost:9000/reg1",
                            method:"post",
                            data:param
                        }).then((ok)=>{
                            console.log(ok.data);
                            if(ok.data.status==200&&ok.data.content==1){
                                alert("注册成功")
                                this.$router.push("/index")
                            }else{
                                alert("注册失败");
                                this.$router.push("/reg")
                            }
                        }).catch((err)=>{
                            console.log(err)
                        })
                    }

            }
        }
        

    }
    
}
</script>
<style scoped>

.con{
    padding: 0 16px;
}
.con1{
    width:100%;
    height:46px;
    line-height:46px;
    border-bottom:1px solid #ccc;
}
.con1>span:nth-of-type(1){
    color:#42db56;
    font-size:18px;
    display:inline-block;
}
.con1>span:nth-of-type(2){
    font-size:18px;
    display:inline-block;
    margin-left:80px;
}
.con2{
    width:100%;
}
h2{
    font-weight:normal;
    margin:20px auto;
}
 input{
    width:100%;
    height:46px;
    /* line-height:46px; */
    font-size:16px;
}
 input:nth-of-type(1){
     margin-top:14px;
 } 
.btn{
    width:100%;
    margin:30px auto;
    height:40px;
    border:0;
    background:#42bd56;
    font-size:18px;
    color:white;
    opacity: 0.6;
    
} 
.btn1{
    width:100%;
    margin:30px auto;
    height:40px;
    border:0;
    background:#42bd56;
    font-size:18px;
    font-size:18px;
    color:white;
}
</style>
