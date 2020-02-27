var currentWebview, subWebview, temp, userid;
window.addEventListener("logout",
    function(e) {}),
    window.addEventListener("loginSucc",
        function(e) {
            userid = e.detail.userid,
                location.reload()
        }),
    window.addEventListener("renzheng",
        function(e) {
            vue1.isReally = 1
        }),
    window.addEventListener("updateVrc",
        function(e) {
            vue1.getdatas(localStorage.getItem("userid"))
        });
var vue1 = new Vue({
    el: "#mine",
    data: {
        myid: "",
        name: "",
        vrcToTal: 0,
        vrcFrozen: 0,
        keyong: 0,
        isReally: 0,
        photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEyNjc4MjJDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyNjc4MjNDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTI2NzgyMEM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTI2NzgyMUM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMvVLsAAAn9SURBVHja7J3LTxzJ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",
        parentId: "",
        grade: 0,
        isRead: 0
    },
    created: function() {
        this.getdatas(localStorage.getItem("userid"))
    },
    computed: {
        mygrade: function() {
            return 0 == this.grade ? "普通矿工": 1 == this.grade ? "一级矿工": 2 == this.grade ? "二级矿工": 3 == this.grade ? "三级矿工": 4 == this.grade ? "四级矿工": "普通矿工"
        }
    },
    methods: {
        getdatas: function(e) {
            getdata("GetLogin", "get", {
                    userid: e
                },
                !0,
                function(e) {
                    1 == e.success && (
                        vue1.myid = e.body[0].myId,
                            vue1.name = e.body[0].name,
                            vue1.vrcToTal = e.body[0].vrcToTal,
                            vue1.vrcFrozen = e.body[0].vrcFrozen,
                            localStorage.setItem("tel", e.body[0].tel),
                            vue1.keyong = Math.floor(100 * (e.body[0].vrcToTal - e.body[0].vrcFrozen)) / 100,
                            vue1.isReally = e.body[0].isReally,
                            vue1.parentId = e.body[0].parentId,
                            vue1.grade = e.body[0].grade,
                            vue1.isRead = e.body[0].isRead,
                            "" != e.body[0].weiXin ? localStorage.setItem("weixin", "1") :
                                localStorage.setItem("weixin", "0"),
                            "" != e.body[0].alipay ? localStorage.setItem("alipay", "1") :
                                localStorage.setItem("alipay", "0"),
                            localStorage.setItem("isPass", e.body[0].payPassword),
                            localStorage.setItem("myid", e.body[0].myId),
                            localStorage.setItem("tradeok", e.body[0].isReally),
                            null == e.body[0].photo ?
                                localStorage.setItem("headimg", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEyNjc4MjJDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyNjc4MjNDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTI2NzgyMEM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTI2NzgyMUM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMvVLsAAAn9SURBVHja7J3LTxzJ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")
                                : (vue1.photo = "data:image/png;base64," + e.body[0].photo, localStorage.setItem("headimg", "data:image/png;base64," + e.body[0].photo)))
                },
                function(e) {})
        },
        pulldownRefreshs: function(e) {
            getdata("GetLogin", "get", {
                    userid: e
                },
                !0,
                function(e) {
                    1 == e.success && (vue1.myid = e.body[0].myId,
                        vue1.name = e.body[0].name, vue1.vrcToTal = e.body[0].vrcToTal,
                        vue1.vrcFrozen = e.body[0].vrcFrozen, vue1.grade = e.body[0].grade,
                        vue1.keyong = Math.floor(100 * (e.body[0].vrcToTal - e.body[0].vrcFrozen)) / 100,
                        vue1.isReally = e.body[0].isReally, vue1.isRead = e.body[0].isRead,
                        vue1.parentId = e.body[0].parentId,
                    null == e.body[0].photo || (vue1.photo = "data:image/png;base64," + e.body[0].photo,
                        localStorage.setItem("headimg", "data:image/png;base64," + e.body[0].photo)))
                },
                function(e) {}),
                mui("#mine").pullRefresh().endPulldown()
        }
    },
    mounted: function() {
        mui.plusReady(function() {
            var e = mui.preload({
                    url: "template_vrc_history.html",
                    id: "template_history",
                    styles: {
                        popGesture: "hide"
                    }
                }),
                t = mui.preload({
                    url: "",
                    id: "sub_template_history",
                    styles: {
                        top: "44px",
                        popGesture: "hide"
                    }
                });
            e.append(t),
                mui.init({
                    swipeBack: !1,
                    pullRefresh: {
                        container: "#mine",
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
                });
            var i = null;
            mui.back = function() {
                i ? (new Date).getTime() - i < 2e3 && ("true" == localStorage.getItem("isrem") ? plus.runtime.quit() : (localStorage.clear(), plus.storage.clear(), plus.runtime.quit())) : (i = (new Date).getTime(), mui.toast("再按一次退出系统!"), setTimeout(function() {
                        i = null
                    },
                    2e3))
            },
                currentWebview = plus.webview.currentWebview(),
                template = plus.webview.getWebviewById("template"),
                subWebview = plus.webview.getWebviewById("sub_template"),
                template_three = plus.webview.getWebviewById("template_three"),
                subWebview_three = plus.webview.getWebviewById("sub_template_three"),
                template_four = plus.webview.getWebviewById("template_four"),
                subWebview_four = plus.webview.getWebviewById("sub_template_four"),
                template_second = plus.webview.getWebviewById("template_second"),
                subWebview_second = plus.webview.getWebviewById("sub_template_second"),
                loginWebview = plus.webview.getWebviewById("login.html"),
                mui(".topbtnbox li").on("tap", "a",
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
                mui(".topbox").on("tap", ".norenzheng",
                    function() {
                        var e = this.getAttribute("data-title");
                        mui.fire(template_second, "updateHeader", {
                            title: e,
                            href: this.href
                        }),
                            subWebview_second.getURL() == this.href ? subWebview_second.show() : (subWebview_second.loadURL(this.href), subWebview_second.addEventListener("loaded",
                                function() {
                                    setTimeout(function() {
                                            subWebview_second.show()
                                        },
                                        50)
                                })),
                            template_second.show("slide-in-right", 150)
                    }),
                mui(".topbox").on("tap", ".renzheng",
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
                mui(".headimg").on("tap", "a",
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
                mui(".gongnengbox li").on("tap", "a",
                    function() {
                        var i = this,
                            a = i.getAttribute("data-title");
                        0 == $(i).parent().index() ? (mui.fire(template_three, "updateHeader", {
                            title: a,
                            href: i.href
                        }), subWebview.getURL() == i.href ? subWebview_three.show() : (subWebview_three.loadURL(i.href), subWebview_three.addEventListener("loaded",
                            function() {
                                setTimeout(function() {
                                        subWebview_three.show()
                                    },
                                    50)
                            })), template_three.show("slide-in-right", 150)) : 3 == $(i).parent().index() ? (mui.fire(template_four, "updateHeader", {
                            title: a,
                            href: i.href
                        }), subWebview.getURL() == i.href ? subWebview_four.show() : (subWebview_four.loadURL(i.href), subWebview_four.addEventListener("loaded",
                            function() {
                                setTimeout(function() {
                                        subWebview_four.show()
                                    },
                                    50)
                            })), template_four.show("slide-in-right", 150)) : 2 == $(i).parent().index() ? (mui.fire(e, "updateHeader", {
                            title: a,
                            href: i.href
                        }), t.getURL() == i.href ? t.show() : (t.loadURL(i.href), t.addEventListener("loaded",
                            function() {
                                setTimeout(function() {
                                        t.show()
                                    },
                                    50)
                            })), e.show("slide-in-right", 150)) : (mui.fire(template, "updateHeader", {
                            title: a,
                            href: i.href
                        }), subWebview.getURL() == i.href ? subWebview.show() : (subWebview.loadURL(i.href), subWebview.addEventListener("loaded",
                            function() {
                                setTimeout(function() {
                                        subWebview.show()
                                    },
                                    50)
                            })), template.show("slide-in-right", 150))
                    })
        })
    }
});
window.addEventListener("updateimg",
    function(e) {
        vue1.photo = localStorage.getItem("headimg")
    });