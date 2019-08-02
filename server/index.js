const Koa=require('koa')
const app=new Koa()

app.use(async(ctx,next)=>{
    ctx.body="YBF"
})
app.listen(8080)