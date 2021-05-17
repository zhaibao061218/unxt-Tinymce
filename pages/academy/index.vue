<template>
  <div class="container">
    <div class="banner"><img :src="BannerImgUrk" /></div>

    <section class="quickIcon">
      <div class="container">
        <van-row type="flex" justify="center">
          <van-col span="6" v-for="(item, index) in SecondPositionLevel" :key="index">
            <a :href="item.LinkUrl+'?title='+encodeURIComponent(item.Description)">
              <img :src="item.ImageUrl" />
              <p>{{ item.Description }}</p>
            </a>
          </van-col>
        </van-row>
      </div>
    </section>
    <section class="justForYou">
      <div class="container Just">
        <h2 class="title">Just For You</h2>
        <van-row>
          <van-col :span="12" v-for="(item, index) in ThirdPositionLevel" :key="index">
            <div class="item" :class="'item_'+index">
              <img :src="item.ImageUrl" />
              <p>
                <a :href="item.LinkUrl+'?title='+encodeURIComponent(item.Description)"
                  ><span>{{ item.Description }}</span></a
                >
              </p>
            </div>
          </van-col>
        
        </van-row>
      </div>
    </section>
    <section class="course newbie">
      <div class="container">
        <div class="title">
          <h2>For Newbie-How Rebatest Works</h2>
          <a href="./academy/course?tab=first">View All>></a>
        </div>
        <div class="Swiper">
          <van-swipe
            :loop="false"
            :width="185"
            :show-indicators="false"
            style="display: flex"
          >
            <van-swipe-item
              type="flex"
              justify="space-between"
              v-for="(item, index) in FourthPositionLevel"
              :key="index"
            >
              <div class="item">
                <a :href="'./academy/video/' + item.Id">
                  <div class="thumb">
                    <img :src="item.ImageUrl" /><span class="play"></span>
                  </div>
                  <h3>{{ item.CourseTitle }}</h3>
                  <p>{{ item.ViewCount }} views · {{ item.ReleaseTime }}</p>
                </a>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        
      </div>
    </section>

    <section class="course intermediate">
      <div class="container Orders">
        <div class="title">
          <h2>Intermediate Course- Make More Orders</h2>
        <a href="./academy/course?tab=second">View All>></a>
        </div>
        <van-row type="flex" justify="space-between">
         
    
          <div class="item" v-for="(item, index) in FifthPositionLevel" :key="index">
            <a :href="'./academy/course/'+item.Id">
              <div class="thumb">
                <img :src="item.ImageUrl" />
              </div>
              <h3>{{item.CourseTitle}}</h3>
              <p>{{item.ViewCount}} views · {{item.ReleaseTime}}</p>
            </a>
          </div>
      
        </van-row>
      </div>
    </section>

    <section class="course advanced">
      <div class="container">
        <div class="title">
          <h2>Advanced Course-Earn more</h2>
         <a href="./academy/course?tab=third">View All>></a>
        </div>
        <van-row type="flex" justify="space-between">
         <div class="item" v-for="(item, index) in SixthPositionLevel" :key="index">
            <a :href="'./academy/course/'+item.Id">
              <div class="thumb">
                <img :src="item.ImageUrl" />
              </div>
              <h3>{{item.CourseTitle}}</h3>
              <p>{{item.ViewCount}} views · {{item.ReleaseTime}}</p>
            </a>
          </div>
        </van-row>
      </div>
    </section>
  </div>
</template>
<script>
import "@/assets/css/academy.scss";
export default {
  data() {
    return {
      userInfo: "",
    };
  },
  async asyncData({ params, $axios }) {
    let { data } = await $axios.get("/api/academy/show/Home/gethomeshowinfo?ShowType=2");
    let {
      BannerImgUrk,
      SecondPositionLevel,
      ThirdPositionLevel,
      FourthPositionLevel,
      FifthPositionLevel,
      SixthPositionLevel,
    } = data["ResponseData"];

    return {
      BannerImgUrk,
      SecondPositionLevel,
      ThirdPositionLevel,
      FourthPositionLevel,
      FifthPositionLevel,
      SixthPositionLevel,
    };
  },
};
</script>
<style lang="scss" scoped>
.Just {
  width: 95%;
  margin: 0 auto;
}
.newbie {
  width: 100%;
}
.Swiper {
  width: 95%;
  margin: 0 auto;
  display: flex;
}
.banner > img {
  width: 100%;
}
.quickIcon {
  padding: 27px 0;
  text-align: center;
}
.quickIcon a {
  text-decoration: none;
}

.Orders,
.advanced {
  width: 95%;
  margin: 0 auto;
}
.quickIcon p {
  color: #555;
  font-size: 12px;
}
.quickIcon img {
  height: 57px;
}
.justForYou {
  padding: 35px 0;
  background-color: #fff;
}
.justForYou .title {
  margin: 0;
  font-size: 14px;
  color: #0400a3;
  font-weight: 800;
}

.justForYou .item {
  text-align: center;
  margin: 32px 0 0;
}
.justForYou img {
  height: 98px;
}

.justForYou p {
  margin: 22px 0 0;
}

.justForYou a {
  display: inline-block;
  padding: 0 25px;
  height: 30px;
  line-height: 30px;
  border-radius: 26px;
  color: #fff;
  font-size: 11px;
  text-decoration: none;
  -webkit-box-reflect: below 0 -webkit-linear-gradient(transparent, transparent 65%, rgba(255, 255, 255, 0.3));
}
.justForYou .item_0 a {
  background: linear-gradient(0deg, #86a5f5 0%, #f2c0fe 100%);

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.73);
}
.justForYou .item_1 a {
  background: linear-gradient(0deg, #fed4b3 0%, #ff944d 100%);

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.73);
}
.course {
  padding: 25px 0;
}
.intermediate {
  background-color: #fff;
}
.course .title {
  margin-bottom: 38px;
  display: flex;
  width: 95%;
  margin: 20px auto;
  align-items: center;
  justify-content: space-between;
}
.course .title h2 {
  margin: 0;
  font-size: 14px;
  font-weight: 800;
  color: #0400a3;
}

.course .title a {
  font-size: 12px;
  font-weight: 400;
  text-decoration: underline;
  color: #4ba3d3;
}
.course .title a:hover {
  text-decoration: none;
}
.course .item {
  width: 175px;
  margin-bottom: 15px;
  border: 1px solid #f2f2f2;
  background-color: #fff;
}
.course .item a:hover {
  box-shadow: 0 0 10px #ddd;
}

.course .item .thumb {
  position: relative;
}
.course .item .thumb .play {
  width: 52px;
  height: 52px;
  background: url("~@/assets/img/academy/playIcon.png") no-repeat;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
}

.course .item img {
  width: 100%;
}

.course .item a {
  text-decoration: none;
}
.course h3 {
  margin: 0;
  padding: 10px 13px 0;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.course p {
  margin: 0;
  padding: 0px 13px 10px;
  font-size: 12px;
  color: #555;
}
</style>