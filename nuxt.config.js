const env = require('./env');

export default {
    buildDir: 'nuxt-dist',
    ssr: true,
    head: {
        title: "Best 100% Cashback Amazon Deals Rebate Site -Rebatest",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/v2/favicon.ico" }],
        script: [
            { src: 'https://code.tidio.co/wmriiqjqtojaupwxamfcu39oomwruzhp.js', async: true, defer: true }, /*tidio在线咨询*/
            // { src: 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=BTCOE3T7FNQBGI7RCDPG', async: true, defer: true }, //抖音
        ]
    },

    components: true,

    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: ["~/assets/css/common.scss"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: "~/plugins/vant.js", ssr: true },
        '~/plugins/axios',
        { src: '@/plugins/seamless-scroll', ssr: false },
        { src: '~/plugins/common.js', ssr: false } //公共事件或方法
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],

    router: {},
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        'cookie-universal-nuxt',
    ],
    'axios': {
        proxy: true,
        debug: process.env.MODE == "dev" ? true : false
    },
    proxy: {
        //学院页
        '/api/academy': {
            target: env[process.env.MODE].Academy_API,
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api/academy': ''
            }
        },
        //兼职活动
        '/api/PartTime': {
            target: env[process.env.MODE].PartTime_API,
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api/PartTime': ''
            }
        },
        //导航菜单
        '/api/Home': {
            target: env[process.env.MODE].Home_API,
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api/Home': ''
            }
        },
        //邀请统计
        '/Common': {
            target: env[process.env.MODE].Statistics_API,
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/Common': ''
            }
        },
        // 博客api地址
        '/FooterNav/': {
            target: env[process.env.MODE].BLOG_API,
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/FooterNav/': ''
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        transpile: [/vant.*?less/],
        babel: {
            plugins: [
                [
                    "import",
                    {
                        libraryName: "vant",
                        style: name => {
                            return `${name}/style/less.js`;
                        }
                    },
                    "vant"
                ]
            ]
        },
        loaders: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    "tabbar-item-font-size": "12px",
                    "nav-bar-height": '55px',
                    "nav-bar-arrow-size": '28px',
                    "nav-bar-icon-color": '#999999',
                    "nav-bar-title-font-size": "16px",
                    "nav-bar-title-text-color": "#0400A3",
                    "nav-bar-background-color": "transparent",
                    "@pagination-item-default-color": "#4BA3D3",
                    "@pagination-item-width": "40px",
                    "@dialog-width": '90%'
                }
            }
        }
    },
    server: {
        port: process.env.MODE == "pro" ? 5000 : process.env.MODE == "test" ? 6000 : 6500
    },
    router: {
        base: '/v2/'
    }
};