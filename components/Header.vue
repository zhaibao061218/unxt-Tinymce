<template>
  <header>
    <div class="header">

      <div class="topBarAd" v-if="$store.state.displayAd!=0">
        <a href="/v2/activity/Affiliate/">
          <img class="adBanner" v-if="$store.state.SiteId ==1" src="~@/assets/img/makeMoney/US.png" />
          <img class="adBanner" v-else src="~@/assets/img/makeMoney/UK.png" />
        </a>
        <img class="closeAd" @click="closeAd" src="~@/assets/img/makeMoney/close.png" />
      </div>

      <div class="topBar">
        <img @click="toggleSiteManual" width="21" height="21" margin-left="10px" src="~@/assets/img/head-down.gif" />
        Check Cash Back Process Here!
        <img @click="diplaySearchBar" width="21" src="~@/assets/img/icon-search.png" />
      </div>

      <van-overlay :show="showSiteManual" @click="showSiteManual = false"></van-overlay>

      <transition name="van-slide-down">
        <div class="siteManual" v-show="showSiteManual">
          <img src="@/assets/img/siteManual.jpg">
          <div class="ftBtns">
            <a class="signIn" @click="comsys.doLogin()" href="javascript:;">Sign In</a>
            <a class="faq" href="/app/help/faq">FAQ</a>
          </div>
          <div class="pullUp" @click="showSiteManual = false"></div>
        </div>
      </transition>

      <div class="navBar">
        <van-dropdown-menu>
          <van-dropdown-item>
            <ul>
              <li class="home"><a href="/">Home</a></li>
              <li class="category">
                <a href="javascript:;" @click="toggleNavSub('category')">Category<span class="arrow" :class="{ active: displayNavSub.category }"></span></a>
                <ul class="categoryItems" v-show="displayNavSub.category">
                  <li><a class="all" href="/test-products">All</a></li>
                  <li v-for="(item, index) in $store.state.category" :key="index">
                    <a :href="url + '?T=' + item.Id"><span class="icon"><img :src="item.Minimages" /></span>{{ item.EnglishTypeName }}</a>
                  </li>
                </ul>
              </li>
              <li class="vip">
                <a href="javascript:;" @click="toggleNavSub('zone')">Trending Products Zone
                  <img class="hot" src="@/assets/img/hot.png" />
                  <span class="arrow" :class="{ active: displayNavSub.zone }"></span></a>
                <ul v-show="displayNavSub.zone">
                  <li><a href="/app/vip-exclusive-trial">Featured Zone</a></li>
                  <li><a href="/app/get-cashback-easier">Report-only Zone</a></li>
                </ul>
              </li>
              <li class="account">
                <a href="javascript:;" @click="toggleNavSub('account')">
                  My Account
                  <span class="arrow" :class="{ active: displayNavSub.account }"></span></a>
                <ul class="myAccount" v-show="displayNavSub.account">
                  <li><a href="/App_MyProfile">My Account</a></li>
                  <li><a href="/App_MyProfile/MyRights">Levels & Benefits</a></li>
                  <li><a href="/App_MyProfile/MyCoupon">My Vouchers</a></li>
                  <li><a href="/App_MyProfile/MyCase">My Case</a></li>
                  <li>
                    <a href="/App_Product/ProductRequest">My Application:
                      <span>{{ $store.state.UserInfo.OrderApplyNumber || 0 }}</span></a>
                  </li>
                  <li>
                    <a href="/app/account/messages">Messages:
                      <span class="red">{{
                        $store.state.UserInfo.MessageNumber || 0
                      }}</span></a>
                  </li>
                  <li>
                    <a href="/App_MyProfile/Balance">Cash Back Balance:
                      <span>{{ $store.state.UserInfo.AccountAmount || 0 }}</span></a>
                  </li>
                </ul>
              </li>
              <li class="accountSetting">
                <a href="/App_MyProfile/AccountSet"> Account Settings</a>
              </li>
              <li class="friend">
                <a href="/app/my-account/referral">Refer a Friend</a>
              </li>
              <li class="giveaway"><a href="/my-account/giveaway"> Giveaway</a></li>
              <li class="help">
                <a href="javascript:;" @click="toggleNavSub('help')">
                  Help<img v-if="$store.state.UserInfo" class="tagNew" src="@/assets/img/new.png" />
                  <span class="arrow" :class="{ active: displayNavSub.help }"></span></a>
                <ul v-show="displayNavSub.help">
                  <li><a href="/app/help/faq">FAQ</a></li>
                  <li><a href="/app/help/user-guidee">User Guide</a></li>
                  <li>
                    <a href="/App_FooterNav/Details">Update Details<img v-if="$store.state.UserInfo" class="tagNew" src="@/assets/img/new.png" /></a>
                  </li>
                  <li><a href="/app/testimonials">Testimonials</a></li>
                </ul>
              </li>
              <li class="signout" v-if="$store.state.UserInfo">
                <a href="/App_User/LoginOut"> Sign Out </a>
              </li>

              <li class="signin" v-if="!$store.state.UserInfo">
                <a href="/App_User/Login">Sign In</a>
              </li>
              <li class="signin" v-if="!$store.state.UserInfo">
                <a href="/App_User/Logup">Sign Up</a>
              </li>

              <li class="star"><a href="/App_Careers"> Careers</a></li>
            </ul>
          </van-dropdown-item>
        </van-dropdown-menu>

        <h1><a href="/"><img width="120" height="25" src="@/assets/img/logo.png" /></a></h1>
        <div class="navBar__right">
          <a href="/App_FooterNav/Contact"><img class="contact" width="40" height="40" src="@/assets/img/kf.png" /></a>
          <img @click="displaySiteRegion" class="curSiteRegion" width="31" :src="$store.state.SiteId == '1' ? siteRegion.img.US : siteRegion.img.UK" />
        </div>
      </div>
    </div>

    <van-overlay :show="siteRegion.display" @click="siteRegion.display = false"></van-overlay>

    <transition name="van-slide-down">
      <ul class="siteRegion" v-show="siteRegion.display">
        <li><img @click="chgSiteRegion('US')" :src="siteRegion.img.US" /></li>
        <li><img @click="chgSiteRegion('UK')" :src="siteRegion.img.UK" /></li>
      </ul>
    </transition>

    <transition name="van-slide-down">
      <div class="searchBar" v-show="showSearchBar">
        <van-search @search="search" v-model="keywords" shape="round" :autofocus="true" :clearable="true" background="rgba(75,163,211,.8)" placeholder="What are you looking for?" />
      </div>
    </transition>

    <div class="headerPlaceholder"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      url: '/test-products',
      keywords: '',
      searchProductType: '',
      displayNavSub: {
        category: false,
        zone: false,
        account: false,
        help: false,
      },
      showSiteManual: false, // Check Cash Back Process Here!
      siteRegion: {
        img: {
          US: require('@/assets/img/us.svg'),
          UK: require('@/assets/img/uk.svg'),
        },
        display: false,
      },
      showSearchBar: false,
      clonseStatus: 1,
    }
  },
  async asyncData({}) {
    let clonseStatus = sessionStorage.getItem('clonseStatus')
    console.log(clonseStatus, 123)
    return {
      clonseStatus,
    }
  },
  methods: {
    //折叠导航子菜单
    toggleNavSub(val) {
      this.displayNavSub[val] = !this.displayNavSub[val]
      this.showSearchBar = false
    },
    displaySiteRegion() {
      this.siteRegion.display = !this.siteRegion.display
      this.showSearchBar = false
    },
    chgSiteRegion(val) {
      if (val == 'US') {
        location.href = 'https://www.rebatest.com/test-products'
      } else {
        location.href = 'https://uk.rebatest.com/test-products'
      }
      this.siteRegion.display = false
      this.showSearchBar = false
    },
    diplaySearchBar() {
      this.showSearchBar = !this.showSearchBar
      this.siteRegion.display = false
    },
    //格式化字符串
    formatStr(str) {
      //去左右空格，替换尖括号为字符
      return str
        .replace(/^\s+|\s+$/g, '')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
    },
    //搜索
    search() {
      //类别
      let t = this.searchProductType
      //搜索关键字
      let n = encodeURIComponent(this.$options.methods.formatStr(this.keywords))

      //url地址
      let url = this.url

      if (t != '') {
        url += '?T=' + t
        if (n != '') {
          url += '&N=' + n
        }
      } else if (t == '' && n != '') {
        url += '?N=' + n
      }
      window.location.href = url
    },
    toggleSiteManual() {
      this.showSiteManual = !this.showSiteManual
    },
    //关闭顶部条的广告
    closeAd() {
      document.getElementById('body-container').classList.remove('showTopbarAd')

      document.getElementById('body-container').classList.add('hideTopbarAd')

      this.$cookies.set('displayTopbarAd', 0, {
        expires: new Date((new Date() / 1000 + 86400) * 1000), //过期时间一天
      })
    },
  },
  mounted() {
    //判断分类跳转的url
    let urlPathName = window.location.pathname
    if (urlPathName.indexOf('vip') > -1) {
      this.url = '/vip-exclusive-trial'
    } else if (urlPathName.indexOf('get-cashback-easier') > -1) {
      this.url = '/get-cashback-easier'
    }

    //获取url的参数给搜索项赋值
    if (this.$route.query.T) {
      this.searchProductType = Number(this.$route.query.T)
    }
    if (this.$route.query.N) {
      this.keywords = decodeURIComponent(
        this.$route.query.N.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      )
    }
  },
}
</script>

<style lang="scss" scoped>
.navBar {
  .myAccount {
    span {
      color: #ffaf52;

      &.red {
        color: red;
      }
    }
  }

  img.hot {
    width: 17px;
    margin-left: 17px;

    vertical-align: middle;
  }

  img.tagNew {
    margin-top: 6px;
    margin-left: 4px;

    vertical-align: top;
  }
}
.siteManual {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;

  padding: 0 12px;
  img {
    width: 100%;

    vertical-align: top;
  }
  .ftBtns {
    position: absolute;
    right: 0;
    bottom: 25px;
    left: 0;

    text-align: center;
    a {
      display: inline-block;

      width: 70px;
      height: 36px;
      margin: 0 20px;

      text-align: center;
      text-decoration: none;

      color: #ffffff;

      font-size: 16px;
      line-height: 36px;
      &.signIn {
        background: #4ba3d3;
      }
      &.faq {
        background: #ffaf52;
      }
    }
  }
  .pullUp {
    position: absolute;
    bottom: -26px;
    left: 50%;

    width: 40px;
    height: 26px;
    margin-left: -20px;

    border-radius: 0 0 5px 5px;
    background: #ffffff url('@/assets/img/pullUp.png') no-repeat center center /
      50% 50%;
  }
}
</style>
