<template>
<div>
    <van-nav-bar
      class="m-t-10"
      :title="Title"
      left-arrow
      :border="true"
      @click-left="$router.go(-1)"
    />
    <div class="m-l-15 m-r-15 m-t-20 m-b-20 bg-white">
        <div class="viewBrandStory p-t-20 p-b-20 p-r-10 p-l-10">
            <div class="videoContent">
                <div class="prism-player" id="J_prismPlayer"></div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            player: null,
        }
    },
    async asyncData({
        params,
        $axios,
        query
    }) {
        let {
            data
        } = await $axios.get("/api/academy/show/BrandStory/getbrandstoryshow");
        let {
            MobileViedoUrl,
            MobileImageUrl,
            BrowseCount,
            RealBrowseCount,
            CreateTime
        } = data.ResponseData[0];
        return {
            MobileViedoUrl,
            MobileImageUrl,
            BrowseCount,
            RealBrowseCount,
            CreateTime,
            Title: query.title.replace(/\+/g, ' ')
        };
    },
    mounted: function () {
        this.initAliplayer()
        this.Title = decodeURIComponent(this.$route.query.title);
    },
    methods: {
        initAliplayer() {
            this.$axios.get('/api/academy/show/Play/GetVideoPlayauth?VideoId=' + this.MobileViedoUrl).then(res => {
                this.player = new Aliplayer({
                    "id": "J_prismPlayer",
                    "language": "en-us",
                    //"source": "//player.alicdn.com/video/aliyunmedia.mp4",
                    "autoplay": false,
                    "width": '100%',
                    "height": '300px',
                    "cover": this.MobileImageUrl,
                    "vid": this.MobileViedoUrl,
                    "playauth": res.data.PlayAuth
                })
            })
        } , prev() {
      this.$router.go(-1);
    }
    }
};
</script>

<style lang="scss" scoped>
.videoMeta {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 15px;
    color: #555;
}
</style>
