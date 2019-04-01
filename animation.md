# 2D 3D 动画整理

## 过渡效果

###  transition 过渡效果

**兼容性**

`ie10+` 、`谷歌`、`火狐`、`欧朋`、`safari`.

**相关属性**

transition:简写属性 设置在元素本身身上

1.transition-propercity:规定参与过度的具体属性   属性值：none   all  具体属性值（eg：width background）

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p {
            width: 100px;
            height: 100px;
            background-color: lightseagreen;
            transition-property: all;
            transition-duration: 1s;
        }
        p:hover {
            width: 3000px;
            height: 4000px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <p>

    </p>
</body>
~~~



2.transition-duration：过渡时间 

3.transition-time-function：速度曲线

​	属性值：linear：匀速

​			ease：慢-快-慢

​			ease-in：慢开始

​			ease-out：慢结束

​			ease-in-out：满开始  慢结束

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p {
            width: 100px;
            height: 100px;
            background-color: lightseagreen;
            transition-property: all;
            transition-duration: 10s;
            /*transition-timing-function: cubic-bezier(.17,.67,.87,.11);*/
            /*transition-timing-function: linear;*/
            /*transition-timing-function: ease;*/
            transition-timing-function: ease-in;
        }
        p:hover {
            width: 300px;
            height: 400px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <p>

    </p>
</body>
</html>
~~~



4. transition-delay：延迟   s/ms

5. ~~~html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <style>
           p {
               width: 100px;
               height: 100px;
               background-color: lightpink;
               transition:1s width 2s,2s height ,3s background-color;
           }
           p:hover {
               width: 300px;
               height: 300px;
               background-color: red;
           }
       </style>
   </head>
   <body>
       <p>
   
       </p>
   </body>
   </html>
   ~~~

   5.transition：property   ducation   time-function   delay

   过渡示例:

   **手风琴**

   ~~~html\
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>手风琴</title>
       <style>
           body {
               margin:0;
               padding:0;
               background-color: #f7f7f7;
           }
           h3 {
               margin:0;
               padding:0;
           }
           .box {
               width: 500px;
               margin:0 auto;
           }
   
           .list h3 {
               height: 35px;
               line-height:35px;
               padding-left: 30px;
               border-bottom:2px solid #690;
               font-size:14px;
               color: #fff;
               background-color: #369;
               transition: all 0.3s ease 0s;
           }
           .list .pictxt {
               height: 0;
               background-color: lightblue;
               transition: all 0.3s ease 0s;
           }
           .list:hover  h3 {
               background-color: #036;
           }
           .list:hover .pictxt{
               height: 150px;
           }
       </style>
   </head>
   <body>
       <div class="box">
           <div class="list">
               <h3>今日新闻</h3>
               <div class="pictxt"></div>
           </div>
           <div class="list">
               <h3>昨日新闻</h3>
               <div class="pictxt"></div>
           </div>
           <div class="list">
               <h3>前日新闻</h3>
               <div class="pictxt"></div>
           </div>
           <div class="list">
               <h3>去年新闻</h3>
               <div class="pictxt"></div>
           </div>
       </div>
   </body>
   </html>
   ~~~

   

## 2D

### transform

#### 属性值

1.translate：		位移 translate(X ,Y)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .box {
            width: 600px;
            height: 300px;
            border: 2px solid orange;
            margin: 0 auto;
        }
        .box .d1 {
            width: 100px;
            height: 100px;
            background-color: lightseagreen;
            margin:0 auto;
            transition: 2s;
        }
        .box:hover .d1 {
            transform: translate(100px,100px);
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="d1"></div>
    </div>
</body>
</html>
~~~



2.scale：缩放       	scale(x方向放大倍数，y方向放大倍数)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>scale</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: lightpink;
            transition: 2s;
        }
        div:hover {
            transform: scale(0.5,0.5);
        }
    </style>
</head>
<body>
    <div>

    </div>
</body>
</html>
~~~



3.rotate：旋转     	rotate（30deg） 

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>rotate</title>
    <style>
        .d1 {
            width: 100px;
            height: 100px;
            background-color: deepskyblue;
            border-left: 2px solid lawngreen;
            border-right: 2px solid gold;
            border-top: 2px solid palevioletred;
            border-bottom: 2px solid royalblue;
            transition: 5s;
            border-radius: 50%;
        }
        .d1:hover {
            transform: rotate(1080deg);
        }
    </style>
</head>
<body>
    <div class="d1">指向谁谁乌龟-></div>
</body>
</html>
~~~



4.skew：倾斜	skew( x-angle, y-angle)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>skew</title>
    <style>
        .playhappy {
            width: 100px;
            height: 100px;
            background-color: aquamarine;
            margin:100px auto;
            /*transition: 2s;*/

        }
        .playhappy:hover {
            transform: skew(0deg,10deg);
        }
    </style>
</head>
<body>
    <div class="playhappy"></div>
</body>
</html>
~~~



### transiform-origin：改变元素基点

#### 语法

X：left/center/right/lenght/%

Y：top/center/bottom/lengh/%

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>盘它</title>
    <style>
        img {
            width: 300px;
            height: 300px;
        }
        .anim_image {
            transition: all 1s ease-in-out;
            cursor: pointer;
        }
        .anim_image_top {
            position: absolute;
            transform: scale(0,0);
        }
        .anim_box:hover .anim_image_top {
            transform: scale(1,1);
            transform-origin: top right;
        }
        .anim_box:hover .anim_image_bottom {
            transform: scale(0,0);
            transform-origin: bottom left;
        }
    </style>
</head>
<body>
    <div class="anim_box">
        <img src="./images/photo3.jpg" class="anim_image anim_image_top">
        <img src="./images/photo4.jpg" class="anim_image anim_image_bottom">
    </div>
</body>
</html>
~~~



## 3	D

### 相关属性

1.transform:2d/3d转换

~~~html
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .stage {
            width: 300px;
            height: 300px;
            float: left;
            margin:15px;
            position: relative;
            background: url("./img/bg.jpg") repeat center center;
            perspective: 1200px;
        }

        .container {
            position: absolute;
            top:20%;
            left:50%;
            transform-style: preserve-3d;

        }

        .container img {
            position: absolute;
            margin-left:-70px;
            margin-right:-100px;
        }

        .container img:nth-child(1) {
            z-index:1;
            opacity: .6;
        }

        .s1 img:nth-child(2) {
            z-index:2;
            transform:translate3d(30px,30px,200px);
        }


        .s2 img:nth-child(2) {
            z-index: 2;
            transform: translate3d(30px,30px,-200px);
        }



    </style>
</head>
<body>
<div class="stage s1">
    <div class="container">
        <img src="./img/k2.png" alt="" width="70" height="100">
        <img src="./img/k2.png" alt="" width="70" height="100">
    </div>
</div>

<div class="stage s2">
    <div class="container">
        <img src="./img/k2.png" alt="" width="70" height="100">
        <img src="./img/k2.png" alt="" width="70" height="100">
    </div>
</div>


</body>
</html>
~~~



2.transform-orign:更改元素基点

3.transform-style：flat/preserve-3d（开启3D像素） 很重要

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 600px;
            height: 400px;
            border: 2px solid lightcoral;
            margin: 200px auto;
            background-color: lightblue;
            /*如果没有开启3d空间，那么效果就只是一个平面*/
            transform-style: preserve-3d;
            perspective: 400px;
            transition: 2s;
        }

        section div {
            width: 100px;
            height: 100px;
            background-color: lightgreen;
            transition: 2s;
        }
        section:hover {
            transform:rotateY(85deg);
        }
        section:hover div {
            transform: translateZ(100px);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
~~~



4.prespective：景深 一般设在900-1200px 用在父元素身上

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 400px;
            height: 400px;
            border: 1px solid red;
            margin: 100px auto;
            /*一定要设置在父元素的身上*/
            perspective: 300px;
        }
        div {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            transition: 1s;
        }

        section:hover div {
            transform: rotateX(45deg);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
~~~



5.prespective-origin：景深基点

6.background-visibility：背面隐藏

7.3d缩放

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 400px;
            height: 400px;
            border: 2px solid lightseagreen;
            perspective: 300px;
            transform-style: preserve-3d;
        }
        div {
            width: 100px;
            height: 100px;
            background-color: lime;
            transition: 8s;
        }
        section:hover div {
            transform:rotateX(720deg) scale3d(1.2,2.1,3);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
~~~



tip：scaleZ或者   scale3d不能单独设置  要和其他属性配合使用

### 动画	

animation

#### 相关属性

1.animation-name：调整关键帧

@keyfamres  关键帧名字{

0%{	}     30%{}      50%{}    100%{}

2.animation-duration：设置完成时间

3.animation-time-function：动画速度曲线

4.animation-iteration-count：重复播放次数   normal   infinite：无限次播放

5.animation-dirction：是否反向播放动画

6.animation-play-state：暂停运行 paused ：暂停   running：运行

7.animation-fill-state：规定动画结束之后  动画效果是否可见











