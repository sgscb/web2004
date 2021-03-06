"use strict";

const path = require("path");

const BASE = require("./client/config/index.js");
const NODE_ENV = process.env.NODE_ENV;
const DGG_SERVER_ENV = process.env.DGG_SERVER_ENV;
const baseUrl = BASE[DGG_SERVER_ENV].baseURL;
const bablePlugin = [
  [
    "import",
    {
      libraryName: "vant",
      style: (name) => `${name}/style/less`,
    },
    "vant",
  ],
  [
    'import',
    {
      libraryName: '@chipspc/vant-dgg',
      style: (name) => `${name}/style/less`,
    },
    '@chipspc/vant-dgg',
  ],
];
if (NODE_ENV === "production") {
  bablePlugin.push("transform-remove-console");
}
module.exports = {
  /** ***融合EGG.js关键配置(切勿覆盖和删除)*****/
  telemetry: false,
  srcDir: "client/",
  /** ***********end**************/
  // mode: 'universal',
  // ssr: false,
  env: {
    DGG_SERVER_ENV: process.env.DGG_SERVER_ENV,
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "full-screen",
        content: "true",
      },
      {
        name: "x5-fullscreen",
        content: "true",
      },
      {
        name: "360-fullscreen",
        content: "true",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "/js/flexible.js",
        ssr: false,
        type: "text/javascript",
        charset: "utf-8",
      },
      {
        src: "/js/dgg-md-sdk-conf.js",
        ssr: false,
        type: "text/javascript",
        charset: "utf-8",
      },
      {
        src: "https://ptcdn.dgg.cn/md/dgg-md-sdk.min.js",
        ssr: false,
        type: "text/javascript",
        charset: "utf-8",
      },
      {
        src: "https://res.wx.qq.com/open/js/jweixin-1.4.0.js",
        ssr: false,
        type: "text/javascript",
        charset: "utf-8",
      },
      {
        src:
          "https://b.bdstatic.com/searchbox/icms/searchbox/js/swan-2.0.18.js",
        ssr: false,
        type: "text/javascript",
        charset: "utf-8",
      },
      {
        src:
          "https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.1.js",
        ssr: false,
        type: "text/javascript",
        charset: "utf-8",
      },
    ],
  },
  loading: { color: "#fff" },
  css: [],
  plugins: [
    { src: "@/plugins/axios", ssr: true },
    { src: "@/plugins/router", ssr: false },
    { src: "@/plugins/dgg-md", ssr: false },
  ],
  buildModules: ["@nuxtjs/eslint-module"],
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy", "@nuxtjs/style-resources"],
  axios: {
    proxy: true,
  },
  proxy: {
    "/api": {
      target: baseUrl, // 只代理了client的请求,没有代理Server端
      secure: false,
      changeOrigin: true, // 表示是否跨域
      logLevel: "debug",
      // 如果不想将所有接口都指向/api目录，就需要进行如下配置
      pathRewrite: {
        "^/api": "/", // 把 /api 替换成 /
      },
    },
  },
  build: {
    transpile: [/vant.*?less/],
    postcss: {
      plugins: {
        "postcss-pxtorem": {
          rootValue: 50,
          minPixelValue: 2,
          propWhiteList: [],
        },
      },
      preset: {
        browsers: ["Android >= 4.0", "iOS >= 7"],
      },
    },
    babel: {
      plugins: bablePlugin,
    },
    loaders: {
      less: {
        // VantUI 定制主题配置
        javascriptEnabled: true, // 开启 Less 行内 JavaScript 支持
        modifyVars: {
          hack: `true; @import "${path.join(
            __dirname,
            "./client/assets/styles/vant.var.less"
          )}";`,
        },
      },
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }

      if (ctx.isClient) {
        if (NODE_ENV === "development") {
          config.devtool = "cheap-module-eval-source-map";
        } else {
          config.devtool = "hidden-source-map";
        }
      }
    },
  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/,
    },
  },
};
