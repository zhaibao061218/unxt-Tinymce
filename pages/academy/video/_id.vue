<template>
    <div>
        <van-nav-bar class="m-t-10" title="For Beginners · Quickly Understand How Rebatest Works" left-arrow :border="true" @click-left="$router.go(-1)" />
        <div class="container m-t-20 m-l-15 m-r-15 m-b-20">
            <div class="Quickly bg-white p-10">
                <div class="playvideo">
                    <div class="video" id="J_prismPlayer"></div>
                    <div class="videosixe">
                        <p>{{ CourseTitle }}</p>
                        <p>{{ BrowseCount }} views · {{ CreateTime }}</p>
                    </div>
                    <div class="give">
                        <div class="dian">
                            <div id="zan" @click="like">
                                <img v-if="IsLikes" src="~@/assets/img/academy/dianzan.png" />
                                <img v-else src="~@/assets/img/academy/dianzanl.png" />
                                <div id="num1">{{ LikesCount }}</div>
                            </div>
                            <div id="cai" @click="unlike">
                                <img v-if="IsDown" src="~@/assets/img/academy/cai.png" />
                                <img v-else src="~@/assets/img/academy/cail.png" />
                                <div id="num2">{{ DownCount }}</div>
                            </div>
                            <div id="fen">
                                <van-icon name="share" size="24" @click="showShare = true" />
                                <div id="num3">Share</div>
                                <van-share-sheet cancel-text="Cancel" @select="onShareSelect" v-model="showShare" :options="options" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sideBar">
                    <h3>Up next</h3>
                    <ul>
                        <li v-for="(item, index) in videosList" :key="index">
                            <a :href="'./academy/video/' + item.Id">
                                <img width="165" :src="item.MobileImageUrl" alt="" />
                                <div class="infos">
                                    <h4>{{ item.CourseTitle }}</h4>
                                    <p>{{ item.BrowseCount }} views· {{ item.CreateTime }}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showShare: false,
            
            meta: [
                //facebook && twitter
                {
                    property: "og:url",
                    content: this.shareUrl,
                },
                {
                    property: "og:type",
                    content: "article",
                },
                {
                    property: "og:title",
                    content: "For Beginners · Quickly Understand How Rebatest Works",
                },
                {
                    property: "og:image",
                    content: this.mobileImageUrl,
                },
                {
                    property: "og:description",
                    content: this.CourseTitle,
                },
            ],
            options: [{
                    icon: require('@/assets/img/academy/facebook.png'),
                },
                {
                    icon: require('@/assets/img/academy/pinterest.png'),
                },
                {
                    icon: require('@/assets/img/academy/twitter.png'),
                },
            ],
        };
    },
    async asyncData({
        params,
        $axios,
        $cookies
    }) {
        let {
            data
        } = await $axios.get(
            "/api/academy/show/CourseArticle/getvideoplayauth_detail?Id=" +
            params.id +
            "&userId=" +
            ($cookies.get("UserId") || 0)
        );
        let {
            Id,
            CourseTitle,
            mobileVideoUrl,
            mobileImageUrl,
            BrowseCount,
            LikesCount,
            DownCount,
            videosList,
            CreateTime,
            IsLikes,
            IsDown,
        } = data.ResponseData;
        return {
            Id,
            CourseTitle,
            mobileVideoUrl,
            mobileImageUrl,
            BrowseCount,
            LikesCount,
            DownCount,
            videosList,
            CreateTime,
            IsLikes,
            IsDown,
            shareUrl: "http://rebatest.pingjiae.com/v2/academy/video/" + Id,
        };
    },
    mounted() {
        this.initAliplayer();
    },
    methods: {
        initAliplayer() {
            this.$axios
                .get("/api/academy/show/Play/GetVideoPlayauth?VideoId=" + this.mobileVideoUrl)
                .then((res) => {
                    this.player = new Aliplayer({
                        id: "J_prismPlayer",
                        language: "en-us",
                        autoplay: false,
                        width: "100%",
                        height: "300px",
                        cover: this.mobileImageUrl,
                        vid: this.mobileVideoUrl,
                        playauth: res.data.PlayAuth,
                    });
                });
        },

        //点赞
        like() {
            if (!this.$store.state.UserInfo) {
                this.comsys.doLogin();
            } else {
                this.$axios
                    .get(
                        "/api/academy/show/CourseArticle/clinklikes?courseId=" +
                        this.Id +
                        "&userId=" +
                        (this.$cookies.get("UserId") || 0)
                    )
                    .then((res) => {
                        this.LikesCount = res.data.ResponseData;
                        this.IsLikes = !this.IsLikes;
                    });
            }
        },
        //踩
        unlike() {
            if (!this.$store.state.UserInfo) {
                this.comsys.doLogin();
            } else {
                this.$axios
                    .get(
                        "/api/academy/show/CourseArticle/clinkdown?courseId=" +
                        this.Id +
                        "&userId=" +
                        (this.$cookies.get("UserId") || 0)
                    )
                    .then((res) => {
                        this.DownCount = res.data.ResponseData;
                        this.IsDown = !this.IsDown;
                    });
            }
        },
        onShareSelect(option,index) {
          this.$options.methods.doShare(index);
        },
        doShare(type) {
            if (type == "0") {
                if (typeof FB != "undefined") {
                    FB.ui({
                        method: "share",
                        href: location.href,
                    });
                }
            } else if (type == "2") {
                window.open(
                    "https://twitter.com/intent/tweet?url=" +
                    encodeURIComponent(location.href) +
                    "&text=" +
                    encodeURIComponent(
                        "For Beginners · Quickly Understand How Rebatest Works " + this.CourseTitle
                    ),
                    "_blank"
                );
            } else if (type == "1") {
                window.open(
                    "https://www.pinterest.com/pin-builder/?url=" +
                    encodeURIComponent(location.href) +
                    "&method=button&h=765&w=1024&media=" +
                    encodeURIComponent(this.mobileImageUrl) +
                    "&description=" +
                    encodeURIComponent(
                        "For Beginners · Quickly Understand How Rebatest Works " + this.CourseTitle
                    ),
                    "_blank"
                );
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.sideBar {
    flex: 1;

    h3 {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
        color: #333333;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none outside;
    }

    li {
        margin-top: 20px;

        a {
            display: flex;
            align-items: center;
            text-decoration: none;

            h4 {
                margin: 0;
                font-size: 16px;
                color: #333333;
            }

            p {
                margin: 20px 0 0;
                font-size: 14px;
                font-weight: 400;
                color: #333333;
            }
        }

        img {
            margin-right: 15px;
        }
    }
}

#zan>img,
#cai>img,
#fen>img {
    height: 20px;
}

.give {
    width: 98%;
    margin-bottom: 20px;
}

.dian {
    display: flex;
    justify-content: flex-end;
}

#fen i {
    color: #8a8a8a;
}

.popperSnsShare {
    img {
        cursor: pointer;
        width: 60px;
        margin: 0 10px;

        &.pinterest {
            margin: 0 35px;
        }
    }
}

#zan,
#cai,
#fen {
    text-align: center;
    width: 50px;
    flex-direction: row;
    justify-content: center;
    user-select: none;
}

#zan #num1,
#cai #num2,
#fen #num3 {
    margin-right: 3px;
    font-size: 12px;
}

.videosixe>p:nth-of-type(1) {
    font-size: 12px;
    font-weight: bold;
    color: #333333;
}

.videosixe>p:nth-of-type(2) {
    width: 275px;
    height: 21px;
    font-size: 12px;
    font-weight: 400;
    color: #555555;
}

.videosixe {
    width: 95%;
    margin: 10px auto 10px;
}

.video>img {
    width: 100%;
}

.playvideo {
    width: 100%;
    border: 1px solid #999999;
    margin-bottom: 25px;
}
#J_prismPlayer {
  position: relative;
}
</style>
