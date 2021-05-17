<template>
  <div>
    <van-nav-bar class="m-t-10" :title="Title" left-arrow :border="true" @click-left="$router.go(-1)" />
    <div class="m-l-15 m-r-15 m-t-20 m-b-20 bg-white">
      <div class="p-10">
        <div class="section shareLinkArea" v-if="$store.state.UserInfo">
          <h3>Option 1: Tell your friends</h3>

          <div class="referralLink">
            <div class="linkh text-ellipsis m-r-10">{{referralLink}}</div>
            <van-button @click="handleClipboard">Copy</van-button>
          </div>

          <div class="shareItems">
            <img @click="doShare('pinterest', 0)" src="~@/assets/img/academy/pinterest.png" alt="" />
            <img @click="doShare('twitter', 0)" src="~@/assets/img/academy/twitter.png" alt="" />
          </div>
        </div>

        <div class="section shareBannerArea">
          <h3 v-if="$store.state.UserInfo">
            Option 2: Select a post to share on social media.
          </h3>
          <h3 v-else>
            It requires login to access the shortcut for sharing referral links.
          </h3>
          <div class="requires">

            <div class="Swiper">
              <van-swipe :loop="false" :width="148" :show-indicators="false" style="display: flex">
                <van-swipe-item type="flex" justify="space-between" v-for="(item, index) in shareBanner" :key="index">
                  <div class="item">
                    <!-- <img src="~@/assets/img/academy/Earnh.png" alt=""> -->
                    <img :src="item.ImageUrl" alt="" />
                    <van-radio-group v-model="shareIndex">
                      <van-radio :name="index" icon-size="18px"></van-radio>
                    </van-radio-group>
                  </div>
                </van-swipe-item>
              </van-swipe>
            </div>

            <div class="shareItems" v-if="$store.state.UserInfo">
              <img @click="doShare('facebook')" src="~@/assets/img/academy/facebook.png" alt="" />
              <img @click="doShare('pinterest')" src="~@/assets/img/academy/pinterest.png" alt="" />
            </div>

            <div v-else class="shareItems disabled">
              <img src="~@/assets/img/academy/facebook_gray.png" alt="" />
              <img src="~@/assets/img/academy/pinterest_gray.png" alt="" />
            </div>
          </div>
        </div>

        <div class="section qrcodeArea" v-if="$store.state.UserInfo">
          <h3>Option 3: Share the QR code to your friends</h3>
          <div class="qrcodeImg"><img :src="qrcode" /></div>
          <div class="download"><a :href="qrcode" download="qrcode">Download</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import QRCode from 'qrcode'

