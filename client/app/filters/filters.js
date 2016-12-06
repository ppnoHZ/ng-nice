angular.module('com.ngnice.app')
    .filter("error", function (Errors) {
        return function (name) {
            return Errors[name] || name;
        }
    })
    .constant("Errors", {
        email: '不是有效的邮箱地址',
        required: '此项不能为空',
        same: '两次输入的不一样',
        
    })