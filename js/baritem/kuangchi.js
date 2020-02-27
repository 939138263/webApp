window.addEventListener("updateVrc",
    function(e) {
        getmarketdata("GetMyFamily", "get", {
                userid: localStorage.getItem("userid"),
                type: "0",
                pageno: "1"
            },
            !0,
            function(e) {
                1 == e.success && (
                    vue1.zhi = e.body.paging,
                    vue1.count1 = e.body.pageCount,
                    vue1.zhinum = e.body.dataCount,
                        vue1.common = e.body.common,
                        vue1.one = e.body.one,
                        vue1.two = e.body.two,
                        vue1.three = e.body.three,
                        vue1.four = e.body.four,
                        vue1.power = e.body.power,
                        vue1.grade = e.body.grade,
                        vue1.myHomePower = e.body.myHomePower,
                        vue1.myHomeVrcDay = e.body.myHomeVrcDay,
                        vue1.myHomeAll = e.body.myHomeAll,
                        vue1.vrcDay = e.body.vrcDay,
                        vue1.onepopo = !1,
                        vue1.twopopo = !1
                )
            },
            function(e) {})
    });
var imgarr = [],
    resimg = [],
    imgarr2 = [],
    resimg2 = [],
    pageNo1 = 1,
    pageNo2 = 1,
    vue1 = new Vue({
        el: "#kuangchi",
        data: {
            zhi: [],
            tuan: [],
            zhinum: 0,
            tuannum: 0,
            zhiimg: [],
            tuanimg: [],
            common: "0",
            one: "0",
            two: "0",
            three: "0",
            four: "0",
            power: "0",
            myHomePower: "0",
            myHomeVrcDay: "0",
            myHomeAll: "0",
            vrcDay: "0",
            grade: 0,
            count1: 0,
            count2: 0,
            isactive: !1,
            isactive2: !1,
            tradeinfo: {
                id: "",
                tel: ""
            },
            zhituiobj: {
                num: 0,
                common: 0,
                one: 0,
                two: 0,
                three: 0,
                four: 0
            },
            onepopo: !1,
            twopopo: !1
        },
        computed: {
            imgurl: function(e) {
                return this.zhiimg
            },
            imgurl2: function(e) {
                return this.tuanimg
            },
            mygrade: function() {
                return 0 == this.grade ? "普通矿工": 1 == this.grade ? "一级矿工": 2 == this.grade ? "二级矿工": 3 == this.grade ? "三级矿工": 4 == this.grade ? "四级矿工": -1 == this.grade ? "异常矿工": "普通矿工"
            }
        },
        methods: {
            looknum: function() {
                vue1.twopopo = !1,
                    vue1.onepopo = !0,
                    getmarketdata("GetMyFamilyNum", "get", {
                            userid: localStorage.getItem("userid")
                        },
                        !0,
                        function(e) {
                            vue1.zhituiobj = e.body.ds[0]
                        },
                        function(e) {}),
                    mui("#popover").popover("show")
            },
            lookinfo: function(e, t) {
                vue1.twopopo = !0,
                    vue1.onepopo = !1,
                    vue1.tradeinfo = {
                        id: e,
                        tel: t
                    },
                    mui("#popover").popover("show")
            },
            closeinfo: function() {
                mui("#popover").popover("hide")
            },
            hideData: function(e) {
                1 == e ? (vue1.isactive = !0, vue1.myHomePower = "0") : (vue1.isactive2 = !0, vue1.myHomeVrcDay = "0 VRC/天")
            },
            showData: function(e) {
                1 == e ? (vue1.isactive = !1, vue1.myHomePower = "***") : (vue1.isactive2 = !1, vue1.myHomeVrcDay = "***")
            },
            pulldownRefreshs: function(e) {
                mui.toast("已刷新"),
                    pageNo1 = 1,
                    pageNo2 = 1,
                    getmarketdata("GetMyFamily", "get", {
                            userid: localStorage.getItem("userid"),
                            type: "0",
                            pageno: 1
                        },
                        !0,
                        function(e) {
                            1 == e.success ? (plus.nativeUI.closeWaiting(),
                                vue1.zhi = [],
                                vue1.tuan = [],
                                vue1.zhiimg = [],
                                vue1.tuanimg = [],
                                resimg = [],
                                resimg2 = [],
                                vue1.zhi = e.body.paging,
                                vue1.count1 = e.body.pageCount,
                                vue1.zhinum = e.body.dataCount,
                                vue1.common = e.body.common,
                                vue1.one = e.body.one,
                                vue1.two = e.body.two,
                                vue1.three = e.body.three,
                                vue1.four = e.body.four,
                                vue1.power = e.body.power,
                                vue1.grade = e.body.grade,
                                vue1.myHomePower = e.body.myHomePower, vue1.myHomeVrcDay = e.body.myHomeVrcDay, vue1.myHomeAll = e.body.myHomeAll, vue1.vrcDay = e.body.vrcDay, vue1.onepopo = !1, vue1.twopopo = !1, $.each(e.body.paging,
                                function(e, t) {
                                    imgarr.push(t.photo),
                                        vue1.zhiimg.push("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEyNjc4MjJDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyNjc4MjNDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTI2NzgyMEM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTI2NzgyMUM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMvVLsAAAn9SURBVHja7J3LTxzJGcDr0Y8ZhoHhsbAMXoNje4gsOYqW5LKKZJRDcsnsOfEfwOyZcB9zymXFHfbOnvZiLEXKIWKlKFkpy8ZKIsseex1gzcMsYJgX9KOqUtVdPcCYxzBMT88MfNLn9nzTXd31q++r+qq7p4DgX+sgQFG4tnENSdW5atKOpDKuRCrlanE1uB5ILXK1g6xAPUUAiXLtkNtwBcdAeZ3etZ50zD7XHNes3NJWAyiA9XCNSYi1lrDUPglvl+u2BNq0AAWoXq79Mizr6eXdUk2ub7lu+eWVik8V+IDrhwF0EeUiGu4jrgMS5GatQda6gqLVB+vscZXWc1A27CrXnUYDKIANyb6ukUVc5y3ZHy/LEL90uNXC6+41AbzyQe2evPbAPBDJ/qUXNKdg6Y0C5kq1faNyCfB3uEZA80uPTOJfVZOQVxPCYrbw0xaB50lE1kn3G6BoqZFqTtQEosu6hfwCKE5wl6sKWldUWUe91gAVWbAGWl80WVelVgChHDB0cHVEl3WGtQB4s8UGjIsMLDcvC7C7ifO8Wkjveck2OqcvuAmu5eZZff9ZAIdktn7VBUsWFwLY3WRz23rMnbsrBShsg9fM3pPBk3idBLDviuR71eSHfecBFJ/7r1mdKv3lzNAJw7ZyzenMGVlvuaE8fC83ZHWH4mosNEYN8sKzmau5xVMnn/2RBFRQFKooDjEa8OyM0HW6b7+w3hYyDeiFmycB7KjFdI3sHKzhsPpCiWrjEMFRB1KnWywxyOzB9+9mQ7e7xrGOx8/NHtpUoHWH1qysOXVWIwTQFwpW2fIQ7qnVGURli8+3U9Sm8xXsnhP72Xlz0tozUkLJgT3NPXDBnYnDOG+AGX24M+lccESNhhPdaW0wOhrwDOWYBwqQsVqfxVjNTYeHOseA+xbCiWIXrWljaa8ctPC2ORHealfoEffkhNKmpml/xAlpapLvBFQe9lMnHFsP6ZTMKDoSvjV/Y4AWrBy1yJkVZBZdO+07AcvYLEwC93UNwGH+0WkYAY2xNQHV88w6C/ImGkcB+iKkaH991vf27kHmvD7VawTRp4pBymkc2w1xDnFChHVAsxP/AZ4HSHjpRRpBjPDOcQb5TpqiWn8kGSRABfh4s1QAgpQBRxlzxwUmP1NW8aBUKgOAdif0bVoqF2P4cQAABTPFez/PV4E2e28LEauqDAzc1IiZHKC0AQqCCGEhkboARDb1kmP3M98iG1ZXBvVAgmi5LQAJ+xq+h5UnQIZdCQa6AD+1XY17ZRCLOgk1pBSU24II4/oAtOj7AC90lTjhlUFM4ryTrEM46tkOitZCkAB9f86LTemBhJWA4guEXYixB0iWkS9ajrcphCYQL4MytrCfM4OaL6tKPe6+IFN6Hj0EiEhlMdyu4YRis6R415wwNm8YZC2k4rhisTHGWGbXsKeCvDsj4EH/Abreg5gHkPA+8PzTxjAabWPgc+Aen9u26bQzj2Lg99SwZzdtOhvwjQWkgDo8OMLSA51/oQDIczfgwhwAcILbNywASre/eJ8ywi/sAbLZqPA8vmcmD8AjCzIn6d6xyReWnN41AkDmtxeWPFCcRUOuB7LSvaGHTj93WhINwfS6huaOzZEbA15pUkzq0Qc6ankhzEo2g7JJwNMQ+TlHbTZHbDYLLZoRtpBBJ4by9sxAkSRB44lzN8b3H6VwGK7KNEZsPdtGGC8styupfQgmxWfVIA/5INO+HkKpAgIpnvos8i5gNHxA0rfemY97iiTRaAB990BoMlelB4qtZ/Nko11ZyKooBSyWUQ/ow8Fta4bnyrmlLi21j+Ak3zeHDBaPZe25wR2rUbzRFgBt/z3QhXdsLmwdAvVkK6pk1mJqCtiMhy9LxHbtmd49O7EeUxdWu9RPhV0cEy6Q9NCGMd4AAC0B0PD9NKZU63AUKNnK5EBHudVejYcuyPDvo7Ete+7Gmpn07ITCeXGcWmDjt5aNdMAAjboAZHwoddRyB3ux9WwnyUEI5d70aylqw4zYR99j6cEVKyns/xvSp2yG5oUdFUFy+JWZDhpg0feellfWUQlQbD3bqVfWhnK7Hcojvm9O7Ke9Y+kPl+wx8d3SHW3K4hCFHRZA8uYzKyiI+/UByNvJUQtJgKhkO0t2BnBmt1tJURPlxL76jyDd9YY6o/DKPdWFyO0wD5M3ntpBQCx4g4ivYUxM7OhRgJ7tPHl3A2V2+3CKWDhHDByNLMOZzmXmQHzzc2XKhHjeKSePk/Fv2IyardvNVcMbhZ15pl9n6XwORz1YHIK8f4dLAKOv4bl53d4QzOwNoBLEttd4pucpclKZ9V/CKRO5EFkRj3L7TCVl1kCOPVjf8y2FyeN4CaBsL7H1bHgHj1RSTu4nLJO9AUsQ8QZOx75VHIibn9Cp/Q405Xh5ESfCL5WZ7r8r4/UEmPVrRgLf4Y8PQxjLED70QLiNH1Tc4dwlmdwwcyEK+GtKuuMbzYG4+wt7vhAHJcBwSxnvfhJ63Pk37aG2gp1HoWLr/f+y3Xo5QOqHF+rPtATLKkknZK0yD5Q2llfGxH4VD3sjdiZ/m6ZsgDLieLSqpjv+3JbG2zha+Jm1uPuJ9amlonnxHTVwHL5VJ9r+GXoc+yrybfip/jmJ1KS72vMcDoPPJkt9Pajh+zHqf/WE9lx7xCzUwyjP+bgSHSxad6xF5aU+ysevUc+OdvB9Gmb/oF20osqRD8i21UP/glfVYWagYZ6NjajL6m/gPsrw8peMu9bXZh/9EhTwMkUwQzSwaHewJ/nfFv/E2phZg+q98QZeWLbsyX1wybdT8fd6XH8amoD7cIzp7NjDHtJDnhi/zs/rf21Pco/53fH5MkzQCF0w7xtfkNvGWsUN9e9wQnmt/gEacARafPDAYI2G6aLxq+I07bX9GBxFA/yndN1lAMX7gR+BazlLfgBH3g8sz2S3QICL2DSB2JIROA2g6BjfXnM6Vd6WZysnzaU2QQ0WY2hBMY+G7lkABeHVa17vyepJufJps/kdUIdlk5pIsuCUtWbOuh2yDOpwu78JRDBYOe1LdE7M/3DNz2FgVANQyHb5sH3FZEsyANUCBNJ9C1cQXqGSCKwEoHh09grU4+FT44gh60xrAdDLwF+Cw+dqrSyWrGtFMzJ0wVbJtHiSbco6VhxtF/1xjVj09YXctppUVTdUZSuJE+VbCF5e1unC0VXtz7ts6eqbLQBvU9alqrtQl3m9l8lhXty0HAbNt8KHmGEsAXfF36qlFj8wFBfwrMnmzll5zbuXLahWL5ibcuhv1EVoj15nQy5C68mObFXxaKAfNM76C6J/a4plkIG8wA2uPwL3KV9/gB7pLcS9DXy6s+SnhxDZ4kL9Xgq+vAFbYin48k47C6r7YwSVSMv/MYKj3rEHDt+CqOTPYXjHUdmXmaCB/hzG/wUYAD4jpy4xYQtXAAAAAElFTkSuQmCC")
                                }), resimg = postImgArr(imgarr), setTimeout(function() {
                                    vue1.zhiimg.length <= resimg.length ? vue1.zhiimg = resimg: $.each(resimg,
                                        function(e, t) {
                                            vue1.zhiimg.push(t)
                                        })
                                },
                                1e3)) : mui.toast(e.msg)
                        },
                        function(e) {}),
                    mui("#kuangchi").pullRefresh().endPulldown()
            },
            mygrade: function(e) {
                return 0 == e ? "普通矿工": 1 == e ? "一级矿工": 2 == e ? "二级矿工": 3 == e ? "三级矿工": 4 == e ? "四级矿工": "普通矿工"
            },
            getnewpage: function(e, t, i) {
                "0" == t ? getmarketdata("GetMyFamily", "get", {
                        userid: localStorage.getItem("userid"),
                        type: t,
                        pageno: i
                    },
                    !0,
                    function(e) {
                        1 == e.success ? (imgarr = [], $.each(e.body.paging,
                            function(e, t) {
                                vue1.zhi.push(t)
                            }), vue1.zhinum = e.body.dataCount, $.each(e.body.paging,
                            function(e, t) {
                                imgarr.push(t.photo)
                            }), resimg = postImgArr(imgarr), setTimeout(function() {
                                $.each(resimg,
                                    function(e, t) {
                                        vue1.zhiimg.push(t)
                                    })
                            },
                            500)) : mui.toast(e.msg)
                    },
                    function(e) {}) : getmarketdata("GetMyFamily", "get", {
                        userid: localStorage.getItem("userid"),
                        type: t,
                        pageno: i
                    },
                    !0,
                    function(e) {
                        1 == e.success && e.body.paging.length > 0 ? ($.each(e.body.paging,
                            function(e, t) {
                                vue1.tuan.push(t)
                            }), vue1.tuannum = e.body.dataCount, $.each(e.body.paging,
                            function(e, t) {
                                imgarr2.push(t.photo),
                                    vue1.tuanimg.push("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEyNjc4MjJDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyNjc4MjNDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTI2NzgyMEM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTI2NzgyMUM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMvVLsAAAn9SURBVHja7J3LTxzJ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")
                            }), 0 == !imgarr2.length && (resimg2 = postImgArr(imgarr2)), setTimeout(function() {
                                vue1.tuanimg.length <= resimg2.length ? vue1.tuanimg = resimg: $.each(resimg2,
                                    function(e, t) {
                                        vue1.tuanimg.push(t)
                                    })
                            },
                            500)) : mui.toast(e.msg)
                    },
                    function(e) {})
            }
        },
        mounted: function() {
            mui.plusReady(function() {
                mui.init({
                    swipeBack: !1
                }),
                    new Clipboard(".copy");
                var e = null;
                mui.back = function() {
                    e ? (new Date).getTime() - e < 2e3 && ("true" == localStorage.getItem("isrem") ? plus.runtime.quit() : (localStorage.clear(), plus.storage.clear(), plus.runtime.quit())) : (e = (new Date).getTime(), mui.toast("再按一次退出系统!"), setTimeout(function() {
                            e = null
                        },
                        2e3))
                };
                plus.webview.currentWebview(),
                    mui.ready(function() {
                        mui(".mui-scroll-wrapper").scroll({
                            bounce: !0,
                            indicators: !1,
                            deceleration: mui.os.ios ? .003 : 9e-4
                        }),
                            mui("#one").pullRefresh({
                                up: {
                                    height: 100,
                                    auto: !1,
                                    contentrefresh: "正在加载...",
                                    contentnomore: "",
                                    callback: function() {
                                        var e = this;
                                        setTimeout(function() {
                                                e.endPullupToRefresh(vue1.count1 <= ++pageNo1),
                                                vue1.count1 <= pageNo1 && mui.toast("没有更多了"),
                                                    vue1.getnewpage(localStorage.getItem("userid"), "0", pageNo1)
                                            },
                                            150)
                                    }
                                }
                            }),
                            mui("#two").pullRefresh({
                                up: {
                                    height: 100,
                                    auto: !1,
                                    contentrefresh: "正在加载...",
                                    contentnomore: "",
                                    callback: function() {
                                        var e = this;
                                        setTimeout(function() {
                                                e.endPullupToRefresh(vue1.count2 <= ++pageNo2),
                                                vue1.count2 <= pageNo2 && mui.toast("没有更多了"),
                                                    vue1.getnewpage(localStorage.getItem("userid"), "1", pageNo2)
                                            },
                                            150)
                                    }
                                }
                            }),
                            getmarketdata("GetMyFamily", "get", {
                                    userid: localStorage.getItem("userid"),
                                    type: "0",
                                    pageno: "1"
                                },
                                !0,
                                function(e) {
                                    1 == e.success ? (vue1.zhi = e.body.paging, vue1.count1 = e.body.pageCount, vue1.zhinum = e.body.dataCount, vue1.common = e.body.common, vue1.one = e.body.one, vue1.two = e.body.two, vue1.three = e.body.three, vue1.four = e.body.four, vue1.power = e.body.power, vue1.grade = e.body.grade, vue1.myHomePower = e.body.myHomePower, vue1.myHomeVrcDay = e.body.myHomeVrcDay, vue1.myHomeAll = e.body.myHomeAll, vue1.vrcDay = e.body.vrcDay, vue1.onepopo = !1, vue1.twopopo = !1, $.each(e.body.paging,
                                        function(e, t) {
                                            imgarr.push(t.photo),
                                                vue1.zhiimg.push("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEyNjc4MjJDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyNjc4MjNDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTI2NzgyMEM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTI2NzgyMUM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMvVLsAAAn9SURBVHja7J3LTxzJ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")
                                        }), resimg = postImgArr(imgarr), setTimeout(function() {
                                            vue1.zhiimg.length <= resimg.length ? vue1.zhiimg = resimg: $.each(resimg,
                                                function(e, t) {
                                                    vue1.zhiimg.push(t)
                                                })
                                        },
                                        1e3)) : mui.toast(e.msg)
                                },
                                function(e) {}),
                            mui(".tapbox").on("tap", "li",
                                function() {
                                    var e = this.getAttribute("data-index");
                                    "show1" == e ? vue1.zhi.length > 0 || getmarketdata("GetMyFamily", "get", {
                                            userid: localStorage.getItem("userid"),
                                            type: "0",
                                            pageno: "1"
                                        },
                                        !0,
                                        function(e) {
                                            1 == e.success ? (vue1.zhi = e.body.paging, vue1.count2 = e.body.pageCount, vue1.zhinum = e.body.dataCount, imgarr = [], $.each(e.body.paging,
                                                function(e, t) {
                                                    imgarr.push(t.photo),
                                                        vue1.zhiimg.push("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEyNjc4MjJDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyNjc4MjNDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTI2NzgyMEM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTI2NzgyMUM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMvVLsAAAn9SURBVHja7J3LTxzJ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")
                                                }), resimg = postImgArr(imgarr), setTimeout(function() {
                                                    vue1.zhiimg.length <= resimg.length ? vue1.zhiimg = resimg: $.each(resimg,
                                                        function(e, t) {
                                                            vue1.zhiimg.push(t)
                                                        })
                                                },
                                                500)) : mui.toast(e.msg)
                                        },
                                        function(e) {}) : vue1.tuan.length > 0 || getmarketdata("GetMyFamily", "get", {
                                            userid: localStorage.getItem("userid"),
                                            type: "1",
                                            pageno: "1"
                                        },
                                        !0,
                                        function(e) {
                                            1 == e.success && e.body.paging.length > 0 ? (vue1.tuan = e.body.paging, vue1.count2 = e.body.pageCount, vue1.tuannum = e.body.dataCount, $.each(e.body.paging,
                                                function(e, t) {
                                                    imgarr2.push(t.photo),
                                                        vue1.tuanimg.push("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTEyNjc4MjJDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTEyNjc4MjNDOTIwMTFFNzg3NTBDNURBMTVCQzBCRDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTI2NzgyMEM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTI2NzgyMUM5MjAxMUU3ODc1MEM1REExNUJDMEJENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlMvVLsAAAn9SURBVHja7J3LTxzJ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")
                                                }), 0 == !imgarr2.length && (resimg2 = postImgArr(imgarr2)), setTimeout(function() {
                                                    vue1.tuanimg.length <= resimg2.length ? vue1.tuanimg = resimg: $.each(resimg2,
                                                        function(e, t) {
                                                            vue1.tuanimg.push(t)
                                                        })
                                                },
                                                500)) : mui.toast(e.msg)
                                        },
                                        function(e) {});
                                    var t = $("#" + e);
                                    $(".tapbox li").removeClass("tapactive"),
                                        this.classList.add("tapactive"),
                                        $(".showbox li").removeClass("showactive"),
                                        t.addClass("showactive")
                                }),
                            mui("#kuangchi").on("tap", ".shuaxin",
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
            })
        }
    });