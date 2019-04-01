$(function(){
	$(".areaList2").click(function(){
		$(".areaList").css({display:"block"});
	});
	$(".areaList>li").mouseenter(function(){
		$(this).css({background:"lightgray",opacity:"0.5"}).siblings().css({background:"white",opacity:"1"})
	});
	$(".areaList").mouseleave(function(){
		$(this).css({display:"none"});
	});
	
	 //点击提示下面的li,将内容赋予搜索框
	$(".areaList>li").click(function(){
		
		$(".areaList1")[0].innerHTML=$(this).children().eq(1).html();
		$(".areaList").css({display:"none"});
		
	});
	
	

	
});


//判断是否输入了有效的手机号 ，以及是够勾选了按钮 一系列操作
$(function(){
	
	
	//点击进行下一步操作的判断
	let count=0;
	$("#true1").click(function(){
		$("#true2").toggle();
		count++;
	});
	
	$("#btn1").click(function(){
		let reg1=/^1[13456789]\d{9}$/;
		if(reg1.test($("#txt1").val())==true){
			if(count%2==1){
				$(".one").css({display:"none"});
				$(".two").css({display:"black"});
			}else{
				$(".sp2").css({display:"none"});
				$("#true1").css({border:"0.04rem solid red"});
			}
		}else{
			$("#true1").css({border:"0.03rem solid black"});
			$(".sp2").css({display:"block"});
		}
		
		
		$(".usernumber")[0].value=$(".num").val();
		
	})
	
	
	//点击获取验证码获取六位随机验证码
	
	$(".sp1").click(function(){
		
		function code(){
			let str="";
			for(let i=0;i<6;i++){
				str+=Math.round(Math.random()*10);
			}
			return str;
		}
		

		function timer(){
			let timer=60;
			setInterval(function(){
				timer--;
				if(timer==-1){
					timer=60;
					code();
				}
				
			},1000);
		}
		
		$(".num1")[0].value=code();
		$(".sp1")[0].innerHTML="重新获取"
		$(".sp1").css({color:"#dedfe0"});
		// $("#time").css({display:"block"});
		
		
		
		
	})
	
	
	//判断密码输入格式是否正确
	
	
	function hasNum(str){
			for(i=0;i<str.length;i++){
				let code=str.charCodeAt(i);
				if(code>=48&&code<=57){
					return 1;
				}
			}
			return 0;
		}
		function hasLetter(str){
			for(i=0;i<str.length;i++){
				let code=str.charCodeAt(i);
				if((code>=65&&code<=91)||(code>=97&&code<=122)){
					return 1;
				}
			}
			return 0;
		}
		
		
	// 密码格式正确的显示
	$(".num2")[0].oninput=function(){
		let num2=$(".num2").val();
		console.log(num2);
		if((hasNum(num2)+hasLetter(num2)==2)&&(num2.length>=8&&num2.length<=16)){
			$("#point").css({color:"#999999"});
		}else{
			$("#point").css({color:"red"});
		}
	};
	
	
	
	

});


	
	



$(function(){
	
	
})