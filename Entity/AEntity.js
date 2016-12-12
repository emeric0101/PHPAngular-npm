"use strict";
var ForeignKeyRequest = (function () {
    function ForeignKeyRequest(callback, field) {
        this.field = field;
        this.callbacks = [];
        this.done = false;
        this.value = null;
        this.callbacks.push(callback);
    }
    ForeignKeyRequest.getForeignKeyRequestFromField = function (field, array) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var request = array_1[_i];
            if (request == null) {
                continue;
            }
            if (request.getField() == field) {
                return request;
            }
        }
    };
    ForeignKeyRequest.prototype.addCallback = function (cb) {
        if (this.done) {
            cb(this.value);
        }
        else {
            this.callbacks.push(cb);
        }
    };
    ForeignKeyRequest.prototype.getField = function () {
        return this.field;
    };
    ForeignKeyRequest.prototype.valueReceived = function (value) {
        this.value = value;
        this.done = true;
        this.fireCallback();
    };
    ForeignKeyRequest.prototype.fireCallback = function () {
        for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
            var cb = _a[_i];
            cb(this.value);
        }
        this.callbacks = [];
    };
    return ForeignKeyRequest;
}());
var Model = (function () {
    function Model(repositoryService) {
        this.repositoryService = repositoryService;
        this.isFromDb = false;
        this.changed = false;
        this.foreignKeyRequests = [];
    }
    Model.prototype.getChanged = function () {
        return this.changed || !this.isFromDb;
    };
    Model.prototype.setValue = function (name, value) {
        this.changed = true;
        this[name] = value;
        for (var i in this.foreignKeyRequests) {
            if (this.foreignKeyRequests[i] != null && this.foreignKeyRequests[i].getField() == name) {
                this.foreignKeyRequests[i] = null;
            }
        }
    };
    Model.prototype.getIsFromDb = function () {
        return this.isFromDb;
    };
    Model.prototype.getId = function () {
        return this.id;
    };
    Model.prototype.getName = function () {
        return this.name;
    };
    Model.prototype.foreignKeys = function (field) {
        var array = this[field];
        if (array === null) {
            return null;
        }
        if (array.length == 0) {
            return [];
        }
        for (var i in this[field]) {
            this.foreignKey(i, null, null, this[field]);
        }
        return this[field];
    };
    Model.prototype.foreignKey = function (field, success, error, obj) {
        if (obj === void 0) { obj = null; }
        if (typeof (error) === 'function') {
            throw "NOT READY YET : foreignKey";
        }
        if (obj === null) {
            obj = this;
        }
        error = function () { };
        if (success == undefined) {
            success = function () { };
        }
        var value = obj[field];
        if (value === null) {
            success(null);
            return null;
        }
        var requestExist = ForeignKeyRequest.getForeignKeyRequestFromField(field, this.foreignKeyRequests);
        if (requestExist != null) {
            requestExist.addCallback(success);
            return obj[field];
        }
        if ((obj[field] instanceof Model)) {
            return obj[field];
        }
        var request = new ForeignKeyRequest(success, field);
        this.foreignKeyRequests.push(request);
        if (typeof (value['entity']) === 'undefined') {
            throw 'Model : foreignKey not an entity !';
        }
        var callbackSuccess = function (objReceived) {
            obj[field] = objReceived;
            request.valueReceived(objReceived);
        };
        this.repositoryService.findById(value['entity'], value['id']).then(function (obj) {
            callbackSuccess(obj);
        }).catch(error);
        return obj[field];
    };
    ;
    Model.prototype.setValues = function (values) {
        for (var i in values) {
            var value = values[i];
            if (value !== null && typeof (value["class"]) === 'string') {
                if (value["class"] === 'datetime') {
                    var s = value['date'].split(/\D/);
                    var d = new Date();
                    d.setFullYear(s[0]);
                    d.setMonth(s[1] - 1);
                    d.setDate(s[2]);
                    d.setHours(s[3]);
                    d.setMinutes(s[4]);
                    value = d;
                }
                else {
                    throw "Unable to serialize : " + value['class'];
                }
            }
            this[i] = value;
        }
        this.isFromDb = true;
    };
    Model.prototype.update = function () {
        var _this = this;
        this.repositoryService.findById(this.name, this.id).then(function (obj) {
            _this.setValues(obj);
        });
    };
    Model.prototype.setRepositoryService = function (repositoryService) {
        this.repositoryService = repositoryService;
    };
    return Model;
}());
exports.Model = Model;
