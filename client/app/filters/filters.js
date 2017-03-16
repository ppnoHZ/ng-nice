angular.module('com.ngnice.app')
    .filter("error", function (Errors) {
        return function (name, customMsg) {
            var errors = angular.extend({}, Errors, customMsg);
            return errors[name] || name;
        }
    })
    .filter("PendingMsg", function (PendingMsgs) {
        return function (name, customMsg) {
            var errors = angular.extend({}, PendingMsgs, customMsg);
            return errors[name] || name;
        }
    })
    .constant("Errors", {
        email: '不是有效的邮箱地址',
        required: '此项不能为空',
        // same: '两次输入的不一样',

    })
    .constant("PendingMsgs", {
        nicknameCheck: '昵称合法性检查中',
        required: '此项不能为空',
        // same: '两次输入的不一样',

    })
    .filter('length', function () {
        return function (text) {
            return ("" + (text || '')).length
        }
    })
    .filter('page', function () {
        return function (input, page, pageSzie) {
            if (!input) {
                return input
            }
            if (page < 0 || pageSzie <= 0) {
                return [];
            }

            var start = page * pageSzie;

            var end = (page + 1) * pageSzie;

            return input.slice(start, end);
        }
    })