<template>
<div>
    <van-nav-bar
      class="m-t-10"
      :title="Title"
      left-arrow
      :border="true"
      @click-left="$router.go(-1)"
    />

  <div
    class="container m-l-15 m-r-15 m-b-20"
  >
    <div class="viewArticlePage m-t-20 m-b-60 bg-white">
      <div class="p-l-10 l-r-10">
        <div class="articleContent editorContent" v-html="ArticleContent"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    let { data } = await $axios.get(
      "/api/academy/show/Home/getcatalogarticleinfo?ArticleType=" + params.id
    );
    let { Title, ArticleContent } = data.ResponseData;

    return {
      Title,
      ArticleContent
    };
  }
};
</script>

<style lang="scss" scoped>
h2.articleTitle {
  padding: 7px 40px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #0400a3;
}
.articleContent {
  padding: 20px 0;
  img {
    max-width: 100% !important;
    height: auto !important;
  }
}
</style>
