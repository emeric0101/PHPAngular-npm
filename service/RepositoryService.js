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
var AjaxService_1 = require("./AjaxService");
var UrlService_1 = require("./UrlService");
var Request = (function () {
    function Request(controller, method, id, params, entity, callback, error) {
        if (error === void 0) { error = function () { }; }
        this.controller = controller;
        this.method = method;
        this.id = id;
        this.params = params;
        this.entity = entity;
        this.callback = callback;
        this.error = error;
        this.requestid = Request.globalrequestid++;
    }
    Request.prototype.getRequestId = function () { return this.requestid; };
    Request.prototype.getId = function () { return this.id; };
    Request.prototype.getController = function () { return this.controller; };
    Request.prototype.getMethod = function () { return this.method; };
    Request.prototype.getParams = function () { return this.params; };
    Request.prototype.getEntity = function () { return this.entity; };
    Request.prototype.getCallback = function () { return this.callback; };
    Request.prototype.getError = function () { return this.error; };
    return Request;
}());
Request.globalrequestid = 1;
var RepositoryService = RepositoryService_1 = (function () {
    function RepositoryService(UrlService, AjaxService) {
        this.UrlService = UrlService;
        this.AjaxService = AjaxService;
        this.entities = [];
        this.requestById = [];
        this.requests = [];
        this.requestTimer = null;
    }
    RepositoryService.prototype.clearCache = function () {
        this.entities = [];
    };
    RepositoryService.prototype.getFromCache = function (name, id) {
        if (typeof (this.entities[name]) === 'undefined' || typeof (this.entities[name][id]) === "undefined") {
            return null;
        }
        return this.entities[name][id];
    };
    RepositoryService.prototype.addGetRequest = function (request) {
        var _this = this;
        this.requests.push(request);
        if (this.requestTimer == null) {
            this.requestTimer = setTimeout(function () {
                _this.runRequests(_this.requests.slice(0));
                _this.requestTimer = null;
            }, 10);
        }
    };
    RepositoryService.prototype.prepareRequests = function (requests) {
        var params = [];
        for (var i in this.requests) {
            var request = this.requests[i];
            params.push({
                id: request.getId(),
                method: request.getMethod(),
                controller: request.getController(),
                params: request.getParams(),
                requestid: request.getRequestId()
            });
        }
        return params;
    };
    RepositoryService.prototype.getRequestFromRequestId = function (requestid, requests) {
        for (var i in requests) {
            if (requests[i].getRequestId() == requestid) {
                return requests[i];
            }
        }
        return null;
    };
    RepositoryService.prototype.runRequests = function (requests) {
        var _this = this;
        var params = this.prepareRequests(requests);
        this.AjaxService.post(this.UrlService.makeApi('Multiple', 'index'), params).subscribe(function (data) {
            if (typeof (data.Multiple) === 'undefined') {
                for (var i in requests) {
                    _this.requests[i].getError()();
                }
                return false;
            }
            var data = data.Multiple;
            for (var i in data) {
                var request = _this.getRequestFromRequestId(data[i].requestid, requests);
                request.getCallback()(data[i]);
            }
        });
        this.requests = [];
    };
    RepositoryService.prototype.EntityFromJson = function (obj, name) {
        var entity = this.createEntity(name);
        entity.setValues(obj);
        if (typeof (this.entities[name]) === "undefined") {
            this.entities[name] = [];
        }
        this.entities[name][entity.getId()] = entity;
        return entity;
    };
    RepositoryService.prototype.createEntity = function (name) {
        if (RepositoryService_1.EntityPrototype[name] == undefined) {
            throw 'CreateEntity : entity not declared : ' + name;
        }
        return new RepositoryService_1.EntityPrototype[name](this);
    };
    RepositoryService.prototype.EntitiesFromJson = function (objs, name) {
        var objArray = [];
        for (var i in objs) {
            objArray.push(this.EntityFromJson(objs[i], name));
        }
        return objArray;
    };
    RepositoryService.prototype.findById = function (name, id) {
        var _this = this;
        return new Promise(function (resolve) {
            if (id === 0) {
                throw 'ID NULL';
            }
            var fromCache = _this.getFromCache(name, id);
            if (fromCache !== null) {
                resolve(fromCache);
                return;
            }
            var errorCb = function () { throw 'findById : ' + id + ' : ' + name + ' : BAD_RESULT'; };
            var request = new Request('Entity', name, id, {}, name, function (data) {
                if (!data['success']) {
                    errorCb();
                    return;
                }
                var obj = _this.EntityFromJson(data[name], name);
                resolve(obj);
            }, errorCb);
            _this.addGetRequest(request);
        });
    };
    RepositoryService.prototype.findAll = function (name) {
        var _this = this;
        var errorCb = function () { throw 'findAll : ' + name + ' : BAD_RESULT'; };
        return new Promise(function (resolve) {
            var request = new Request('Entity', name, 0, {}, name, function (data) {
                if (!data['success']) {
                    errorCb();
                    return;
                }
                var objs = _this.EntitiesFromJson(data[name + 's'], name);
                resolve(objs);
            }, errorCb);
            _this.addGetRequest(request);
        });
    };
    RepositoryService.prototype.findSome = function (method, name, id, params) {
        var _this = this;
        var errorCb = function () { throw 'findSome : ' + method + ' : ' + name + ' : BAD_RESULT'; };
        return new Promise(function (resolve) {
            var request = new Request(name, method, id, params, name, function (data) {
                if (!data['success']) {
                    errorCb();
                    return;
                }
                var objs = _this.EntitiesFromJson(data[name + 's'], name);
                resolve(objs);
            }, errorCb);
            _this.addGetRequest(request);
        });
    };
    return RepositoryService;
}());
RepositoryService.EntityPrototype = [];
RepositoryService = RepositoryService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [UrlService_1.UrlService,
        AjaxService_1.AjaxService])
], RepositoryService);
exports.RepositoryService = RepositoryService;
var RepositoryService_1;
