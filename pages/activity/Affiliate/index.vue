<template>
  <div class="makeMoney-index container bg-white">
    <div class="guidePage">
      <section class="DrawMoney p-t-25 m-b-35">
        <div class="back">
          <img :src="backbanner" />
        </div>
        <div class="Dra">
          <a href="/v2/activity/Affiliate/deposit">
            <van-badge :dot="$store.state.makeMoneyBadge">
              <div class="child" />
              <img src="~@/assets/img/makeMoney/draw_2.png" alt="" />
            </van-badge>
          </a>
        </div>
      </section>
      <div class="width">
        <section class="ReferralZone" id="page1">
          <div class="Referral">
            <div class="Referral-content">
              <h2>Referral Zone</h2>
              <div class="Referral-Rules">
                <img src="~@/assets/img/makeMoney/mobilerule.png" alt="" />
                <a href="JavaScript:;" @click="displaySharerules = true">Rules</a>
              </div>
              <div class="Referral-link">
                <van-row type="flex" align="middle">
                  <label for="yourlink">Referral Link</label>
                  <van-col :span="17">
                    <van-field v-model="ReferralLink" :readonly="true" />
                  </van-col>
                  <van-col :span="4">
                    <van-button id="copyReferralLink" @click="handleClipboard($event, ReferralLink)" icon="friends-o">Copy</van-button>
                  </van-col>
                </van-row>
                <p class="or">OR</p>
                <van-row type="flex" align="middle">
                  <label for="yourlink">Referral Code</label>
                  <van-col :span="17">
                    <van-field v-model="ReferralCode" :readonly="true" />
                  </van-col>
                  <van-col :span="4">
                    <van-button id="copyReferralCode" @click="handleClipboard($event, ReferralCode)" icon="friends-o">Copy</van-button>
                  </van-col>
                </van-row>
              </div>
              <div class="share">
                <van-row type="flex" justify="space-around">
                  <van-col span="9" class="Twitter">
                    <div @click="
                        (displayShareDialog = true),
                          (curShareDialogType = 'twitter')
                      ">
                      <img src="~@/assets/img/makeMoney/Twitter.png" class="eimg" />
                      <a href="JavaScript:;"> Twitter</a>
                    </div>
                  </van-col>

                  <van-col span="9" class="Facebook">
                    <div @click="
                        (displayShareDialog = true),
                          (curShareDialogType = 'facebook')
                      ">
                      <img src="~@/assets/img/makeMoney/Facebook.png" class="eimg" />
                      <a href="JavaScript:;"> Facebook</a>
                    </div>
                  </van-col>
                </van-row>
                <van-row type="flex" justify="space-around">
                  <van-col span="9" class="Pinterest">
                    <div @click="
                        (displayShareDialog = true),
                          (curShareDialogType = 'pinterest')
                      ">
                      <img src="~@/assets/img/makeMoney/Pinterest.png" class="eimg" />
                      <a href="JavaScript:;"> Pinterest</a>
                    </div>
                  </van-col>
                  <van-col span="9" class="Email">
                    <div @click="
                        (displayShareDialog = true),
                          (curShareDialogType = 'email')
                      ">
                      <img src="~@/assets/img/makeMoney/Email.png" alt="" class="eimg" />
                      <a href="JavaScript:;"> Email</a>
                    </div>
                  </van-col>
                </van-row>
              </div>
            </div>
          </div>
        </section>
        <section class="carousel">
          <client-only placeholder="Loading...">
            <vue-seamless-scroll :data="drawalList" :class-option="{ singleHeight: 35, waitTime: 1500 }" class="drawalList">
              <ul>
                <li v-for="(item, index) in drawalList" :key="index">
                  <span v-html="item.userName"></span>
                  <span v-text="item.createTime"></span>
                  <span>Earned</span>
                  <span>{{ $store.state.currency }}{{ item.amount }}</span>
                </li>
              </ul>
            </vue-seamless-scroll>
          </client-only>
        </section>
        <section class="img">
          <a href="/v2/academy"><img src="~@/assets/img/makeMoney/mobilemore.png" alt="" />
          </a>
          <a href="/my-account/giveaway">
            <img src="~@/assets/img/makeMoney/mobileonly_2.png" alt="" />
          </a>
        </section>
        <section class="Howitworks">
          <div class="Howimg">
            <img :src="mobilehowitworks" />
            <van-icon name="question-o" class="imgs" @click="question= true" />
          </div>
        </section>
      </div>
    </div>
    <ul class="ceiling">
      <li @click="displaySharerules = true">
        <a href="JavaScript:;">Rules</a>
      </li>
      <li @click="displayceilings = true"><a href="JavaScript:;">Guide</a></li>
      <li @click="toTop">
        <van-icon name="arrow-up" />
      </li>
    </ul>

    <van-dialog get-container="body" v-model="displayShareDialog" :showConfirmButton="false" :showCancelButton="false" width="90%" class="makeMoneyDialog shareDialog">
      <div slot="title">
        <img :src="dialogTitImg" /><span class="close" @click="displayShareDialog = false">
          <van-icon name="cross" />
        </span>
      </div>

      <div slot="default" class="van-dialog__message van-dialog__message--has-title">
        <h4>Select template to share</h4>
        <div v-if="curShareDialogType != 'pinterest'" class="shareContent">
          <h5>Message 1</h5>
          <div class="Message1">
            <p id="j_emailMsg1">Hey friends! I have been enjoying Rebatest for over 90 days. I have found lots of high-quality products and left review to get my cashback. Come on! Join now to get {{$store.state.currency}}{{$store.state.SiteId == 1 ? "50" : "30"}} in New User Activity.
            </p>
            <van-button round type="info" @click="
                handleCopyShare($event, curShareDialogType, 'j_emailMsg1')
              ">Copy to Share</van-button>
          </div>
          <h5>Message 2</h5>
          <div class="Message1">
            <p id="j_emailMsg1Msg2">Hey friends! Do you know Rebatest? It’s a product testing platform where you can get high quality goods with 100% cashback.Hunt your desired products in Rebatest.
            </p>
            <van-button round type="info" @click="
                handleCopyShare($event, curShareDialogType, 'j_emailMsg1Msg2')
              ">Copy to Share</van-button>
          </div>
          <h5>Message 3</h5>
          <div class="Message1">
            <p id="j_emailMsg1Msg3">Hey friends! Do you know how is it possible that I have bought hundred of high quality goods on Amazon with almost 100% cashback? Join Rebatest to hunt free products now, new users can get {{$store.state.currency}}{{$store.state.SiteId == 1 ? "50" : "30"}}.
            </p>
            <van-button round type="info" @click="
                handleCopyShare($event, curShareDialogType, 'j_emailMsg1Msg3')
              ">Copy to Share</van-button>
          </div>
        </div>
        <div v-else class="shareContent pinterestDialogContent">
          <h5>Message</h5>
          <p id="j_pinterestMsg1">Hey friends! I have been enjoying Rebatest for over 90 days. I have found lots of high-quality products and left review to get my cashback. Come on! Join now to get {{$store.state.currency}}{{$store.state.SiteId == 1 ? "50" : "30"}} in New User Activity.
          </p>
          <h5>Picture:</h5>
          <img src="/v2/makeMoney/share.jpg" alt="" />
          <van-button round type="info" @click="handleCopyShare($event, 'pinterest', 'j_pinterestMsg1')">Copy to Share</van-button>
        </div>
      </div>
    </van-dialog>

    <van-dialog get-container="body" v-model="displaySharerules" :showConfirmButton="false" :showCancelButton="false" width="90%" message-align="left" class="makeMoneyDialog shareruels">
      <div slot="title">
        <img :src="dialogTitImg" /><span class="close" @click="displaySharerules = false">
          <van-icon name="cross" />
        </span>
      </div>

      <div slot="default" class="van-dialog__message van-dialog__message--has-title">
        <h4>Rule</h4>
        <div class="shareContent pinterestDialogContent">
          <h5>Terms and Conditions</h5>
          <span>Subject to these Referral Program Terms, Rebatest will pay you a {{$store.state.currency}}{{$store.state.SiteId == 1 ? "5-20" : "3.65-15"}} Referral Bonus through your account for every Qualified Referral (defined below) you refer.</span>
          <br />
          <h5>‘Qualified Referral’ must:</h5>
          <span>A.Be a new member of Rebatest.</span>
          <br />
          <span>B.Be a natural person (no business entities, groups, pets, or anything other than a singular person).</span> <br />
          <span>C.Be referred by you via your unique referral link, the linksvia the invitation forms on this page, or other methods that Rebatest provided for proper tracking of referrals.</span>
          <span>D.Make qualifying purchases that earn at least{{$store.state.currency}}{{$store.state.SiteId == 1 ? "10":"15"}} in cash back within one year of signing up.</span>
          <br />
          <h5>The following is a non-exhaustive list of activities that are not permitted and that will disqualify you from earning Referral Bonuses:</h5>
          <span>A.Creating multiple accounts for one individual;self-referrals；referrals of members of the samehousehold；suspected fraud.</span> <br />
          <span>B.Posting your referral link on any page that is not owned and controlled by you, including, but not limited to, any Rebatest merchant's Facebook or forum page.</span> <br />
          <span>C.Using search engine sponsored listings or any other paid advertising.</span> <br />
          <span>D.Posting your referral link on a merchant's site,merchant's social media page, or other similar activity.</span> <br />
          <span>E.Impersonation of Rebatest or pretending to be a representative of Rebatest and making false claims about Rebatest.</span> <br />
          <span>F.Using spam email to spread your link, spamming web forums and other online properties.</span>
          <br />
          <p> Rebatest reserves the right to review all referrals and to deny, withhold, or cancel any bonuses for any referrals that Rebatest deems, in its sole discretion, as fraudulent,abusive, unethical, suspicious or otherwise inconsistent with these Referral Program Terms. Rebatest decisions are final.Rebatest reserves the right to suspend or terminate the Referral Program or to change these Referral Program Terms at any time and for any reason in its sole discretion.</p>

          <p>Tip: The referral reward on the Affiliate&Refer Program and the one on the New User Gifts cannot be take at the same time. If you refer a friend to Rebatest, during the time of Affiliate&Refer Program,the system will default you to participate the Affiliate&Refer Program while the referral task on New User Gifts won’t be completed.
          </p>
        </div>
      </div>
    </van-dialog>

    <van-dialog get-container="body" v-model="displayceilings" :showConfirmButton="false" :showCancelButton="false" width="90%" message-align="left" class="ceilinging" className="makeMoneyDialog">
      <div slot="title">
        <img :src="dialogTitImg" /><span class="close" @click="displayceilings = false">
          <van-icon name="cross" />
        </span>
      </div>

      <div slot="default" class="van-dialog__message van-dialog__message--has-title">
        <h4>Easy Ways to Refer Friends</h4>
        <div class="shareContent pinterestDialogContent">
          <img src="~@/assets/img/makeMoney/SocialMedia.png" alt="" />
          <h5>Social Media</h5>
          <p>You can send your referral link directly to your friends during your online conversations.
          </p>
          <img src="~@/assets/img/makeMoney/Blog.png" alt="" />
          <h5>Blog</h5>
          <p>In personal blogs: you can publish a link or banner related to the subject of your blog. Let’s say you love writing about cars, then banners that promote car accessories will probably have a high click-through rate.
          </p>
          <img src="~@/assets/img/makeMoney/Forum.png" alt="" />
          <h5>Forum</h5>
          <p>This also is a very good place to promote products that are related to the visitor’s interests. You can post your links in a thread comment while recommending the products with a personal message.
          </p>
          <img src="~@/assets/img/makeMoney/EDM&Others.png" alt="" />
          <h5>EDM&Others</h5>
          <p>You could recommend Rebatest to friends and colleagues who might be interested in our products. You can share banners and links through email, Facebook, or any other ways online and offline.
          </p>
        </div>
      </div>
    </van-dialog>

    <!-- 引导弹窗 -->
    <van-dialog get-container="body" v-model="guideDialogVisible" :showConfirmButton="false" :showCancelButton="false" width="100%" message-align="center" className="makeMoneyDialog guideDialog">
      <div slot="title">
        <span class="close" @click="handleCloseGuideDialog">
          <van-icon name="cross" />
        </span>
      </div>
      <div slot="default">
        <img @click="guideNext" :src="guideImage" />
      </div>
    </van-dialog>

    <!-- 关闭引导页弹窗 -->
    <van-dialog get-container="body" theme='round-button' v-model="closeGuideDialogConfirm" width="90%" message-align="center" :showCancelButton="true" confirmButtonText="Confirm" cancelButtonText="Cancel" className="makeMoneyDialog closeGuideDialogConfirm" @confirm="doCloseGuideDialogConfirm">
      <div slot="title">
        <img :src="dialogTitImg" /><span class="close" @click="closeGuideDialogConfirm = false">
          <van-icon name="cross" />
        </span>
      </div>

      <div slot="default">
        <div class="fs-14 fc-block p-20">
          Hey wait, this brief instruction will help you know more detail about
          making money on Rebatest, are you sure you’d skip it?
        </div>

        <div class="fs-14 p-l-20 p-r-20 p-b-20 fc-gray">
          <van-checkbox v-model="closeGuideVal" shape="square">No similar instruction next time</van-checkbox>
        </div>
      </div>
    </van-dialog>
    <!-- 问号弹窗 -->
    <van-dialog get-container="body" v-model="question" :showConfirmButton="false" :showCancelButton="false" width="90%" message-align="left" class="makeMoneyDialog shareruels cumulative">
      <div slot="title">
        <img :src="dialogTitImg" /><span class="close" @click="question = false">
          <van-icon name="cross" />
        </span>
      </div>

      <div slot="default" class="van-dialog__message van-dialog__message--has-title">

        <div class="shareContent pinterestDialogContent">
          <p>The cumulative amount of commissions you will earn for qualified referrals when reach the level</p>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import '@/assets/css/makeMoney//index.scss'
