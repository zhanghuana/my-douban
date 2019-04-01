window.onload=function(){
		//获取上次登录数据
		let str1=document.cookie;
		let arr=str1.split("; ");
		for(let i=0;i<arr.length;i++){
			if(arr[i].startsWith("usernumber=")){
				alert(arr[i].split("=")[1]);
				break;
			}
		}


			
		var sp1=$(".sp1")[0];
		// 获取验证码
		sp1.onclick=function(){
			console.log(8)
			this.innerHTML="重新获取";
			this.style.color="#dedfe0";
			var yzm=getyzm();
			$(".num1")[0].value=yzm;
		}
		//点击两周免登录
		let count=0;
		$("#true1").onclick=function(){
			count++;
			if(count%2==0){
				$("#true2").style.display="none";
			}else{
				$("#true2").style.display="block";
				// 自动登录功能 保存数据
				let d=new Date();
				d.setDate(d.getDate()+14);
				document.cookie='usernumber='+$("#txt1").value;'expires='+d.toGMTString();
			}
		
		};
		//判断用户名是否存在
		$("txt1").onblur=function(){
			usernumber=$(".usernumber")[0];
			var val1=this.value;
			var reg1= /^1\d{10}$/;
			if(reg1.test(val1)==true){
				usernumber.value=val1;
				console.log(val1);
			}else{
				sp2.style.display="block";
			}
			
		}
		
		
		// 获取验证码  将验证码显示在console.log中
		function getyzm(){
			var str='';
			for(var i=0;i<6;i++){
				str+=parseInt(Math.random()*10);
			}
			console.log(str);
			return str;
		}

		
	}

	
