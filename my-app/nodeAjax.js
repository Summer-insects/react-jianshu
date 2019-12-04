const koa=require('koa');
const fs=require('fs');
const router=require('koa-router')();
const static=require('koa-static');
const bodyparser=require('koa-bodyparser')
const app=new koa();
app.use(async (ctx,next)=>{
    await next()
})
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    await next();
  });
router.get('/',async (ctx,next)=>{
    const json=fs.readFileSync('state.json');
   
    ctx.response.body=json.toString()
})
router.get('/note',async (ctx,next)=>{
    const json=fs.readFileSync('note.json');
    ctx.response.body=json.toString()
})
router.post('/isTrue',async (ctx,next)=>{
    
    ctx.response.body=true
})

app.use(bodyparser())
app.use(router.routes());
app.use(static(__dirname));

app.listen(8080)