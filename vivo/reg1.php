



<?php
	header("Content-type:text/html;charset=utf-8");
	// 1.接收数据
		$usernumber=$_POST["usernumber"];
		$useryanzheng=$_POST["useryanzheng"];
		$userpass=$_POST["userpass"];
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
			  if($rows !== 0) {
			  		echo"<script>alert('注册失败，因为用户名已存在');location.href='index.html';</script>";
					//$(".sp4").css({color:"red",display:"block"});
			  }else {
			  	 $resect="insert into uservivo (usernumber,useryanzheng,userpass)
			  	values('$usernumber','$useryanzheng','$userpass')"; //给表里插数据
			  	$result1 = mysql_query($resect,$con);
			  	if($result1 == 1) {
			  		echo "<script>alert('注册成功');location.href='index.html';</script>";
			  	}else{
			  		echo "<script>alert('注册失败');history.back();script>";
			  	}
			  }
			  
			//4).关闭数据库
			  mysql_close($con);
		  }

	// 3.响应
	
?>