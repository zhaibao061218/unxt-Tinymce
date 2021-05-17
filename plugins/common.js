import Vue from 'vue'
var comsys = {
    install (Vue) {
        Vue.prototype.comsys = {
            //登入
            doLogin: function () {
                location.href = "/App_User/Login?backurl=" + encodeURIComponent(location.href);
            },
            //注册
            doReg: function () {
                location.href = "/User/Logup";
            },
            //中转url
            jump: function (url) {
                location.href = url
            },
            toScrollTop () {
                let scrollToptimer = setInterval(function () {
                    var top = document.body.scrollTop || document.documentElement.scrollTop;
                    var speed = top / 4;
                    if (document.body.scrollTop != 0) {
                        document.body.scrollTop -= speed;
                    } else {
                        document.documentElement.scrollTop -= speed;
                    }
                    if (top == 0) {
                        clearInterval(scrollToptimer);
                    }
                }, 30);
            },
            // 返回某个元素距离top 用元素id
            Visual (name) {
                // let box = document.getElementById('listbox')
                // console.log(document.body.scrollTop, 9999) // 获取可视top距离
                // console.log(box.offsetTop, 9999) // 获取top距离
                // document.documentElement.scrollTop = box.offsetTop
                let box = document.getElementById(name)
                document.documentElement.scrollTop = box.offsetTop
            },
            //分享facebook,Twitter,Pinterest
            share (shareSite, link, linkTitle, linkDesc, linkImg, Uid) {
                console.log(location.origin + '/v2/share?Uid=' + Uid + '&linkTitle=' + encodeURIComponent(linkTitle) + '&linkDesc=' + encodeURIComponent(linkDesc) + '&linkImg=' + encodeURIComponent(linkImg))
                if (shareSite == "facebook") {
                    let t = location.origin + '/v2/share?Uid=' + Uid + '&linkTitle=' + encodeURIComponent(linkTitle) + '&linkDesc=' + encodeURIComponent(linkDesc) + '&linkImg=' + encodeURIComponent(linkImg);
                    window.open("https://www.facebook.com/dialog/share?app_id=228869282257992&display=popup&href=" + encodeURIComponent(t) + "&redirect_uri=" + encodeURIComponent(t), "_blank");

                    // if (typeof FB != "undefined") {
                    //     if (linkTitle == "") {
                    //         linkTitle = "";
                    //     }
                    //     FB.ui({
                    //         method: "share",
                    //         href: location.origin + '/v2/share?Uid=' + Uid + '&linkTitle=' + encodeURIComponent(linkTitle) + '&linkDesc=' + encodeURIComponent(linkDesc) + '&linkImg=' + encodeURIComponent(linkImg)
                    //     });
                    // } 
                } else if (shareSite == "pinterest") {
                    window.open(
                        "https://www.pinterest.com/pin-builder/?url=" +
                        encodeURIComponent(link) +
                        "&method=button&h=765&w=1024&media=" +
                        encodeURIComponent(linkImg) +
                        "&description=" +
                        encodeURIComponent(linkDesc),
                        "_blank"
                    );
                } else if (shareSite == "twitter") {
                    window.open(
                        "https://twitter.com/intent/tweet?url=" +
                        encodeURIComponent(link) +
                        "&text=" +
                        encodeURIComponent(linkDesc),
                        "_blank"
                    );
                } else if (shareSite == "email") {
                    //发信
                    window.open('mailto:?subject=' + linkTitle + '&body=' + linkDesc + '%0D%0A%0D%0A%0D%0A' + link)
                }
            }
        };
    }
}
Vue.use(comsys);