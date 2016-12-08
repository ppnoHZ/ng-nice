angular.module('com.ngnice.app')
    .directive('bfFieldError', function ($compile) {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {},
            link: function (scope, element, attrs, ngModel) {
                // var scope = ascope.$new(true);
                scope.hasError = function () {
                    return ngModel.$invalid && ngModel.$dirty;
                }
                scope.errors = function () {
                    return ngModel.$error;
                }
                scope.pending = function () {
                    return ngModel.$pending;
                }
                scope.customErrorMsg = scope.$eval(attrs.bfFieldError);

                var hint = $compile('<ul ng-if="hasError()||pending()"><li ng-if="panding" ng-repeat="(name,panding) in pending()">{{name|PendingMsg}}</li><li ng-repeat="(name,wrong) in errors()" ng-if="wrong">{{name | error:customErrorMsg}}</li>  </ul>')(scope);

                element.after(hint);
            }
        }
    })
    .directive("bfAssertSameAs", function () {
        return {
            restrict: "A",
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {

                var isSame = function (value) {
                    var anthorValue = scope.$eval(attrs.bfAssertSameAs);
                    return value == anthorValue;
                }
                ctrl.$validators.same = function (modelValue, viewValue) {

                    if (isSame(viewValue)) {
                        return true;
                    }
                    return false;
                }
            }
        }
    })
    .directive('bfCheckExists', function ($q, $http, $timeout) {
        return {
            restrice: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                ctrl.$asyncValidators.nicknameCheck = function (modelValue, viewValue) {
                    if (ctrl.$isEmpty(modelValue)) {
                        return $q.when();
                    }
                    var def = $q.defer();



                    $timeout(function () {
                        def.reject();
                    }, 2000)

                    // $http.post('http://192.168.3.104:3030/signup', { name: modelValue }).then(function (result) {
                    //     console.log('昵称检查结果，result', result)
                    //     if (result.status == '200') {
                    //         if (result.data.error) {
                    //             def.reject();
                    //         } else {
                    //             def.resolve();
                    //         }
                    //     } else {
                    //         def.resolve();
                    //     }
                    // }, function () {
                    //     def.reject();
                    // })


                    return def.promise;
                }
            }
        }
    })