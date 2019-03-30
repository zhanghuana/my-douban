# 心

*今天分享一个好玩的小案例    可以分享给身边朋友家人 *

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		*{
			padding: 0;
			margin: 0;
		}
		body{
			height:100%;
			background:linear-gradient(lightblue 0%, lightyellow 100%);
		}
		.xin{
			width: 400px;
			height: 400px;
			margin:100px auto;
			position:relative;
		}
		.heart{
			z-index:2;
			background-color:lightpink;
			width: 200px;
			height: 200px;
			animation:xintiao 1s ease 0s infinite normal;	
		}
		.center{
			background-color:lightpink;
			position:absolute;
			top:76px;
			left:75px;
			border-radius: 10px;
		}
		.left{
			z-index:3;
		}
		.side{
			position:absolute;
			border-radius:50%;
		}
		.right{
			left:150px;
		}
		@keyframes xintiao{
			0%{
				transform:scale(1) rotate(225deg);
				box-shadow:0 0 50px lightpink;
			}
		
			50%{
				transform:scale(1.2) rotate(225deg);
				box-shadow:0 0 70px lightpink ;
			}
			100%{
				transform:scale(1) rotate(225deg);
				box-shadow:0 0 50px lightpink ;
			}
		}
	</style>
</head>
<body>
	<div class="xin">
		<div class="heart side left"></div>
		<div class="heart  center"></div>
		<div class="heart side right"></div>
	</div>
</body>
</html>
```


