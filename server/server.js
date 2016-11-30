var koa = require('koa');

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

app.listen(3030)