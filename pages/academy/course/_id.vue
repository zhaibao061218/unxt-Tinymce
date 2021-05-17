<template>
<div>
    <van-nav-bar
      class="m-t-10"
      :title="PageTitle"
      left-arrow
      :border="true"
      @click-left="$router.go(-1)"
    />

  <div
    class="container m-l-15 m-r-15 m-b-20">
    <div class="viewCoursePage m-t-20 bg-white">
      <div class="p-l-10 p-t-10 p-r-10 p-b-30">
        <h3 class="courseTitle">{{ CourseTitle }}</h3>
        <div class="meta"><img class="m-r-5" src="~@/assets/img/academy/yiyiyi.png" width="14">&nbsp;{{ CreateTime }}</div>
        <div class="courseContent editorContent" v-html="ArticleContent"></div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  async asyncData({ params, $axios }) {
    let { data } = await $axios.get(
      "/api/academy/show/CourseArticle/getcoursearticle_detail?Id=" + params.id
    );
    let {
      CourseType,
      CourseTitle,
      ArticleContent,
      CreateTime
    } = data.ResponseData;
    let PageTitle = "Intermediate Course · Make More Orders";

    if (CourseType == 2) {
      PageTitle = "Advanced Course - Earn more";
    }

    return {
      PageTitle,
      CourseTitle,
      ArticleContent,
      CreateTime
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
h2.pageTitle {
  padding: 7px 40px;
  margin-top: -34px;
  font-size: 14px;
  // font-weight: 400;
  text-align: center;
  color: #0400a3;
  border-bottom: 1px solid #aaaaaa;
}

h3.courseTitle {
  margin: 15px 0 5px;
  font-size: 24px;
  font-weight: 400;
  color: #333333;
}

.meta {
  padding-bottom: 16px;
  font-size: 15px;
  color: #555;
  border-bottom: 1px solid #aaaaaa;
  display: flex;
  margin-top: 20px;
  align-items: center;

  i {
    margin-right: 5px;
  }
}

.courseContent {
  padding: 20px 0;
  img {
    max-width: 100% !important;
    height: auto !important;
  }
}
</style>
