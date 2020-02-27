var logintemp, wgtVer = null;
mui.plusReady(function() {
    mui.init(),
        $(".version .none").text(plus.runtime.version),
        mui(".lists li").on("tap", "#clear",
            function() {
                plus.nativeUI.toast("程序退出成功"),
                    plus.storage.clear(),
                    localStorage.clear(),
                    plus.runtime.quit()
            })
});