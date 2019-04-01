//菜单栏
$(function(){

    //logo的点击  进入离开事件
    $(".icon-vivo").click(function(){
        location.href="index.html";
    });
    $(".icon-vivo").mouseenter(function(){
        $(this).css({color:"blue"});
    });
    $("nav>a>i.icon-vivo").mouseleave(function(){
        $(this).css({color:"black"});
    });

    //一级菜单的进入,离开事件  进入让其字体颜色改变
    $(".ul1>li>a").mouseenter(function(){
        //字体颜色改变
        $("nav a").css({color:"black"});
        $(this).css({color:"blue"});
        $(".icon-vivo").css({color:"black"});
    });


    //进入一级菜单的li，让容纳二级菜单的盒子高度出现  使用动画

    //进入li的前六个 让二级导航及其相关效果出现
    $(".ul1>li:lt(7)").mouseenter(function(){
        $(".big").css({display:"none"});
        let index=$(this).index();
        $("nav").css({background:"#fefaf9"});
        $("nav a").css({color:"black"});
        $(this).children().css({color:"blue"});
        $("nav>a>i.icon-vivo").css({color:"black"});

        $("#box1").stop().animate({height:"280px"},150,"linear",function(){
            let $ul3=$(".ul3");
            console.log(index);
            $ul3.eq(index).css({
                display:"flex",
                justifyContent: "center",
            }).siblings("ul").css({
                display:"none"
            });
            $ul3.eq(index).children().stop().slideDown(300);
        });
        $(".ul3>li").stop().slideDown(300).siblings().stop().slideUp(10);
    });

    // 进入li的后两个 让二级导航及其相关效果消失
    $(".ul1>li:gt(6)").mouseenter(function(){
        $(".ul3>li").stop().slideUp(300);
        $("#box1").stop().animate({height:0},function(){
            $("nav").css({background:""});
        });
    });
    $(".ul1>li:gt(6)").mouseleave(function(){
        $("#box1").stop().animate({height:0},function(){
            $("nav").css({background:""});
            $("nav>a>i.icon-vivo").css({color:"black"});
        });

    });
    //离开盒子本身让盒子高度为0  ul 滑出
    $("#box1").mouseleave(function(){
        $(".ul3>li").stop().slideUp(300);
        $(this).stop().animate({height:0},function(){
            $("nav a").css({color:"black"});
            $("nav>a>i.icon-vivo").css({color:"black"});
            $(".big").css({display:"black"});
            $("nav").css({background:""});
        });
    });
    // 离开nav让盒子高度为0 ul 滑出
    $("#box").mouseleave(function(){
        $(".ul3>li").stop().slideUp(300);

        $("#box1").stop().animate({height:0},function(){
            $("nav a").css({color:"black"});
            $("nav>a>i.icon-vivo").css({color:"black"});
            $("nav").css({background:""});
            $(".big").css({display:"black"});
        });
    });
    $(".ul3>li").click(function(){
        location.href="product.html";
    });

    //
    $("#buy").click(function(){
        location.href="product.html";
    });

    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop()>=97){
            $(".big").css({position:"sticky",background:"white"});
        }else{
            $(".big").css({position:"",background:""});
        }
        if($(window).scrollTop()>=600){
            $(".two>img").eq(0).animate({top:"56rem"},1500);
            $(".two>img").eq(1).animate({top:"67rem"},1500);
        }
        if($(window).scrollTop()>=1200){
            $(".four>img").eq(0).animate({top:"109rem"},1500);

        }
        if($(window).scrollTop()>=2100){
            $(".five>img").eq(0).animate({margin:"0 auto"},1500);
        }
        //margin:1.5rem 0 3rem 7rem;
        if($(window).scrollTop()>=2900){
            $(".six>img").eq(0).animate({margin:"0rem 0 3rem 7rem"},1500);
        }
        if($(window).scrollTop()>=3800){
            $(".seven>img").eq(0).animate({marginTop:"5rem"},1500);
        }
        if($(window).scrollTop()>=7800){
            $(".ten-two>img").eq(0).animate({marginTop:"-22rem",marginLeft:"37rem"},1500);
            $(".ten-two>img").eq(1).animate({marginTop:"-36rem",marginLeft:"44rem"},1500);
        }

    });

    //当鼠标悬浮到官网购买上面
    $("#buy1>span").mouseenter(function(){
       $(this).css({background:"deepskyblue",color:"white"}).siblings().css({background:" ",color:"deepskyblue"});
    });



});


//点击banner进入此商品详情页
$(function(){
   $(".banner").click(function(){
       location.href="detail.html";
   });
   $("#buy1>span").click(function(){
       location.href="detail.html";
   });
})