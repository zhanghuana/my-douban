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

    // 详情信息部分的掩藏显示
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		if($(window).scrollTop()>145&&$(window).scrollTop()<1800){
			$(".left")[0].style.poaition="fixed";
			$(".left")[0].style.top=$(window).scrollTop()+"px";
		}
		if($(window).scrollTop()<145){
			$(".left")[0].style.poaition="absolute";
			$(".left")[0].style.top=7+"rem";
		}
	});
	
	
	// 手机选项卡
	$(".leftPages>img").mouseenter(function(){
		
		let index=$(this).index();
		$("#small-box>img").eq(index-1).css({display:"block"}).siblings("img").css({display:"none"});
		// $("#big-box").css({display:"block",background:"url(images/d-"+index+".png)",backgroundSize:"1920px 1920px "});
		
	})
	//鼠标进入，离开需要放大的图片
	$("#small-box>img").mouseenter(function(){
		console.log($(this).index());
		let index=$(this).index();
		$("#big-box").css({display:"block",background:"url(images/d-"+(index+1)+".png)",backgroundSize:"1920px 1920px "});
	})
	$("#small-box>img").mouseleave(function(){
		$("#big-box").css({display:"none"});
	})
	

	$(".box4").mouseenter(function(){
		$(this).css({color:"black"});
		$(this).siblings(".box4").css({color:"#777777"});
	});
	$(".box4").click(function(){
		$(this).siblings(".box4").css({color:"#777777",border:"0.08rem solid #dddddd"});
		$(this).css({color:"black",border:"0.08rem solid black"});
		
		$(".h3-11>span").children().eq(0).children().eq(0).html($(this).html())
		// console.log($(".h3-11").children().eq(1).html());
	});
	$(".box4").eq(0).click(function(){
		$(".box3>div>h3>span").html("1998");
		$(".box3>div>del").html("¥2298");
		$(".h3-11").children().eq(0).children().eq(0).html($(".box3>div>h3>span").html());
	});
	$(".box4").eq(1).click(function(){
		$(".box3>div>h3>span").html("1798");
		$(".box3>div>del").html("¥1998");
		$(".h3-11").children().eq(0).children().eq(0).html($(".box3>div>h3>span").html());
	});
	$(".box4").eq(2).click(function(){
		$(".box3>div>h3>span").html("1898");
		$(".box3>div>del").html("¥2098");
		$(".h3-11").children().children().eq(0).eq(0).html($(".box3>div>h3>span").html());
	});
	$(".box5").mouseenter(function(){
		$(this).css({color:"black"});
		$(this).siblings(".box5").css({color:"#777777"});
	});
	$(".box5").click(function(){
		$(this).siblings(".box5").css({color:"#777777",border:"0.08rem solid #dddddd"});
		$(this).css({color:"black",border:"0.08rem solid black"});
		$(".h3-11>span").children().eq(3).html($(this).html())
		// console.log($(".h3-11").children().eq(2).html());
	});

	$(".box6").mouseenter(function(){
		$(this).css({color:"black"});
		$(this).siblings(".box6").css({color:"#777777"});
	});
	$(".box6").click(function(){
		$(this).siblings(".box6").css({color:"#777777",border:"0.08rem solid #dddddd"});
		$(this).css({color:"black",border:"0.08rem solid black"});
		$(".h3-11").children().eq(3).html($(this).children("span").eq(0).html())
		// console.log($(".h3-11").children().eq(3).html());
	});

	$(".box7").click(function(){
		$(this).css({color:"black",border:"0.08rem solid black"});
		$(this).siblings(".box7").css({color:"#777777",border:"0.08rem solid #dddddd"});
		
		$(this).children("span").eq(1).css({background:"black"});
		$(this).siblings(".box7").children("span").css({background:"white"});
	})
	$(".box7").mouseenter(function(){
		$(this).css({color:"black"});
		$(this).siblings(".box7").css({color:"#777777"});
	});
	
	let count=0;
	$("p>span#true1").click(function(){
		if(count%2==0){
			$("p>span#true1>#true2").css({color:"white"});
		}else{
			$("p>span#true1>#true2").css({color:"black"});
		}
		count++;
	});

	$(".box8").mouseover(function(){
		$(this).css({color:"black",border:"0.08rem solid black"});
	});
	$(".box8").click(function(){
		$(this).css({color:"black",border:"0.08rem solid black"});
		$(this).children("span").eq(0).css({background:"black"});
	});
	$(".box9").eq(0).click(function(){
		let num1=$(this).next().html();
		
		if(num1<=1){
			num1==1;
		}else{
			num1--;
			
		}
		$(".h3-11").children().eq(4).html(num1);
		$(this).next().html(num1);
	});
	$(".box9").eq(2).click(function(){
		let num2=$(this).prev().html();
		
		if(num2>=5){
			num2=5;
		}else{
			num2++;
			
		}
		$(".h3-11").children().eq(4).html(num2);
		$(this).prev().html(num2);
	});
	
	$(".box10").mouseenter(function(){
		$(this).css({color:"black"});
		$(this).siblings(".box10").css({color:"#777777"});
	});
	$(".box10").click(function(){
		$(this).siblings(".box10").css({color:"#777777",border:"0.08rem solid #dddddd"});
		$(this).css({color:"black",border:"0.08rem solid black"});
		$(this).children("span").eq(0).css({background:"black"});
		$(this).siblings().children("span").css({background:"white"});
	});
   
	


});

   

