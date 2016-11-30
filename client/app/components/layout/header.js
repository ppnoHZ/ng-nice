'use strict';

angular.module('com.ngnice.app')
    .controller('LayoutHeaderController', function () {
        var vm = this;
    })
angular.module('com.ngnice.app').directive('layoutHeader', function () {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'components/layout/header.html',
        controller: 'LayoutHeaderController as vm'
    }
})