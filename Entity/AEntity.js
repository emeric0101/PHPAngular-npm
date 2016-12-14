"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ForeignKeyRequest = (function () {
    function ForeignKeyRequest(callback, field, error) {
        this.field = field;
        this.error = error;
        this.callbacks = [];
        this.done = false;
        this.errors = [];
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
    ForeignKeyRequest.prototype.onError = function () {
        this.done = true;
        for (var _i = 0, _a = this.errors; _i < _a.length; _i++) {
            var cb = _a[_i];
            cb();
        }
    };
    ForeignKeyRequest.prototype.addError = function (e) {
        this.errors.push(e);
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
    Model.prototype.foreignKeysAsync = function (field) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var array, _a, _b, _i, i;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        array = this[field];
                        if (array === null) {
                            return [2 /*return*/, null];
                        }
                        if (array.length == 0) {
                            return [2 /*return*/, []];
                        }
                        _a = [];
                        for (_b in this[field])
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length))
                            return [3 /*break*/, 4];
                        i = _a[_i];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.foreignKey(i, function (r) {
                                    resolve(r);
                                }, null, _this[field]);
                            })];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, this[field]];
                }
            });
        });
    };
    Model.prototype.foreignKeyAsync = function (field) {
        var _this = this;
        return new Promise(function (r) {
            _this.foreignKey(field, function (m) {
                r(m);
            }, function () {
                throw 'foreignKeyAsyncError';
            });
        });
    };
    Model.prototype.foreignKey = function (field, success, error, obj) {
        if (obj === void 0) { obj = null; }
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
            requestExist.addError(error);
            return obj[field];
        }
        if ((obj[field] instanceof Model)) {
            success(obj[field]);
            return obj[field];
        }
        var request = new ForeignKeyRequest(success, field, error);
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
        }).catch(function () {
            request.onError();
        });
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
