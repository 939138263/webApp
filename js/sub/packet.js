var currentWebview, subWebview, temp, vue1 = new Vue({
    el: "#packet",
    data: {
        list: [],
        markshow: !1,
        markdata: {
            id: "001",
            url: "packetinfo.html",
            name: "恭喜发财",
            btnstate: !1
        }
    },
    methods: {
        open: function(e, t, i, n, s) { - 1 == n ? (mui.fire(template, "updateHeader", {
            title: i,
            href: t + "?newid=" + e,
            id: e
        }), subWebview.getURL() == t + "?newid=" + e ? subWebview.show() : (subWebview.loadURL(t + "?newid=" + e), subWebview.addEventListener("loaded",
            function() {
                setTimeout(function() {
                        subWebview.show()
                    },
                    50)
            })), template.show("slide-in-right", 150)) : 0 == n ? getdata("IsRobRed", "get", {
                userid: localStorage.getItem("userid"),
                redid: e
            },
            !0,
            function(n) {
                0 == n.code ? plus.nativeUI.alert(n.msg) : (mui.fire(template, "updateHeader", {
                    title: i,
                    href: t + "?newid=" + e,
                    id: e
                }), subWebview.getURL() == t + "?newid=" + e ? subWebview.show() : (subWebview.loadURL(t + "?newid=" + e), subWebview.addEventListener("loaded",
                    function() {
                        setTimeout(function() {
                                subWebview.show()
                            },
                            50)
                    })), template.show("slide-in-right", 150))
            },
            function(e) {}) : 2 == n ? (mui.fire(template, "updateHeader", {
            title: i,
            href: t + "?newid=" + e,
            id: e
        }), subWebview.getURL() == t + "?newid=" + e ? subWebview.show() : (subWebview.loadURL(t + "?newid=" + e), subWebview.addEventListener("loaded",
            function() {
                setTimeout(function() {
                        subWebview.show()
                    },
                    50)
            })), template.show("slide-in-right", 150)) : (plus.nativeUI.showWaiting(), getdata("IsRobRed", "get", {
                userid: localStorage.getItem("userid"),
                redid: e
            },
            !0,
            function(i) {
                0 == i.code ? (plus.nativeUI.closeWaiting(), plus.nativeUI.alert(i.msg)) : (plus.nativeUI.closeWaiting(), vue1.markshow = !0, vue1.markdata = {
                    id: e,
                    url: t,
                    name: s
                })
            },
            function(e) {}))
        },
        close: function() {
            vue1.markshow = !1
        },
        opengift: function(e, t, i) {
            getdata("RobRed", "get", {
                    userid: localStorage.getItem("userid"),
                    redid: e
                },
                !0,
                function(n) {
                    1 == n.success ? (mui.toast(n.msg), vue1.markshow = !1, mui.fire(template, "updateHeader", {
                        title: i,
                        href: t + "?newid=" + e,
                        id: e
                    }), subWebview.getURL() == t + "?newid=" + e ? subWebview.show() : (subWebview.loadURL(t + "?newid=" + e), subWebview.addEventListener("loaded",
                        function() {
                            setTimeout(function() {
                                    subWebview.show()
                                },
                                50)
                        })), template.show("slide-in-right", 150)) : (vue1.markshow = !1, mui.fire(template, "updateHeader", {
                        title: i,
                        href: t + "?newid=" + e,
                        id: e
                    }), subWebview.getURL() == t + "?newid=" + e ? subWebview.show() : (subWebview.loadURL(t + "?newid=" + e), subWebview.addEventListener("loaded",
                        function() {
                            setTimeout(function() {
                                    subWebview.show()
                                },
                                50)
                        })), template.show("slide-in-right", 150))
                },
                function(e) {})
        }
    },
    created: function() {
        getdata("GetRedList", "get", {
                userid: localStorage.getItem("userid")
            },
            !0,
            function(e) {
                1 == e.success && (vue1.list = e.body.ds)
            },
            function(e) {})
    },
    mounted: function() {
        mui("#gg").pullRefresh({
            up: {
                height: 50,
                auto: !1,
                contentrefresh: "正在加载...",
                contentnomore: "没有更多了",
                callback: function() {
                    mui("#gg").pullRefresh().endPullupToRefresh(!0)
                }
            }
        }),
            mui.plusReady(function() {
                currentWebview = plus.webview.currentWebview(),
                    template = plus.webview.getWebviewById("template_five"),
                    subWebview = plus.webview.getWebviewById("sub_template_five"),
                    mui(".messagebox li").on("tap", "a",
                        function() {})
            }),
            mui("#packet").on("tap", ".shuaxin",
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
                            500)
                })
    }
});