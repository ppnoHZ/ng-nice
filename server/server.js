var koa = require('koa');
var router = require('koa-frouter');
var config=require('config-lite');

var app = koa();

app.use(function* (next) {
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
})

app.use(function* () {
    this.body = 'hello world';

});

app.use(router(app,'routes'))

app.listen(config.port,function(){
    console.log('listen on 3030')
})