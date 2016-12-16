angular.module('com.ngnice.app').controller('ThreadListCtrl', function () {

    var vm = this;

    vm.items = [
        {
            title: '第一个主题',
            poster: 'test',
            dataCreate: '2016-12-16 10:20:32'
        },
          {
            title: '第一个主题 abcd  1234',
            poster: 'test',
            dataCreate: '2016-12-16 10:20:32'
        }
        
    ]

    for (var i = 0; i < 10; i++) {
        vm.items.push({
            title: '主题' + i,
            poster: 'user' + i,
            dataCreate: "2016-12-16 10:22:49"
        })
    }



})