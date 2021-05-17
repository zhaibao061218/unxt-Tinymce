export const state = () => ({
  category: null,
  UserInfo: null,
  SiteId: null
});

export const mutations = {
  getProductcategoryData(state, item) {
    state.category = item;
  },
  setUserData(state, item) {
    state.UserInfo = item;
  },
  setSiteId(state, item) {
    state.SiteId = item;
  },
  setCurrency(state, val) {
    state.currency = val;
  },
  setDisplayAd(state, val) {
    state.displayAd = val;
  },
  setMakeMoneyBadge(state, val) {
    state.makeMoneyBadge = val;
  },
  setUserId(state, val) {
    state.UserId = val;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { $cookies, $axios }) {
    let UserId = $cookies.get("UserId") || 0,
      SiteId = $cookies.get("SiteName") != "US" ? 2 : 1;

    await commit("setSiteId", SiteId);
    await commit("setCurrency", SiteId == 2 ? "￡" : "$");
    await commit("setDisplayAd", $cookies.get("displayTopbarAd"));
    await commit("setUserId", UserId);

    let [userInfo, category, makeMoney] = await Promise.all([
      $axios.$get(
        "/api/Home/getbaseuserinfo?SiteId=" + SiteId + "&UserId=" + UserId
      ), //获取用户基本信息
      $axios.$get("/api/Home/getproductcategory?SiteId=" + SiteId), //商品分类
      $axios.get(
        "/api/PartTime/show/BuyerPartTime/getparttimecapitalbyid?BuyerId=" +
          UserId +
          "&SiteId=" +
          SiteId
      ) //标记Make Money 红点
    ]);

    let UserInfo = userInfo.Data == null ? false : userInfo.Data,
      categoryData = category.Data;

    let makeMoneyBadge =
      makeMoney.data.data && makeMoney.data.data.capital > 0 ? true : false;
    await commit("setMakeMoneyBadge", makeMoneyBadge);

    await commit("setUserData", UserInfo);
    await commit("getProductcategoryData", categoryData);
  }
};