export default {
  head() {
    return {
      meta: [
        {
          property: 'og:url',
          content: '',
        },
        {
          property: 'og:title',
          content: 'Best 100% Cashback Amazon Deals Rebate Site - Rebatest',
        },
        {
          property: 'og:image',
          content: this.shareImage,
        },
        {
          property: 'og:description',
          content: this.shareDescription,
        },
      ],
    }
  },
  data() {
    return {
      qrcode: '',
    }
  },

  async asyncData({ params, query, $axios, $cookies, store }) {
    //
    let [referralLinkData, shareBannerData] = await Promise.all([
      $axios.$get(
        '/api/academy/show/BrandStory/getbuyeruid?Id=' +
          ($cookies.get('UserId') || 0)
      ), //分享链接地址
      $axios.$get('/api/academy/show/Home/getshareearninfo?ShowType=2'), //分享banner
    ])

    let key = query.share || 0

    return {
      referralLink:
        ($cookies.get('SiteName') == 'US'
          ? 'https://www.rebatest.com/test-products'
          : 'https://uk.rebatest.com/test-products') +
        '?Uid=' +
        referralLinkData.ResponseData +
        '&Rid=' +
        parseInt(Math.random() * 100000000),
      Uid: referralLinkData.ResponseData,
      shareBanner: shareBannerData.ResponseData,
      shareImage: shareBannerData.ResponseData[key].ImageUrl,
      shareDescription: shareBannerData.ResponseData[key].Copywriting,
      shareIndex: key,
      Title: query.title ? query.title.replace(/\+/g, ' ') : 'Share & Earn',
    }
  },
  beforeMount() {
    //facebook分享链接跳转至此页后，跳转至商品列表页
    if (
      typeof this.$route.query.fbclid != 'undefined' &&
      typeof this.$route.query.Uid != 'undefined' &&
      typeof this.$route.query.Rid != 'undefined'
    ) {
      window.location.href =
        (this.$cookies.get('SiteName') == 'US'
          ? 'https://www.rebatest.com/test-products'
          : 'https://uk.rebatest.com/test-products') +
        '?Uid=' +
        this.$route.query.Uid +
        '&Rid=' +
        this.$route.query.Rid
    }
  },
  mounted() {
    this.generateQR()
    this.Title = this.$route.query.title
      ? decodeURIComponent(this.$route.query.title)
      : 'Share & Earn'
  },
  methods: {
    //分享
    doShare(type, methods) {
      let self = this
      // methods ->0 仅分享链接
      if (methods == 0) {
        if (type == 'facebook') {
          //facebook 分享
          window.open(
            'https://www.facebook.com/sharer.php?u=' +
              encodeURIComponent(this.referralLink),
            '_blank'
          )
        } else if (type == 'pinterest') {
          window.open(
            'https://www.pinterest.com/pin-builder/?url=' +
              encodeURIComponent(this.referralLink) +
              '&method=button&h=765&w=1024&media=' +
              encodeURIComponent(location.origin + '/v2/logo.png') +
              '&description=' +
              encodeURIComponent(
                'Best 100% Cashback Amazon Deals Rebate Site - Rebatest'
              ) +
              '',
            '_blank'
          )
        } else if (type == 'twitter') {
          window.open(
            'https://twitter.com/intent/tweet?url=' +
              encodeURIComponent(this.referralLink) +
              '&text=' +
              encodeURIComponent(
                'Best 100% Cashback Amazon Deals Rebate Site - Rebatest'
              ),
            '_blank'
          )
        }
      } else {
        let shareLink =
          location.origin +
          '/v2/academy/shareEarn?share=' +
          self.shareIndex +
          '&Uid=' +
          self.Uid +
          '&Rid=' +
          parseInt(Math.random() * 100000000)

        //分享图片
        if (type == 'facebook') {
          let t = shareLink
          window.open(
            'https://www.facebook.com/dialog/share?app_id=228869282257992&display=popup&href=' +
              encodeURIComponent(t) +
              '&redirect_uri=' +
              encodeURIComponent(t),
            '_blank'
          )
        } else if (type == 'twitter') {
          window.open(
            'https://twitter.com/intent/tweet?url=' +
              encodeURIComponent(shareLink) +
              '&text=' +
              encodeURIComponent(self.shareDescription),
            '_blank'
          )
        } else if (type == 'pinterest') {
          window.open(
            'https://www.pinterest.com/pin-builder/?url=' +
              encodeURIComponent(self.referralLink) +
              '&method=button&h=765&w=1024&media=' +
              encodeURIComponent(self.shareImage) +
              '&description=' +
              encodeURIComponent(this.shareDescription),
            '_blank'
          )
        }
      }
    },
    //复制
    handleClipboard(event) {
      let self = this
      const clipboard = new Clipboard(event.target, {
        text: () => self.referralLink,
      })
      clipboard.on('success', () => {
        this.$toast.success('Copied successfully!')
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        this.$notify({ type: 'danger', message: 'Copy Failed!' })
        clipboard.destroy()
      })
      clipboard.onClick(event)
    },
    seletedBanner(val) {
      this.shareIndex = val
      console.log(this.shareIndex)
    },
    generateQR() {
      let self = this
      QRCode.toDataURL(
        self.referralLink,
        {
          width: 200,
          height: 200,
        },
        function (err, url) {
          self.qrcode = url
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.van-swipe__indicators {
  padding-top: 20px;
}
.Swiper {
  .item img {
    width: 100%;
  }

  .item {
    width: 130px;
    margin-bottom: 15px;
    background-color: #fff;
  }
  width: 100%;
  margin: 0 auto;
  display: flex;
}
.van-radio-group {
  position: absolute;
  top: 8px;
  right: 8px;
}

.linkh {
  padding: 0 10px;
  width: 80%;
  border: 1px solid #ededed;
  line-height: 45px;
}

.requires {
  width: 86%;
  margin: 0 auto;
}

// .swipe {
//   height: 200px;
// }

.container {
  width: 95%;
  background-color: white;
  margin: 20px auto 50px;
}

h2 {
  height: 93px;
  line-height: 92px;
  color: #0400a3;
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 35px;
  padding-left: 37px;
  border-bottom: 1px solid #aaaaaa;
}

.section {
  margin-bottom: 36px;
  padding-bottom: 34px;
  margin: 20px auto;
  box-shadow: 0 0 6px 3px #b7b6b6;
  border-radius: 20px;
  text-align: center;
}

h3 {
  margin: 0;
  padding: 30px 0;
  font-size: 14px;
  color: #333;
  text-align: center;
  font-weight: bold;
}

.shareItems {
  margin-top: 10px;
  text-align: center;

  img {
    margin: 0 15px;
    width: 40px;
    cursor: pointer;
  }

  &.disabled {
    img {
      cursor: not-allowed;
    }
  }
}

.referralLink {
  display: flex;
  padding: 0 15px 30px;

  button {
    background: #ffaf2b;
    color: #fff;
    border-color: #ffaf2b;
    border-radius: 5px;

    &:hover {
      background: darken(#ffaf2b, 15%);
      border-color: darken(#ffaf2b, 15%);
    }
  }

  i {
    font-size: 30px;
    color: #333;
    line-height: 45px;
    cursor: pointer;
    margin: 0 5px;
  }
}

.shareBannerArea {
  .bannerList {
    img {
      width: 100%;
      border: 1px solid #b7b6b6;
    }
  }

  .item {
    position: relative;
  }
}

.qrcodeArea {
  .qrcodeImg img {
    vertical-align: top;
    border: 1px solid #ededed;
    border-radius: 5px;
  }

  .download a {
    margin-top: 28px;
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    background: #ffaf2b;
    border-radius: 5px;
    font-size: 14px;
    text-decoration: none;
    color: #fff;

    &:hover {
      background: darken(#ffaf2b, 10%);
    }
  }
}
</style>
