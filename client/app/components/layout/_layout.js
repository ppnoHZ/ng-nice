'use strict';

angular.module('com.ngnice.app')
    .controller('AppLayoutController', function () {
        var vm = this;
    })
angular.module('com.ngnice.app').directive('appLayout', function () {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'components/layout/_layout.html',
        controller: 'AppLayoutController as vm'
    }
})