var koa = require('koa');
var router = require('koa-frouter');
var config = require('config-lite');
var bodyparser = require('koa-bodyparser');
var logger = require('koa-logger');
var cors=require('koa-cors');
var app = koa();

//将参数转化为 body对象。
app.use(bodyparser());
app.use(logger());

app.use(cors())

app.use(function* (next) {



    // this.response.header('Access-Control-Allow-Origin',"*");
    // this.response.header('Access-Control-Allow-Method',"PUT,POST,GET,DELETE,OPTIONS");
    
    console.log("------------------------begin------------------------");

    var start = new Date;

    yield next;

    var ms = new Date - start;

    this.set('X-Responst-Time', ms + 'ms');
})


app.use(function* (next) {
    var start = new Date;

    yield next;

    var ms = new Date - start;

    console.log('%s %s -%s', this.method, this.url, ms);
    console.log("-----------------------end-------------------------");

})

// app.use(function* () {
//     // this.body = 'hello world';

// });

app.use(router(app, { root: './routes' }));

app.listen(config.port, function () {
    console.log('listen on 3030')
})