

describe('angular doc 测试', function () {
    beforeEach(module('com.ngnice.app'))

    var $filter;

    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }))

    it('当为null的时候返回0', function () {

        var length = $filter('length');
        expect(length('null')).toEqual(0)

    })


    // var


})

describe("测试分页过滤器 pageFilter", function () {
})