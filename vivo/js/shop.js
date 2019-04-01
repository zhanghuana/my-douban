
//点击立即添加
function createUl(obj,index){
    // console.log(index);
    var sp1=$(".sp1");//立即购买
    var boxx=$("#boxx")//
    var h3s=$(".h3");
    var my=$(".my");
    var shop=$(".shop")[0];

    $("#shopcar").style.display="block";

    console.log(spanMoney)
    var str=boxx.innerHTML;
    str+=`
					<ul class="ulcar2">
						<li><span class="option">✔</span></li>
						<li class="licar"><img src="images/c${index+1}.png" alt="">${h3s[index].innerHTML}</li>
						<li class="licar">${my[index].innerHTML}</li>
						<li class="licar"><input class="redcls" type="button" value="-" />
							<span id="spanThree" >1</span>
							<input class="addcls" type="button" value="+" /></li>
						<li class="licar">${my[index].innerHTML}</li>
						<li class="licar"><input type="button" value="删除" class="del"></li>
					</ul>
				`;
    boxx.innerHTML = str;
    // 首先计算合计
    var spanMoney=parseInt($("#spanTotalMoney").innerHTML);
    spanMoney=spanMoney+parseInt(my[index].innerHTML);
    $("#spanTotalMoney").innerHTML=spanMoney;

    //保存数据

    saveDate();

}

//点击加号
function add(obj){
    // 一：
    // 获取span中的数字
    let num=parseInt(obj.previousElementSibling.innerHTML);
    console.log(num);
    // 加加
    num++;
    // 赋给span
    obj.previousElementSibling.innerHTML=num;
    // 二、改变小计
    let price=parseFloat(obj.parentNode.previousElementSibling.innerHTML);

    let xiaoji=price*num;
    // console.log(obj.parentNode.nextElementSibling.innerHTML);
    obj.parentNode.nextElementSibling.innerHTML=xiaoji;

    // 改变合计
    let totalMoney=parseInt($("#spanTotalMoney").innerHTML);
    totalMoney=totalMoney+price;
    $("#spanTotalMoney").innerHTML=totalMoney;
}

//	点击减号
function del(obj){
    // 一：
    // 获取span中的数字
    let num=parseInt(obj.nextElementSibling.innerHTML);
    // 减减
    num--;
    if(num<0){
        return;
    }
    // 赋给span
    obj.nextElementSibling.innerHTML=num;
    // 二、改变小计
    let price=parseFloat(obj.parentNode.previousElementSibling.innerHTML);
    let xiaoji=price*num;
    obj.parentNode.nextElementSibling.innerHTML=xiaoji;

    // 改变合计
    let totalMoney=parseInt($("#spanTotalMoney").innerHTML);
    totalMoney=totalMoney-price;
    $("#spanTotalMoney").innerHTML=totalMoney;
}

//点击删除
function rem(obj){
    // console.log(obj);
    obj.parentNode.parentNode.remove();
    saveDate();
    var spanMoney=parseInt($("#spanTotalMoney").innerHTML);
    var xiaoji=obj.parentNode.previousElementSibling.innerHTML
    spanMoney=spanMoney-parseInt(xiaoji);
    $("#spanTotalMoney").innerHTML=spanMoney;
}

//保存数据
function saveDate(){

    let arr=[];

    let ulcar2=$(".ulcar2");
    // let lis=$(".licar");
    // console.log(ulcar2.length);
    for(let i=0;i<ulcar2.length;i++){
        // console.log(ulcar2[i].children[1].innerHTML);
        var goods={
            name:ulcar2[i].children[1].innerHTML,
            price:ulcar2[i].children[2].innerHTML,
            num:ulcar2[i].children[3].children[1].innerHTML,
            xiaoji:ulcar2[i].children[4].innerHTML,
        }
        arr.push(goods);
    }
    // console.log(arr);
    //2.存储
    var str=JSON.stringify(arr);
    localStorage.setItem('shopCar',str);
}

//获取数据
function getData(){
    let str=localStorage.getItem('shopCar');

    if(str==null){
        return;
    }

    let arr=JSON.parse(str);

    let ulcar2=$(".ulcar2");
    var boxx=$("#boxx");
    console.log(boxx);
    $("#shopcar").style.display="block";
    for(let i=0;i<arr.length;i++){
        var str1=boxx.innerHTML;
        var spanMoney=parseInt($("#spanTotalMoney").innerHTML);
        str1+=`
					<ul class="ulcar2">
						<li class="licar"><span class="option">✔</span></li>
						<li class="licar">${arr[i].name}</li>
						<li class="licar">${arr[i].price}</li>
						<li class="licar"><input class="redcls" type="button" value="-" />
							<span id="spanThree" >${arr[i].num}</span>
							<input class="addcls" type="button" value="+" /></li>
						<li class="licar">${arr[i].xiaoji}</li>
						<li class="licar"><input type="button" value="删除" class="del"></li>
					</ul>
				`;
        boxx.innerHTML = str1;

        spanMoney=spanMoney+parseInt(arr[i].xiaoji);
        $("#spanTotalMoney").innerHTML=spanMoney;


    }


}

window.onload=function(){
        getData();
        var sp1=$(".sp1");//立即购买


        //点击立即添加
        for(let i=0;i<sp1.length;i++){
            //添加商品

            let count=0;
            let index=i;
            sp1[i].onclick=function(){
                createUl(this,index);

                // if(count=0){
                // 	createUl(this,index);
                // 	count++;
                // }else{
                // 	let spanThree=document.getElementById("spanThree");
                // 	spanThree[i].innerHTML++;
                // }
                //按下加号
                let adds=$(".addcls");
                for(let i=0;i<adds.length;i++){
                    adds[i].onclick=function(){
                        add(this);
                    }
                }
                //按下减号
                let dels=$(".redcls");
                for(let i=0;i<dels.length;i++){
                    dels[i].onclick=function(){
                        del(this);
                    }
                }
                // 点击删除按钮
                var remove=$(".del");
                for(let i=0;i<remove.length;i++){
                    remove[i].onclick=function(){
                        console.log("111");
                        rem(this);
                    }
                }
            }
        }

        //按下加号
        let adds=$(".addcls");
        for(let i=0;i<adds.length;i++){
            adds[i].onclick=function(){
                add(this);
            }
        }
        //按下减号
        let dels=$(".redcls");
        for(let i=0;i<dels.length;i++){
            dels[i].onclick=function(){
                del(this);
            }
        }
        // 点击删除按钮
        var remove=$(".del");
        for(let i=0;i<remove.length;i++){
            remove[i].onclick=function(){
                console.log("111");
                rem(this);


            }
        }

        //全选按钮点击
        let allOption=$("#allOption");
        let option=$(".option");
        let count=0;

        allOption.onclick=function(){
            count++;
            if(count%2==1){
                this.style.color="black";
                for(let i=0;i<option.length;i++){
                    option[i].style.color="black";

                }
            }else{
                this.style.color="white";
                for(let i=0;i<option.length;i++){
                    option[i].style.color="white";
                }
            }

        }


        // 点击单个选择按钮
        let count1=0;
        for(let i=0;i<option.length;i++){

            option[i].onclick=function(){
                count1++;
                if(count1%2==1){
                    this.style.color="black";
                }else{
                    this.style.color="white";
                }

            }

        }


    }




