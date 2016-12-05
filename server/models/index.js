var mongoose = require('mongoose');

var config = require('config-lite').mongodb;

//数据库连接入口
mongoose.connect(config.url, function (err) {
    if (err) {
        console.error("connect to %s error:", config.url, err.message);
        process.exit(1)
    } else {
        console.log("connect to %s success:", config.url);
    }
})

//所有的models 在此处导入和mongodb 连接

exports.User = require('./user');