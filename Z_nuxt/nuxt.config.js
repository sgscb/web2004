export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nuxtItem",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  server: {
    port: 9000 // default: 3000
    // host: '0.0.0.0', // default: localhost
  },
  router: {
    //守卫
    middleware: "auth",

    //扩展路由
    extendRoutes(routes, resoult) {
      console.log(routes, 111);
      routes.push({
        name: "home",
        path: "/index",
        component: resoult(__dirname, "pages/index.vue")
      });
    }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "assets/css/transition.css",
    "vant/lib/index.css",
    "@/assets/icons/iconfont.css"
    // "vant/lib/icon/local.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/router",
    { src: "~/plugins/vant", ssr: true },
    { src: "~/plugins/axios", ssr: true }, // ssr: Boolean (默认为 true) 如果值为 false，该文件只会在客户端被打包引入
    // 埋点配置问件
    { src: "@/plugins/sp-md-jdk", ssr: false },
    { src: "@/plugins/sp-md-directive", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios"],
  proxy: {
    "/index_veriety/": {
      target: "http://localhost:3000", //代理转发地址
      changeOrigin: true,
      pathRewrite: {
        //地址替换
        // '^/api':''
      }
    }
  },
  axios: {
    proxy: true //开启axios跨域
    // prefix:'/api', //baseUrl
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
