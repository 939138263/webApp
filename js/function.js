function size(originw,type){
	var type=type||"x";
	if(type=="x"){
		 var clientw=document.documentElement.clientWidth;
	     var originw=originw;
	     var bili=clientw/originw*100+"px";
	     document.getElementsByTagName("html")[0].style.fontSize=bili;
	}else if(type=="y"){
		var clienth=document.documentElement.clientHeight;
	     var originh=originw;
	     var bili=clienth/originh*100+"px";
	     document.getElementsByTagName("html")[0].style.fontSize=bili;
	}
   
}
size(720,"x");
//屏幕尺寸改变时候，动态改变html的font-size值
addEventListener("resize",function(){
	size(720,"x");
})