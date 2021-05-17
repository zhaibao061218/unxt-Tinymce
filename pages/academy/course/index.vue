<template>
  <div>
    <van-nav-bar
      class="m-t-10"
      title="All Courses & Tutorials"
      left-arrow
      :border="true"
      @click-left="$router.push({path:'/academy'})"
    />

    <div class="p-r-15 p-l-15 all">
      <div class="Tutorial">
        <van-tabs
          class="p-t-10 m-t-15"
          line-width="60px"
          color="#0400A3"
          title-active-color="#0400A3"
          :ellipsis="false"
          @click="handleTabClick"
          v-model="tabsActive"
          swipeable
        >
          <form class="Sort">
            <p class="Sortby">Sort by</p>

            <select
              @change="sort"
              v-model="orderby"
              placeholder="Trending"
              class="selectby"
            >
              <option label="Trending" value="Trending"></option>
              <option label="Popular " value="Popular"></option>
            </select>
          </form>

          <van-tab title="Newbie" name="first" style="flex: 0">
            <van-row>
              <van-col
                span="24"
                v-for="(item, index) in CourseArticle1.Data"
                :key="index"
              >
                <div class="item">
                  <a :href="'./academy/video/' + item.Id">
                    <div class="thumb">
                      <img :src="item.MobileImageUrl" /><span class="play"></span>
                    </div>
                    <h3>{{ item.CourseTitle }}</h3>
                    <p>{{ item.BrowseCount }} views · {{ item.CreateTime }}</p>
                  </a>
                </div>
              </van-col></van-row
            >
            <van-pagination
              class="p-15"
              :force-ellipses="true"
              v-if="CourseArticle1.Total > 6"
              @change="handleCurrentChange"
              v-model="currentPage1"
              :total-items="CourseArticle1.Total"
              :items-per-page="6"
            >
              <template #prev-text>
                <van-icon name="arrow-left" />
              </template>
              <template #next-text>
                <van-icon name="arrow" />
              </template>
            </van-pagination>
          </van-tab>

          <van-tab title="Intermediate Course" name="second">
            <van-row>
              <van-col
                span="24"
                v-for="(item, index) in CourseArticle2.Data"
                :key="index"
              >
                <div class="item">
                  <a :href="'./academy/course/' + item.Id">
                    <div class="thumb">
                      <img :src="item.MobileImageUrl" />
                    </div>
                    <h3>{{ item.CourseTitle }}</h3>
                    <p>{{ item.BrowseCount }} views · {{ item.CreateTime }}</p>
                  </a>
                </div>
              </van-col>
            </van-row>
            <van-pagination
              :force-ellipses="true"
              v-if="CourseArticle2.Total > 6"
              @change="handleCurrentChange"
              v-model="currentPage2"
              :total-items="CourseArticle2.Total"
              :items-per-page="6"
            >
            <template #prev-text>
                <van-icon name="arrow-left" />
              </template>
              <template #next-text>
                <van-icon name="arrow" />
              </template>
            </van-pagination>
          </van-tab>

          <van-tab title="Advanced Course" name="third">
            <van-row>
              <van-col
                span="24"
                v-for="(item, index) in CourseArticle3.Data"
                :key="index"
              >
                <div class="item">
                  <a :href="'./academy/course/' + item.Id">
                    <div class="thumb">
                      <img :src="item.MobileImageUrl" />
                    </div>
                    <h3>{{ item.CourseTitle }}</h3>
                    <p>{{ item.BrowseCount }} views · {{ item.CreateTime }}</p>
                  </a>
                </div>
              </van-col></van-row
            >
            <van-pagination
              :force-ellipses="true"
              v-if="CourseArticle3.Total > 6"
              @change="handleCurrentChange"
              v-model="currentPage3"
              :total-items="CourseArticle3.Total"
              :items-per-page="6"
            >
            <template #prev-text>
                <van-icon name="arrow-left" />
              </template>
              <template #next-text>
                <van-icon name="arrow" />
              </template>
            </van-pagination>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  data() {
    return {
      tabsActive: 0,
      orderby: "Trending",
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
    };
  },
  async asyncData({ params, $axios }) {
    let [listData1, listData2, listData3] = await Promise.all([
      $axios.get(
        "/api/academy/show/CourseArticle/getnovicecourse_List?sortType=Trending&PageIndex=1&PageSize=6"
      ),
      $axios.get(
        "/api/academy/show/CourseArticle/getcoursearticle_list?courseType=1&sortType=Trending&PageIndex=1&PageSize=6"
      ),
      $axios.get(
        "/api/academy/show/CourseArticle/getcoursearticle_list?courseType=2&sortType=Trending&PageIndex=1&PageSize=6"
      ),
    ]);
    return {
      CourseArticle1: listData1.data.ResponseData,
      CourseArticle2: listData2.data.ResponseData,
      CourseArticle3: listData3.data.ResponseData,
    };
  },
  mounted() {
    this.tabsActive = this.$route.query.tab || "first";
  },
  methods: {
    //切换tab修改url的值，解决刷新时跳转的问题
    handleTabClick(tab, event) {
      let query = this.$router.history.current.query;
      let path = this.$router.history.current.path;
      let newQuery = JSON.parse(JSON.stringify(query));
      newQuery.tab = this.tabsActive;
      this.$router.replace({
        path,
        query: newQuery,
      });
    },
    getCourseData(that, type) {
      if (type == "first") {
        //初始课程
        that.$axios
          .get(
            "/api/academy/show/CourseArticle/getnovicecourse_List?sortType=" +
              that.orderby +
              "&PageIndex=" +
              that.currentPage1 +
              "&PageSize=6"
          )
          .then((res) => {
            that.CourseArticle1 = res.data.ResponseData;
          });
      } else if (type == "second") {
        //中级课程
        that.$axios
          .get(
            "/api/academy/show/CourseArticle/getcoursearticle_list?courseType=1&sortType=" +
              that.orderby +
              "&PageIndex=" +
              that.currentPage2 +
              "&PageSize=6"
          )
          .then((res) => {
            that.CourseArticle2 = res.data.ResponseData;
          });
      } else if (type == "third") {
        //高级课程
        that.$axios
          .get(
            "/api/academy/show/CourseArticle/getcoursearticle_list?courseType=2&sortType=" +
              that.orderby +
              "&PageIndex=" +
              that.currentPage3 +
              "&PageSize=6"
          )
          .then((res) => {
            that.CourseArticle3 = res.data.ResponseData;
          });
      }
    },
    //切换分页
    handleCurrentChange(val) {
      let that = this;
      if (this.tabsActive == "first") {
        //初始课程
        this.currentPage1 = val;
      } else if (this.tabsActive == "second") {
        //中级课程
        this.currentPage2 = val;
      } else if (this.tabsActive == "third") {
        //高级课程
        this.currentPage3 = val;
      }
      this.$options.methods.getCourseData(that, this.tabsActive);

      //滚动至页面顶部
      this.comsys.toScrollTop();
    },
    //排序
    sort(val) {
      let that = this;
      this.$options.methods.getCourseData(that, "first");
      this.$options.methods.getCourseData(that, "second");
      this.$options.methods.getCourseData(that, "third");
    },
  },
};
</script>
<style lang="scss" scoped>
.selectby > option {
  background-color: white;
}
.Sortby {
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #555555;
}
.getmore > p {
  font-size: 14px;
  font-family: Lato;
  font-weight: 400;
  text-align: center;
  margin: 0;
  padding: 10px 0;
  color: #ffffff;
}
.getmore {
  width: 35%;
  margin: 0 auto;
  background: #4ba3d3;
  border: 1px solid #ededed;
  border-radius: 5px;
}
.Sort {
  display: flex;
  width: 97%;
  margin: 15px 0;
  justify-content: flex-end;
  align-items: center;
  select {
    border: 1px solid #ddd;
    height: 38px;
    padding:0 5px;
  }
}
.item p {
  margin: 0;
  padding: 0px 13px 10px;
  font-size: 12px;
  color: #555;
}
.item h3 {
  margin: 0;
  padding: 10px 13px 0;
  font-size: 14px;
  color: #333;
  font-weight: bold;
}
.item img {
  width: 100%;
}
.item {
  width: 95%;
  margin: 0 auto;
  margin-bottom: 15px;
  border: 1px solid #f2f2f2;
  background-color: #fff;
}
.Tutorial {
  width: 100%;
  background: #ffffff;
  margin-bottom: 45px;
  padding-bottom: 20px;
}

.container {
  width: 90%;
  margin: 0 auto;
}
.Courses {
  width: 100%;
  padding: 30px 0 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #aaaaaa;
  display: flex;
}
.Courses p {
  font-size: 18px;
  font-family: Roboto;

  width: 100%;
  margin: 0;
  text-align: center;
  font-weight: 400;
  color: #0400a3;
}
</style>