//放大镜效果
window.onload=function(){
	// 放大镜效果
		class Magnifier{
			constructor(newSmallBox,newBigBox,newMask){
				this.smallBox = newSmallBox;
				this.bigbox = newBigBox;
				this.mask = newMask;
			}
			onmouseover(){
				let that = this;
				this.smallBox.onmouseover = function(){
					that.mask.style.display="block";
					that.bigbox.style.display="block";
				}
			}
			onmouseout(){
				let that = this;
				this.smallBox.onmouseout = function(){
					that.mask.style.display="none";
					that.bigbox.style.display="none";
				}
			}
			onmousemove(){
				let that=this;
				this.smallBox.onmousemove = function(evt){
					let e = evt ||event;
					let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
					
					let left = e.clientX - this.offsetLeft - that.mask.offsetWidth/2;//e.clientX - this.offsetLeft后鼠标指针在mask的左上角，因为mask为绝对定位是相对于父元素smal-lbox而言，所以需要减掉smal-lbox的left
					let top = e.clientY - this.offsetTop - that.mask.offsetHeight/2;
					//mask移动的边界限制
					if(left<0){
						that.mask.style.left = 0 + "px";
						// left = 0;
					}
					let maxX = this.offsetWidth - that.mask.offsetWidth;
					if(left>maxX){
						that.mask.style.left = maxX + "px";
						// left = maxX;
					}
					if(top<0){
						that.mask.style.top = 0 + "px";
						// top = 0;
					}
					let maxY = this.offsetHeight - that.mask.offsetHeight;
					if(top>maxY){
						that.mask.style.top = maxY + "px";
						// top = maxY;
					}
	
					that.mask.style.left = left+ "px"; //mask距离smal-lbox的left
					if(scrollTop<145){
						that.mask.style.top = (top-150)+ "px";
					}else{
						that.mask.style.top = (top-50)+ "px";
					}
					//mask距离smal-lbox的top
	
					//放大的部分与mask的移动同步
					let x = (that.bigbox.offsetWidth * that.mask.offsetLeft)/that.mask.offsetWidth;   
					//mask 和 bigbox 等比例关系
					let y = (that.bigbox.offsetHeight * that.mask.offsetTop)/that.mask.offsetHeight;
	
					that.bigbox.style.backgroundPositionX = -x + "px";//移动bigbox的背景图，故为负
					that.bigbox.style.backgroundPositionY = -y + "px";
				}
			}
		//事件绑定
			eventBind(){
					this.onmouseover();
					this.onmouseout();
					this.onmousemove();
				}
		}
		
		let oSmallBox = document.getElementById("small-box");
		let oBiglBox = document.getElementById("big-box");
		let oMask = document.getElementById("mask");
		let fc = new Magnifier( oSmallBox,oBiglBox,oMask);
		fc.eventBind();
		
		  //保存数据
		   function saveData(){
		       let arr=[],
		           shopX=document.getElementsByClassName("shopX");
		       // let id=document.getElementsByClassName("id1")[0];
				   console.log(shopX)
		       for(let i=0;i<shopX.length;i++){
				   console.log(shopX[i]);
		           var goods={
		           		name:shopX[i].children[1].innerHTML+shopX[i].children[2].innerText,
						price:shopX[i].children[0].children[0].innerHTML,
						num:shopX[i].children[4].innerHTML,
						xiaoji:shopX[i].children[0].children[0].innerHTML,
		           }
		           arr.push(goods);
		       }
		       let str=JSON.stringify(arr);
					// console.log(str);
		       localStorage.setItem("shopCar",str);
		   }

		
		//点击加入购物车
		let buy=document.getElementsByClassName("buy")[0];
		buy.onclick=function(){
			saveData();
			location.href="shop.html";
		}
}