import Clipboard from 'clipboard'

export default {
  middleware: 'auth',
  head() {
    return {
      title: 'Rebatest Affiliate&Refer Program',
    }
  },
  data() {
    return {
      //guideDialogVisible: true, //步骤引导弹窗
      guideNum: 1, //步骤引导图片是第几张
      guideImage: require('@/assets/img/makeMoney/guide' +
        this.$store.state.SiteId +
        '_1.jpg'), //步骤引导第一张图片
      closeGuideVal: false, //关闭步骤引导页勾选值
      closeGuideDialogConfirm: false, //关闭引导页弹窗

      show: false,
      showPopover: false,
      question: false,
      displayceilings: false,
      displaySharerules: false,
      displayShareDialog: false,
      curShareDialogType: '', //当前分享的弹窗类型（fb,tw,email）
      dialogTitImg: require('@/assets/img/makeMoney/Popup_' +
        this.$store.state.SiteId +
        '.png'),
      mobilehowitworks: require('@/assets/img/makeMoney/mobilehowitworks_' +
        this.$store.state.SiteId +
        '.png'),
      backbanner: require('@/assets/img/makeMoney/mobilebanner_' +
        this.$store.state.SiteId +
        '.png'),
    }
  },
  async asyncData({ params, $axios, store, $cookies }) {
    let [ReferralData, drawalData, guideData] = await Promise.all([
      $axios.get(
        '/api/PartTime/show/BuyerPartTime/getinvitecodebyid?BuyerId=' +
          $cookies.get('UserId')
      ),
      $axios.get(
        '/api/PartTime/show/BuyerPartTime/getwithdrawallist?SiteId=' +
          store.state.SiteId
      ),
      $axios.get(
        '/api/PartTime/show/BuyerPartTime/getparttimeguidetag?Type=0&BuyerId=' +
          $cookies.get('UserId')
      ),
    ])
    return {
      ReferralLink:
        ($cookies.get('SiteName') == 'US'
          ? 'https://www.rebatest.com/test-products'
          : 'https://uk.rebatest.com/test-products') +
        '?Uid=' +
        ReferralData.data.data.uid,
      ReferralCode: ReferralData.data.data.code,
      Uid: ReferralData.data.data.uid,
      drawalList: drawalData.data.data,
      guideDialogVisible: !guideData.data.data,
    }
  },
  mounted() {
    //引导弹窗
  },
  methods: {
    guideNext() {
      if (this.guideNum == 5) {
        this.guideDialogVisible = false
      } else {
        this.guideNum++
        this.guideImage = require('@/assets/img/makeMoney/guide' +
          this.$store.state.SiteId +
          '_' +
          this.guideNum +
          '.jpg')
      }
    },
    handleCloseGuideDialog() {
      this.closeGuideDialogConfirm = true
      //this.guideDialogVisible = false;
    },
    doCloseGuideDialogConfirm() {
      if (this.closeGuideVal || this.guideNum == 5) {
        this.$axios(
          '/api/PartTime/show/BuyerPartTime/getparttimeguidetag?BuyerId=' +
            this.$cookies.get('UserId') +
            '&Type=1'
        )
      }
      this.closeGuideDialogConfirm = false
      this.guideDialogVisible = false
    },
    showPopup() {
      this.show = true
    },

    //复制
    handleClipboard(event, val) {
      let self = this
      const clipboard = new Clipboard(event.target, {
        text: () => val,
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
    }, //复制分享
    handleCopyShare(event, shareSite, copetargetele) {
      let self = this,
        shareImageUrl = location.origin + '/v2/makeMoney/share.jpg',
        copyText = document.getElementById(copetargetele).innerText
      const clipboard = new Clipboard(event.target, {
        text: () => copyText,
      })
      clipboard.on('success', () => {
        this.$toast.success('Copied successfully!')

        //执行分享
        self.comsys.share(
          shareSite,
          self.ReferralLink,
          'Best 100% Cashback Amazon Deals Rebate Site - Rebatest',
          copyText,
          shareImageUrl,
          self.Uid
        )

        clipboard.destroy()
      })
      clipboard.on('error', () => {
        this.$notify({ type: 'danger', message: 'Copy Failed!' })
        clipboard.destroy()
      })
      clipboard.onClick(event)
    },

    // 滑动到顶部
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 100
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    },
  },
}
</script>

<style lang="scss">
.cumulative {
  p {
    padding: 20px 0;
  }
}
.makeMoney-index {
  h4 {
    text-align: center;

    color: #333333;

    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
  }
  h5 {
    color: #333333;

    font-family: Arial;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
<style lang="scss">
.makeMoney-index {
  .van-badge--dot {
    width: 10px;
    height: 10px;

    border: 0;
    background-color: #ed1c24 !important;
    box-shadow: 0 5px 6px 0 rgba(133, 133, 133, 0.1) !important;
  }
  .van-badge--fixed {
    top: 9px;
    right: 8px;
  }
}
</style>
<style lang="scss" scoped>
.drawalList {
  overflow: hidden;

  height: 35px;
  padding: 0 12px;
  li {
    display: flex;
    justify-content: space-between;

    height: 35px;

    color: #666666;

    line-height: 35px;
  }
}

.ceiling {
  position: fixed;
  top: 470px;
  right: 18px;

  width: 50px;

  background: #ffffff;
  li {
    padding: 15px 0;

    text-align: center;

    border-bottom: 1px solid #d8d8d8;
    a {
      width: 36px;
      height: 1px;

      text-decoration: none;

      color: #333333;

      font-family: Arial;
      font-size: 12px;
      font-weight: 400;
    }
  }
}
.guidePage {
  width: 100%;

  background: linear-gradient(170deg, #77b7ff, #82b7ff);
  .DrawMoney {
    position: relative;
    text-align: center;
    max-width: 750px;
    .back {
      img {
        width: 98%;
      }
    }
    .Dra {
      position: absolute;
      right: 8%;
      top: 82%;
      width: 37%;
      img {
        width: 100%;
      }
      a {
        text-decoration: none;

        color: #ffffff;
      }
    }
  }
  .width {
    width: 95%;
    margin: 0 auto;

    .ReferralZone {
      max-width: 750px;
      .Referral {
        background-image: url('~@/assets/img/makeMoney/mobilebackground-1.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .Referral-content {
        width: 90%;
        margin: 0 auto;
        h2 {
          padding: 35px 0 5px;

          text-align: center;

          color: #333333;

          font-family: Lato;
          font-size: 18px;
          font-weight: bold;
        }
        .Referral-Rules {
          text-align: right;
          .Popupimg {
            text-align: left;
          }
          img {
            width: 20px;

            vertical-align: middle;
          }
          a {
            text-decoration: none;

            color: #333333;

            font-family: Arial;
            font-size: 14px;
            font-weight: 400;
          }
        }
        .Referral-link {
          width: 100%;
          margin: 0 auto;
          .or {
            text-align: center;

            color: #333333;

            font-family: Arial;
            font-size: 16px;
            font-weight: bold;
          }
          div {
            margin-bottom: 5px;
          }

          button {
            color: #ffffff;
            border: none;
            border-radius: 0 20px 20px 0;
            background: #79b7ff;

            font-family: Arial;
            font-size: 16px;
            font-weight: 400;
          }
          label {
            width: 100%;
            margin-bottom: 10px;

            color: #333333;

            font-family: Arial;
            font-size: 16px;
            font-weight: 400;
          }
          .van-cell {
            height: 44px;

            text-indent: 15px;

            border-radius: 40px 0 0 40px;
            background: #f3f3f3;
          }
          input {
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;

            color: #999999 !important;

            font-family: Arial;
            font-size: 12px;
            font-weight: 400;
            line-height: 44px;

            -webkit-line-clamp: 1;
          }
        }

        .share {
          width: 90%;
          margin: 0 auto;
          padding: 10px 0 20px;
          .eimg {
            margin-right: 5px;

            vertical-align: middle;
          }
          .Twitter,
          .Facebook,
          .Pinterest,
          .Email {
            margin-bottom: 15px;
            padding: 8px 0;

            text-align: center;

            border-radius: 30px;
          }
          .Twitter {
            background: #55acee;
          }
          .Facebook {
            background: #2a5297;
          }
          .Pinterest {
            background: #cc2127;
          }
          .Email {
            background: #545454;
          }
          a {
            text-align: center;

            color: #ffffff;
            border-radius: 20px;

            font-family: Arial;
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
    }
    .carousel {
      width: 100%;
      height: 35px;
      margin-top: 15px;

      color: #666666;
      background-image: url('~@/assets/img/makeMoney/mobilebackground-2.png');
      background-repeat: no-repeat;
      background-size: cover;

      font-size: 14px;
    }
    .img {
      display: flex;
      justify-content: space-between;

      width: 100%;
      margin: 25px auto;
      a {
        text-align: center;
        img {
          width: 95%;
        }
      }
    }
    .Howitworks {
      position: relative;

      width: 100%;
      max-width: 750px;
      padding-bottom: 50px;
      .van-popove {
        position: absolute;
        z-index: 2006;
        top: 110px;
        left: -110.667px;

        margin: 0;
      }
      .Howimg {
        img {
          width: 100%;
        }
      }
      .imgs {
        position: absolute;
        top: 42%;
        left: 86%;
        width: 15px;
      }
    }
  }
}
.van-popup--bottom {
  left: 18px !important;
}
.van-popup {
  top: 430px;

  width: 90%;
  .van-popup__close-icon {
    color: #ffffff !important;
  }
  // height: 66% !important;
}
.sty {
  text-align: left;

  p {
    margin-bottom: 30px;

    color: #333333;

    font-family: Arial;
    font-size: 2px;
    font-weight: 400;
  }
}
</style>
