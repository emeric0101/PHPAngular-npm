import 'angular';
import 'angular-route';
import '../config';

var phpangularmodules = phpangularmodules || [];
phpangularmodules.push('ngRoute');
export var phpangularModule = angular.module('phpangularModule', phpangularmodules);
import './phpangular';
import { UrlService } from 'phpangular';
UrlService.servername = ''
UrlService.version = contentversion;
export module PhpangularModule {
    export var version = contentversion;
    export var debug = true;
    class Main {
        templateProvider(params) {
            if (params.module == undefined) {
                params.module = 'home';
            }
            if (params.method == undefined) {
                params.method = params.module;
            }
            return UrlService.servername + "template/" + params.module + "/"+ params.method + "/" + params.method + '-' + version + '.html';
        }

        public constructor() {
            let routeFactory = {templateUrl: this.templateProvider};

            phpangularModule.config(['$routeProvider', '$locationProvider',
            // Define all basics route for phpangular
              function($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider
                .when('/:module?-:method?-:id?', routeFactory)
                .when('/:module?-:method?', routeFactory)
                .when('/:module?', routeFactory)
                .otherwise(routeFactory);
              }]);
          }
    }
    let main = new Main();
}
import '../template/home/home/home';
