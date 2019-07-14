var express=require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var app=express();
var path=require("path");
var session=require("express-session");
var jwt=require("jsonwebtoken");
var crypto=require("crypto");
var uE=bodyParser.urlencoded({extended:false});

// app.use(
//     express.static(path.join(_dirname,"/static"))
// )
app.use(session({
    secret: 'aksjhckzjjgnm',//设置签名密钥 内容可以任意填写
    cookie: {maxAge: 60*1000*60*24*7 },//设置cookie的过期时间 例：80s后session和相应的cookie失效过期
    // 下面的两个固定写法
    resave: true,//强制保存  如果session没有被修改也要重新保存
    saveUninitialized: false//如果原先没有session那么就设置 否则不设置
}))


app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
});

var Reguser=mongoose.model("requser",{
    uphone:String,
    uname:String,
    upwd:String
})

// 注册
app.post("/reg1",uE,function(req,res){
    var postphone=req.body.uphone;
    var postname=req.body.uname;
    var postpwd=req.body.upwd;
    console.log(`${postphone}-----${postname}-----${postpwd}`);
    var savepwd=crypto.createHash("md5").update(postpwd).digest("hex");//密码加密
    mongoose.connect("mongodb://localhost:27017/user1",{useNewUrlParser:true},function(err){
        if(err){
            console.log("连接失败");
        }else{
            console.log("连接成功");
            var savereg=new Reguser({
                uphone:postphone,
                uname:postname,
                upwd:savepwd
            })
            savereg.save().then((ok)=>{
                console.log({status:200,content:1});
                res.send({status:200,content:1});
            },(err)=>{
                console.log({status:200,content:0});
                res.send({status:200,content:0});
            })

        };


    })

    // res.send("okokokok")
});

 // 登录
app.post("/login",uE,function(req,res){
    var postphone=req.body.uphone;
    var postpwd=req.body.upwd;
    console.log(`${postphone}----${postpwd}`);
    var savepwd=crypto.createHash("md5").update(postpwd).digest("hex");//密码加密
    mongoose.connect("mongodb://localhost:27017/user1",{useNewUrlParser:true},function(err){
        if(err){
            console.log("连接失败");
        }else{
            console.log("连接成功"); 
            Reguser.find({uphone:postphone,upwd:savepwd}).then((ok)=>{
                if(ok.length>0){
                    console.log(111111)
                    var data={
                        loginok:true
                    }
                    var mi="nasdfghjh";
                    var intoken=jwt.sign(data,mi)

                    res.send({status:200,content:2,token:intoken});
                    console.log({status:200,content:2})
                    
                }else{
                    console.log({status:200,content:3})
                    res.send({status:200,content:3})
                }
            })
        };


    })
})


// 判断其是否登陆过
app.post("/reglist",uE,function(req,res){
    var postphone=req.body.uphone;
    console.log(postphone);
    // var savepwd=crypto.createHash("md5").update(postpwd).digest("hex");//密码加密
    mongoose.connect("mongodb://localhost:27017/user1",{useNewUrlParser:true},function(err){
        if(err){
            console.log("连接失败");
        }else{
            console.log("连接成功"); 
            Reguser.find({uphone:postphone}).then((ok)=>{
                if(ok.length>0){
                    console.log(111111)
                    // var data={
                    //     loginok:true+uphone
                    // }
                    // var mi="nasdfghjh";
                    // var intoken=jwt.sign(data,mi)

                    // res.send({status:200,content:2,token:intoken});
                    res.send({status:200,content:6});
                    console.log({status:200,content:6})
                }else{
                    console.log({status:200,content:7})
                    res.send({status:200,content:7})
                }
            })
        };


    })
})
// 点击短信验证码登陆的时候 

// app.get("/reglist",function(req,res){
//         var outtoken=req.query.token;
//         var mi="nasdfghjh";
//      jwt.verify(outtoken,mi,function(req,data){
//         console.log(data.loginok);
//         if(data.loginok==true){
//             res.send({status:200,content:4});
//             console.log({status:200,content:4})
//         }else{
//             console.log({status:200,content:5})
//             res.send({status:200,content:5});
//         }
//     })
    
// })





app.listen(9000)