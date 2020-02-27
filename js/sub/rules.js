var vue1 = new Vue({
    el: "#rules",
    data: {
        title: "",
        contents: ""
    },
    created: function() {
        getdata("GetNewsOne", "get", {
                userid: localStorage.getItem("userid"),
                newid: "27a077bf-d4e8-11e7-b472-6c92bf162a96"
            },
            !0,
            function(e) {
                1 == e.success && (vue1.title = e.body.title, vue1.contents = e.body.contents)
            },
            function(e) {})
    },
    mounted: function() {
        mui.init({
            swipeBack: !1
        });
        mui.plusReady(function() {
            plus.webview.currentWebview()
        })
    }
});