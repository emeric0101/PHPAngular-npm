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
var core_1 = require("@angular/core");
var RepositoryService_1 = require("./RepositoryService");
var AEntity_1 = require("../Entity/AEntity");
var AjaxService_1 = require("./AjaxService");
var UrlService_1 = require("./UrlService");
var EntityManager = (function () {
    function EntityManager($ajax, $url, $repo) {
        this.$ajax = $ajax;
        this.$url = $url;
        this.$repo = $repo;
        this.persistObjs = [];
    }
    EntityManager.prototype.getPersistObjs = function () {
        return this.persistObjs;
    };
    EntityManager.prototype.persist = function (obj, exclude) {
        if (exclude === void 0) { exclude = []; }
        var $this = this;
        for (var i in this.persistObjs) {
            if (this.persistObjs[i] == obj) {
                return;
            }
        }
        exclude.push(obj);
        var checkForEntity = function (v) {
            for (var i in exclude) {
                if (exclude[i] == v) {
                    return false;
                }
            }
            if (v instanceof AEntity_1.Model) {
                $this.persist(v, exclude);
                return true;
            }
            return false;
        };
        for (var j in obj) {
            if (checkForEntity(obj[j])) {
                continue;
            }
        }
        this.persistObjs.push(obj);
    };
    EntityManager.prototype.clear = function () {
        this.persistObjs = [];
    };
    EntityManager.prototype.save = function (obj) {
        var _this = this;
        return new Promise(function (resolve) {
            var objs = {};
            var dataToSend = {};
            if (!obj.getChanged()) {
                resolve();
                return;
            }
            for (var i in obj) {
                var value = obj[i];
                if (i == 'foreignKeyRequests') {
                    continue;
                }
                if (value instanceof RepositoryService_1.RepositoryService) {
                    continue;
                }
                if (typeof (value) === 'function') {
                    continue;
                }
                if (value === null || typeof (value) === 'undefined') {
                    continue;
                }
                if ((typeof (value) === 'array' || typeof (value) === 'object') && value.length > 0 && typeof (value[0].getId) === 'function') {
                    var nvalue = [];
                    for (var objIndex in value) {
                        nvalue[objIndex] = value[objIndex].getId();
                    }
                    objs[i] = nvalue;
                    continue;
                }
                if (typeof (value.getId) === 'function') {
                    value = value.getId();
                }
                if (typeof (value) === 'object' && typeof (value.entity) === 'string') {
                    value = value.id;
                }
                objs[i] = value;
            }
            dataToSend[obj.getName()] = objs;
            _this.$ajax.post(_this.$url.makeApi(obj.getName(), 'post', obj.getId()), dataToSend).subscribe(function (data) {
                var errorMsg = 'OK';
                if (data['errMsg'] !== undefined) {
                    errorMsg = data['errMsg'];
                }
                if (data.success !== true) {
                    throw errorMsg;
                }
                if (typeof (data[obj.getName()]) !== 'undefined') {
                    var nobj = _this.$repo.EntityFromJson(data[obj.getName()], obj.getName());
                    for (var i in nobj) {
                        obj[i] = nobj[i];
                    }
                }
                resolve();
            }, function () {
                throw 'UNABLE_TO_CONNECT';
            });
        });
    };
    EntityManager.prototype.flush = function (autoclear) {
        if (autoclear === void 0) { autoclear = true; }
        return __awaiter(this, void 0, void 0, function () {
            var persistObjs, _i, persistObjs_1, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.persistObjs.length === 0) {
                            return [2 /*return*/];
                        }
                        persistObjs = this.persistObjs;
                        if (autoclear) {
                            this.clear();
                        }
                        _i = 0, persistObjs_1 = persistObjs;
                        _a.label = 1;
                    case 1:
                        if (!(_i < persistObjs_1.length))
                            return [3 /*break*/, 4];
                        obj = persistObjs_1[_i];
                        return [4 /*yield*/, this.save(obj)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.$repo.clearCache();
                        return [2 /*return*/];
                }
            });
        });
    };
    return EntityManager;
}());
EntityManager = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [AjaxService_1.AjaxService,
        UrlService_1.UrlService,
        RepositoryService_1.RepositoryService])
], EntityManager);
exports.EntityManager = EntityManager;
