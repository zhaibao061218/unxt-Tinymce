<template>
  <div>
    <van-nav-bar
      class="m-t-10"
      :title="Title"
      left-arrow
      :border="true"
      @click-left="$router.go(-1)"
    />

    <div class="liveChatMobile m-l-15 m-r-15 m-t-20 m-b-20 bg-white">
      <div class="p-10">
        <div class="liveCenter">
          <img
           width="100%"
            src="~@/assets/img/academy/banneryi.png"
          />
        </div>

        <div class="liveCenter2">
          <span>Contact us about specific subject</span>
          <div class="liveCen">
            <div>
              <a :href="ResponseData.CustomerUrl" target="_blank">
                <p>
                  Exclusive for the new users. Interested in Rebatest and want to get help
                  with knowing how the Rebatest works.
                </p>
                <img
                  src="~@/assets/img/academy/yiyi.png"
                 
                />
              </a>
            </div>

            <div @click="openTidioChat">
              <p>
                Get help with any problem in the processing order and getting the rebate.
              </p>
              <img
                src="~@/assets/img/academy/eryi.png"
                
              />
            </div>

                    <div>
                        <a href="mailto:job@rebatest.com">
                            <p>
                                Hope to join us to be a Rebatest partner. Want to know more details about
                                it.
                            </p>
                            <img src="~@/assets/img/academy/sanyi.png" style="width: 67px; height: 67px; margin:10px 125px; display: block" />
                            <span style="
                  font-size: 18px;
                  font-weight: bold;
                  color: #333333;
                  margin-top: 70px;
                ">job@rebatest.com</span>
                        </a>
                    </div>
                </div>


        <div class="liveNum">
            <img
            src="~@/assets/img/academy/questionyi.png"
            style="height: 234px;float: right;margin-top: 20px;margin-right: 46px;"
          />
            <div class="liveNum1">
              <ul>
                <li>
                  ①First, check out our
                  <a href="/help/faq" target="_blank">FAQ</a>
                  &
                  <a href="/help/user-guide" target="_blank">User Guide.</a>
                </li>
                <li>
                  ②Still have a quick question? Get an instant reply on the above
                  Messenger
                </li>
                <li>
                  ③Need even more help? Please visit our
                  <a href="/contact-us" target="_blank">Contact us</a>
                  for further information.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="liveBottom">
          <div class="liveBottom1">
            <img
            width="100%"
              src="~@/assets/img/academy/blocksan.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  methods: {
    openTidioChat() {
      if (window.tidioChatApi) {
        window.tidioChatApi.open();
      }
    },
  },
  mounted() {
    this.Title = decodeURIComponent(this.$route.query.title);
  },
  //客服链接
  async asyncData({ params, query, $axios, $cookies, store }) {
    let { ResponseData } = await $axios.$get(
      "/api/academy/show/BrandStory/getcustomerlinklistshow"
    );
    return {
      ResponseData,
      Title: query.title.replace(/\+/g, " "),
    };
  },
  //
};
</script>

<style lang="scss">
.liveChatMobile {

  .liveCenter2 {
    margin: 25px auto;
    // border: 1px black solid;
  }

  .liveCenter2 span {
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    display: block;
    text-align: center;
    margin-top: 30px;
  }

  .liveCen div {
    margin: 15px 0;
    padding-bottom: 25px;
    border-radius: 20px;
    border: 1px #dedddd solid;
    box-shadow: 0 0 3px 3px #dedddd;
    text-align: center;
  }

  .liveCen div p {
    font-size: 14px;
    color: #555555;
    text-align: center;
    margin: 35px 15px;
  }

  .liveCenter2 > .liveNum {
    border: 1px #dedddd solid;
    box-shadow: 0 0 3px 3px #dedddd;
    border-radius: 20px;
    text-align: center;
  }

  .liveCenter2 > .liveNum > .liveNum1 {
    padding: 10px;
    text-align: left;
  }

  .liveNum1 ul li {
    list-style: none;
    font-size: 13px;
    padding: 10px;
    color: #555555;
  }

  .liveNum1 ul li > a {
    color: #0ab4ff;
    text-decoration: underline;
  }

  .liveBottom {
    width: 100%;
    border: 1px white solid;
    border-top-color: #aaaaaa;
    margin-top: 38px;
  }

  .liveBottom1 {
    width: 100%;
    margin: 30px auto;
  }

  a {
    text-decoration: none;
  }
}
</style>
