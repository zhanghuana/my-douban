
//菜单栏
$(function(){

    //logo的点击  进入离开事件
    $(".icon-vivo").click(function(){
        window.location.reload();
    });
    $(".icon-vivo").mouseenter(function(){
        $(this).css({color:"blue"});
    });
    $("nav>a>i.icon-vivo").mouseleave(function(){
        $(this).css({color:"white"});
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
            $("nav>a>i.icon-vivo").css({color:"white"});
        });

    });
    //离开盒子本身让盒子高度为0  ul 滑出
    $("#box1").mouseleave(function(){
        $(".ul3>li").stop().slideUp(300);
        $(this).stop().animate({height:0},function(){
            $("nav a").css({color:"white"});
            $("nav>a>i.icon-vivo").css({color:"white"});

            $("nav").css({background:""});
        });
    });
    // 离开nav让盒子高度为0 ul 滑出
    $("#box").mouseleave(function(){
        $(".ul3>li").stop().slideUp(300);
        $("#box1").stop().animate({height:0},function(){
            $("nav a").css({color:"white"});
            $("nav>a>i.icon-vivo").css({color:"white"});
            $("nav").css({background:""});
        });
    });
    $(".ul3>li").click(function(){
        location.href="product.html";
    });

    $("#buy").click(function(){
        location.href="product.html";
    });

    //点击轮播图
    // $("#box").click(function(){
    //     // 	location.href="product.html";
    //     // });


});


//搜索框
$(function(){

    $(".icon-fangdajing").click(function(){


    });
    $(".icon-fangdajing").click(function(){
        $(".search").eq(0).fadeIn(800);
        $(".sch").eq(0).slideDown(800);
        $("nav").eq(0).hide();
    });
    $(".close").click(function(){
        $(".sch").eq(0).slideUp(600);
        $(".search").eq(0).fadeOut();
        $("nav").eq(0).show();
    });

    // //点击提示下面的li,将内容赋予搜索框
    // $(".sl").click(function(){
    // 	console.log();
    // 	$("#search").val($(this).html())
    // });

});


//main部分的手风琴效果
$(function(){
    $(".main>div>div").mouseenter(function(){
        $(this).stop().animate({width:"435px"}).siblings().stop().animate({width:"285px"})

    });
    $(".main").mouseleave(function(){
        $(".main>div>div").stop().animate({width:"316px"});
    });

})



//轮播图  搜索框
window.onload=function(){

        //轮播图
        class SlideShow{
            constructor(box,li,spans){
                this.box=box;
                this.li=li;
                this.span=spans;

                this.index=0;
                // this.li[this.index].style.background="lightyellow";
                // this.li[this.index].style.opacity=0.5;
                // this.span[this.index].style.opacity=1;
                this.box.style.background="url(images/banner"+(this.index+1)+".jpg)no-repeat";
                this.box.style.backgroundSize="100% 100%";
            }
            //改变背景图片
            changeImg(){
                this.box.style.background="url(images/banner"+(this.index+1)+".jpg)no-repeat";
                this.box.style.backgroundSize="100% 100%";
            }
            //改变li(豆豆)的颜色
            changeLiColor(){
                for(let i=0;i<this.li.length;i++){
                    if(i==this.index){
                        this.li[i].style.background="white";
                        this.li[i].style.opacity=0.5;
                    }else{
                        this.li[i].style.background="lightyellow";
                    }
                }
            }
            nextImg(){
                this.index++;
                if(this.index>=this.li.length){
                    this.index=0;
                }

                this.changeImg();
                this.changeLiColor();
            }

            //点击豆豆
            clickLi(){
                let that=this;
                for(let i=0;i<this.li.length;i++){
                    this.li[i].onclick=function(){
                        that.index=i;
                        that.changeImg();
                        that.changeLiColor();
                    }
                }
            }
            //自动播放
            autoplay(){
                let that=this;
                let index=0;
                let w=0;
                setInterval(function(){
                    w++;
                    if(w==48){
                        w=0;
                        that.nextImg();
                        $(".sp")[index].style.width="0px";
                        index++;
                        if(index==1||index==2){
                            $(".s1").css({marginLeft:"720px"});
                        }
                        if(index==0||index==3){
                            $(".s1").css({marginLeft:"208px"});
                        }

                        if(index==4){
                            index=0;
                        }
                    }
                    $(".sp")[index].style.width=w+"px";
                },70);
            }





        }

        let box=document.getElementById("box");
        let li=document.getElementsByClassName("li4");
        let spans=document.getElementsByClassName("sp");
        let a=new SlideShow(box,li,spans);

        a.clickLi();
        a.autoplay();
        //轮播图部分结束


        //搜索框


        function showData(d){
            console.log(d);
            let arr = d.s;
            let htmlStr='';
            for(let i in arr){
                htmlStr+= `<li>${arr[i]}</li>`;
            }
            $(".sch")[0].innerHTML = htmlStr;
        }

        $("#search")[0].oninput = function(){
            $(".sch")[0].innerHTML = "";
            let scriptDom = document.createElement("script");
            scriptDom.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + this.value + '&json=1&p=3&sid=1438_24869_21080_18560_17001_25177_22160&req=2&bs=1%2B&pbs=1%2B&csor=2&pwd=1%3D&cb=showData&_=1511334117083';
            document.body.appendChild(scriptDom);
            scriptDom.remove();
            // showData(d);

        }



        let sls=$(".sl");
        for(let i=0;i<sls.length;i++){
            sls[i].onclick = function(event){
                let evt = event || window.event;
                if(evt.target.tagName.toLowerCase()=='li'){
                    $("#search")[0].value = evt.target.innerHTML;

                    // this.style.display = 'none';
                    // this.innerHTML = '';
                }
            }
        }

    }
