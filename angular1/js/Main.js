"use strict";
require("angular");
require("angular-route");
require("../config");
var phpangularmodules = phpangularmodules || [];
phpangularmodules.push('ngRoute');
exports.phpangularModule = angular.module('phpangularModule', phpangularmodules);
require("./phpangular");
var phpangular_1 = require("phpangular");
phpangular_1.UrlService.servername = '';
phpangular_1.UrlService.version = contentversion;
var PhpangularModule;
(function (PhpangularModule) {
    PhpangularModule.version = contentversion;
    PhpangularModule.debug = true;
    var Main = (function () {
        function Main() {
            var routeFactory = { templateUrl: this.templateProvider };
            exports.phpangularModule.config(['$routeProvider', '$locationProvider',
                function ($routeProvider, $locationProvider) {
                    $locationProvider.html5Mode(true);
                    $routeProvider
                        .when('/:module?-:method?-:id?', routeFactory)
                        .when('/:module?-:method?', routeFactory)
                        .when('/:module?', routeFactory)
                        .otherwise(routeFactory);
                }]);
        }
        Main.prototype.templateProvider = function (params) {
            if (params.module == undefined) {
                params.module = 'home';
            }
            if (params.method == undefined) {
                params.method = params.module;
            }
            return phpangular_1.UrlService.servername + "template/" + params.module + "/" + params.method + "/" + params.method + '-' + PhpangularModule.version + '.html';
        };
        return Main;
    }());
    var main = new Main();
})(PhpangularModule = exports.PhpangularModule || (exports.PhpangularModule = {}));
require("../template/home/home/home");
