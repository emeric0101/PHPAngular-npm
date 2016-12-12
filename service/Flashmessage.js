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
var FlashmessageService = (function () {
    function FlashmessageService() {
        this.buffer = [];
    }
    FlashmessageService.prototype.getBuffer = function () {
        return this.buffer;
    };
    FlashmessageService.prototype.remove = function (flash) {
        var newBuffer = [];
        for (var i in this.buffer) {
            if (this.buffer[i] === flash) {
                continue;
            }
            newBuffer.push(this.buffer[i]);
        }
        this.buffer = newBuffer;
    };
    FlashmessageService.prototype.create = function (msg, type) {
        this.buffer.push({
            msg: msg,
            type: type
        });
    };
    return FlashmessageService;
}());
FlashmessageService.$inject = [];
FlashmessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FlashmessageService);
exports.FlashmessageService = FlashmessageService;
