/********用户接口*******/
//引入express
const express = require("express");
const axios = require("axios");

// var $axios = axios.create({
//   baseURL: "https://dspmicrouag.shupian.cn",
// });

//引入连接池
const pool = require("./pool.js");

//创建后端路由接口对象
const router = express.Router();

/****用户登录接口post****/
router.get("/service/nk/chipSpread/v1/list.do", (req, res) => {
  // "/crisps-app-wap-bff-api/service/nk/chipSpread/v1/list.do?locationCodes=ad113250,ad113252,ad113257&navCode=nav100057&productCenterCode=CRISPS-C-GG-TYPE"
  const url =
    "https://dspmicrouag.shupian.cn/crisps-app-wap-bff-api/service/nk/chipSpread/v1/list.do";
  var { locationCodes, navCodes, productCenterCode } = req.query;
  console.log(req.query);
  axios
    .get(url, {
      params: {
        locationCodes,
        navCodes,
        productCenterCode,
      },
    })
    .then((response) => {
      // console.log(response);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("请求成功");
  //获取用户提交信息
  //设置服务器响应头信息 解决跨域问题
  // res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
});

router.get("/service/nk/chipSpread/v1/productList.do", (req, res) => {
  const url =
    "https://dspmicrouag.shupian.cn/crisps-app-wap-bff-api/service/nk/chipSpread/v1/productList.do";
  const { pageNumber, pageSize, classCodes } = req.query;
  axios
    .get(url, {
      params: {
        pageNumber,
        pageSize,
        classCodes,
      },
    })
    .then((result) => {
      console.log("请求成功");
      res.send(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
