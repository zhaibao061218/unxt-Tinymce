<template>
  <footer>
    <div class="joinBlk">
      <p>Join Rebatest for Free <br />& Get Up To 100% Cash Back Today</p>
      <a class="joinNow" href="/User/Logup">Join Now</a>
    </div>

    <ul class="ftNav">
      <li><a href="/about-us">About Us</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/v2/academy">Academy</a></li>
      <li>
        <a href="/terms-of-use">Terms of Use</a>
      </li>
      <li>
        <a href="/privacy-policy">Privacy Policy</a>
      </li>
      <li><a href="/contact-us">Contact Us</a></li>
      <li><a href="/Careers">Careers</a></li>
    </ul>

    <ul class="focusSNS">
      <li>
        <a class="facebook" href="https://www.facebook.com/rebatest/" target="_blank"></a>
      </li>
      <li>
        <a class="twitter" href="https://twitter.com/Rebatest_Online" target="_blank"></a>
      </li>
      <li>
        <a class="pinterest" href="https://www.pinterest.com/rebatest" target="_blank"></a>
      </li>
      <li>
        <a class="instagram" href="https://www.instagram.com/rebatest_official/" target="_blank"></a>
      </li>
      <li>
        <a class="youtube" href="https://www.youtube.com/channel/UCOfCdMBo0kbfZhl4rmkTDBg/" target="_blank"></a>
      </li>
    </ul>

    <div class="copyright">
      Copyright &copy; 2019 Rebatest. All Rights Reserved
    </div>

    <div class="ftNavTabbar">
      <van-tabbar active-color="#757575" inactive-color="#757575" :placeholder="true">
        <van-tabbar-item @click="comsys.jump('/')" class="home">
          <span>HOME</span>
          <template #icon="props">
            <img src="@/assets/img/Home.svg" />
          </template>
        </van-tabbar-item>

        <van-tabbar-item>
          <van-popover v-model="showZone" trigger="click" placement="top" theme="navPopover">
            <ul>
              <li @click="showZone = false"><a href="/app/vip-exclusive-trial">Featured Zone</a></li>
              <li @click="showZone = false"><a href="/app/get-cashback-easier">Report-only Zone</a></li>
            </ul>
            <template #reference>
              <div class="van-tabbar-item__icon">
                <img src="@/assets/img/Zone.svg" />
              </div>
              <span>Zone</span>
            </template>
          </van-popover>
        </van-tabbar-item>

        <van-tabbar-item @click="comsys.jump('/v2/activity/Affiliate/')" class="home" :dot="$store.state.makeMoneyBadge">
          <span>Make Money</span>
          <template #icon="props">
            <img src="@/assets/img/makeMoney.png" />
          </template>

        </van-tabbar-item>

        <van-tabbar-item>
          <van-popover v-model="showAccount" trigger="click" placement="top" theme="navPopover">
            <ul>
              <li @click="showAccount = false"><a href="/App_MyProfile">My Account</a></li>
              <li @click="showAccount = false"><a href="/App_MyProfile/MyRights">Levels & Benefits</a></li>
              <li @click="showAccount = false"><a href="/App_MyProfile/MyCoupon">My Vouchers</a></li>
              <li @click="showAccount = false"><a href="/App_MyProfile/MyCase">My Case</a></li>
              <li @click="showAccount = false"><a href="/App_Product/ProductRequest">My Application</a></li>
              <li @click="showAccount = false"><a href="/app/account/messages">Messages:<span>{{ $store.state.UserInfo.MessageNumber || 0}}</span></a></li>
              <li @click="showAccount = false"><a href="/App_MyProfile/Balance">Cash Back Balance</a></li>
            </ul>
            <template #reference>
              <div class="van-tabbar-item__icon">
                <img src="@/assets/img/Account.svg" />
              </div>
              <span>My Account</span>
            </template>
          </van-popover>
        </van-tabbar-item>

        <van-tabbar-item>
          <van-popover v-model="showAbout" trigger="click" placement="top-end" :offset="[10, 8]" theme="navPopover">
            <ul>
              <li @click="showAbout = false"><a href="/App_FooterNav/Contact">Contact Us</a></li>
              <li @click="showAbout = false"><a href="/app/about-us">About Us</a></li>
              <li @click="showAbout = false"><a href="/app/help/user-guidee">Help</a></li>
            </ul>
            <template #reference>
              <div class="van-tabbar-item__icon">
                <img src="@/assets/img/Zone.svg" />
              </div>
              <span>About</span>
            </template>
          </van-popover>
        </van-tabbar-item>
      </van-tabbar>

      <div class="gold"><a href="/m/activity/contribution-points-wall.html"><img src="@/assets/img/gold.gif"></a></div>
    </div>

  </footer>
</template>

<script>
export default {
  data() {
    return {
      showZone: false,
      showAccount: false,
      showAbout: false,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.gold {
	position: fixed;
	right: 12px;
	bottom: 67px;

	width: 50px;
	height: 50px;

	border-radius: 25px;
	background: #fff0cf;
	img {
		height: 60px;
		margin-top: -10px;
		margin-left: 4px;
	}
}

</style>