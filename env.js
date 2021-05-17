module.exports = {
  dev: {
    MODE: "development",
    Academy_API: "http://47.107.83.33:10000/api/academy", //学院页接口
    PartTime_API: "http://47.107.83.33:1010/api/PartTime", // 兼职活动
    Home_API: "http://47.107.83.33:1010/api/Home", //导航目录
    Statistics_API: "http://rebatest.pingjiae.com/Common", //邀请统计
    BLOG_API: "http://120.77.211.128:1010/FooterNav/" // 博客接口
  },
  test: {
    MODE: "test",
    Academy_API: "http://47.107.83.33:10000/api/academy", //学院页接口
    PartTime_API: "http://47.107.83.33:1010/api/PartTime", // 兼职活动
    Home_API: "http://47.107.83.33:1010/api/Home", //导航目录
    Statistics_API: "http://rebatest.pingjiae.com/Common" //邀请统计
  },
  pro: {
    MODE: "production",
    Academy_API: "https://api.rebatest.com/api/academy", //学院页接口
    PartTime_API: "https://sorder.rebatest.com/api/PartTime", // 兼职活动
    Home_API: "https://sorder.rebatest.com/api/Home", //导航目录
    Statistics_API: "https://www.rebatest.com/Common" //邀请统计
  }
};
