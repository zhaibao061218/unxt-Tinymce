<template>
  <div class="container blog-index">
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="blogList">
      <div class="line">
        <h2 @click="goBlogDetails()"> Latest Post</h2>
      </div>
      <ul class="p-l-10 p-r-10">
        <li>
          <img src="" alt="" height="115px" width="100%">
          <p>Cashback Site Work How Does The Rebatest Site Work How Amazon Cashback Site Work</p>
        </li>
        <li>
          <img src="" alt="" height="115px" width="100%">
          <p>Cashback Site Work How Does The Rebatest Site Work How Amazon Cashback Site Work</p>
        </li>
        <li>
          <img src="" alt="" height="115px" width="100%">
          <p>Cashback Site Work How Does The Rebatest Site Work How Amazon Cashback Site Work</p>
        </li>
      </ul>
    </div>
    <div class="shopSwiper">
      <div class="line">
        <h2>Monthly Recommendation</h2>
      </div>
      <ul class="m-l-10 m-r-10">
        <li>
          <van-swipe class="my-swipe" indicator-color="#1989fa">
            <van-swipe-item>
              <div class="swiperBorder">
                <div>
                  <img src="" alt="" height="130px" width="100%">
                  <p>Recoppa 3 Pack Apple Watch case withApple Watch case with</p>
                  <p><span>$30</span><span>$20</span></p>
                  <button>Apply Now</button>
                </div>
                <div>
                  <img src="" alt="" height="130px" width="100%">
                  <p>Recoppa 3 Pack Apple Watch case withApple Watch case with</p>
                  <p><span>$20</span><span>$10</span></p>
                  <button index="/list/1">Apply Now</button>
                </div>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="swiperBorder">
                <div>
                  <img src="" alt="" height="130px" width="100%">
                  <p>Recoppa 3 Pack Apple Watch case withApple Watch case with</p>
                  <p><span>$50</span><span>$20</span></p>
                  <button>Apply Now</button>
                </div>
                <div>
                  <img src="" alt="" height="130px" width="100%">
                  <p>Recoppa 3 Pack Apple Watch case withApple Watch case with</p>
                  <p><span>$80</span><span>$20</span></p>
                  <button>Apply Now</button>
                </div>
              </div>
            </van-swipe-item>

            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </van-swipe>
        </li>
      </ul>
    </div>
    <div class="hotBlog">
      <div class="p-b-10">
        <h2><img src="@/assets/img/blog/hotBlog1.png" alt="" srcset="">Editor’s Recommendation</h2>
        <div class="card">
          <img class="blogBanner" src="" alt="">
          <h3>Best Amazon Cashback Site Rebatest</h3>
          <div class="des">
            Rebatest is a cash back site focused on Amazon. As long
            as you find the product you like in the Amazon store or on
            rebatest.com, you only need to be in write a good review ......
          </div>
        </div>

      </div>
      <div class="p-b-10">
        <h2><img src="@/assets/img/blog/hotBlog2.png" alt="" srcset="">Latest Activities</h2>
        <div class="card">
          <img class="blogBanner" src="" alt="">
          <h3>Best Amazon Cashback Site Rebatest</h3>
          <div class="des">
            Rebatest is a cash back site focused on Amazon. As long
            as you find the product you like in the Amazon store or on
            rebatest.com, you only need to be in write a good review ......
          </div>
        </div>

      </div>
      <div class="p-b-10">
        <h2><img src="@/assets/img/blog/hotBlog3.png" alt="" srcset="">Their experiences with Rebatest</h2>
        <div class="card">
          <img class="blogBanner" src="" alt="">
          <h3>Best Amazon Cashback Site Rebatest</h3>
          <div class="des">
            Rebatest is a cash back site focused on Amazon. As long
            as you find the product you like in the Amazon store or on
            rebatest.com, you only need to be in write a good review in write a good reviewin write a good review
          </div>
        </div>

      </div>
    </div>
    <div class="allBlog">
      <h2 @click="goSeachBlog()">
        <img src="@/assets/img/blog/allIcon.png" alt="" srcset="">
        All
        <van-icon name="search" @click="searchBlog()" />
      </h2>
      <ul>
        <li>
          <img src="" alt="" height="100px" width="150px">
          <div class="p-l-10">
            <div class="p-t-10 ellipsis">
              How Does The Rebatest Site
              Amazon Cashback Site Work,
              How Does The Rebatest .....
            </div>
            <p class="time">
              <van-icon name="underway-o" /><span>March 8, 2021</span>
            </p>
          </div>
        </li>
        <li>
          <img src="" alt="" height="100px" width="150px">
          <div class="p-l-10">
            <div class="p-t-10 ellipsis">
              How Does The Rebatest Site
              Amazon Cashback Site Work,
              How Does The Rebatest .....
            </div>
            <p class="time">
              <van-icon name="underway-o" /><span>March 8, 2021</span>
            </p>
          </div>
        </li>
        <li>
          <img src="" alt="" height="100px" width="150px">
          <div class="p-l-10">
            <div class="p-t-10 ellipsis">
              How Does The Rebatest Site
              Amazon Cashback Site Work,
              How Does The Rebatest .....
            </div>
            <p class="time">
              <van-icon name="underway-o" /><span>March 8, 2021</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '@/assets/css/blog/styles.scss'
export default {
  data() {
    return {}
  },
  methods: {
    searchBlog() {
      this.$router.push('blog/list/1')
    },
    goBlogDetails() {
      this.$router.push('blog/view/1')
    },
    goSeachBlog() {
      this.$router.push('blog/search')
    },
  },
}
</script>
