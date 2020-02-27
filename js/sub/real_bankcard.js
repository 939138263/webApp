var subWebview = null,
    template = null,
    flag = !0,
    times = 60,
    checktel = /^1[3|4|5|7|8]\d{9}$/,
    vue1 = new Vue({
        el: "#realbankcard",
        data: {
            accountName: "",
            openingBank: "中国工商银行",
            cardNumber: "",
            photo: localStorage.getItem("headimg"),
            showbtn: !1
        },
        created: function() {
            getdata("GetCus", "get", {
                    userid: localStorage.getItem("userid")
                },
                !0,
                function(e) {
                    1 == e.success && (vue1.accountName = e.body[0].accountName, vue1.idNumber = e.body[0].idNumber, vue1.cardNumber = e.body[0].cardNumber.substr( - 4, 4), vue1.openingBank = e.body[0].openingBank, "" == e.body[0].cardNumber && getdata("IsReally", "get", {
                            userid: localStorage.getItem("userid")
                        },
                        !0,
                        function(e) {
                            1 == e.success ? vue1.showbtn = !0 : (mui.toast(e.msg), vue1.showbtn = !1)
                        },
                        function(e) {}))
                },
                function(e) {})
        },
        mounted: function() {
            mui.init(),
                mui.plusReady(function() {
                    template = plus.webview.getWebviewById("template_three"),
                        subWebview = plus.webview.getWebviewById("sub_template_three"),
                        mui(".yzbox").on("tap", ".send",
                            function() {
                                if ("" != $("#username").val() && "" != $("#idcard").val() && "" != $("#cardnumber").val()) {
                                    var e = $("#banktel").val();
                                    if ("" != e && 1 == flag && checktel.test(e)) {
                                        flag = !1,
                                            plus.nativeUI.showWaiting("请等待..."),
                                            getdata("Send", "get", {
                                                    tel: e,
                                                    zone: "86",
                                                    type: 3
                                                },
                                                !0,
                                                function(e) {
                                                    1 == e.success ? (plus.nativeUI.toast(e.msg), plus.nativeUI.closeWaiting(), $(".send").attr("disabled", "disabled")) : (plus.nativeUI.toast(e.msg), plus.nativeUI.closeWaiting())
                                                },
                                                function(e) {
                                                    plus.nativeUI.closeWaiting(),
                                                        defaultWaiting()
                                                });
                                        var t = setInterval(function() {
                                                times--,
                                                    $(".send").text(times + "秒后再发送"),
                                                times < 0 && (clearInterval(t), $(".send").text("获取验证码"), flag = !0, times = 60, $(".send").removeAttr("disabled"))
                                            },
                                            1e3)
                                    } else plus.nativeUI.toast("手机号格式错误")
                                } else plus.nativeUI.toast("请先输入上面内容")
                            }),
                        mui("#realbankcard").on("tap", ".post",
                            function() {
                                var e = $("#cardnumber").val(),
                                    t = $("#username").val(),
                                    a = $("#idcard").val(),
                                    i = $("#banktel").val(),
                                    n = $("#yzcode").val();
                                "" != t && "" != a && "" != e && "" != i && "" != n ? (plus.nativeUI.showWaiting("请等待..."),
                                    getdata("CheckBankFour", "get", {
                                        cardtel: i,
                                        code: n,
                                        cardid: a,
                                        name: t,
                                        cardno: e,
                                        userid: localStorage.getItem("userid")
                                    },
                                    !0,
                                    function(e) {
                                        1 == e.success ? (localStorage.setItem("tradeok", "1"), setTimeout(function() {
                                                plus.nativeUI.toast(e.msg),
                                                    plus.nativeUI.closeWaiting(),
                                                    location.reload()
                                            },
                                            100), mui.back(), mui.fire(plus.webview.getWebviewById("template_three"), "sxdata"),
                                            mui.fire(plus.webview.getWebviewById("barItem/kuangji.html"), "sx"), mui.fire(plus.webview.getWebviewById("barItem/mine.html"), "renzheng"), mui.fire(plus.webview.getWebviewById("barItem/kuangshi.html"), "tradeok"), mui.fire(plus.webview.getWebviewById("barItem/kuangji.html"), "updateVrc"), mui.fire(plus.webview.getWebviewById("barItem/kuangchi.html"), "updateVrc")) : (plus.nativeUI.toast(e.msg), plus.nativeUI.closeWaiting())
                                    },
                                    function(e) {
                                        mui.back(),
                                            plus.nativeUI.closeWaiting()
                                    })) : plus.nativeUI.toast("存在空值")
                            })
                })
        }
    });