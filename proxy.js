/*
 * @Description:
 * @Author: zhengfei.tan
 * @Date: 2024-06-03 23:44:23
 * @FilePath: \express-app\proxy.js
 * @LastEditors: zhengfei.tan
 * @LastEditTime: 2024-06-03 23:44:23
 */

let express = require('express')
let proxy = require('http-proxy-middleware')
let app = express()

app.use(
  '/',
  proxy({
    // 代理跨域目标接口
    target: 'http://www.demo2.com:8080',
    changeOrigin: true,
    // 修改响应头信息，实现跨域并允许带cookie
    onProxyRes: function (proxyRes, req, res) {
      res.header('Access-Control-Allow-Origin', 'http://www.domain1.com')
      res.header('Access-Control-Allow-Credentials', 'true')
    },
    // 修改响应信息中的cookie域名
    cookieDomainRewrite: 'www.demo1.com', // 可以为false，表示不修改
  })
)

app.listen(3000)
console.log('Proxy server is listen at port 3000...')
