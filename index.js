/*
 * @Description:
 * @Author: zhengfei.tan
 * @Date: 2023-10-23 22:23:36
 * @FilePath: \express-app\index.js
 * @LastEditors: zhengfei.tan
 * @LastEditTime: 2024-06-23 14:49:44
 */
const express = require('express')
const app = express()
const schedule = require('node-schedule');
const utils = require('./utils/index')


const testRouter = require('./models/test')
app.use('/test', testRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// 定义定时任务
function job() {
  // 输出当前格式化后的时间（yyyy-MM-dd）
  console.log('定时任务执行，执行一些操作,当前时间为：', utils.formatDate(new Date()) );
 }

// 创建一个定时任务，每隔 1小时 执行一次 job 函数
schedule.scheduleJob('1 * * * *', job);


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
