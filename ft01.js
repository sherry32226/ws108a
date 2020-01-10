const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(serve(__dirname + '/file')); // dirname檔案名

app.listen(3000);

console.log('server run at http://127.0.0.1:3000/');
