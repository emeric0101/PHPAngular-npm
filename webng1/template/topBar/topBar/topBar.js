var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TopBarController = (function (_super) {
    __extends(TopBarController, _super);
    function TopBarController($url) {
        var _this = _super.call(this) || this;
        _this.$url = $url;
        return _this;
    }
    return TopBarController;
}(Emeric0101.PHPAngular.Controller.Controller));
TopBarController.$inject = ['UrlService'];
var TopBarComponent = (function () {
    function TopBarComponent() {
        this.bindings = {};
        this.controllerAs = 'ctrl';
        this.controller = TopBarController;
        this.templateUrl = 'template/topBar/topBar/topBar-' + PhpangularModule.version + '.html';
    }
    return TopBarComponent;
}());
angular.module("phpangularModule").component('topBarComponent', new TopBarComponent());
