"use strict";
require("angular");
var phpangular_1 = require("phpangular");
phpangular_1.UrlService;
var HomeController = (function () {
    function HomeController($url) {
        this.$url = $url;
        this.test = 'coucou';
        console.debug('controller ok');
    }
    return HomeController;
}());
exports.HomeController = HomeController;
HomeController.$inject = ['UrlService'];
angular.module('phpangularModule').controller('HomeController', HomeController);
