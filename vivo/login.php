



<?php
	header("Content-type:text/html;charset=utf-8");
	// 1.接收数据
		$usernumber=$_POST["usernumber"];
	
	// 2.处理
		  //1).建立连接  连接数据库（搭桥）
		  $con=mysql_connect("localhost","root","root");
		  if(!$con)
		  {
			  die("Could not connect:".musql_error());
		  }else{
			//2).选择数据库（目的地）
			  mysql_select_db("vivo",$con);
	  
			//3).执行数据库的SQL语句（增删改查）
			  $sqlstr = "select * from uservivo where usernumber = '$usernumber'";
			  $result=mysql_query($sqlstr,$con);
			  $rows = mysql_num_rows($result);
					
					//4).关闭数据库
				mysql_close($con);
			  }
			  $rows = mysql_num_rows($result);
	// 3.响应
	if($rows == '1') {
		echo "<script>alert('登录成功');location.href='index.html';</script>";
	}else{
		echo "<script>alert('手机号码或验证码错误,请重新登录');location.href='login.html';</script>";
	}
?>