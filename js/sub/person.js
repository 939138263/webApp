var currentWebview, subWebview, temp;
window.addEventListener("sx",
    function(e) {
        location.reload()
    });
var vue1 = new Vue({
    el: "#person",
    data: {
        myid: "",
        isReally: 0,
        photo: localStorage.getItem("headimg"),
        parentId: "",
        grade: 0,
        tel: "",
        accountName: "",
        openingBank: "",
        name: "",
        weixin: "",
        alipay: "",
        CardTel: "",
        obligate: !1
    },
    created: function() {
        getdata("GetCus", "get", {
                userid: localStorage.getItem("userid")
            },
            !0,
            function(e) {
                1 == e.success && (vue1.myid = e.body[0].myId, vue1.tel = e.body[0].tel,
                    vue1.accountName = e.body[0].accountName, vue1.openingBank = e.body[0].openingBank,
                    vue1.isReally = e.body[0].isReally, vue1.parentId = e.body[0].parentId,
                    vue1.grade = e.body[0].grade, vue1.name = e.body[0].name, vue1.weixin = e.body[0].weiXin,
                    vue1.alipay = e.body[0].alipay, vue1.CardTel = e.body[0].cardTel,
                    localStorage.setItem("cardtel", e.body[0].cardTel),
                    "" == e.body[0].cardTel ? vue1.obligate = !0 : vue1.obligate = !1)
            },
            function(e) {})
    },
    computed: {
        headimg: function() {
            return this.photo != localStorage.getItem("headimg") ? localStorage.getItem("headimg") : this.photo
        }
    },
    methods: {
        gethref: function(e) {
            return "real_bankcard.html" == e ? "" != this.accountName ? e: "0" != localStorage.getItem("isPass") ? "real_name.html": "false" == localStorage.getItem("firstPass") ? "fixpaypass.html": "setpaypass.html": "0" == localStorage.getItem("isPass") ? "setpaypass.html": e
        },
        gettitle: function(e) {
            return "银行卡认证" == e ? "" != this.accountName ? e: "0" != localStorage.getItem("isPass") ? "实名认证": "false" == localStorage.getItem("firstPass") ? "修改交易密码": "设置交易密码": "0" == localStorage.getItem("isPass") ? "设置交易密码": e
        },
        mygrade: function(e) {
            return 0 == e ? "普通矿工": 1 == e ? "一级矿工": 2 == e ? "二级矿工": 3 == e ? "三级矿工": 4 == e ? "四级矿工": "普通矿工"
        },
        getdatas: function(e) {},
        pulldownRefreshs: function(e) {
            getdata("GetCus", "get", {
                    userid: localStorage.getItem("userid")
                },
                !0,
                function(e) {
                    1 == e.success && (vue1.myid = e.body[0].myId, vue1.isReally = e.body[0].isReally,
                        vue1.parentId = e.body[0].parentId, vue1.grade = e.body[0].grade,
                        vue1.weixin = e.body[0].weiXin, vue1.alipay = e.body[0].alipay)
                },
                function(e) {}),
                vue1.photo = localStorage.getItem("headimg"),
                mui("#person").pullRefresh().endPulldown()
        },
        updateimg: function(e) {
            vue1.photo = e
        },
        secondUrl: function() {
            return "0" == localStorage.getItem("isPass") ? "setpaypass.html": "fixpaypass.html"
        },
        secondTitle: function() {
            return "0" == localStorage.getItem("isPass") ? "设置交易密码": "修改交易密码"
        },
        wxurl: function() {
            return "" == this.weixin || null == this.weixin ? "weixin.html": "javascript:;"
        },
        alipayurl: function() {
            return "" == this.alipay || null == this.alipay ? "alipay.html": "javascript:;"
        }
    },
    mounted: function() {
        mui.plusReady(function() {
            currentWebview = plus.webview.currentWebview(),
                template = plus.webview.getWebviewById("template_second"),
                subWebview = plus.webview.getWebviewById("sub_template_second"),
                mui.init({
                    swipeBack: !1,
                    pullRefresh: {
                        container: "#person",
                        down: {
                            style: "circle",
                            color: "#2BD009",
                            height: "50px",
                            range: "100px",
                            offset: "0px",
                            auto: !1,
                            callback: function() {
                                vue1.pulldownRefreshs(localStorage.getItem("userid"))
                            }
                        }
                    }
                }),
                mui("#person").on("tap", ".headbox",
                    function() {
                        var e = this.getAttribute("data-title");
                        mui.fire(template, "updateHeader", {
                            title: e,
                            href: this.href
                        }),
                            subWebview.getURL() == this.href ? subWebview.show() : (subWebview.loadURL(this.href),
                                subWebview.addEventListener("loaded",
                                function() {
                                    setTimeout(function() {
                                            subWebview.show()
                                        },
                                        50)
                                })),
                            template.show("slide-in-right", 150)
                    }),
                mui(".lists li").on("tap", "a:not(.telcheck)",
                    function() {
                        var e = this.getAttribute("data-title");
                        "javascript:;" != this.href ? (mui.fire(template, "updateHeader", {
                            title: e,
                            href: this.href
                        }), subWebview.getURL() == this.href ?
                            subWebview.show() : (subWebview.loadURL(this.href),
                                subWebview.addEventListener("loaded",
                            function() {
                                setTimeout(function() {
                                        subWebview.show()
                                    },
                                    50)
                            })), template.show("slide-in-right", 150)) : mui.toast("敬请期待")
                    }),
                mui(".two li").on("tap", "a",
                    function() {
                        var e = this.getAttribute("data-title");
                        "javascript:;" != this.href ? (mui.fire(template, "updateHeader", {
                            title: e,
                            href: this.href
                        }), subWebview.getURL() == this.href ?
                            subWebview.show() : (subWebview.loadURL(this.href),
                                subWebview.addEventListener("loaded",
                            function() {
                                setTimeout(function() {
                                        subWebview.show()
                                    },
                                    50)
                            })), template.show("slide-in-right", 150)) : plus.nativeUI.toast("只能设置一次，如果想再修改请联系客服")
                    })
        })
    }
});
window.addEventListener("updateimg",
    function(e) {});