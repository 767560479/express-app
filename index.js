/*
 * @Description:
 * @Author: zhengfei.tan
 * @Date: 2023-10-23 22:23:36
 * @FilePath: \express-app\index.js
 * @LastEditors: zhengfei.tan
 * @LastEditTime: 2023-10-23 22:42:16
 */
const express = require('express')
const app = express()
const schedule = require('node-schedule');


const testRouter = require('./models/test')
app.use('/test', testRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// 定义定时任务
function job() {
  console.log('定时任务执行，执行一些操作...');
 }

// 创建一个定时任务，每隔 5 秒执行一次 job 函数
schedule.scheduleJob('*/5 * * * * *', job);


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
