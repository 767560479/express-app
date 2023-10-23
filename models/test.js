/*
 * @Description:
 * @Author: zhengfei.tan
 * @Date: 2023-10-23 22:29:51
 * @FilePath: \express-app\models\test.js
 * @LastEditors: zhengfei.tan
 * @LastEditTime: 2023-10-23 22:43:23
 */
const express = require('express')
const router = express.Router()
// 定义一个返回 JSON 的路由
router.get('/', function (req, res, next) {
  const data = {
    name: '张三',
    age: 30,
    gender: 'male',
  };
  // res.json(data);
  res.send(data);
 });
 // 导出 route 函数
 module.exports = router;