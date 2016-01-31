window.onload=function  () {

//轮播
 var imgs=$(".imgs");
 var bdian=$(".bdian");
 var banbacbox=$(".banbacbox");
 var num=1;
 function move(){
    if(num==8){
        num=0;
    }
 for(var i=0;i<imgs.length;i++){
    imgs[i].style.zIndex=2;
    banbacbox[i].style.zIndex=2;
    bdian[i].style.background="#333";
  }
    imgs[num].style.zIndex=3;
    bdian[num].style.background="#ff6700";
    banbacbox[num].style.zIndex=3;
    num++;
 }
 var t=setInterval(move,2000);
 for(var j=0;j<bdian.length;j++){
     		bdian[j].index=j;
     		bdian[j].onmouseover=function(){
     			for(var k=0;k<imgs.length;k++){
     				clearInterval(t);
     		        bdian[k].style.background="#333";
     				imgs[k].style.zIndex=2;
                    banbacbox[k].style.zIndex=2;
     			}
     		imgs[this.index].style.zIndex=3;
     		bdian[this.index].style.background="#ff6700";
            banbacbox[this.index].style.zIndex=3;
     		}

        bdian[j].onmouseout=function(){
          t=setInterval(move,2000);
          num=this.index+1;
        }
      }

//banner上的文本框
    var htext=$(".htext")[0];
     htext.onfocus=function(){
      if(htext.value=="圣诞节跨年幸福购 5折抢福袋"){
        htext.value="";
      }
     }
     htext.onblur=function(){
     if(htext.value){

     }else{
        htext.value="圣诞节跨年幸福购 5折抢福袋";
     }
     }



var bannerleft1=$(".bannerleft1");
var banpf=$(".banpf");
for (var i = 0; i < bannerleft1.length; i++) {
  bannerleft1[i].index=i;
  hover(bannerleft1[i],function(){
    banpf[this.index].style.display="block";
  
  },function(){
    banpf[this.index].style.display="none";
  })
}

for (var m = 0; m < banpf.length; m++) {
  banpf[m].index=m;
  banpf[m].onmouseover=function(){
          banpf[this.index].style.display="block";
        }
  banpf[m].onmouseout=function(){
          banpf[this.index].style.display="none";
        }
}




//图片的移动
function bb (b) {
var movel=$(".movel")[b];
var imgsm=$("img",movel);
for (var i = 0; i < imgsm.length; i++) {
    imgsm[i].index=i;
    imgsm[i].onmouseover=function(){
        imgsm[this.index].style.cssText="position:relative;left:-8px";
    }
    imgsm[i].onmouseout=function(){
        imgsm[this.index].style.cssText="position:relative;left:0";
    }
}
}
var movel=$(".movel");
for (var i = 0; i < movel.length; i++) {
    bb(i);
}

 
var bannerlyy=$(".bannerlyy")[0];
bannerlyy.onmouseover=function(e){
    var ev=e||window.event;
    var obj=ev.target||ev.srcElement;
    obj.style.left="0px";
}
bannerlyy.onmouseout=function(e){
    var ev=e||window.event;
    var obj=ev.target||ev.srcElement;
    obj.style.left="-5px";
}




//楼层中间的轮播
function move1(m){
    var f1con2=$(".f1con2")[m];
    var f1con2imgbox=$(".f1con2imgbox")[m];
    var f1con2lb=$(".f1con2lb",f1con2)[0];
    var btns=$("span",f1con2lb);
    var lbchangtiao=$(".lbchangtiao",f1con2lb);
    var num1=0;
    var b;
    var x=0;
    var flag=true;
    function movec(){
      x+=1;
      if(x<=30){
      }else{
        x=0;
        clearInterval(b);     
      }
      btns[num1].style.width=x+"px";
    }
    function moveleft(){
      flag=true;
        if(num1>=3){
                for (var i = 0; i < btns.length; i++) {
                btns[i].style.cssText="height:6px;background:red;width:0px;";
                }
            animate(f1con2imgbox,{left:-330*num1},600,Tween.Linear,function(){
                f1con2imgbox.style.left=0;
                if(flag){
                   b=setInterval(movec,100);
                   flag=false;
                }
            })
          num1=0; 
        }else{
                for (var i = 0; i < btns.length; i++) {
                btns[i].style.cssText="height:6px;background:red;width:0px;";
                }
                  animate(f1con2imgbox,{left:-330*num1},600,Tween.Linear,function(){
                    if(flag){
                    b=setInterval(movec,100);
                    flag=false;
                }               
                });
        }
        num1++;
        
    }
    var a=setInterval(moveleft,4200);


    for (var i = 0; i < lbchangtiao.length; i++) {
      lbchangtiao[i].index=i;
      hover(lbchangtiao[i],function(){
        clearInterval(a);
        clearInterval(b);
        for (var j = 0; j < btns.length; j++) {
          btns[j].style.cssText="width:0px";
        }
        this.style.cssText="background:red";
        animate(f1con2imgbox,{left:-330*this.index});
        flag=false;
      },function(){
        a=setInterval(moveleft,4200);
        this.style.cssText="background:#fff";
        num1=this.index;
        flag=true;
      })
    };
        
}    

var f1con2=$(".f1con2");
  for (var m = 0; m < f1con2.length; m++) {
      move1(m);   
}

//楼层左侧下方轮播
        var lc1centerbox=$(".lc1centerbox")[0];
        function moveleft1(){
        animate(lc1centerbox,{left:-90},600,Tween.Linear,function(){
            lc1centerbox.style.left=0;
            var last=getLast(lc1centerbox);
            var first=getFirst(lc1centerbox);
            lc1centerbox.appendChild(first,last);
            });
        }
        function moveright1(){
            var last=getLast(lc1centerbox);
            lc1centerbox.style.left=-90+"px";
            var first=getFirst(lc1centerbox);
            lc1centerbox.insertBefore(last,first);
            animate(lc1centerbox,{left:0},600,Tween.Linear)
        }
        var s1=setInterval(moveleft1,2000);
 
        var left1=$(".lc1jiantou1")[0];
        var right1=$(".lc1jiantou2")[0];
        left1.onmouseover=right1.onmouseover=function(){
            clearInterval(s1);
        }
        left1.onmouseout=right1.onmouseout=function(){
            s1=setInterval(moveleft1,2000);
        }
        left1.onclick=function(){
            moveleft1();
        }
        right1.onclick=function(){
            moveright1();
        }


//闪购选项卡
var t10xxk=$(".t10xxk");
var con10f=$(".con10f");
var num2=1;
function moves(){
  if(num2==3){
    num2=0;
  }
  for(var i=0;i<con10f.length;i++){
    con10f[i].style.zIndex=2;
    t10xxk[i].style.color="#666";
  }
    con10f[num2].style.zIndex=3;
    t10xxk[num2].style.color="#cea145";
    num2++;
}
var q=setInterval(moves,5000);
for (var m = 0; m < t10xxk.length; m++) {
  t10xxk[m].index=m;
  t10xxk[m].onmouseover=function() {
    for (var i = 0; i < con10f.length; i++) {
      con10f[i].style.zIndex=2;
      t10xxk[i].style.color="#666";
      clearInterval(q);
    };
    t10xxk[this.index].style.color="#cea145";
    con10f[this.index].style.zIndex=3;
  }
  t10xxk[m].onmouseout=function(){
    q=setInterval(moves,5000);
    num2=this.index+1;
  }
}

//楼层跳转按钮
var btnr=$(".lcbox");
var rightbox=$(".rightbox")[0];
var floors=$(".f1conbox");
var flos=$(".titlebox");
var rightconf=$(".rightconf");
var pfwordb=$(".pfwordb");
for (var m = 0; m< btnr.length; m++) {
  btnr[m].index=m;
  flos[m].t=flos[m].offsetTop;
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  btnr[m].onclick=function(){
   animate(obj,{scrollTop:flos[this.index].t},600)
    for (var i = 0; i < pfwordb.length; i++) {
      pfwordb[i].style.display="none";
    }
    pfwordb[this.index].style.display="block"; 
  }
}

var ch=document.documentElement.clientHeight;
window.onscroll=function(){
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  var scrollT=getScrollT();
  if(scrollT>=700){
    rightbox.style.display="block";
  }
  if(scrollT<=700){
    rightbox.style.display="none";
  }

for (var i = 0; i < flos.length; i++) {
  flos[i].t=flos[i].offsetTop;
  if(flos[i].t<scrollT+ch/2){//判断当前楼层的scrolltop值小于滚动条的top值加上1/2的浏览器的高
    for (var j = 0; j < btnr.length; j++) {
      pfwordb[j].style.display="none";
    }
      pfwordb[i].style.display="block";
  }
}
for (var j = 0; j < rightconf.length; j++) {
  rightconf[j].index=j;
  hover(rightconf[j],function(){
      pfwordb[this.index].style.display="block";
  },function(){
      pfwordb[this.index].style.display="none";
  })
}


//按需加载

    var scrollT=getScrollT();
            for(var i=0;i<floors.length;i++){
              if(floors[i].offsetTop<scrollT+ch){
                var imgsa=$("img",floors[i]);
                for(var j=0;j<imgsa.length;j++){
                    imgsa[j].src=imgsa[j].getAttribute("cc");
                }
            }
        }
}



//闪屏白色
var f1conb=$(".fconb");
var shan=$(".shan");
for (var i = 0; i < f1conb.length; i++) {
  f1conb[i].index=i;
  f1conb[i].onmouseover=function(){
       animate(shan[this.index],{opacity:0.3},300,function(){
        for (var j = 0; j < shan.length; j++) {
          shan[j].style.opacity=0;
        }
       })
  }
}


//导航栏二级界面
var topr1=$(".topr1");
var yihaod1=$(".yihaod1");
for (var n = 0; n < topr1.length; n++) {
  topr1[n].index=n;
  hover(topr1[n],function(){
    yihaod1[this.index].style.display="block";
    topr1[this.index].style.background="#fff";
  },function(){
    topr1[this.index].style.background="";
    yihaod1[this.index].style.display="none";
  })
};

var gzwmimg2=$(".gzwmimg2")[0];
var gzwmxl=$(".gzwmxl")[0];
hover(gzwmimg2,function(){
  gzwmxl.style.display="block";
},function(){
  gzwmxl.style.display="none";
})

var ssrbjtword2=$(".ssrbjtword2")[0];
var gwcxl1=$(".gwcxl1")[0];
hover(ssrbjtword2,function(){
  gwcxl1.style.display="block";
},function(){
  gwcxl1.style.display="none";
})



var sx=$(".sx")[0];
var huowudz=$(".huowudz")[0];
hover(sx,function(){
  huowudz.style.display="block";
},function(){
  huowudz.style.display="none";
})

hover(huowudz,function(){
  huowudz.style.display="block";
},function(){
  huowudz.style.display="none";
})






}