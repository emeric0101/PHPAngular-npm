import 'angular';
import { UrlService } from 'phpangular';
UrlService;
//import '../../../core/js/service/Url'; // force import
export class HomeController {
    static $inject = ['UrlService'];
    test = 'coucou';
    constructor(
        private $url : UrlService
    ){
        console.debug('controller ok');
    }
}
angular.module('phpangularModule').controller('HomeController', HomeController);
