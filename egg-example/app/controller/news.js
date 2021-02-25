'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = '登录';
  }
  async list() {
    // const ctx = this.ctx;
    // const page = ctx.query.page || 1;
    // const newsList = await ctx.service.news.list(page);
    // await ctx.render("news/list.tpl", { list: newsList });
    const val = await this.ctx.curl(
      'http://localhost:7001/news -A "Baiduspider"'
    );
    console.log(val);
    const dataList = {
      list: [
        { id: 1, title: 'this is nuews 1', url: '/news/1', time: 187521458526 },
        { id: 2, title: 'this is nuews 2', url: '/news/2' },
      ],
      val,
    };
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;
