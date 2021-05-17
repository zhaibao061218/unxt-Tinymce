<template>
  <div class="makeMoney-deposit outerbox">
    <div class="content">
      <h2 class="title m-l-5 m-r-5 m-t-10 m-b-5 bg-white">
        <a href="/v2/activity/Affiliate/">Make Money
          <van-icon name="arrow" class="valign-middle" />
        </a>
      </h2>

      <div id="mybox" class="mybox m-l-5 m-r-5 m-t-10 m-b-10 bg-white">
        <div class="tit">
          <van-row type="flex" align="center">
            <van-col span="16"><img src="@/assets/img/makeMoney/wallet.png" alt="" /> My Wallet</van-col>

            <van-col span="8" class="align-right">
              <van-popover placement="bottom-end" :offset="[10, -5]" v-model="showPopover" trigger="click" :overlay="true">
                <van-grid square clickable :border="false" style="width: 240px">
                  <div class="p-15 fs-12 fc-black">
                    <p class="m-b-10">
                      <span class="fw-bold">Balance:</span> Your current commission
                      balance. You can transform it to Payable Balance by clicking
                      ‘Transfer to Payable’.
                    </p>
                    <p>
                      <span class="fw-bold">Cumulative:</span> The total commission you
                      have earned. You can check the commission record by clicking
                      ‘Transaction’.
                    </p>
                  </div>
                </van-grid>

                <template #reference>
                  <img src="@/assets/img/makeMoney/wenhao.png" alt="" />
                </template>
              </van-popover>
            </van-col>
          </van-row>
        </div>
        <div class="details">
          <van-row type="flex" justify="space-around" align="center">
            <van-col span="6">Balance</van-col>
            <van-col span="2" class="price">{{$store.state.currency}}{{ Walletdata.capital }}</van-col>
            <van-col span="10" class="m-l-10">
              <div class="btn" :class="{ disabled: Walletdata.capital == 0 }" @click="cash(Walletdata.capital)">
                Transfer to Payable
              </div>
            </van-col>
          </van-row>
        </div>
        <div class="details">
          <van-row type="flex" justify="space-around" align="center">
            <van-col span="6">Cumulative</van-col>
            <van-col span="2" class="price">{{$store.state.currency}}{{ Walletdata.alreadyCapital }}</van-col>
            <van-col span="10" class="m-l-10">
              <div class="btn1" @click="popUp(1)">Transaction</div>
            </van-col>
          </van-row>
        </div>
      </div>

      <div class="mybox m-l-5 m-r-5 m-t-10 m-b-10 bg-white">
        <div class="tit">
          <!-- <img src="@/assets/img/makeMoney/user.png" alt="" />
          My Referral -->
          <van-row type="flex" align="center">
            <van-col span="16"><img src="@/assets/img/makeMoney/user.png" alt="" /> My Referral</van-col>
            <van-col span="8" class="align-right">
              <van-popover placement="bottom-end" :offset="[10, -5]" v-model="showPopover2" trigger="click" :overlay="true">
                <van-grid square clickable :border="false" style="width: 240px">
                  <div class="p-15 fs-12 fc-black">
                    <p class="m-b-10">
                      Amount of qualified referals: the number of referrals that have
                      completed the registration and left a review for the first
                      application.
                    </p>
                  </div>
                </van-grid>

                <template #reference>
                  <img src="@/assets/img/makeMoney/wenhao.png" alt="" />
                </template>
              </van-popover>
            </van-col>
          </van-row>
        </div>
        <div class="details">
          <van-row type="flex" justify="space-around" align="center">
            <van-col span="6">Registered </van-col>
            <van-col span="6" class="price">{{ Walletdata.registerQty }}</van-col>
            <van-col span="6"></van-col>
          </van-row>
        </div>
        <div class="details">
          <van-row type="flex" justify="space-around" align="center">
            <van-col span="6">Qualified </van-col>
            <van-col span="6" class="price">{{ Walletdata.orderReviewQty }}</van-col>
            <van-col span="6">
              <div class="btn" @click="popUp(2)">Share</div>
            </van-col>
          </van-row>
        </div>
      </div>

      <div class="rewards m-l-5 m-r-5 m-t-20 m-b-20 bg-white">
        <div class="tit">
          <!-- <div class="imgs">
            <img src="@/assets/img/makeMoney/price.png" alt="" />
          </div>
          <span>My Commission</span> -->
          <van-row type="flex">
            <van-col span="20"><img src="@/assets/img/makeMoney/price.png" alt="" class="m-t-10 m-l-5 m-r-5" />
              My Commission</van-col>

            <van-col span="4" class="align-right">
              <van-popover placement="bottom-end" :offset="[10, -5]" v-model="showPopover3" trigger="click" :overlay="true">
                <van-grid square clickable :border="false" style="width: 240px">
                  <div class="p-15 fs-12 fc-black">
                    <p class="m-b-10">
                      Qualified Referral (the one has completed the first review order).
                      When the number reach to<span style="color: #fbbeac; font-size: 14px">1</span>, you can obtain
                      <span style="color: #fbbeac; font-size: 14px">{{ $store.state.currency
              }}{{ $store.state.SiteId == 1 ? "5" : "3.65" }}</span>.
                    </p>
                  </div>
                </van-grid>

                <template #reference>
                  <img class="m-t-10" src="@/assets/img/makeMoney/wenhao.png" alt="" />
                </template>
              </van-popover>
            </van-col>
          </van-row>
        </div>
        <van-row class="slide">
          <van-col span="2" class="leftbox">
            <div>
              <img v-if="$store.state.SiteId == 1" src="@/assets/img/makeMoney/dollar1.png" alt="" />
              <img v-else src="@/assets/img/makeMoney/pound.png" alt="" />
            </div>
            <div><img src="@/assets/img/makeMoney/user1.png" alt="" /></div>
          </van-col>
          <van-col span="18" class="slide-box">
            <div class="slide-item" :style="'width:' + Width + 'px'">
              <!-- 2222222222 -->
              <div class="content1">
                <van-progress class="progress" :percentage="Number(active)" color="#EDB4A0" pivot-color="#f0f0f0" :show-pivot="false" />
                <div class="linebox">
                  <div class="itembox" v-for="item in planData" :key="item.id" ref="navList">
                    <div class="images" v-if="item.isReceive">
                      <img src="@/assets/img/makeMoney/gold.png" alt="" />
                      <div class="price">{{$store.state.currency}}{{ item.amount }}</div>
                    </div>
                    <div class="images" v-else>
                      <img src="@/assets/img/makeMoney/huigold.png" alt="" />
                      <div class="price1">{{$store.state.currency}}{{ item.amount }}</div>
                    </div>
                    <div class="txt m-t-5" v-if="item.isReceive">
                      <span>{{ item.inviteQty }}</span>
                    </div>
                    <div class="txt1 m-t-5" v-if="!item.isReceive">
                      <span>{{ item.inviteQty }}</span>
                    </div>
                    <div class="status m-t-5" v-if="item.isReceive">
                      <span>Claimed</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 11111111 -->
              <!-- 步骤条 -->
              <!-- <van-steps
                :active="active"
                active-icon="box"
                finish-icon="box"
                inactive-icon="greybox"
                active-color="#efb330"
              >
                <van-step v-for="item in planData" :key="item.id"
                  >{{ item.inviteQty }}
                  <div class="text" v-if="item.isReceive">{{$store.state.currency}}{{ item.amount }}</div>
                  <div v-else class="text1">{{$store.state.currency}}{{ item.amount }}</div>
                  <span v-if="item.isReceive">Claimed</span></van-step
                >
              </van-steps> -->
            </div>
          </van-col>
          <van-col span="1" class="rightbox">
            <div><img src="@/assets/img/makeMoney/you11.png" alt="" /></div>
          </van-col>
        </van-row>
      </div>

      <div id="listbox" class="listbox m-l-5 m-r-5 m-t-10 m-b-10 bg-white">
        <van-row class="head" type="flex">
          <van-col span="14">
            <img src="@/assets/img/makeMoney/book.png" alt="" />
            <span class="txt m-l-5">Referral List</span>
          </van-col>
          <van-col span="7">
            <div class="btn" @click="dialogRemind=true">Remind All</div>
          </van-col>

          <van-col span="2" class="align-right">
            <van-popover placement="bottom-end" :offset="[10, -5]" v-model="showPopover4" trigger="click" :overlay="true">
              <van-grid square clickable :border="false" style="width: 240px">
                <div class="p-15 fs-12 fc-black">
                  <p class="m-b-10 align-center fw-bold fs-14">Tip</p>
                  <p>
                    Click ‘Remind All’ will send system emails to your referrals to apply
                    free testing products at Rebatest.
                  </p>
                </div>
              </van-grid>

              <template #reference>
                <img style="margin-top: 8px" class="m-l-10" src="@/assets/img/makeMoney/wenhao.png" alt="" />
              </template>
            </van-popover>
          </van-col>
        </van-row>
        <div class="select">
          <van-row type="flex" align="center">
            <van-col span="3">
              <span>Status:</span>
            </van-col>
            <van-col span="1"></van-col>
            <van-col span="20">
              <van-dropdown-menu :overlay="false">
                <van-dropdown-item get-container=".listbox" @change="sort" v-model="Selectstatus" :options="option" @opened="removeBodyClass" />
              </van-dropdown-menu>
            </van-col>
          </van-row>
        </div>
        <div v-if="friendData.data.length > 0">
          <div class="listcontent" v-for="item in friendData.data" :key="item.BuyerId">
            <van-row class="line" gutter="20">
              <van-col span="6" class="linetit">Account:</van-col>
              <van-col span="16" class="m-l-2">{{ item.userName }}</van-col>
            </van-row>
            <van-row class="line" gutter="20">
              <van-col span="6" class="linetit">Status:</van-col>
              <van-col span="16" v-if="item.maxState == 1">Registered</van-col>
              <van-col span="16" v-if="item.maxState == 2">Order Applied</van-col>
              <van-col span="16" v-if="item.maxState == 3">Order No. Approved</van-col>
              <van-col span="16" v-if="item.maxState == 4">Trial Report Approved</van-col>
              <van-col span="16" v-if="item.maxState == 5">Review on AMZ and Confirm on Rebatest</van-col>
              <van-col span="16" v-if="item.maxState == 6">Review Detected</van-col>
            </van-row>
            <van-row class="line" gutter="20">
              <van-col span="6" class="linetit">Progress:</van-col>
              <van-col span="16">
                <van-progress :percentage="((item.maxState / 6) * 100).toFixed(1)" class="m-t-20 m-l-10" color="#EDB4A0" pivot-color="#f0f0f0" text-color="#666666" />
              </van-col>
            </van-row>
            <van-row>
              <van-col span="16"></van-col>
              <van-col span="6">
                <div class="linebtn" @click="remind(item.buyerId)" v-if="item.maxState == 1 && item.isEmail == 0">
                  Remind
                </div>
                <div class="accomplish" v-if="item.maxState == 1 && item.isEmail == 1">
                  Reminded
                </div>
                <div class="accomplish" v-if="item.maxState == 6">Qualified</div>
              </van-col>
            </van-row>
          </div>
        </div>
        <van-empty v-else image="search" style="padding:0" image-size="120px" description="No record." />
      </div>
      <!-- <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />  -->
      <van-pagination :force-ellipses="true" @change="handleCurrentChange" v-model="currentPage" :total-items="friendData.amount" v-if="friendData.amount > 6" :items-per-page="6">
        <template #prev-text>
          <van-icon name="arrow-left" />
        </template>
        <template #next-text>
          <van-icon name="arrow" />
        </template>
      </van-pagination>

      <van-dialog theme='round-button' get-container="body" v-model="dialogRemind" :show-confirm-button="true" className="makeMoneyDialog" message-align="center" :showCancelButton="true" @confirm="remind" confirmButtonText="Confirm" cancelButtonText="Cancel">
        <div slot="title">
          <img :src="dialogTitImg" /><span class="close" @click="show4=false">
            <van-icon name="cross" />
          </span>
        </div>
        <div slot="default">
          <div class="align-center fs-14 fc-black p-t-20 p-l-40 p-r-40 p-b-20">
            You are about to sent remind email to your unqualified referrals.
          </div>
        </div>
      </van-dialog>

      <van-dialog get-container="body" v-model="show4" :show-confirm-button="false" className="makeMoneyDialog">
        <div slot="title">
          <img :src="dialogTitImg" /><span class="close" @click="show4=false">
            <van-icon name="cross" />
          </span>
        </div>
        <div slot="default">

          <div class="dialog1">
            <div class="titletxt" v-if="panduan == 1">
              <span>Commission Transaction</span>
            </div>
            <div class="titletxt" v-if="panduan == 2"><span>Referral Zone</span></div>
            <div v-if="panduan == 1">
              <div class="table">
                <van-row class="conten" type="flex" justify="center" align="center">
                  <van-col span="14">Time</van-col>
                  <van-col class="right" span="10">Amount</van-col>
                </van-row>
                <van-row class="information" type="flex" justify="center" align="center" v-for="item in recordList.data" :key="item.id">
                  <van-col class="line" span="14">{{ item.createTime }}</van-col>
                  <van-col class="right" span="10">{{$store.state.currency}}{{ item.amount }}</van-col>
                </van-row>

                <van-empty style="padding:0" v-if="recordList.amount==0" image="search" image-size="120px" description="No record." />

                <van-pagination v-if="recordList.amount>6" class="m-t-20 m-b-10" :force-ellipses="true" @change="handleCurrentChange1" v-model="currentPage1" :total-items="recordList.amount" :items-per-page="6">
                  <template #prev-text>
                    <van-icon name="arrow-left" />
                  </template>
                  <template #next-text>
                    <van-icon name="arrow" />
                  </template>
                </van-pagination>
              </div>
            </div>
            <div v-if="panduan == 2">
              <div class="table2">
                <span>Referral Link</span>
                <van-row class="line">
                  <van-col style="width: calc(100% - 76px);" class="input"><input type="text" disabled :placeholder="Link" />
                  </van-col>
                  <van-col>
                    <div class="right" @click="handleClipboard($event,Link)">
                      <img src="@/assets/img/makeMoney/link.png" alt="" />
                    </div>
                  </van-col>
                </van-row>
              </div>
              <div class="table21 m-b-30">
                <span>Referral Code</span>
                <van-row class="line">
                  <van-col style="width: calc(100% - 76px);" class="input"><input type="text" disabled :placeholder="Numberlink" />
                  </van-col>
                  <van-col>
                    <div class="right" @click="handleClipboard($event,Numberlink)">
                      <img src="@/assets/img/makeMoney/loveuser.png" alt="" />
                    </div>
                  </van-col>
                </van-row>
              </div>

              <!-- <van-row justify="center" align="center" class="p-l-40 p-r-40"> 
              <van-col span="10">
                <img style="width:100%" src="@/assets/img/makeMoney/twitterbtn.png" alt="">
              </van-col>
              <van-col span="4" ></van-col>
              <van-col span="10">
                <img style="width:100%" src="@/assets/img/makeMoney/facebookbtn.png" alt="">
              </van-col>
            </van-row>

            <van-row justify="center" align="center" class="p-l-40 p-r-40 m-t-10 m-b-30"> 
              <van-col span="10">
                <img style="width:100%" src="@/assets/img/makeMoney/pint.png" alt="">
              </van-col>
              <van-col span="4" ></van-col>
              <van-col span="10">
                <img style="width:100%" src="@/assets/img/makeMoney/emali.png" alt="">
              </van-col>
            </van-row> -->
            </div>
          </div>
        </div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import '@/assets/css/makeMoney/index.scss'
