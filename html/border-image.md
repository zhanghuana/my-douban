```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>太极图</title>
	<style>
		div {
			width: 200px;
			height: 99px;
			border:1px solid #000;
			border-bottom-width:100px;
			border-radius: 100px;
			position: relative;
			cursor: pointer;
			transition: 12s;
		}
		.yinyang:before{
			content:" ";
			position: absolute;
			left: 0;
			top: 50px;
			width: 20px;
			height: 20px;
			border:40px solid #000;
			border-radius: 50%;
			background:#fff;
		}
		.yinyang:after {
			content: "";
			position: absolute;
			right: 0;
			top: 50px;
			width: 20px;
			height: 20px;
			border:40px solid #fff;
			background-color: #000;
			border-radius: 50%;
		}
		.yinyang:hover {
			transform: rotate(1800deg);
		}
	</style>
</head>
<body>
	<div class="yinyang"></div>
</body>
</html>
```



