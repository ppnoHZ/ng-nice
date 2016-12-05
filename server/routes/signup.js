var Models = require('../lib/core')

var $User = Models.$User


exports.post = function* () {
    var data = this.request.body;

    var userExist = yield $User.getUserByName(data.name);
    console.log(userExist)
    if (userExist) {
        this.body = { error: true, msg: '名称已经存在' };
    } else {
        yield $User.addUser(data);
        this.body = 'user add'
    }
}