import Clipboard from 'clipboard'

export default {
  middleware: 'auth',
  head() {
    return {
      title: 'Rebatest Affiliate&Refer Program',
    }
  },
  async asyncData({ $axios, $cookies, store }) {
    // console.log($cookies.get("UserId"), store.state.SiteId)
    let [WalletList, planList, friendList, linkData] = await Promise.all([
      $axios.get(
        '/api/PartTime/show/BuyerPartTime/getparttimecapitalbyid?BuyerId=' +
          $cookies.get('UserId') +
          '&SiteId=' +
          store.state.SiteId
      ),
      $axios.get(
        '/api/PartTime/show/BuyerPartTime/getparttimestepbyid?BuyerId=' +
          $cookies.get('UserId') +
          '&SiteId=' +
          store.state.SiteId
      ),
      $axios.get(
        '/api/PartTime/show/BuyerPartTime/getparttimeloglistbyid?PageIndex=1&PageSize=6&BuyerId=' +
          $cookies.get('UserId') +
          '&SiteId=' +
          store.state.SiteId +
          '&State=0'
      ),
      $axios.get(
        '/api/PartTime/show/BuyerPartTime/getinvitecodebyid?BuyerId=' +
          $cookies.get('UserId')
      ),
    ])
    let Walletdata = WalletList.data.data
    let planData = planList.data.data
    let friendData = friendList.data.data

    // 步骤条高亮
    let arr = []
    planData.forEach((element) => {
      if (element.isReceive) {
        arr.push(element)
      }
    })
    // let active = arr.length - 1;
    let active = ((arr.length / planData.length) * 100).toFixed(2)
    let arrLength = Number(arr.length == 0 ? 0 : arr.length - 1) // 用来记录进度到那一步/不能用最后一个步骤
    let Width = '' // 动态步骤条宽度
    if (planData.length <= 3) {
      Width = 320
    } else if (planData.length <= 5) {
      Width = 620
    } else if (planData.length <= 10) {
      Width = 920
    } else {
      Width = 1400
    }

    let idArr = []
    friendData.data.forEach((ele) => {
      if (ele.isEmail == 0 && ele.maxState == 1) {
        idArr.push(ele.buyerId)
      }
    })

    if (Walletdata) {
      return {
        Walletdata,
        planData,
        friendData,
        active,
        Width,
        Link:
          ($cookies.get('SiteName') == 'US'
            ? 'https://www.rebatest.com/test-products'
            : 'https://uk.rebatest.com/test-products') +
          '?Uid=' +
          linkData.data.data.uid,
        Numberlink: linkData.data.data.code,
        idArr,
        arrLength,
      }
    } else {
      return {
        planData,
        friendData,
        active,
        Width,
        Link:
          ($cookies.get('SiteName') == 'US'
            ? 'https://www.rebatest.com/test-products'
            : 'https://uk.rebatest.com/test-products') +
          '?Uid=' +
          linkData.data.data.uid,
        Numberlink: linkData.data.data.code,
        idArr,
        arrLength,
      }
    }
  },

  data() {
    return {
      Walletdata: {
        capital: 0,
        alreadyCapital: 0,
        registerQty: 0,
        applyQty: 0,
        submitNoQty: 0,
        submitTrialQty: 0,
        reviewQty: 0,
        orderReviewQty: 0,
      },
      showPopover: false,
      showPopover2: false,
      showPopover3: false,
      showPopover4: false,
      show4: false,
      Selectstatus: 0,
      currentPage: 1,
      currentPage1: 1,
      active: 6, // 13
      value: 1,
      status: 0,
      panduan: 0,
      dialogRemind: false, //提醒弹窗
      recordList: {}, //提现记录列表
      idArr: [],
      //
      option: [
        { text: 'All', value: 0 },
        { text: 'Registered', value: 1 },
        { text: 'Order Applied', value: 2 },
        { text: 'Order no. Approved', value: 3 },
        { text: 'Trial report approved', value: 4 },
        { text: 'Review on AMZ and Confirm on Rebatest', value: 5 },
        { text: 'Review Detected', value: 6 },
      ],
      dialogTitImg: require('@/assets/img/makeMoney/Popup_' +
        this.$store.state.SiteId +
        '.png'),
    }
  },
  methods: {
    //select选择
    sort() {
      // console.log(this.Selectstatus,'66666');
      this.$axios
        .get(
          '/api/PartTime/show/BuyerPartTime/getparttimeloglistbyid?PageIndex=' +
            this.currentPage +
            '&PageSize=6&BuyerId=' +
            this.$cookies.get('UserId') +
            '&SiteId=' +
            this.$store.state.SiteId +
            '&State=' +
            this.Selectstatus
        )
        .then((res) => {
          this.friendData = res.data.data
        })
    },
    removeBodyClass() {
      //解决无法滚动问题
      document.querySelector('body').classList.remove('van-overflow-hidden')
    },
    // 提现
    cash(balance) {
      // console.log(balance,'余额')
      let that = this
      if (balance != 0) {
        that.$axios
          .get(
            '/api/PartTime/show/BuyerPartTime/parttimewithdraw?Amount=' +
              balance +
              '&BuyerId=' +
              that.$cookies.get('UserId') +
              '&SiteId=' +
              that.$store.state.SiteId
          )
          .then((res) => {
            // console.log(res,'提现成功')
            if (res.data.code == 200) {
              that.Walletdata.capital = 0
              that.$toast('success')
            } else {
              that.$toast('err')
            }
          })
      }
    },
    // 提现记录
    getcashList() {
      let that = this
      that.$axios
        .get(
          '/api/PartTime/show/BuyerPartTime/getparttimecapitallogbyid?PageIndex=' +
            that.currentPage1 +
            '&PageSize=6&BuyerId=' +
            that.$cookies.get('UserId') +
            '&SiteId=' +
            that.$store.state.SiteId
        )
        .then((res) => {
          // console.log(res,'提现记录数据')
          that.recordList = res.data.data
        })
    },
    // 邀请的好友列表
    getfriendList() {
      let that = this
      that.$axios
        .get(
          '/api/PartTime/show/BuyerPartTime/getparttimeloglistbyid?PageIndex=' +
            that.currentPage +
            '&PageSize=6&BuyerId=' +
            that.$cookies.get('UserId') +
            '&SiteId=' +
            that.$store.state.SiteId +
            '&State=' +
            that.Selectstatus
        )
        .then((res) => {
          // console.log(res)
          that.friendData = res.data.data

          that.idArr = []
          that.friendData.data.forEach((ele) => {
            if (ele.isEmail == 0 && ele.maxState == 1) {
              that.idArr.push(ele.buyerId)
            }
          })
        })
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getfriendList()
      this.comsys.Visual('listbox')
    },
    handleCurrentChange1(val) {
      this.currentPage1 = val
      this.getcashList()
    },
    bubble(type) {
      // 气泡文字弹窗
      if (type == 1) {
        this.show = true
      } else if (type == 2) {
        this.show2 = true
      } else if (type == 3) {
        this.show3 = true
      } else {
        Dialog.alert({
          title: 'Tip',
          message:
            'Click ‘Remind All’ will send system emails to your referrals to apply free testing products at Rebatest.',
        })
      }
    },
    popUp(type) {
      this.panduan = type
      if (type == 1) {
        this.getcashList()
      }
      this.show4 = true
    },
    //复制urllink
    handleClipboard(event, copytext) {
      const clipboard = new Clipboard(event.target, {
        text: () => copytext,
      })
      // const clipboard = new Clipboard(event.target, {
      //   text: () => self.testnumber,
      // });
      clipboard.on('success', () => {
        // this.$toast.success("Copied successfully!");
        this.$toast('Copied successfully!')
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        this.$notify({ type: 'danger', message: 'Copy Failed!' })
        clipboard.destroy()
      })
      clipboard.onClick(event)
    },
    //提醒发送站内信和邮件
    remind(userid) {
      let BuyerIds = []
      if (userid && typeof userid != 'object') {
        BuyerIds.push(userid)
      } else {
        BuyerIds = this.idArr
      }

      this.$toast.loading()

      this.$axios
        .post('/api/PartTime/show/BuyerPartTime/sendmailbyids', {
          ids: BuyerIds,
          type: 6,
        })
        .then((res) => {
          this.$toast.success('Success')

          this.show4 = false
          //重新获取数据
          this.getfriendList()
        })
    },
  },
  mounted() {
    this.$nextTick(() => {
      // 定位到进度到那一步
      let doc = this.$refs.navList[this.arrLength]
      doc.scrollIntoView()
      this.comsys.Visual('mybox')
    })
  },
}
</script>

