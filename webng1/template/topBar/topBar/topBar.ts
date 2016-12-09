class TopBarController extends Emeric0101.PHPAngular.Controller.Controller {
    static $inject = ['UrlService'];

    constructor(private $url  :Emeric0101.PHPAngular.Service.UrlService) {
        super();
    }
}

class TopBarComponent implements ng.IComponentOptions {

    public bindings:any;
    public controller:any;
    public controllerAs: any;
    public templateUrl:string;

    constructor() {
        this.bindings = {
        };
        this.controllerAs = 'ctrl';
        this.controller = TopBarController;
        this.templateUrl = 'template/topBar/topBar/topBar-' + PhpangularModule.version + '.html';
    }

}

angular.module("phpangularModule").component('topBarComponent', new TopBarComponent());
