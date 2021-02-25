/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1609117258875_8976'; // Cookie 安全字符串

  // add your middleware config here
  config.middleware = [ 'robot' ];
  config.robot = {
    ua: [ /Baiduspider/i ],
  };

  config.view = {
    defaultViewEngine: 'nunjucks', // 必须配置文件后缀和模板引擎的映射，否则无法找到对应的模板引擎，
    mapping: {
      '.tpl': 'nunjucks', // .tpl的文件使用nunjucks进行渲染
    },
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  // 端口修改

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
