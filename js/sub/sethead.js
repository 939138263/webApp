var tagwebview;
mui.plusReady(function() {
    function e(e) {
        mui("#cropper-sheet").popover("toggle"),
            mui.cropper.show(e,
                function(e) {
                    getdata("UploadImg", "post", {
                            userid: localStorage.getItem("userid"),
                            photo: e.slice(e.indexOf(",") + 1).replace(/\+/g, "^")
                        },
                        !0,
                        function(t) {
                            1 == t.success ? (plus.nativeUI.toast("上传成功"), localStorage.setItem("headimg", e), mui.fire(tagwebview, "updateimg", {
                                img: 999
                            }), mui.fire(tagwebview2, "updateimg", {
                                img: 999
                            }), document.getElementById("avatar").src = e,
                                plus.webview.currentWebview().hide(),
                                plus.webview.currentWebview().opener().hide(),
                                plus.webview.getWebviewById("template_second").hide(),
                                plus.webview.getWebviewById("barItem/mine.html").show()) :
                                plus.nativeUI.toast("上传失败请重试")
                        },
                        function(e) {}),
                        mui.saveImage(e, "_doc/cropper.jpg",
                            function(e) {})
                })
    }
    tagwebview2 = plus.webview.currentWebview().opener(),
        tagwebview = plus.webview.getWebviewById("barItem/mine.html"),
        document.getElementById("avatar").src = localStorage.getItem("headimg"),
        mui("#cropper-sheet").on("tap", ".mui-table-view-cell > a",
            function() {
                switch (this.getAttribute("data-type")) {
                    case "camera":
                        mui.captureImage(function(t) {
                            e(mui.getLocalFileURL(t))
                        });
                        break;
                    case "gallery":
                        mui.pickGallery(function(t) {
                            e(t)
                        })
                }
            })
});