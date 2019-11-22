const Koa = require('koa');
const route = require('koa-route');//模組應用
const path = require('path');
const serve = require('koa-static');//放圖片的模組喔喔喔
const app = new Koa();
const fs = require('fs');

const ReadMe = ctx => {
    ctx.response.type = 'md';
    ctx.response.body = fs.createReadStream('./ReadMe.md')//開啟readme檔
};

const pic = ctx => {
    ctx.response.type = 'jpg';
    ctx.response.body = fs.createReadStream('./ppt.jpg');
}

const main = ctx => {
    ctx.response.type = 'html';//設定傳回給用戶的內容
    ctx.response.body = fs.createReadStream('./test.html');//連結到已寫好的網站    
};

const redirect = ctx => {
    ctx.response.redirect('/');
    ctx.response.body = '<a href="/">回首頁</a>';
};

app.use(route.get('/',main));//用use方法來執行main
app.use(route.get('/ReadMe',ReadMe));
app.use(route.get('/pic',pic));
app.use(route.get('/redirect',redirect));
app.listen(3000);
console.log('server run at http://127.0.0.1:3000/');//logger的應用