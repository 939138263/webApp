var time_range = function (beginTime, endTime) {
  var strb = beginTime.split (":");
  if (strb.length != 2) {
    return false;
  }

  var stre = endTime.split (":");
  if (stre.length != 2) {
    return false;
  }

  var b = new Date ();
  var e = new Date ();
  var n = new Date ();
  $.ajax({
  	type:"get",
  	url:"http://cgi.im.qq.com/cgi-bin/cgi_svrtime",
  	async:true,
  	success:function(data){
  		console.log(data)
  		data = new Date(Date.parse(data.replace(/-/g, "/")));
   		n = data;
   		b.setHours (strb[0]);
		  b.setMinutes (strb[1]);
		  e.setHours (stre[0]);
		  e.setMinutes (stre[1]);
		
		  if (n - b.getTime () > 0 && n - e.getTime () < 0) {
		    return true;
		  } else {
		    mui.toast("当前时间是：" + n.getHours () + ":" + n.getMinutes () + "，已闭市！请于早9时到晚24时之间操作");
		    defaultWaiting1();
		    return false;
		  }
  	},
  	error:function(data){
  		b.setHours (strb[0]);
		  b.setMinutes (strb[1]);
		  e.setHours (stre[0]);
		  e.setMinutes (stre[1]);
		
		  if (n.getTime () - b.getTime () > 0 && n.getTime () - e.getTime () < 0) {
		    return true;
		  } else {
		    mui.toast('服务器错误，程序即将退出');
		    setTimeout(function(){
		    	plus.runtime.quit();
		    },1000)
		    return false;
		  }
  	}
  });
//var n = new Date ();

  
}
