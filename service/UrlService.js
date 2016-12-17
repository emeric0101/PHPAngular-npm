"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Flashmessage_1 = require("./Flashmessage");
require("./Flashmessage");
var router_1 = require("@angular/router");
var UrlService = UrlService_1 = (function () {
    function UrlService($flash, $router) {
        this.$flash = $flash;
        this.$router = $router;
    }
    UrlService.prototype.redirect = function (module, action, id, msg, type) {
        if (type === void 0) { type = 'success'; }
        if (typeof (msg) !== 'undefined' && msg != '') {
            this.$flash.create(msg, type);
        }
        if (action == '') {
            action = module;
        }
        this.$router.navigateByUrl(this.make(module, action, id));
    };
    UrlService.prototype.make = function (module, action, id, params) {
        if (action === void 0) { action = ""; }
        if (params === void 0) { params = {}; }
        var url = module;
        if (action !== "") {
            url += '/' + action;
            if (typeof (id) !== 'undefined' && id !== null) {
                url += '/' + id;
            }
        }
        var first = true;
        for (var i in params) {
            if (first) {
                url += "?";
                first = false;
            }
            else {
                url += "&";
            }
            url += i + "=" + params[i];
        }
        return url;
    };
    UrlService.prototype.makeTemplate = function (module, action) {
        if (action === void 0) { action = ""; }
        return UrlService_1.servername + "template/" + module + "/" + action + "/" + action + '-' + UrlService_1.version + '.html';
    };
    UrlService.prototype.makeApi = function (module, action, id, params) {
        module = module['ucFirst']();
        var url = module;
        if (action !== "") {
            url += '/' + action;
            if (typeof (id) !== 'undefined' && id !== null) {
                url += '/' + id;
            }
        }
        url += '.json';
        if (typeof (params) !== 'undefined') {
            var first = true;
            for (var i in params) {
                if (first) {
                    url += "?";
                    first = false;
                }
                else {
                    url += "&";
                }
                url += i + "=" + params[i];
            }
        }
        return url;
    };
    return UrlService;
}());
UrlService.servername = '';
UrlService.version = '0000001';
UrlService = UrlService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Flashmessage_1.FlashmessageService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], UrlService);
exports.UrlService = UrlService;
var UrlService_1, _a;
