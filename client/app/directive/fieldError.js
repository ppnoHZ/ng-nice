angular.module('com.ngnice.app')
    .directive('bfFieldError', function ($compile) {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {},
            link: function (scope, element, attrs, ngModel) {
                // var scope = ascope.$new(true);
                console.log("link", arguments)
                scope.hasError = function () {
                    return ngModel.$invalid && ngModel.$dirty;
                }
                scope.errors = function () {
                    return ngModel.$error;
                }
                var hint = $compile('<ul ng-if="hasError()"><li ng-repeat="(name,wrong) in errors()" ng-if="wrong">{{name | error}}</li>  </ul>')(scope);

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
                    console.log(value, anthorValue)
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