<style lang="scss" scoped>
.outerbox {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  // background-color: #77b7ff;

  background-color: #7ab8fc;

  .content {
    width: 94%;
    margin: 0 auto;
    padding: 10px 10px;

    // border: 1px solid #ccc;

    border-top: 4px solid #fedbb4;
    border-bottom: 3px solid #e39063;
    border-radius: 10px;
    background-color: #fbbfac;
    box-shadow: 0 -4px 0 0 #858585, 0 4px 0 0 #9dccfd;

    .title {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      height: 30px;
      padding-right: 6px;

      color: #333333;

      font-size: 16px;
      font-weight: Bold;
      line-height: 30px;
      a {
        text-decoration: none;

        color: #333333;
      }
    }
    .mybox {
      color: #666666;
      border-radius: 4px;

      font-size: 12px;
      .tit {
        height: 50px;
        margin-left: 10px;

        // border-bottom: 1px solid #ccc;
        padding: 0 8px;

        color: #333333;

        font-size: 20px;
        font-weight: bolder;
        line-height: 50px;

        img {
          width: 26px;
          height: 36px;
          margin-right: 4px;
          padding-top: 10px;

          vertical-align: top;
        }
      }
      .details {
        padding-top: 10px;

        // padding-bottom: 10px;

        border-top: 1px solid #cccccc;

        line-height: 40px;
      }
      .price {
        color: #555555;

        font-weight: Bold;
      }
      .btn {
        width: 100%;
        height: 30px;

        text-align: center;

        color: #ffffff;
        border-radius: 20px;
        background-color: #7bb8fc;

        line-height: 30px;
        &.disabled {
          pointer-events: none;

          opacity: 0.5;
        }
      }
      .btn1 {
        width: 100%;
        height: 30px;

        text-align: center;

        color: #333333;
        border: 1px solid #7bb8fc;
        border-radius: 20px;
        background-color: #ffffff;

        line-height: 30px;
      }
    }
    .rewards {
      // position: relative;
      margin-top: 10px;

      color: #666666;
      border-radius: 4px;

      font-size: 12px;
      .tit {
        height: 50px;
        padding: 0 8px;

        color: #333333;

        // border-bottom: 1px solid #ccc;
        // display: flex;

        font-size: 20px;
        font-weight: bolder;
        line-height: 50px;

        img {
          width: 26px;

          vertical-align: top;
          // height: 36px;
          // padding-top: 10px;
          // margin-left: 4px;
        }
      }
      .slide {
        // position: relative;
        display: flex;

        padding-top: 10px;

        border-top: 1px solid #cccccc;
        .leftbox {
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          width: 30px;
          height: 100px;
          margin-right: 10px;
          margin-left: 10px;

          // background-color: pink;
          // position: fixed;
          // left: 0;

          text-align: center;

          img {
            width: 30px;
            height: 30px;
          }
        }
        .rightbox {
          width: 30px;

          // display: flex;
          // justify-content: center;
          // align-items: center;
          // margin-top: 20px;
          margin-top: 12px;
          margin-left: 4px;

          text-align: center;

          img {
            width: 60%;
            height: 80%;
          }
        }
        .slide-box {
          display: -webkit-box;
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
          .progressbox {
            display: flex;

            width: 900px;
            padding-top: 10px;
          }
          .content1 {
            position: relative;

            flex: 1;

            height: 100%;
            .progress {
              position: absolute;
              top: 20%;
              left: -5%;

              width: 100%;
              height: 10px;
            }
            .linebox {
              position: absolute;
              top: 0;

              display: flex;

              width: 100%;
              // margin-left: 5%;
              .itembox {
                flex: 1;

                height: 100px;
                .images {
                  position: relative;

                  width: 48px;
                  margin-top: 2px;
                  img {
                    width: 100%;
                  }
                  .price {
                    position: absolute;
                    top: 48%;
                    left: 50%;

                    transform: translate(-50%, -50%);

                    color: #d18120;
                  }
                  .price1 {
                    position: absolute;
                    top: 48%;
                    left: 50%;

                    transform: translate(-50%, -50%);

                    color: #ffffff;
                  }
                }
                .txt {
                  width: 48px;

                  text-align: center;

                  color: #333333;

                  font-weight: Bold;
                }
                .txt1 {
                  width: 48px;

                  text-align: center;

                  color: #999999;

                  font-weight: Bold;
                }
                .status {
                  width: 48px;

                  text-align: center;

                  color: #666666;
                }
              }
            }
          }
        }
        .slide-box::-webkit-scrollbar {
          display: none;

          width: 0;
          height: 0;
        }
        // .slide-item { width: 200px; height: 200px; border: 1px solid #ccc; margin-right: 30px; background:pink;}
        // .slide-item { white-space:nowrap; display: -webkit-box;}
      }
    }
    .listbox {
      padding-top: 10px;
      padding-bottom: 10px;

      color: #666666;
      border-radius: 4px;
      .head {
        height: 50px;
        padding: 0 8px;

        color: #333333;

        // margin-left: 10px;
        border-bottom: 1px solid #cccccc;

        font-weight: bolder;
        line-height: 40px;

        img {
          width: 26px;
          height: 26px;
        }
        .txt {
          font-size: 20px;
        }
        .btn {
          width: 100%;
          height: 30px;
          margin-top: 4px;

          text-align: center;

          color: #ffffff;
          border-radius: 20px;
          background-color: #7bb8fc;

          font-size: 12px;
          line-height: 30px;
        }
      }
      .select {
        padding: 20px 10px;

        font-size: 10px;
        font-weight: bold;
        .van-dropdown-menu {
          width: 100%;
          height: 38px;
          padding: 0 5px;

          border: 1px solid #dddddd;
          background-color: #ffffff;

          font-size: 4px;
        }

        .selectby > option {
          background-color: white;
        }
      }
      .listcontent {
        margin: 10px 10px;
        padding: 10px 10px;

        border-radius: 10px;
        background-color: #f0f0f0;
        .line {
          height: 40px;

          font-size: 10px;
          line-height: 40px;
          .linetit {
            padding-right: 4px;

            color: #333333;

            font-size: 16px;
            font-weight: Bold;
            // margin-right: 2px;
          }
        }
        .linebtn {
          width: 80px;
          height: 30px;
          margin-top: 20px;

          text-align: center;

          color: #ffffff;
          border-radius: 20px;
          background-color: #7cb8fc;

          font-size: 12px;
          line-height: 30px;
        }
        .accomplish {
          width: 80px;
          height: 30px;
          margin-top: 20px;

          text-align: center;

          color: #ffffff;
          border-radius: 20px;
          background-color: #b5b5b5;

          font-size: 12px;
          line-height: 30px;
        }
      }
    }
  }
  .dialog {
    width: 96%;
    padding: 10px 10px;

    text-align: center;

    font-size: 14px;
    div {
      width: 100%;

      text-align: center;
    }
    p {
      width: 100%;
    }
    span {
      color: #333333;

      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>

<style lang="scss">
// .van-step--horizontal:first-child .van-step__title {
// 	z-index: 123;

// 	margin-top: 62px;
// 	margin-left: 12px;

// 	font-size: 14px;
// 	font-weight: bold;
// }
// .van-step--horizontal:first-child .van-step__title .text {
// 	position: absolute;
// 	z-index: 125;
// 	top: -50px;
// 	left: -22px;

// //第一步骤

// 	width: 56px;
// 	height: 56px;

// 	text-align: center;

// 	color: #d18120;

// 	font-size: 2px;
// 	line-height: 38px;
// }
// .van-step--horizontal:last-child .van-step__title .text {
// 	position: absolute;
// 	z-index: 125;
// 	top: -50px;
// 	left: -38px;

// //最后一步骤

// 	width: 56px;
// 	height: 56px;

// 	text-align: center;

// 	color: #d18120;

// 	font-size: 2px;
// 	line-height: 38px;
// }
// .van-step--horizontal:last-child .van-step__title .text1 {
// 	position: absolute;
// 	z-index: 125;
// 	top: -50px;
// 	left: -38px;

// //最后一步骤
// 	// z-index: 125;
// 	// position: absolute;
// 	// top: -40px;
// 	// left: -10px;
// 	// font-size: 6px;
// 	// color: #fff;

// 	width: 56px;
// 	height: 56px;

// 	text-align: center;

// 	color: #ffffff;

// 	font-size: 2px;
// 	line-height: 38px;
// }
// .van-step--horizontal .van-step__title .text {
// 	position: absolute;
// 	z-index: 125;
// 	top: -50px;
// 	left: -20px;

// 	width: 56px;
// 	height: 56px;

// 	text-align: center;

// 	color: #d18120;

// 	font-size: 2px;
// 	line-height: 38px;
// }
// .van-step--horizontal:first-child .van-step__title .text1 {
// 	position: absolute;
// 	z-index: 125;
// 	top: -50px;
// 	left: -22px;

// //第一步骤

// 	width: 56px;
// 	height: 56px;

// 	text-align: center;

// 	color: #ffffff;

// 	font-size: 2px;
// 	line-height: 38px;

// 	// z-index: 125;
// 	// position: absolute;
// 	// top: -40px;
// 	// left: -8px;
// 	// font-size: 2px;
// 	// color: #fff;
// }
// .van-step--horizontal .van-step__title .text1 {
// 	position: absolute;
// 	z-index: 125;
// 	top: -50px;
// 	left: -20px;

// 	width: 56px;
// 	height: 56px;

// 	text-align: center;

// 	color: #ffffff;

// 	font-size: 2px;
// 	line-height: 38px;
// 	// z-index: 125;
// 	// position: absolute;
// 	// top: -40px;
// 	// left: -10px;
// 	// font-size: 2px;
// 	// color: #fff;
// }
// .van-step--horizontal .van-step__title {
// 	position: relative;
// 	z-index: 123;

// 	margin-top: 62px;
// 	margin-left: 16px;

// 	font-size: 14px;
// 	font-weight: bold;
// 	// display: flex;
// 	span {
// 		position: absolute;
// 		z-index: 125;
// 		top: 24px;
// 		left: -18px;

// 		color: #666666;

// 		font-size: 6px;
// 	}
// }
// .van-steps--horizontal {
// 	padding: 0 10px 0;
// }
// .van-step__line {
// 	height: 4px;
// }
// .van-icon-box {
// 	// 自定义icon背景图
// 	width: 56px;
// 	height: 56px;

// // width: 38px;
// 	// height: 38px;

// 	background: url("@/assets/img/makeMoney/gold.png") center / 100% 100%;
// }
// .van-icon-greybox {
// 	// 自定义icon背景图
// 	width: 56px;
// 	height: 56px;

// // width: 40px;
// 	// height: 38px;

// 	background: url("@/assets/img/makeMoney/huigold.png") center / 100% 100%;
// }
// .van-step--horizontal .van-step__circle-container {
// 	padding: 0;
// }
// // 步骤线的宽度
// .van-step--finish .van-step__circle,
// .van-step--finish .van-step__l {
// 	height: 6px;
// }
// .van-step--horizontal .van-step__line {
// 	height: 6px;
// }
// .van-step--horizontal:last-child .van-step__title {
// 	color: #9a9b9d;
// }

.makeMoney-deposit {
  .van-dropdown-menu__bar {
    height: 36px;

    box-shadow: none;

    line-height: 36px;
  }
  .van-dropdown-menu__item {
    justify-content: flex-start;
  }
  .van-dropdown-menu__title {
    width: calc(100% - 10px);
  }
  .van-dropdown-item {
    // border: 1px solid #ddd;
    right: calc(3% + 15px);
    left: calc(3% + 15px);

    margin-top: 1px;
  }
}
</style>
