function getUrlParam(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),u=window.location.search.substr(1).match(t);return null!=u?unescape(u[2]):null}var template=null,subWebview=null,newid=getUrlParam("newid"),vue1=new Vue({el:"#packetinfo",data:{name:"",myid:"",money:"",remark:"",redlist:[]},created:function(){getdata("GetRedOneList","get",{userid:localStorage.getItem("userid"),redid:newid},!0,function(e){1==e.success&&(vue1.myid=e.body.myid,vue1.name=e.body.name,vue1.money=e.body.money,vue1.remark=e.body.remark,vue1.redlist=e.body.redList)},function(e){})},mounted:function(){mui.init({swipeBack:!1}),mui("#gg").pullRefresh({up:{height:50,auto:!1,contentrefresh:"正在加载...",contentnomore:"没有更多了",callback:function(){mui("#gg").pullRefresh().endPullupToRefresh(!0)}}});mui.plusReady(function(){plus.webview.currentWebview(),template=plus.webview.getWebviewById("template"),mui.fire(plus.webview.getWebviewById("barItem/mine.html"),"updateVrc"),mui.fire(plus.webview.getWebviewById("template_four"),"sxdata")})}});Vue.filter("cuttime",function(e){return e.split("T")[1]});