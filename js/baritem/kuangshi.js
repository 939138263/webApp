var pageNo1 = 1,
    template = null,
    subWebview = null,
    home = null,
    yztime = 60;
window.addEventListener("passAlready",
    function(e) {
        localStorage.setItem("isPass", "1")
    }),
    window.addEventListener("tradeok",
        function(e) {});
var option1 = {
        legend: {
            data: ["实时价格"],
            left: "left",
            tooltip: {
                show: !0
            },
            textStyle: {
                color: "#02d2f5"
            }
        },
        tooltip: {
            show: !0
        },
        grid: {
            x: 35,
            x2: 10,
            y: 30,
            y2: 25
        },
        toolbox: {
            show: !1,
            feature: {
                mark: {
                    show: !0
                },
                dataView: {
                    show: !0,
                    readOnly: !1
                },
                magicType: {
                    show: !0,
                    type: ["line", "bar"]
                },
                restore: {
                    show: !0
                },
                saveAsImage: {
                    show: !0
                }
            }
        },
        calculable: !1,
        xAxis: [{
            type: "category",
            data: []
        }],
        yAxis: [{
            type: "value",
            splitArea: {
                show: !1
            }
        }],
        series: [{
            name: "实时价格",
            type: "line",
            data: [],
            areaStyle: {
                normal: {
                    color: "rgba(2,210,245,0.25)"
                }
            }
        }]
    },
    option2 = {
        legend: {
            data: ["实时价格"],
            left: "left",
            tooltip: {
                show: !0
            },
            textStyle: {
                color: "#02d2f5"
            }
        },
        tooltip: {
            show: !0
        },
        grid: {
            x: 35,
            x2: 10,
            y: 30,
            y2: 25
        },
        toolbox: {
            show: !1,
            feature: {
                mark: {
                    show: !0
                },
                dataView: {
                    show: !0,
                    readOnly: !1
                },
                magicType: {
                    show: !0,
                    type: ["line", "bar"]
                },
                restore: {
                    show: !0
                },
                saveAsImage: {
                    show: !0
                }
            }
        },
        calculable: !1,
        xAxis: [{
            type: "category",
            data: []
        }],
        yAxis: [{
            type: "value",
            splitArea: {
                show: !1
            }
        }],
        series: [{
            name: "实时价格",
            type: "line",
            data: [],
            areaStyle: {
                normal: {
                    color: "rgba(2,210,245,0.25)"
                }
            }
        }]
    },
    vue1 = new Vue({
        el: "#kuangshi",
        data: {
            list: [],
            userid: "",
            tradeinfo: {
                accountName: "",
                openingBank: "",
                cardNumber: "",
                weixin: "",
                alipay: "",
                tel: "",
                state: ""
            },
            pageCount: 0,
            xArr1: [],
            yArr1: [],
            xArr2: [],
            yArr2: [],
            nowprice: "0",
            addrange: "0",
            high: "0",
            low: "0",
            amount: "0",
            haspass: "0",
            fee: "0",
            address: "",
            ytwallet: "",
            ydnum: "",
            tradeok: localStorage.getItem("tradeok")
        },
        created: function() {
            getmarketdata("GetRose", "get", {
                    userid: localStorage.getItem("userid"),
                    type: 1
                },
                !1,
                function(e) {
                    1 == e.success && (setTimeout(function() {
                            vue1.xArr1 = e.body.times,
                                vue1.yArr1 = e.body.prices,
                                vue1.nowprice = e.body.price,
                                vue1.addrange = e.body.range,
                                vue1.high = e.body.high,
                                vue1.low = e.body.low,
                                vue1.amount = e.body.amount,
                                vue1.fee = e.body.fee,
                                vue1.haspass = "0"
                        },
                        0), option1.series[0].data = e.body.prices, option1.xAxis[0].data = e.body.times)
                },
                function(e) {})
        },
        computed: {
            feeres: function() {
                return 100 * this.fee + "%"
            },
            feenum: function() {
                return 100 * this.fee + 100
            }
        },
        methods: {
            limitsmall: function() {
                var e = this.ydnum; - 1 != e.toString().indexOf(".") && e.toString().split(".")[1].length > 1 && (this.ydnum = this.ydnum.toFixed(1))
            },
            ortitle: function(e) {
                return - 1 == e ? "卖家资料": "买家资料"
            },
            getchart: function(e) {},
            getnewpage: function(e) {
                getmarketdata("GetMyTran", "get", {
                        userid: localStorage.getItem("userid"),
                        pageno: e
                    },
                    !0,
                    function(e) {
                        1 == e.success && ($.each(e.body.paging,
                            function(e, t) {
                                vue1.list.push(t)
                            }), vue1.pageCount = e.body.pageCount)
                    },
                    function(e) {})
            },
            aa: function() {},
            lookinfo: function(e) {
                getdata("GetTranWallet", "get", {
                        userid: localStorage.getItem("userid"),
                        tranid: e.id
                    },
                    !0,
                    function(e) {
                        1 == e.success && (0 == e.body.length || (vue1.address = e.body[0].address, vue1.ytwallet = e.body[0].name))
                    },
                    function(e) {}),
                    vue1.tradeinfo = {
                        accountName: e.pushAccountName,
                        openingBank: e.pushBank,
                        cardNumber: e.pushCard,
                        tel: e.pushTel,
                        alipay: e.pushAlipay,
                        weixin: e.pushWeixin,
                        state: e.state
                    },
                    mui("#popover").popover("show")
            },
            closeinfo: function() {
                mui("#popover").popover("hide")
            },
            confirmtrade: function(e, t, a, o) {
                if (o.detail.gesture.preventDefault(), "0" == localStorage.getItem("isPass")) mui.fire(template, "updateHeader", {
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
                    var i = ["确定", "取消"];
                    3 == a ? (mui.prompt("请严格按照平台公布卖家资料进行打款，请勿相信中介！", "交易密码", "请输入交易密码", i,
                        function(e) {
                            0 == e.index && getdata("CheckPayPass", "get", {
                                    userid: localStorage.getItem("userid"),
                                    paypass: e.value
                                },
                                !0,
                                function(o) {
                                    if (1 == o.success) if (60 == yztime) {
                                        var s = setInterval(function() {--yztime < 0 && (clearInterval(s), yztime = 60)
                                            },
                                            1e3);
                                        getmarketdata("IsHandCode", "get", {
                                                userid: localStorage.getItem("userid"),
                                                tranid: t
                                            },
                                            !0,
                                            function(o) {
                                                1 == o.success ? 0 != o.body ? (mui.toast(o.msg), mui.prompt("请输入短信验证码：", "短信验证码", "请输入验证码", i,
                                                    function(o) {
                                                        0 == o.index && getmarketdata("HandleTranNew", "get", {
                                                                userid: localStorage.getItem("userid"),
                                                                step: a,
                                                                tranid: t,
                                                                paypass: e.value,
                                                                code: o.value
                                                            },
                                                            !0,
                                                            function(e) {
                                                                1 == e.success ? (mui.toast(e.msg), mui.fire(home, "updateVrc"), 0 == vue1.list.length ? getmarketdata("GetMyTran", "get", {
                                                                        userid: localStorage.getItem("userid"),
                                                                        pageno: 1
                                                                    },
                                                                    !0,
                                                                    function(e) {
                                                                        1 == e.success && (vue1.list = e.body.paging, vue1.pageCount = e.body.pageCount, vue1.haspass = e.body.common)
                                                                    },
                                                                    function(e) {}) : location.reload()) : mui.toast(e.msg)
                                                            },
                                                            function(e) {})
                                                    })) : getmarketdata("HandleTranNew", "get", {
                                                        userid: localStorage.getItem("userid"),
                                                        step: a,
                                                        tranid: t,
                                                        paypass: e.value,
                                                        code: "a"
                                                    },
                                                    !0,
                                                    function(e) {
                                                        1 == e.success ? (mui.toast(e.msg), mui.fire(home, "updateVrc"), 0 == vue1.list.length ? getmarketdata("GetMyTran", "get", {
                                                                userid: localStorage.getItem("userid"),
                                                                pageno: 1
                                                            },
                                                            !0,
                                                            function(e) {
                                                                1 == e.success && (vue1.list = e.body.paging, vue1.pageCount = e.body.pageCount, vue1.haspass = e.body.common)
                                                            },
                                                            function(e) {}) : location.reload()) : mui.toast(e.msg)
                                                    },
                                                    function(e) {}) : mui.toast(o.msg)
                                            },
                                            function(e) {})
                                    } else mui.toast(yztime + "s后才能获取验证码");
                                    else mui.toast(o.msg)
                                },
                                function(e) {})
                        },
                        "div"), document.querySelector(".mui-popup-input input").type = "password") : (mui.prompt("请严格按照平台公布卖家资料进行打款，请勿相信中介！", "交易密码", "请输入交易密码", i,
                        function(e) {
                            0 == e.index && getdata("CheckPayPass", "get", {
                                    userid: localStorage.getItem("userid"),
                                    paypass: e.value
                                },
                                !0,
                                function(o) {
                                    1 == o.success ? (mui.toast(o.msg), getmarketdata("HandleTranNew", "get", {
                                            userid: localStorage.getItem("userid"),
                                            step: a,
                                            tranid: t,
                                            paypass: e.value,
                                            code: "a"
                                        },
                                        !0,
                                        function(e) {
                                            1 == e.success ? (mui.toast(e.msg), mui.fire(home, "updateVrc"),
                                                0 == vue1.list.length ? getmarketdata("GetMyTran", "get", {
                                                    userid: localStorage.getItem("userid"),
                                                    pageno: 1
                                                },
                                                !0,
                                                function(e) {
                                                    1 == e.success && (vue1.list = e.body.paging, vue1.pageCount = e.body.pageCount, vue1.haspass = e.body.common)
                                                },
                                                function(e) {}) : location.reload()) : mui.toast(e.msg)
                                        },
                                        function(e) {})) : mui.toast(o.msg)
                                },
                                function(e) {})
                        },
                        "div"), document.querySelector(".mui-popup-input input").type = "password")
                }
            },
            esctrade: function(e, t) {
                mui.confirm("确认取消吗？", "取消交易", ["确认", "取消"],
                    function(a) {
                        0 == a.index && getmarketdata("HandleTranNew", "get", {
                                userid: localStorage.getItem("userid"),
                                step: t,
                                tranid: e,
                                paypass: "a",
                                code: "a"
                            },
                            !0,
                            function(e) {
                                1 == e.success ? (mui.toast(e.msg), 0 == vue1.list.length ? getmarketdata("GetMyTran", "get", {
                                        userid: localStorage.getItem("userid"),
                                        pageno: 1
                                    },
                                    !0,
                                    function(e) {
                                        1 == e.success && (vue1.list = e.body.paging, vue1.pageCount = e.body.pageCount, vue1.haspass = e.body.common)
                                    },
                                    function(e) {}) : location.reload()) : mui.toast(e.msg)
                            },
                            function(e) {})
                    })
            }
        },
        mounted: function() {
            mui.plusReady(function() {
                mui.init({
                    swipeBack: !1
                });
                var t = null;
                mui.back = function() {
                    t ? (new Date).getTime() - t < 2e3 && ("true" == localStorage.getItem("isrem") ? plus.runtime.quit() : (localStorage.clear(), plus.storage.clear(), plus.runtime.quit())) : (t = (new Date).getTime(), mui.toast("再按一次退出系统!"), setTimeout(function() {
                            t = null
                        },
                        2e3))
                },
                    currentWebview = plus.webview.currentWebview(),
                    template = plus.webview.getWebviewById("template_second"),
                    subWebview = plus.webview.getWebviewById("sub_template_second"),
                    template_three = plus.webview.getWebviewById("template"),
                    subWebview_three = plus.webview.getWebviewById("sub_template"),
                    home = plus.webview.getWebviewById("barItem/mine.html"),
                    e.resize(),
                    mui.ready(function() {
                        new Clipboard(".copy"),
                            mui(".mui-scroll-wrapper").scroll({
                                bounce: !0,
                                indicators: !1,
                                deceleration: mui.os.ios ? .003 : 9e-4
                            }),
                            mui("#two").pullRefresh({
                                up: {
                                    height: 100,
                                    auto: !1,
                                    contentrefresh: "正在加载...",
                                    contentnomore: "没有更多数据了",
                                    callback: function() {++pageNo1,
                                        vue1.getnewpage(pageNo1),
                                    vue1.pageCount <= pageNo1 && this.endPullupToRefresh(!0)
                                    }
                                }
                            }),
                            mui("body").on("tap", ".mui-backdrop",
                                function() {
                                    mui("#popover").popover("show")
                                }),
                            document.getElementById("selbtn").addEventListener("tap",
                                function(e) {
                                    var t = $("#idnum").val(),
                                        a = $("#selnum").val(),
                                        o = $("#ydnum").val();
                                    if ("" == t || "" == a || a <= 0 || o < 0) plus.nativeUI.toast("输入有误");
                                    else if ("0" != localStorage.getItem("weixin") && "0" != localStorage.getItem("alipay") && "0" != localStorage.getItem("tradeok")) {
                                        e.detail.gesture.preventDefault();
                                        var i = ["确定", "取消"];
                                        if ("0" == localStorage.getItem("isPass")) mui.fire(template, "updateHeader", {
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
                                            if ("0" == localStorage.getItem("tradeok")) return void plus.nativeUI.toast("您还未认证银行卡");
                                            mui.prompt("请严格按照平台公布卖家资料进行打款，请勿相信中介！", "交易密码", "请输入交易密码", i,
                                                function(e) {
                                                    0 == e.index && getdata("CheckPayPass", "get", {
                                                            userid: localStorage.getItem("userid"),
                                                            paypass: e.value
                                                        },
                                                        !0,
                                                        function(s) {
                                                            if (1 == s.success) if (60 == yztime) {
                                                                var n = setInterval(function() {--yztime < 0 && (clearInterval(n), yztime = 60)
                                                                    },
                                                                    1e3);
                                                                getmarketdata("IsHandCodeOne", "get", {
                                                                        userid: localStorage.getItem("userid"),
                                                                        tranid: "",
                                                                        amount: a,
                                                                        trantype: 0
                                                                    },
                                                                    !0,
                                                                    function(s) {
                                                                        1 == s.success ? 0 != s.body ? (mui.toast(s.msg), mui.prompt("请输入短信验证码：", "短信验证码", "请输入验证码", i,
                                                                            function(i) {
                                                                                0 == i.index && getmarketdata("TransferByCodeAndPrice", "get", {
                                                                                        userid: localStorage.getItem("userid"),
                                                                                        toid: t,
                                                                                        amount: a,
                                                                                        paypass: e.value,
                                                                                        code: i.value,
                                                                                        price: o
                                                                                    },
                                                                                    !0,
                                                                                    function(e) {
                                                                                        1 == e.success ? (mui.toast(e.msg), mui.fire(home, "updateVrc"), 0 == vue1.list.length ? getmarketdata("GetMyTran", "get", {
                                                                                                userid: localStorage.getItem("userid"),
                                                                                                pageno: 1
                                                                                            },
                                                                                            !0,
                                                                                            function(e) {
                                                                                                1 == e.success && (vue1.list = e.body.paging, vue1.pageCount = e.body.pageCount, vue1.haspass = e.body.common)
                                                                                            },
                                                                                            function(e) {}) : location.reload()) : mui.toast(e.msg)
                                                                                    },
                                                                                    function(e) {})
                                                                            })) : getmarketdata("TransferByCodeAndPrice", "get", {
                                                                                userid: localStorage.getItem("userid"),
                                                                                toid: t,
                                                                                amount: a,
                                                                                paypass: e.value,
                                                                                code: "a",
                                                                                price: o
                                                                            },
                                                                            !0,
                                                                            function(e) {
                                                                                1 == e.success ? (mui.toast(e.msg), mui.fire(home, "updateVrc"), 0 == vue1.list.length ? getmarketdata("GetMyTran", "get", {
                                                                                        userid: localStorage.getItem("userid"),
                                                                                        pageno: 1
                                                                                    },
                                                                                    !0,
                                                                                    function(e) {
                                                                                        1 == e.success && (vue1.list = e.body.paging, vue1.pageCount = e.body.pageCount, vue1.haspass = e.body.common)
                                                                                    },
                                                                                    function(e) {}) : location.reload()) : mui.toast(e.msg)
                                                                            },
                                                                            function(e) {}) : mui.toast(s.msg)
                                                                    },
                                                                    function(e) {})
                                                            } else mui.toast(yztime + "s后才能获取验证码");
                                                            else mui.toast(s.msg)
                                                        },
                                                        function(e) {})
                                                },
                                                "div"),
                                                document.querySelector(".mui-popup-input input").type = "password"
                                        }
                                    } else plus.nativeUI.toast("请先补全微信、支付宝或银行卡")
                                }),
                            mui(".xuzhi").on("tap", "a",
                                function() {
                                    var e = this.getAttribute("data-title");
                                    mui.fire(template, "updateHeader", {
                                        title: e,
                                        href: this.href
                                    }),
                                        subWebview.getURL() == this.href ? subWebview.show() : (subWebview.loadURL(this.href), subWebview.addEventListener("loaded",
                                            function() {
                                                setTimeout(function() {
                                                        subWebview.show()
                                                    },
                                                    50)
                                            })),
                                        template.show("slide-in-right", 150)
                                }),
                            mui(".tapbox").on("tap", "li",
                                function() {
                                    var t = this.getAttribute("data-index");
                                    "1" == this.getAttribute("data-index") ?
                                        e.setOption(option1) :
                                        "4" == this.getAttribute("data-index") &&
                                        (vue1.list.length > 0 || 0 == vue1.list.length &&
                                            getmarketdata("GetMyTran", "get", {
                                            userid: localStorage.getItem("userid"),
                                            pageno: 1
                                        },
                                        !0,
                                        function(e) {
                                            1 == e.success && (
                                                vue1.list = e.body.paging,
                                                vue1.pageCount = e.body.pageCount,
                                                    vue1.haspass = e.body.common
                                            )},
                                        function(e) {}));
                                    var a = $("#show" + t);
                                    $(".tapbox li").removeClass("tapactive"),
                                        this.classList.add("tapactive"),
                                        $(".showbox li").removeClass("showactive"),
                                        a.addClass("showactive")
                                }),
                            mui(".guadanbox li").on("tap", "a",
                                function() {
                                    var e = this.getAttribute("data-title");
                                    mui.fire(template_three, "updateHeader", {
                                        title: e,
                                        href: this.href
                                    }),
                                        subWebview_three.getURL() == this.href ? subWebview_three.show() : (subWebview_three.loadURL(this.href), subWebview_three.addEventListener("loaded",
                                            function() {
                                                setTimeout(function() {
                                                        subWebview_three.show()
                                                    },
                                                    50)
                                            })),
                                        template_three.show("slide-in-right", 150)
                                }),
                            mui("#kuangshi").on("tap", ".shuaxin",
                                function() {
                                    mui.toast("已刷新"),
                                        $(".shuaxin span").css({
                                            "-webkit-transform": "rotate(360deg)",
                                            "-moz-transform": "rotate(360deg)",
                                            "-o-transform": "rotate(360deg)",
                                            "-ms-transform": "rotate(360deg)"
                                        }),
                                        setTimeout(function() {
                                                location.reload()
                                            },
                                            150)
                                })
                    })
            });
            var e = echarts.init(function(e) {
                return document.getElementById(e)
            } ("lineChart"), "myzhexian");
            setTimeout(function() {
                    e.setOption(option1)
                },
                500)
        }
    });
window.addEventListener("passAlready",
    function(e) {
        vue1.haspass = "1"
    }),
    window.addEventListener("listUpdate",
        function(e) {
            getmarketdata("GetMyTran", "get", {
                    userid: localStorage.getItem("userid"),
                    pageno: 1
                },
                !0,
                function(e) {
                    1 == e.success && (vue1.list = e.body.paging)
                },
                function(e) {})
        });