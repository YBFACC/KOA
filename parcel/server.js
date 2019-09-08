const Koa = require('koa')
const app = new Koa()
const { resolve } = require('path')
const serve=require('koa-static')


app.use(serve(resolve(__dirname,'./')))


app.listen(8080)