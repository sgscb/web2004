"use strict";

const Controller = require("egg").Controller;

class NewsController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = "登录";
  }
}

module.exports = NewsController;
