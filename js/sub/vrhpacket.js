var subWebview = null,
    template = null,
    home = null,
    vue1 = new Vue({
        el: "#vrhpacket",
        data: {
            kyvrc: 0,
            kyvrh: 0,
            vrhnum: 0,
            packeturl: "",
            chongzhiurl: ""
        },
        created: function() {
            var e = this;
            getvrhdata("GetMyVRH", "get", {
                    userid: localStorage.getItem("userid")
                },
                !0,
                function(t) {
                    1 == t.success && (e.chongzhiurl = t.body.sysAddress, e.kyvrc = t.body.vrcToTal)
                },
                function(e) {})
        },
        methods: {
            limitsmall: function() {
                var e = this.vrhnum; - 1 != e.toString().indexOf(".") && e.toString().split(".")[1].length > 5 && (this.vrhnum = this.vrhnum.toFixed(5))
            },
            selvrh: function(e) {
                e.detail.gesture.preventDefault();
                var t = this;
                if (this.vrhnum <= 0) mui.toast("数量必须大于0");
                else if ("0" == localStorage.getItem("isPass")) mui.fire(template, "updateHeader", {
                    title: "设置交易密码",
                    href: "../sub/setpaypass.html"
                }),
                    "../sub/setpaypass.html" == subWebview.getURL() ? subWebview.show() : (subWebview.loadURL("../sub/setpaypass.html"), subWebview.addEventListener("loaded",
                        function() {
                            setTimeout(function() {
                                    subWebview.show()
                                },
                                50)
                        })),
                    template.show("slide-in-right", 150);
                else {
                    if ("0" == localStorage.getItem("tradeok")) return void mui.toast("请先完成认证！");
                    mui.prompt("请严格按照平台公布卖家资料进行打款，请勿相信中介！", "交易密码", "请输入交易密码", ["确定", "取消"],
                        function(e) {
                            0 == e.index && getdata("CheckPayPass", "get", {
                                    userid: localStorage.getItem("userid"),
                                    paypass: e.value
                                },
                                !0,
                                function(s) {
                                    1 == s.success ? getvrhdata("ChangeVRH", "get", {
                                            userid: localStorage.getItem("userid"),
                                            address: t.packeturl,
                                            amount: t.vrhnum,
                                            paypass: e.value
                                        },
                                        !0,
                                        function(e) {
                                            1 == e.success ? (mui.toast(e.msg), mui.fire(home, "updateVrc"), location.reload()) : mui.toast(e.msg)
                                        },
                                        function(e) {}) : mui.toast(s.msg)
                                })
                        },
                        "div"),
                        document.querySelector(".mui-popup-input input").type = "password"
                }
            }
        },
        mounted: function() {
            mui.init(),
                mui(".mui-scroll-wrapper").scroll({
                    bounce: !0,
                    indicators: !1,
                    deceleration: mui.os.ios ? .003 : 9e-4
                }),
                mui.plusReady(function() {
                    template = plus.webview.getWebviewById("template_three"),
                        subWebview = plus.webview.getWebviewById("sub_template_three"),
                        home = plus.webview.getWebviewById("barItem/mine.html")
                }),
                new Clipboard(".copy"),
                mui(".tapbox").on("tap", "li",
                    function() {
                        var e = this.getAttribute("data-index"),
                            t = $("#" + e);
                        $(".tapbox li").removeClass("tapactive"),
                            this.classList.add("tapactive"),
                            $(".showbox li").removeClass("showactive"),
                            t.addClass("showactive")
                    })
        }
    });