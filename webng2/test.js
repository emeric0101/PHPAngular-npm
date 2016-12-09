var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
var phpangularmodules = ['ngRoute', 'ngSanitize'];
var contentversion = '0000001';
var routerMode = 'component';
var Emeric0101;
(function (Emeric0101) {
    var PHPAngular;
    (function (PHPAngular) {
        var Entity;
        (function (Entity) {
            var EntityTest = (function (_super) {
                __extends(EntityTest, _super);
                function EntityTest(repositoryService) {
                    var _this = _super.call(this, "EntityTest", repositoryService) || this;
                    _this.title = "";
                    return _this;
                }
                EntityTest.prototype.getTitle = function () {
                    return this.title;
                };
                EntityTest.prototype.setTitle = function (t) {
                    this.title = t;
                };
                return EntityTest;
            }(Emeric0101.PHPAngular.Entity.Model));
            Entity.EntityTest = EntityTest;
        })(Entity = PHPAngular.Entity || (PHPAngular.Entity = {}));
    })(PHPAngular = Emeric0101.PHPAngular || (Emeric0101.PHPAngular = {}));
})(Emeric0101 || (Emeric0101 = {}));
String.prototype['ucFirst'] = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
var Emeric0101;
(function (Emeric0101) {
    var PHPAngular;
    (function (PHPAngular) {
        var Repository;
        (function (Repository) {
            var AEntityRepository = (function () {
                function AEntityRepository($repo, $ajax, $url) {
                    this.$repo = $repo;
                    this.$ajax = $ajax;
                    this.$url = $url;
                }
                AEntityRepository.prototype.findSample = function (callback, error) {
                    var $this = this;
                    this.$ajax.get(this.$url.makeApi('AEntity', "findSample", null, {}), {}, function (result) {
                        var data = result.data;
                        if (data.success !== true || typeof (data["AEntitys"]) === 'undefined') {
                            console.error("Unable to get from ajax findSample : AEntity");
                            callback(null);
                        }
                        var objArray = $this.$repo.EntitiesFromJson(data["AEntitys"], "AEntity");
                        callback(objArray);
                    }, function () {
                        error();
                    });
                };
                return AEntityRepository;
            }());
            AEntityRepository.$inject = ['RepositoryService', 'AjaxService', 'UrlService'];
            phpangularModule.service("AEntityRepository", AEntityRepository);
        })(Repository = PHPAngular.Repository || (PHPAngular.Repository = {}));
    })(PHPAngular = Emeric0101.PHPAngular || (Emeric0101.PHPAngular = {}));
})(Emeric0101 || (Emeric0101 = {}));
var GroupeTest = (function () {
    function GroupeTest(flag) {
        this.flag = flag;
        this.flag = flag;
    }
    GroupeTest.prototype.getFlag = function () {
        return this.flag;
    };
    return GroupeTest;
}());
describe('AuthService', function () {
    beforeEach(module('phpangularModule'));
    var $http, $url, $auth;
    beforeEach(inject(function ($httpBackend, UrlService, AuthService) {
        $http = $httpBackend;
        $url = UrlService;
        $auth = AuthService;
    }));
    var jsonTest = {
        "success": true,
        "authTable": {
            "MODERATOR": {
                "user-edit": true,
                "USER": "P"
            },
            "USER": {
                "user-edit-itself": true
            }
        }
    };
    var loginInfoTest = {
        "success": true,
        "user": { "id": 1, "mail": "emeric0101@hotmail.fr" }
    };
    var groupeTest = {
        "success": true,
        "Groupe": { "id": 1, "flag": "USER" }
    };
    var userRight = new Emeric0101.PHPAngular.Service.RightGroup('USER');
    userRight.addRight(new Emeric0101.PHPAngular.Service.Right('user-edit-itself'));
    var moderatorRight = new Emeric0101.PHPAngular.Service.RightGroup('MODERATOR');
    moderatorRight.addRight(new Emeric0101.PHPAngular.Service.Right('user-edit'));
    moderatorRight.addRight(userRight);
    var table = {
        'MODERATOR': moderatorRight,
        'USER': userRight
    };
    var groupeAdmin = new GroupeTest("ADMIN");
    var groupeUser = new GroupeTest("USER");
    var groupeModerator = new GroupeTest("MODERATOR");
    it('loadTable', function () {
        $http
            .when('GET', $url.makeApi("auth", "getTable"))
            .respond(200, jsonTest);
        $http.whenGET('template/home/home/home.html').respond(200);
        $auth.getTable();
        $http.flush();
        expect($auth.Table).toEqual(table);
        expect($auth.getRightFromGroupe('test', groupeAdmin)).toEqual(true);
        expect($auth.getRightFromGroupe('test', groupeUser)).toEqual(false);
        expect($auth.getRightFromGroupe('user-edit-itself', groupeUser)).toEqual(true);
        expect($auth.getRightFromGroupe('user-edit', groupeUser)).toEqual(false);
        expect($auth.getRightFromGroupe('user-edit', groupeModerator)).toEqual(true);
        expect($auth.getRightFromGroupe('user-edit-itself', groupeModerator)).toEqual(true);
        expect($auth.getRightFromGroupe('user-', groupeModerator)).toEqual(false);
    });
    it('getRight', function (done) {
        var _this = this;
        $http
            .when('GET', $url.makeApi("auth", "getTable"))
            .respond(200, jsonTest);
        $http.whenGET('template/home/home/home.html').respond(200);
        $auth.getTable();
        $http.flush();
        $http
            .when('GET', $url.makeApi("login", "getLoginInfo"))
            .respond(200, loginInfoTest);
        var testAsync = function () { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, $auth.getRight('user-edit-itself')];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(true);
                        return [4 /*yield*/, $auth.getRight('user-edit')];
                    case 2:
                        result = _a.sent();
                        expect(result).toEqual(false);
                        done();
                        return [2 /*return*/];
                }
            });
        }); };
        testAsync();
        $http.flush();
    });
});
describe('EntityManager', function () {
    beforeEach(module('phpangularModule'));
    it('persist', inject(function (EntityManager, RepositoryService) {
        var entity = RepositoryService.createEntity("User");
        entity.setMail("testUnitaire");
        var $scope = {};
        EntityManager.persist(entity);
        var persistObjs = EntityManager.getPersistObjs();
        var found = false;
        for (var i in persistObjs) {
            if (entity === persistObjs[i]) {
                expect(persistObjs[i].getMail()).toEqual("testUnitaire");
                found = true;
            }
        }
        expect(found).toBe(true);
    }));
    it('flush', inject(function ($httpBackend, EntityManager, UrlService, RepositoryService) {
        var entity = RepositoryService.createEntity("User");
        entity.setMail("testUnitaire");
        EntityManager.persist(entity);
        var resultat = false;
        EntityManager.flush(function (result) {
            resultat = result;
        });
        $httpBackend
            .when('POST', UrlService.makeApi("User", 'post'))
            .respond(200, {
            success: true,
            "User": {
                "id": 42,
                "mail": "testUnitaire"
            }
        });
        $httpBackend
            .when('POST', UrlService.makeApi("Groupe", 'post'))
            .respond(200, {
            success: true,
            "Group": {
                "id": 1,
            }
        });
        $httpBackend.whenGET('template/home/home/home.html').respond(200);
        $httpBackend.flush();
        expect(entity.getMail()).toEqual("testUnitaire");
        expect(entity.getId()).toEqual(42);
        expect(resultat).toBe(true);
    }));
    it('flush bad', inject(function ($httpBackend, EntityManager, UrlService, RepositoryService) {
        var entity = RepositoryService.createEntity("User");
        entity.setMail("testUnitaire");
        EntityManager.persist(entity);
        var result = true;
        EntityManager.flush(function (e) {
            result = e;
        });
        $httpBackend
            .when('POST', UrlService.makeApi("User", "post"))
            .respond(200, {
            success: false
        });
        $httpBackend
            .when('POST', UrlService.makeApi("Groupe", 'post'))
            .respond(200, {
            success: true,
            "Group": {
                "id": 1,
            }
        });
        $httpBackend.whenGET('template/home/home/home.html').respond(200);
        $httpBackend.flush();
        expect(entity.getMail()).toEqual("testUnitaire");
        expect(result).toBe(false);
    }));
});
var Emeric0101;
(function (Emeric0101) {
    var PHPAngular;
    (function (PHPAngular) {
        var Service;
        (function (Service) {
            var EntityFactory = (function () {
                function EntityFactory() {
                    this.bundle = Emeric0101.PHPAngular;
                }
                EntityFactory.prototype.getBundle = function () {
                    return this.bundle;
                };
                return EntityFactory;
            }());
            Service.EntityFactory = EntityFactory;
            phpangularModule.service("EntityFactory", EntityFactory);
        })(Service = PHPAngular.Service || (PHPAngular.Service = {}));
    })(PHPAngular = Emeric0101.PHPAngular || (Emeric0101.PHPAngular = {}));
})(Emeric0101 || (Emeric0101 = {}));
(function (Emeric0101) {
    var PHPAngular;
    (function (PHPAngular) {
        var Entity;
        (function (Entity) {
            var GroupeUser = (function (_super) {
                __extends(GroupeUser, _super);
                function GroupeUser() {
                    return _super.apply(this, arguments) || this;
                }
                GroupeUser.prototype.getFlag = function () {
                    return 'USER';
                };
                return GroupeUser;
            }(Emeric0101.PHPAngular.Entity.Model));
            Entity.GroupeUser = GroupeUser;
            var User = (function (_super) {
                __extends(User, _super);
                function User(repositoryService) {
                    var _this = _super.call(this, "User", repositoryService) || this;
                    _this.groupe = [new GroupeUser('groupe', _this.repositoryService)];
                    return _this;
                }
                User.prototype.getMail = function () {
                    return this.mail;
                };
                User.prototype.setMail = function (m) {
                    this.mail = m;
                };
                User.prototype.getGroupe = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    resolve(_this.groupe);
                                })];
                        });
                    });
                };
                return User;
            }(Emeric0101.PHPAngular.Entity.Model));
            Entity.User = User;
        })(Entity = PHPAngular.Entity || (PHPAngular.Entity = {}));
    })(PHPAngular = Emeric0101.PHPAngular || (Emeric0101.PHPAngular = {}));
})(Emeric0101 || (Emeric0101 = {}));
describe('StubTracker', function () {
    beforeEach(function () {
        var Constructor = getJasmineRequireObj().AjaxStubTracker();
        this.tracker = new Constructor();
    });
    it('finds nothing if no stubs are added', function () {
        expect(this.tracker.findStub()).toBeUndefined();
    });
    it('finds an added stub', function () {
        var stub = { matches: function () { return true; } };
        this.tracker.addStub(stub);
        expect(this.tracker.findStub()).toBe(stub);
    });
    it('skips an added stub that does not match', function () {
        var stub = { matches: function () { return false; } };
        this.tracker.addStub(stub);
        expect(this.tracker.findStub()).toBeUndefined();
    });
    it('passes url, data, and method to the stub', function () {
        var stub = { matches: jasmine.createSpy('matches') };
        this.tracker.addStub(stub);
        this.tracker.findStub('url', 'data', 'method');
        expect(stub.matches).toHaveBeenCalledWith('url', 'data', 'method');
    });
    it('can clear out all stubs', function () {
        var stub = { matches: jasmine.createSpy('matches') };
        this.tracker.addStub(stub);
        this.tracker.findStub();
        expect(stub.matches).toHaveBeenCalled();
        this.tracker.reset();
        stub.matches.calls.reset();
        this.tracker.findStub();
        expect(stub.matches).not.toHaveBeenCalled();
    });
    it('uses the most recently added stub that matches', function () {
        var stub1 = { matches: function () { return true; } };
        var stub2 = { matches: function () { return true; } };
        var stub3 = { matches: function () { return false; } };
        this.tracker.addStub(stub1);
        this.tracker.addStub(stub2);
        this.tracker.addStub(stub3);
        expect(this.tracker.findStub()).toBe(stub2);
    });
});
describe('FakeRequest', function () {
    beforeEach(function () {
        this.requestTracker = { track: jasmine.createSpy('trackRequest') };
        this.stubTracker = { findStub: function () { } };
        var parserInstance = this.parserInstance = jasmine.createSpy('parse');
        this.paramParser = { findParser: function () { return { parse: parserInstance }; } };
        var eventBus = this.fakeEventBus = {
            addEventListener: jasmine.createSpy('addEventListener'),
            trigger: jasmine.createSpy('trigger'),
            removeEventListener: jasmine.createSpy('removeEventListener')
        };
        this.eventBusFactory = function () {
            return eventBus;
        };
        this.fakeGlobal = {
            XMLHttpRequest: function () {
                this.extraAttribute = 'my cool attribute';
            },
            DOMParser: window['DOMParser'],
            ActiveXObject: window['ActiveXObject']
        };
        this.FakeRequest = getJasmineRequireObj().AjaxFakeRequest(this.eventBusFactory)(this.fakeGlobal, this.requestTracker, this.stubTracker, this.paramParser);
    });
    it('extends from the global XMLHttpRequest', function () {
        var request = new this.FakeRequest();
        expect(request.extraAttribute).toEqual('my cool attribute');
    });
    it('skips XMLHttpRequest attributes that IE does not want copied', function () {
        var FakeRequest = getJasmineRequireObj().AjaxFakeRequest(this.eventBusFactory)(window, this.requestTracker, this.stubTracker, this.paramParser);
        var request = new FakeRequest();
        expect(request.responseBody).toBeUndefined();
        expect(request.responseXML).toBeUndefined();
        expect(request.statusText).toBeUndefined();
    });
    it('tracks the request', function () {
        var request = new this.FakeRequest();
        expect(this.requestTracker.track).toHaveBeenCalledWith(request);
    });
    it('has default request headers and override mime type', function () {
        var request = new this.FakeRequest();
        expect(request.requestHeaders).toEqual({});
        expect(request.overriddenMimeType).toBeNull();
    });
    it('saves request information when opened', function () {
        var request = new this.FakeRequest();
        request.open('METHOD', 'URL', 'ignore_async', 'USERNAME', 'PASSWORD');
        expect(request.method).toEqual('METHOD');
        expect(request.url).toEqual('URL');
        expect(request.username).toEqual('USERNAME');
        expect(request.password).toEqual('PASSWORD');
    });
    it('saves an override mime type', function () {
        var request = new this.FakeRequest();
        request.overrideMimeType('application/text; charset: utf-8');
        expect(request.overriddenMimeType).toBe('application/text; charset: utf-8');
    });
    it('saves request headers', function () {
        var request = new this.FakeRequest();
        request.setRequestHeader('X-Header-1', 'value1');
        request.setRequestHeader('X-Header-2', 'value2');
        expect(request.requestHeaders).toEqual({
            'X-Header-1': 'value1',
            'X-Header-2': 'value2'
        });
    });
    it('combines request headers with the same header name', function () {
        var request = new this.FakeRequest();
        request.setRequestHeader('X-Header', 'value1');
        request.setRequestHeader('X-Header', 'value2');
        expect(request.requestHeaders['X-Header']).toEqual('value1, value2');
    });
    it('finds the content-type request header', function () {
        var request = new this.FakeRequest();
        request.setRequestHeader('ContEnt-tYPe', 'application/text+xml');
        expect(request.contentType()).toEqual('application/text+xml');
    });
    describe('managing readyState', function () {
        beforeEach(function () {
            this.request = new this.FakeRequest();
        });
        it('has an initial ready state of 0 (uninitialized)', function () {
            expect(this.request.readyState).toBe(0);
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalled();
        });
        it('has a ready state of 1 (open) when opened', function () {
            this.request.open();
            expect(this.request.readyState).toBe(1);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
        });
        it('has a ready state of 0 (uninitialized) when aborted', function () {
            this.request.open();
            this.fakeEventBus.trigger.calls.reset();
            this.request.abort();
            expect(this.request.readyState).toBe(0);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
        });
        it('has a ready state of 1 (sent) when sent', function () {
            this.request.open();
            this.fakeEventBus.trigger.calls.reset();
            this.request.send();
            expect(this.request.readyState).toBe(1);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('readystatechange');
        });
        it('has a ready state of 4 (loaded) when timed out', function () {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();
            jasmine.clock().install();
            this.request.responseTimeout();
            jasmine.clock().uninstall();
            expect(this.request.readyState).toBe(4);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange', 'timeout');
        });
        it('has a ready state of 4 (loaded) when network erroring', function () {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();
            this.request.responseError();
            expect(this.request.readyState).toBe(4);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
        });
        it('has a ready state of 4 (loaded) when responding', function () {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();
            this.request.respondWith({});
            expect(this.request.readyState).toBe(4);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
        });
        it('has a ready state of 2, then 4 (loaded) when responding', function () {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();
            var request = this.request;
            var events = [];
            var headers = [
                { name: 'X-Header', value: 'foo' }
            ];
            this.fakeEventBus.trigger.and.callFake(function (event) {
                if (event === 'readystatechange') {
                    events.push({
                        readyState: request.readyState,
                        status: request.status,
                        statusText: request.statusText,
                        responseHeaders: request.responseHeaders
                    });
                }
            });
            this.request.respondWith({
                status: 200,
                statusText: 'OK',
                responseHeaders: headers
            });
            expect(this.request.readyState).toBe(4);
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
            expect(events.length).toBe(2);
            expect(events).toEqual([
                { readyState: 2, status: 200, statusText: 'OK', responseHeaders: headers },
                { readyState: 4, status: 200, statusText: 'OK', responseHeaders: headers }
            ]);
        });
        it('throws an error when timing out a request that has completed', function () {
            this.request.open();
            this.request.send();
            this.request.respondWith({});
            var request = this.request;
            expect(function () {
                request.responseTimeout();
            }).toThrowError('FakeXMLHttpRequest already completed');
        });
        it('throws an error when responding to a request that has completed', function () {
            this.request.open();
            this.request.send();
            this.request.respondWith({});
            var request = this.request;
            expect(function () {
                request.respondWith({});
            }).toThrowError('FakeXMLHttpRequest already completed');
        });
        it('throws an error when erroring a request that has completed', function () {
            this.request.open();
            this.request.send();
            this.request.respondWith({});
            var request = this.request;
            expect(function () {
                request.responseError({});
            }).toThrowError('FakeXMLHttpRequest already completed');
        });
    });
    it('registers on-style callback with the event bus', function () {
        this.request = new this.FakeRequest();
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('readystatechange', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('loadstart', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('progress', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('abort', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('error', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('load', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('timeout', jasmine.any(Function));
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('loadend', jasmine.any(Function));
        this.request.onreadystatechange = jasmine.createSpy('readystatechange');
        this.request.onloadstart = jasmine.createSpy('loadstart');
        this.request.onprogress = jasmine.createSpy('progress');
        this.request.onabort = jasmine.createSpy('abort');
        this.request.onerror = jasmine.createSpy('error');
        this.request.onload = jasmine.createSpy('load');
        this.request.ontimeout = jasmine.createSpy('timeout');
        this.request.onloadend = jasmine.createSpy('loadend');
        var args = this.fakeEventBus.addEventListener.calls.allArgs();
        for (var i = 0; i < args.length; i++) {
            var eventName = args[i][0], busCallback = args[i][1];
            busCallback();
            expect(this.request['on' + eventName]).toHaveBeenCalled();
        }
    });
    it('delegates addEventListener to the eventBus', function () {
        this.request = new this.FakeRequest();
        this.request.addEventListener('foo', 'bar');
        expect(this.fakeEventBus.addEventListener).toHaveBeenCalledWith('foo', 'bar');
    });
    it('delegates removeEventListener to the eventBus', function () {
        this.request = new this.FakeRequest();
        this.request.removeEventListener('foo', 'bar');
        expect(this.fakeEventBus.removeEventListener).toHaveBeenCalledWith('foo', 'bar');
    });
    describe('triggering progress events', function () {
        beforeEach(function () {
            this.request = new this.FakeRequest();
        });
        it('should not trigger any events to start', function () {
            this.request.open();
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
        });
        it('should trigger loadstart when sent', function () {
            this.request.open();
            this.fakeEventBus.trigger.calls.reset();
            this.request.send();
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('readystatechange');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('progress');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('abort');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('error');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('load');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('timeout');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('loadend');
        });
        it('should trigger abort, progress, loadend when aborted', function () {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();
            this.request.abort();
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('progress');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('abort');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('error');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('load');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('timeout');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadend');
        });
        it('should trigger error, progress, loadend when network error', function () {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();
            this.request.responseError();
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('progress');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('abort');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('error');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('load');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('timeout');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadend');
        });
        it('should trigger timeout, progress, loadend when timing out', function () {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();
            jasmine.clock().install();
            this.request.responseTimeout();
            jasmine.clock().uninstall();
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange', 'timeout');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('progress');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('abort');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('error');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('load');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('timeout');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadend');
        });
        it('should trigger load, progress, loadend when responding', function () {
            this.request.open();
            this.request.send();
            this.fakeEventBus.trigger.calls.reset();
            this.request.respondWith({ status: 200 });
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('loadstart');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('readystatechange');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('progress');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('abort');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('error');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('load');
            expect(this.fakeEventBus.trigger).not.toHaveBeenCalledWith('timeout');
            expect(this.fakeEventBus.trigger).toHaveBeenCalledWith('loadend');
        });
    });
    it('ticks the jasmine clock on timeout', function () {
        var clock = { tick: jasmine.createSpy('tick') };
        spyOn(jasmine, 'clock').and.returnValue(clock);
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.responseTimeout();
        expect(clock.tick).toHaveBeenCalledWith(30000);
    });
    it('has an initial status of null', function () {
        var request = new this.FakeRequest();
        expect(request.status).toBeNull();
    });
    it('has an aborted status', function () {
        var request = new this.FakeRequest();
        request.abort();
        expect(request.status).toBe(0);
        expect(request.statusText).toBe('abort');
    });
    it('has a status from the response', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200 });
        expect(request.status).toBe(200);
        expect(request.statusText).toBe('');
    });
    it('has a statusText from the response', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200, statusText: 'OK' });
        expect(request.status).toBe(200);
        expect(request.statusText).toBe('OK');
    });
    it('saves off any data sent to the server', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send('foo=bar&baz=quux');
        expect(request.params).toBe('foo=bar&baz=quux');
    });
    it('parses data sent to the server', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send('foo=bar&baz=quux');
        this.parserInstance.and.returnValue('parsed');
        expect(request.data()).toBe('parsed');
    });
    it('skips parsing if no data was sent', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        expect(request.data()).toEqual({});
        expect(this.parserInstance).not.toHaveBeenCalled();
    });
    it('saves responseText', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200, responseText: 'foobar' });
        expect(request.responseText).toBe('foobar');
    });
    it('defaults responseText if none is given', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200 });
        expect(request.responseText).toBe('');
    });
    it('retrieves individual response headers', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({
            status: 200,
            responseHeaders: {
                'X-Header': 'foo'
            }
        });
        expect(request.getResponseHeader('X-Header')).toBe('foo');
    });
    it('retrieves individual response headers case-insensitively', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({
            status: 200,
            responseHeaders: {
                'X-Header': 'foo'
            }
        });
        expect(request.getResponseHeader('x-header')).toBe('foo');
    });
    it('retrieves a combined response header', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({
            status: 200,
            responseHeaders: [
                { name: 'X-Header', value: 'foo' },
                { name: 'X-Header', value: 'bar' }
            ]
        });
        expect(request.getResponseHeader('x-header')).toBe('foo, bar');
    });
    it("doesn't pollute the response headers of other XHRs", function () {
        var request1 = new this.FakeRequest();
        request1.open();
        request1.send();
        var request2 = new this.FakeRequest();
        request2.open();
        request2.send();
        request1.respondWith({ status: 200, responseHeaders: { 'X-Foo': 'bar' } });
        request2.respondWith({ status: 200, responseHeaders: { 'X-Baz': 'quux' } });
        expect(request1.getAllResponseHeaders()).toBe("X-Foo: bar\r\n");
        expect(request2.getAllResponseHeaders()).toBe("X-Baz: quux\r\n");
    });
    it('retrieves all response headers', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({
            status: 200,
            responseHeaders: [
                { name: 'X-Header-1', value: 'foo' },
                { name: 'X-Header-2', value: 'bar' },
                { name: 'X-Header-1', value: 'baz' }
            ]
        });
        expect(request.getAllResponseHeaders()).toBe("X-Header-1: foo\r\nX-Header-2: bar\r\nX-Header-1: baz\r\n");
    });
    it('sets the content-type header to the specified contentType when no other headers are supplied', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200, contentType: 'text/plain' });
        expect(request.getResponseHeader('content-type')).toBe('text/plain');
        expect(request.getAllResponseHeaders()).toBe("Content-Type: text/plain\r\n");
    });
    it('sets a default content-type header if no contentType and headers are supplied', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200 });
        expect(request.getResponseHeader('content-type')).toBe('application/json');
        expect(request.getAllResponseHeaders()).toBe("Content-Type: application/json\r\n");
    });
    it('has no responseXML by default', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200 });
        expect(request.responseXML).toBeNull();
    });
    it('parses a text/xml document into responseXML', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200, contentType: 'text/xml', responseText: '<dom><stuff/></dom>' });
        if (typeof window['Document'] !== 'undefined') {
            expect(request.responseXML instanceof window['Document']).toBe(true);
            expect(request.response instanceof window['Document']).toBe(true);
        }
        else {
            expect(request.responseXML instanceof window['ActiveXObject']).toBe(true);
            expect(request.response instanceof window['ActiveXObject']).toBe(true);
        }
    });
    it('parses an application/xml document into responseXML', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200, contentType: 'application/xml', responseText: '<dom><stuff/></dom>' });
        if (typeof window['Document'] !== 'undefined') {
            expect(request.responseXML instanceof window['Document']).toBe(true);
            expect(request.response instanceof window['Document']).toBe(true);
        }
        else {
            expect(request.responseXML instanceof window['ActiveXObject']).toBe(true);
            expect(request.response instanceof window['ActiveXObject']).toBe(true);
        }
    });
    it('parses a custom blah+xml document into responseXML', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200, contentType: 'application/text+xml', responseText: '<dom><stuff/></dom>' });
        if (typeof window['Document'] !== 'undefined') {
            expect(request.responseXML instanceof window['Document']).toBe(true);
            expect(request.response instanceof window['Document']).toBe(true);
        }
        else {
            expect(request.responseXML instanceof window['ActiveXObject']).toBe(true);
            expect(request.response instanceof window['ActiveXObject']).toBe(true);
        }
    });
    it('defaults the response attribute to the responseText', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200, responseText: 'foo' });
        expect(request.response).toEqual('foo');
    });
    it('has a text response when the responseType is blank', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200, responseText: 'foo', responseType: '' });
        expect(request.response).toEqual('foo');
    });
    it('has a text response when the responseType is text', function () {
        var request = new this.FakeRequest();
        request.open();
        request.send();
        request.respondWith({ status: 200, responseText: 'foo', responseType: 'text' });
        expect(request.response).toEqual('foo');
    });
});
describe("Jasmine Mock Ajax (for toplevel)", function () {
    var request, anotherRequest, response;
    var success, error, complete;
    var client, onreadystatechange;
    var sharedContext = {};
    var fakeGlobal, mockAjax;
    beforeEach(function () {
        var fakeXMLHttpRequest = jasmine.createSpy('realFakeXMLHttpRequest');
        fakeGlobal = {
            XMLHttpRequest: fakeXMLHttpRequest,
            DOMParser: window['DOMParser'],
            ActiveXObject: window['ActiveXObject']
        };
        mockAjax = new MockAjax(fakeGlobal);
        mockAjax.install();
        success = jasmine.createSpy("onSuccess");
        error = jasmine.createSpy("onFailure");
        complete = jasmine.createSpy("onComplete");
        onreadystatechange = function () {
            if (this.readyState === (this.DONE || 4)) {
                if (this.status === 200) {
                    success(this.responseText, this.textStatus, this);
                }
                else {
                    error(this, this.textStatus, '');
                }
                complete(this, this.textStatus);
            }
        };
    });
    describe("when making a request", function () {
        beforeEach(function () {
            client = new fakeGlobal.XMLHttpRequest();
            client.onreadystatechange = onreadystatechange;
            client.open("GET", "example.com/someApi");
            client.send();
            request = mockAjax.requests.mostRecent();
        });
        it("should store URL and transport", function () {
            expect(request.url).toEqual("example.com/someApi");
        });
        it("should queue the request", function () {
            expect(mockAjax.requests.count()).toEqual(1);
        });
        it("should allow access to the queued request", function () {
            expect(mockAjax.requests.first()).toEqual(request);
        });
        it("should allow access to the queued request via index", function () {
            expect(mockAjax.requests.at(0)).toEqual(request);
        });
        describe("and then another request", function () {
            beforeEach(function () {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.send();
                anotherRequest = mockAjax.requests.mostRecent();
            });
            it("should queue the next request", function () {
                expect(mockAjax.requests.count()).toEqual(2);
            });
            it("should allow access to the other queued request", function () {
                expect(mockAjax.requests.first()).toEqual(request);
                expect(mockAjax.requests.mostRecent()).toEqual(anotherRequest);
            });
        });
        describe("mockAjax.requests.mostRecent()", function () {
            describe("when there is one request queued", function () {
                it("should return the request", function () {
                    expect(mockAjax.requests.mostRecent()).toEqual(request);
                });
            });
            describe("when there is more than one request", function () {
                beforeEach(function () {
                    client = new fakeGlobal.XMLHttpRequest();
                    client.onreadystatechange = onreadystatechange;
                    client.open("GET", "example.com/someApi");
                    client.send();
                    anotherRequest = mockAjax.requests.mostRecent();
                });
                it("should return the most recent request", function () {
                    expect(mockAjax.requests.mostRecent()).toEqual(anotherRequest);
                });
            });
            describe("when there are no requests", function () {
                beforeEach(function () {
                    mockAjax.requests.reset();
                });
                it("should return null", function () {
                    expect(mockAjax.requests.mostRecent()).toBeUndefined();
                });
            });
        });
        describe("clearAjaxRequests()", function () {
            beforeEach(function () {
                mockAjax.requests.reset();
            });
            it("should remove all requests", function () {
                expect(mockAjax.requests.count()).toEqual(0);
                expect(mockAjax.requests.mostRecent()).toBeUndefined();
            });
        });
    });
    describe("when simulating a response with request.response", function () {
        describe("and the response is Success", function () {
            beforeEach(function () {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.setRequestHeader("Content-Type", "text/plain");
                client.send();
                request = mockAjax.requests.mostRecent();
                response = { status: 200, statusText: "OK", contentType: "text/html", responseText: "OK!" };
                request.respondWith(response);
                sharedContext.responseCallback = success;
                sharedContext.status = response.status;
                sharedContext.statusText = response.statusText;
                sharedContext.contentType = response.contentType;
                sharedContext.responseText = response.responseText;
                sharedContext.responseType = response.responseType;
            });
            it("should call the success handler", function () {
                expect(success).toHaveBeenCalled();
            });
            it("should not call the failure handler", function () {
                expect(error).not.toHaveBeenCalled();
            });
            it("should call the complete handler", function () {
                expect(complete).toHaveBeenCalled();
            });
            sharedAjaxResponseBehaviorForZepto_Success(sharedContext);
        });
        describe("and the response is Success, but with JSON", function () {
            beforeEach(function () {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.setRequestHeader("Content-Type", "application/json");
                client.send();
                request = mockAjax.requests.mostRecent();
                var responseObject = { status: 200, statusText: "OK", contentType: "application/json", responseText: '{"foo":"bar"}', responseType: "json" };
                request.respondWith(responseObject);
                sharedContext.responseCallback = success;
                sharedContext.status = responseObject.status;
                sharedContext.statusText = responseObject.statusText;
                sharedContext.contentType = responseObject.contentType;
                sharedContext.responseText = responseObject.responseText;
                sharedContext.responseType = responseObject.responseType;
                response = success.calls.mostRecent().args[2];
            });
            it("should call the success handler", function () {
                expect(success).toHaveBeenCalled();
            });
            it("should not call the failure handler", function () {
                expect(error).not.toHaveBeenCalled();
            });
            it("should call the complete handler", function () {
                expect(complete).toHaveBeenCalled();
            });
            it("should return a JavaScript object for XHR2 response", function () {
                var responseText = sharedContext.responseText;
                expect(success.calls.mostRecent().args[0]).toEqual(responseText);
                expect(response.responseText).toEqual(responseText);
                expect(response.response).toEqual({ foo: "bar" });
            });
            sharedAjaxResponseBehaviorForZepto_Success(sharedContext);
        });
        describe("and the response is Success, and response is overriden", function () {
            beforeEach(function () {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.setRequestHeader("Content-Type", "application/json");
                client.send();
                request = mockAjax.requests.mostRecent();
                var responseObject = { status: 200, statusText: "OK", contentType: "application/json", responseText: '{"foo":"bar"}', responseType: 'json' };
                request.respondWith(responseObject);
                sharedContext.responseCallback = success;
                sharedContext.status = responseObject.status;
                sharedContext.statusText = responseObject.statusText;
                sharedContext.contentType = responseObject.contentType;
                sharedContext.responseText = responseObject.responseText;
                sharedContext.responseType = responseObject.responseType;
                response = success.calls.mostRecent().args[2];
            });
            it("should return the provided override for the XHR2 response", function () {
                var responseText = sharedContext.responseText;
                expect(response.responseText).toEqual(responseText);
                expect(response.response).toEqual({ foo: "bar" });
            });
            sharedAjaxResponseBehaviorForZepto_Success(sharedContext);
        });
        describe("response with unique header names using an object", function () {
            beforeEach(function () {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com");
                client.send();
                request = mockAjax.requests.mostRecent();
                var responseObject = {
                    status: 200, statusText: "OK", responseText: '["foo"]', responseHeaders: {
                        'X-Header1': 'header 1 value',
                        'X-Header2': 'header 2 value',
                        'X-Header3': 'header 3 value'
                    }
                };
                request.respondWith(responseObject);
                response = success.calls.mostRecent().args[2];
            });
            it("getResponseHeader should return the each value", function () {
                expect(response.getResponseHeader('X-Header1')).toBe('header 1 value');
                expect(response.getResponseHeader('X-Header2')).toBe('header 2 value');
                expect(response.getResponseHeader('X-Header3')).toBe('header 3 value');
            });
            it("getAllResponseHeaders should return all values", function () {
                expect(response.getAllResponseHeaders()).toBe([
                    "X-Header1: header 1 value",
                    "X-Header2: header 2 value",
                    "X-Header3: header 3 value"
                ].join("\r\n") + "\r\n");
            });
        });
        describe("response with multiple headers of the same name using an array of objects", function () {
            beforeEach(function () {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com");
                client.send();
                request = mockAjax.requests.mostRecent();
                var responseObject = {
                    status: 200, statusText: "OK", responseText: '["foo"]', responseHeaders: [
                        { name: 'X-Header', value: 'header value 1' },
                        { name: 'X-Header', value: 'header value 2' }
                    ]
                };
                request.respondWith(responseObject);
                response = success.calls.mostRecent().args[2];
            });
            it("getResponseHeader should return all values comma separated", function () {
                expect(response.getResponseHeader('X-Header')).toBe('header value 1, header value 2');
            });
            it("getAllResponseHeaders should return all values", function () {
                expect(response.getAllResponseHeaders()).toBe([
                    "X-Header: header value 1",
                    "X-Header: header value 2"
                ].join("\r\n") + "\r\n");
            });
        });
        describe("the content type defaults to application/json", function () {
            beforeEach(function () {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.setRequestHeader("Content-Type", "application/json");
                client.send();
                request = mockAjax.requests.mostRecent();
                response = { status: 200, statusText: "OK", responseText: '{"foo": "valid JSON, dammit."}', responseType: 'json' };
                request.respondWith(response);
                sharedContext.responseCallback = success;
                sharedContext.status = response.status;
                sharedContext.statusText = response.statusText;
                sharedContext.contentType = "application/json";
                sharedContext.responseType = response.responseType;
                sharedContext.responseText = response.responseText;
            });
            it("should call the success handler", function () {
                expect(success).toHaveBeenCalled();
            });
            it("should not call the failure handler", function () {
                expect(error).not.toHaveBeenCalled();
            });
            it("should call the complete handler", function () {
                expect(complete).toHaveBeenCalled();
            });
            sharedAjaxResponseBehaviorForZepto_Success(sharedContext);
        });
        describe("and the status/response code is 0", function () {
            beforeEach(function () {
                client = new fakeGlobal.XMLHttpRequest();
                client.onreadystatechange = onreadystatechange;
                client.open("GET", "example.com/someApi");
                client.setRequestHeader("Content-Type", "text/plain");
                client.send();
                request = mockAjax.requests.mostRecent();
                response = { status: 0, statusText: "ABORT", responseText: '{"foo": "whoops!"}' };
                request.respondWith(response);
                sharedContext.responseCallback = error;
                sharedContext.status = 0;
                sharedContext.statusText = response.statusText;
                sharedContext.contentType = 'application/json';
                sharedContext.responseText = response.responseText;
                sharedContext.responseType = response.responseType;
            });
            it("should call the success handler", function () {
                expect(success).not.toHaveBeenCalled();
            });
            it("should not call the failure handler", function () {
                expect(error).toHaveBeenCalled();
            });
            it("should call the complete handler", function () {
                expect(complete).toHaveBeenCalled();
            });
            sharedAjaxResponseBehaviorForZepto_Failure(sharedContext);
        });
    });
    describe("and the response is error", function () {
        beforeEach(function () {
            client = new fakeGlobal.XMLHttpRequest();
            client.onreadystatechange = onreadystatechange;
            client.open("GET", "example.com/someApi");
            client.setRequestHeader("Content-Type", "text/plain");
            client.send();
            request = mockAjax.requests.mostRecent();
            response = { status: 500, statusText: "SERVER ERROR", contentType: "text/html", responseText: "(._){" };
            request.respondWith(response);
            sharedContext.responseCallback = error;
            sharedContext.status = response.status;
            sharedContext.statusText = response.statusText;
            sharedContext.contentType = response.contentType;
            sharedContext.responseText = response.responseText;
            sharedContext.responseType = response.responseType;
        });
        it("should not call the success handler", function () {
            expect(success).not.toHaveBeenCalled();
        });
        it("should call the failure handler", function () {
            expect(error).toHaveBeenCalled();
        });
        it("should call the complete handler", function () {
            expect(complete).toHaveBeenCalled();
        });
        sharedAjaxResponseBehaviorForZepto_Failure(sharedContext);
    });
    describe('when simulating a response with request.responseTimeout', function () {
        beforeEach(function () {
            jasmine.clock().install();
            client = new fakeGlobal.XMLHttpRequest();
            client.onreadystatechange = onreadystatechange;
            client.open("GET", "example.com/someApi");
            client.setRequestHeader("Content-Type", "text/plain");
            client.send();
            request = mockAjax.requests.mostRecent();
            response = { contentType: "text/html", response: "(._){response", responseText: "(._){", responseType: "text" };
            request.responseTimeout(response);
            sharedContext.responseCallback = error;
            sharedContext.status = response.status;
            sharedContext.statusText = response.statusText;
            sharedContext.contentType = response.contentType;
            sharedContext.responseText = response.responseText;
            sharedContext.responseType = response.responseType;
        });
        afterEach(function () {
            jasmine.clock().uninstall();
        });
        it("should not call the success handler", function () {
            expect(success).not.toHaveBeenCalled();
        });
        it("should call the failure handler", function () {
            expect(error).toHaveBeenCalled();
        });
        it("should call the complete handler", function () {
            expect(complete).toHaveBeenCalled();
        });
    });
});
function sharedAjaxResponseBehaviorForZepto_Success(context) {
    describe("the success response", function () {
        var xhr;
        beforeEach(function () {
            xhr = context.responseCallback.calls.mostRecent().args[2];
        });
        it("should have the expected status code", function () {
            expect(xhr.status).toEqual(context.status);
        });
        it("should have the expected content type", function () {
            expect(xhr.getResponseHeader('Content-Type')).toEqual(context.contentType);
        });
        it("should have the expected xhr2 response", function () {
            var expected = context.response || context.responseType === 'json' ? JSON.parse(context.responseText) : context.responseText;
            expect(xhr.response).toEqual(expected);
        });
        it("should have the expected response text", function () {
            expect(xhr.responseText).toEqual(context.responseText);
        });
        it("should have the expected status text", function () {
            expect(xhr.statusText).toEqual(context.statusText);
        });
    });
}
function sharedAjaxResponseBehaviorForZepto_Failure(context) {
    describe("the failure response", function () {
        var xhr;
        beforeEach(function () {
            xhr = context.responseCallback.calls.mostRecent().args[0];
        });
        it("should have the expected status code", function () {
            expect(xhr.status).toEqual(context.status);
        });
        it("should have the expected content type", function () {
            expect(xhr.getResponseHeader('Content-Type')).toEqual(context.contentType);
        });
        it("should have the expected xhr2 response", function () {
            var expected = context.response || xhr.responseType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
            expect(xhr.response).toEqual(expected);
        });
        it("should have the expected response text", function () {
            expect(xhr.responseText).toEqual(context.responseText);
        });
        it("should have the expected status text", function () {
            expect(xhr.statusText).toEqual(context.statusText);
        });
    });
}
describe('ParamParser', function () {
    beforeEach(function () {
        var Constructor = getJasmineRequireObj().AjaxParamParser();
        expect(Constructor).toEqual(jasmine.any(Function));
        this.parser = new Constructor();
    });
    it('has a default parser', function () {
        var parser = this.parser.findParser({ contentType: function () { } }), parsed = parser.parse('3+stooges=shemp&3+stooges=larry%20%26%20moe%20%26%20curly&some%3Dthing=else+entirely');
        expect(parsed).toEqual({
            '3 stooges': ['shemp', 'larry & moe & curly'],
            'some=thing': ['else entirely']
        });
    });
    it('should detect and parse json', function () {
        var data = {
            foo: 'bar',
            baz: ['q', 'u', 'u', 'x'],
            nested: {
                object: {
                    containing: 'stuff'
                }
            }
        }, parser = this.parser.findParser({ contentType: function () { return 'application/json'; } }), parsed = parser.parse(JSON.stringify(data));
        expect(parsed).toEqual(data);
    });
    it('should parse json with further qualifiers on content-type', function () {
        var data = {
            foo: 'bar',
            baz: ['q', 'u', 'u', 'x'],
            nested: {
                object: {
                    containing: 'stuff'
                }
            }
        }, parser = this.parser.findParser({ contentType: function () { return 'application/json; charset=utf-8'; } }), parsed = parser.parse(JSON.stringify(data));
        expect(parsed).toEqual(data);
    });
    it('should have custom parsers take precedence', function () {
        var custom = {
            test: jasmine.createSpy('test').and.returnValue(true),
            parse: jasmine.createSpy('parse').and.returnValue('parsedFormat')
        };
        this.parser.add(custom);
        var parser = this.parser.findParser({ contentType: function () { } }), parsed = parser.parse('custom_format');
        expect(parsed).toEqual('parsedFormat');
        expect(custom.test).toHaveBeenCalled();
        expect(custom.parse).toHaveBeenCalledWith('custom_format');
    });
    it('should skip custom parsers that do not match', function () {
        var custom = {
            test: jasmine.createSpy('test').and.returnValue(false),
            parse: jasmine.createSpy('parse').and.returnValue('parsedFormat')
        };
        this.parser.add(custom);
        var parser = this.parser.findParser({ contentType: function () { } }), parsed = parser.parse('custom_format');
        expect(parsed).toEqual({ custom_format: ['undefined'] });
        expect(custom.test).toHaveBeenCalled();
        expect(custom.parse).not.toHaveBeenCalled();
    });
    it('removes custom parsers when reset', function () {
        var custom = {
            test: jasmine.createSpy('test').and.returnValue(true),
            parse: jasmine.createSpy('parse').and.returnValue('parsedFormat')
        };
        this.parser.add(custom);
        var parser = this.parser.findParser({ contentType: function () { } }), parsed = parser.parse('custom_format');
        expect(parsed).toEqual('parsedFormat');
        custom.test['calls'].reset();
        custom.parse['calls'].reset();
        this.parser.reset();
        parser = this.parser.findParser({ contentType: function () { } });
        parsed = parser.parse('custom_format');
        expect(parsed).toEqual({ custom_format: ['undefined'] });
        expect(custom.test).not.toHaveBeenCalled();
        expect(custom.parse).not.toHaveBeenCalled();
    });
});
describe('RequestStub', function () {
    beforeEach(function () {
        this.RequestStub = getJasmineRequireObj().AjaxRequestStub();
        jasmine.addMatchers({
            toMatchRequest: function (a, b) {
                return {
                    compare: function (actual) {
                        return {
                            message: '',
                            pass: actual.matches.apply(actual, Array.prototype.slice.call(arguments, 1))
                        };
                    }
                };
            }
        });
    });
    it('matches just by exact url', function () {
        var stub = new this.RequestStub('www.example.com/foo');
        expect(stub)['toMatchRequest']('www.example.com/foo');
    });
    it('does not match if the url differs', function () {
        var stub = new this.RequestStub('www.example.com/foo');
        expect(stub).not['toMatchRequest']('www.example.com/bar');
    });
    it('matches unordered query params', function () {
        var stub = new this.RequestStub('www.example.com?foo=bar&baz=quux');
        expect(stub)['toMatchRequest']('www.example.com?baz=quux&foo=bar');
    });
    it('requires all specified query params to be there', function () {
        var stub = new this.RequestStub('www.example.com?foo=bar&baz=quux');
        expect(stub).not['toMatchRequest']('www.example.com?foo=bar');
    });
    it('can match the url with a RegExp', function () {
        var stub = new this.RequestStub(/ba[rz]/);
        expect(stub)['toMatchRequest']('bar');
        expect(stub)['toMatchRequest']('baz');
        expect(stub).not['toMatchRequest']('foo');
    });
    it('requires the method to match if supplied', function () {
        var stub = new this.RequestStub('www.example.com/foo', null, 'POST');
        expect(stub).not['toMatchRequest']('www.example.com/foo');
        expect(stub).not['toMatchRequest']('www.example.com/foo', null, 'GET');
        expect(stub)['toMatchRequest']('www.example.com/foo', null, 'POST');
    });
    it('requires the data submitted to match if supplied', function () {
        var stub = new this.RequestStub('/foo', 'foo=bar&baz=quux');
        expect(stub)['toMatchRequest']('/foo', 'baz=quux&foo=bar');
        expect(stub).not['toMatchRequest']('/foo', 'foo=bar');
    });
});
describe('RequestTracker', function () {
    beforeEach(function () {
        var Constructor = getJasmineRequireObj().AjaxRequestTracker();
        this.tracker = new Constructor();
    });
    it('tracks the number of times ajax requests are made', function () {
        expect(this.tracker.count()).toBe(0);
        this.tracker.track();
        expect(this.tracker.count()).toBe(1);
    });
    it('simplifies access to the last (most recent) request', function () {
        this.tracker.track();
        this.tracker.track('request');
        expect(this.tracker.mostRecent()).toEqual('request');
    });
    it('returns a useful falsy value when there is no last (most recent) request', function () {
        expect(this.tracker.mostRecent()).toBeFalsy();
    });
    it('simplifies access to the first (oldest) request', function () {
        this.tracker.track('request');
        this.tracker.track();
        expect(this.tracker.first()).toEqual('request');
    });
    it('returns a useful falsy value when there is no first (oldest) request', function () {
        expect(this.tracker.first()).toBeFalsy();
    });
    it('allows the requests list to be reset', function () {
        this.tracker.track();
        this.tracker.track();
        expect(this.tracker.count()).toBe(2);
        this.tracker.reset();
        expect(this.tracker.count()).toBe(0);
    });
    it('allows retrieval of an arbitrary request by index', function () {
        this.tracker.track('1');
        this.tracker.track('2');
        this.tracker.track('3');
        expect(this.tracker.at(1)).toEqual('2');
    });
    it('allows retrieval of all requests that are for a given url', function () {
        this.tracker.track({ url: 'foo' });
        this.tracker.track({ url: 'bar' });
        expect(this.tracker.filter('bar')).toEqual([{ url: 'bar' }]);
    });
    it('allows retrieval of all requests that match a given RegExp', function () {
        this.tracker.track({ url: 'foo' });
        this.tracker.track({ url: 'bar' });
        this.tracker.track({ url: 'baz' });
        expect(this.tracker.filter(/ba[rz]/)).toEqual([{ url: 'bar' }, { url: 'baz' }]);
    });
    it('allows retrieval of all requests that match based on a function', function () {
        this.tracker.track({ url: 'foo' });
        this.tracker.track({ url: 'bar' });
        this.tracker.track({ url: 'baz' });
        var func = function (request) {
            return request.url === 'bar';
        };
        expect(this.tracker.filter(func)).toEqual([{ url: 'bar' }]);
    });
    it('filters to nothing if no requests have been tracked', function () {
        expect(this.tracker.filter('foo')).toEqual([]);
    });
});
describe('EventBus', function () {
    beforeEach(function () {
        this.bus = getJasmineRequireObj().AjaxEventBus()();
    });
    it('calls an event listener', function () {
        var callback = jasmine.createSpy('callback');
        this.bus.addEventListener('foo', callback);
        this.bus.trigger('foo');
        expect(callback).toHaveBeenCalled();
    });
    it('calls an event listener with additional arguments', function () {
        var callback = jasmine.createSpy('callback');
        this.bus.addEventListener('foo', callback);
        this.bus.trigger('foo', 'bar');
        expect(callback).toHaveBeenCalledWith('bar');
    });
    it('only triggers callbacks for the specified event', function () {
        var fooCallback = jasmine.createSpy('foo'), barCallback = jasmine.createSpy('bar');
        this.bus.addEventListener('foo', fooCallback);
        this.bus.addEventListener('bar', barCallback);
        this.bus.trigger('foo');
        expect(fooCallback).toHaveBeenCalled();
        expect(barCallback).not.toHaveBeenCalled();
    });
    it('calls all the callbacks for the specified event', function () {
        var callback1 = jasmine.createSpy('callback');
        var callback2 = jasmine.createSpy('otherCallback');
        this.bus.addEventListener('foo', callback1);
        this.bus.addEventListener('foo', callback2);
        this.bus.trigger('foo');
        expect(callback1).toHaveBeenCalled();
        expect(callback2).toHaveBeenCalled();
    });
    it('works if there are no callbacks for the event', function () {
        var bus = this.bus;
        expect(function () {
            bus.trigger('notActuallyThere');
        }).not.toThrow();
    });
    it('does not call listeners that have been removed', function () {
        var callback = jasmine.createSpy('callback');
        this.bus.addEventListener('foo', callback);
        this.bus.removeEventListener('foo', callback);
        this.bus.trigger('foo');
        expect(callback).not.toHaveBeenCalled();
    });
    it('only removes the specified callback', function () {
        var callback1 = jasmine.createSpy('callback');
        var callback2 = jasmine.createSpy('otherCallback');
        this.bus.addEventListener('foo', callback1);
        this.bus.addEventListener('foo', callback2);
        this.bus.removeEventListener('foo', callback2);
        this.bus.trigger('foo');
        expect(callback1).toHaveBeenCalled();
        expect(callback2).not.toHaveBeenCalled();
    });
});
describe("Webmock style mocking", function () {
    var successSpy, errorSpy, response, fakeGlobal, mockAjax;
    var sendRequest = function (fakeGlobal, url, method) {
        url = url || "http://example.com/someApi";
        method = method || 'GET';
        var xhr = new fakeGlobal.XMLHttpRequest();
        xhr.onreadystatechange = function (args) {
            if (this.readyState === (this.DONE || 4)) {
                response = this;
                successSpy();
            }
        };
        xhr.open(method, url);
        xhr.send();
    };
    beforeEach(function () {
        successSpy = jasmine.createSpy('success');
        fakeGlobal = { XMLHttpRequest: jasmine.createSpy('realXMLHttpRequest') };
        mockAjax = new MockAjax(fakeGlobal);
        mockAjax.install();
        mockAjax.stubRequest("http://example.com/someApi").andReturn({ responseText: "hi!" });
    });
    it("allows a url to be setup as a stub", function () {
        sendRequest(fakeGlobal);
        expect(successSpy).toHaveBeenCalled();
    });
    it("should allow you to clear all the ajax stubs", function () {
        mockAjax.stubs.reset();
        sendRequest(fakeGlobal);
        expect(successSpy).not.toHaveBeenCalled();
    });
    it("should set the contentType", function () {
        sendRequest(fakeGlobal);
        expect(response.getResponseHeader('Content-Type')).toEqual('application/json');
    });
    it("should set the responseText", function () {
        sendRequest(fakeGlobal);
        expect(response.responseText).toEqual('hi!');
    });
    it("should default the status to 200", function () {
        sendRequest(fakeGlobal);
        expect(response.status).toEqual(200);
    });
    it("should set the responseHeaders", function () {
        mockAjax.stubRequest("http://example.com/someApi").andReturn({
            responseText: "hi!",
            responseHeaders: [{ name: "X-Custom", value: "header value" }]
        });
        sendRequest(fakeGlobal);
        expect(response.getResponseHeader('X-Custom')).toEqual('header value');
    });
    describe("with another stub for the same url", function () {
        beforeEach(function () {
            mockAjax.stubRequest("http://example.com/someApi").andReturn({ responseText: "no", status: 403 });
            sendRequest(fakeGlobal);
        });
        it("should set the status", function () {
            expect(response.status).toEqual(403);
        });
        it("should allow the latest stub to win", function () {
            expect(response.responseText).toEqual('no');
        });
    });
});
describe("withMock", function () {
    var sendRequest = function (fakeGlobal) {
        var xhr = new fakeGlobal.XMLHttpRequest();
        xhr.open("GET", "http://example.com/someApi");
        xhr.send();
    };
    it("installs the mock for passed in function, and uninstalls when complete", function () {
        var xmlHttpRequest = jasmine.createSpyObj('XMLHttpRequest', ['open', 'send']), xmlHttpRequestCtor = spyOn(window, 'XMLHttpRequest').and.returnValue(xmlHttpRequest), fakeGlobal = { XMLHttpRequest: xmlHttpRequestCtor }, mockAjax = new MockAjax(fakeGlobal);
        mockAjax.withMock(function () {
            sendRequest(fakeGlobal);
            expect(xmlHttpRequest.open).not.toHaveBeenCalled();
        });
        sendRequest(fakeGlobal);
        expect(xmlHttpRequest.open).toHaveBeenCalled();
    });
    it("properly uninstalls when the passed in function throws", function () {
        var xmlHttpRequest = jasmine.createSpyObj('XMLHttpRequest', ['open', 'send']), xmlHttpRequestCtor = spyOn(window, 'XMLHttpRequest').and.returnValue(xmlHttpRequest), fakeGlobal = { XMLHttpRequest: xmlHttpRequestCtor }, mockAjax = new MockAjax(fakeGlobal);
        expect(function () {
            mockAjax.withMock(function () {
                throw "error";
            });
        }).toThrow("error");
        sendRequest(fakeGlobal);
        expect(xmlHttpRequest.open).toHaveBeenCalled();
    });
});
describe("mockAjax", function () {
    it("throws an error if installed multiple times", function () {
        var fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest'), fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest }, mockAjax = new MockAjax(fakeGlobal);
        function doubleInstall() {
            mockAjax.install();
            mockAjax.install();
        }
        expect(doubleInstall).toThrow();
    });
    it("does not throw an error if uninstalled between installs", function () {
        var fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest'), fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest }, mockAjax = new MockAjax(fakeGlobal);
        function sequentialInstalls() {
            mockAjax.install();
            mockAjax.uninstall();
            mockAjax.install();
        }
        expect(sequentialInstalls).not.toThrow();
    });
    it("does not replace XMLHttpRequest until it is installed", function () {
        var fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest'), fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest }, mockAjax = new MockAjax(fakeGlobal);
        fakeGlobal.XMLHttpRequest('foo');
        expect(fakeXmlHttpRequest).toHaveBeenCalledWith('foo');
        fakeXmlHttpRequest.calls.reset();
        mockAjax.install();
        fakeGlobal.XMLHttpRequest('foo');
        expect(fakeXmlHttpRequest).not.toHaveBeenCalled();
    });
    it("replaces the global XMLHttpRequest on uninstall", function () {
        var fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest'), fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest }, mockAjax = new MockAjax(fakeGlobal);
        mockAjax.install();
        mockAjax.uninstall();
        fakeGlobal.XMLHttpRequest('foo');
        expect(fakeXmlHttpRequest).toHaveBeenCalledWith('foo');
    });
    it("clears requests and stubs upon uninstall", function () {
        var fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest'), fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest }, mockAjax = new MockAjax(fakeGlobal);
        mockAjax.install();
        mockAjax.requests.track({ url: '/testurl' });
        mockAjax.stubRequest('/bobcat');
        expect(mockAjax.requests.count()).toEqual(1);
        expect(mockAjax.stubs.findStub('/bobcat')).toBeDefined();
        mockAjax.uninstall();
        expect(mockAjax.requests.count()).toEqual(0);
        expect(mockAjax.stubs.findStub('/bobcat')).not.toBeDefined();
    });
    it("allows the httpRequest to be retrieved", function () {
        var fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest'), fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest }, mockAjax = new MockAjax(fakeGlobal);
        mockAjax.install();
        var request = new fakeGlobal.XMLHttpRequest();
        expect(mockAjax.requests.count()).toBe(1);
        expect(mockAjax.requests.mostRecent()).toBe(request);
    });
    it("allows the httpRequests to be cleared", function () {
        var fakeXmlHttpRequest = jasmine.createSpy('fakeXmlHttpRequest'), fakeGlobal = { XMLHttpRequest: fakeXmlHttpRequest }, mockAjax = new MockAjax(fakeGlobal);
        mockAjax.install();
        var request = new fakeGlobal.XMLHttpRequest();
        expect(mockAjax.requests.mostRecent()).toBe(request);
        mockAjax.requests.reset();
        expect(mockAjax.requests.count()).toBe(0);
    });
});
all("A data driven test is a suite with multiple specs", ['a', 'b', 'c'], function (value) {
    expect(value).not.toBe('d');
});
all("A data driven test can have many arguments", [
    [1, 2, 3],
    [2, 4, 6]
], function (a, b, c) {
    expect(c - (a + b)).toBe(0);
});
all("A data driven test can be asynchronous", [
    [3, 1],
    [5, 2]
], function (a, b, done) {
    setTimeout(function () {
        expect(a - b > 0).toBe(true);
        done();
    }, 50);
});
xall("A data driven test can be pending", [1, 2, 3], function (value) {
    expect(value < 4).toBe(true);
});
describe("A suite", function () {
    var a;
    beforeEach(function () {
        a = 5;
    });
    all("can contain data driven tests", [1, 2, 3], function (b) {
        expect(a - b > 0).toBe(true);
    });
});
var _undefined = undefined;
describe('toBeAfter', function () {
    describe('when invoked', function () {
        describe('when value is a Date', function () {
            describe('when date occurs after another', function () {
                it('should confirm', function () {
                    expect(new Date('2013-01-01T01:00:00.000Z')).toBeAfter(new Date('2013-01-01T00:00:00.000Z'));
                });
            });
            describe('when date does NOT occur after another', function () {
                it('should deny', function () {
                    expect(new Date('2013-01-01T00:00:00.000Z')).not.toBeAfter(new Date('2013-01-01T01:00:00.000Z'));
                });
            });
        });
    });
});
describe('toBeArray', function () {
    describe('when invoked', function () {
        describe('when subject is a true Array', function () {
            it('should confirm', function () {
                expect([]).toBeArray();
                expect(new Array()).toBeArray();
            });
        });
        describeWhenNotArray('toBeArray');
    });
});
describe('toBeArrayOfBooleans', function () {
    describeToBeArrayOfX('toBeArrayOfBooleans', {
        type: 'Boolean',
        whenValid: function () {
            expect([true]).toBeArrayOfBooleans();
            expect([new Boolean(true)]).toBeArrayOfBooleans();
            expect([new Boolean(false)]).toBeArrayOfBooleans();
            expect([false, true]).toBeArrayOfBooleans();
        },
        whenInvalid: function () {
            expect([null]).not.toBeArrayOfBooleans();
        },
        whenMixed: function () {
            expect([null, false]).not.toBeArrayOfBooleans();
            expect([null, true]).not.toBeArrayOfBooleans();
        }
    });
});
describe('toBeArrayOfNumbers', function () {
    describeToBeArrayOfX('toBeArrayOfNumbers', {
        type: 'Number',
        whenValid: function () {
            expect([1]).toBeArrayOfNumbers();
            expect([new Number(1)]).toBeArrayOfNumbers();
            expect([new Number(0)]).toBeArrayOfNumbers();
            expect([0, 1]).toBeArrayOfNumbers();
        },
        whenInvalid: function () {
            expect([null]).not.toBeArrayOfNumbers();
        },
        whenMixed: function () {
            expect([null, 0]).not.toBeArrayOfNumbers();
        }
    });
});
describe('toBeArrayOfObjects', function () {
    describeToBeArrayOfX('toBeArrayOfObjects', {
        type: 'Object',
        whenValid: function () {
            expect([{}, {}]).toBeArrayOfObjects();
        },
        whenInvalid: function () {
            expect([null]).not.toBeArrayOfObjects();
            expect(['Object']).not.toBeArrayOfObjects();
            expect(['[object Object]']).not.toBeArrayOfObjects();
        },
        whenMixed: function () {
            expect([null, {}]).not.toBeArrayOfObjects();
        }
    });
});
describe('toBeArrayOfSize', function () {
    describe('when invoked', function () {
        describe('when subject is a true Array', function () {
            describe('when subject has the expected number of members', function () {
                it('should confirm', function () {
                    expect([]).toBeArrayOfSize(0);
                    expect([null]).toBeArrayOfSize(1);
                    expect([false, false]).toBeArrayOfSize(2);
                    expect([_undefined, _undefined]).toBeArrayOfSize(2);
                });
            });
            describe('when subject has an unexpected number of members', function () {
                it('should deny', function () {
                    expect([]).not.toBeArrayOfSize(1);
                    expect([null]).not.toBeArrayOfSize(0);
                    expect([true, true]).not.toBeArrayOfSize(1);
                });
            });
        });
        describeWhenNotArray('toBeArrayOfSize');
    });
});
describe('toBeArrayOfStrings', function () {
    describeToBeArrayOfX('toBeArrayOfStrings', {
        type: 'String',
        whenValid: function () {
            expect(['truthy']).toBeArrayOfStrings();
            expect([new String('truthy')]).toBeArrayOfStrings();
            expect([new String('')]).toBeArrayOfStrings();
            expect(['', 'truthy']).toBeArrayOfStrings();
        },
        whenInvalid: function () {
            expect([null]).not.toBeArrayOfStrings();
        },
        whenMixed: function () {
            expect([null, '']).not.toBeArrayOfStrings();
        }
    });
});
describe('toBeBefore', function () {
    describe('when invoked', function () {
        describe('when value is a Date', function () {
            describe('when date occurs before another', function () {
                it('should confirm', function () {
                    expect(new Date('2013-01-01T00:00:00.000Z')).toBeBefore(new Date('2013-01-01T01:00:00.000Z'));
                });
            });
            describe('when date does NOT occur before another', function () {
                it('should deny', function () {
                    expect(new Date('2013-01-01T01:00:00.000Z')).not.toBeBefore(new Date('2013-01-01T00:00:00.000Z'));
                });
            });
        });
    });
});
describe('toBeBoolean', function () {
    describe('when invoked', function () {
        describe('when subject not only truthy or falsy, but a boolean', function () {
            it('should confirm', function () {
                expect(true).toBeBoolean();
                expect(false).toBeBoolean();
                expect(new Boolean(true)).toBeBoolean();
                expect(new Boolean(false)).toBeBoolean();
            });
        });
        describe('when subject is truthy or falsy', function () {
            it('should deny', function () {
                expect(1).not.toBeBoolean();
                expect(0).not.toBeBoolean();
            });
        });
    });
});
describe('toBeCalculable', function () {
    describe('when invoked', function () {
        describe('when subject CAN be coerced to be used in mathematical operations', function () {
            it('should confirm', function () {
                expect('1').toBeCalculable();
                expect('').toBeCalculable();
                expect(null).toBeCalculable();
            });
        });
        describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', function () {
            it('should deny', function () {
                expect({}).not.toBeCalculable();
                expect(NaN).not.toBeCalculable();
            });
        });
    });
});
describe('toBeDate', function () {
    describe('when invoked', function () {
        describe('when value is an instance of Date', function () {
            it('should confirm', function () {
                expect(new Date()).toBeDate();
            });
        });
        describe('when value is NOT an instance of Date', function () {
            it('should deny', function () {
                expect(null).not.toBeDate();
            });
        });
    });
});
describe('toBeEmptyArray', function () {
    describe('when invoked', function () {
        describe('when subject is a true Array', function () {
            describe('when subject has members', function () {
                it('should confirm', function () {
                    expect([]).toBeEmptyArray();
                });
            });
            describe('when subject has no members', function () {
                it('should deny', function () {
                    expect([null]).not.toBeEmptyArray();
                    expect(['']).not.toBeEmptyArray();
                    expect([1]).not.toBeEmptyArray();
                    expect([true]).not.toBeEmptyArray();
                    expect([false]).not.toBeEmptyArray();
                });
            });
        });
        describeWhenNotArray('toBeEmptyArray');
    });
});
describe('toBeEmptyObject', function () {
    beforeEach(function () {
        this.Foo = function () { };
    });
    describe('when invoked', function () {
        describe('when subject IS an Object with no instance members', function () {
            beforeEach(function () {
                this.Foo.prototype = {
                    b: 2
                };
            });
            it('should confirm', function () {
                expect(new this.Foo()).toBeEmptyObject();
                expect({}).toBeEmptyObject();
            });
        });
        describe('when subject is NOT an Object with no instance members', function () {
            it('should deny', function () {
                expect({
                    a: 1
                }).not.toBeEmptyObject();
                expect(null).not.toBeNonEmptyObject();
            });
        });
    });
});
describe('toBeEmptyString', function () {
    describe('when invoked', function () {
        describe('when subject IS a string with no characters', function () {
            it('should confirm', function () {
                expect('').toBeEmptyString();
            });
        });
        describe('when subject is NOT a string with no characters', function () {
            it('should deny', function () {
                expect(' ').not.toBeEmptyString();
            });
        });
    });
});
describe('toBeEvenNumber', function () {
    describe('when invoked', function () {
        describe('when subject IS an even number', function () {
            it('should confirm', function () {
                expect(2).toBeEvenNumber();
            });
        });
        describe('when subject is NOT an even number', function () {
            it('should deny', function () {
                expect(1).not.toBeEvenNumber();
                expect(NaN).not.toBeEvenNumber();
            });
        });
    });
});
describe('toBeFalse', function () {
    describe('when invoked', function () {
        describe('when subject is not only falsy, but a boolean false', function () {
            it('should confirm', function () {
                expect(false).toBeFalse();
                expect(new Boolean(false)).toBeFalse();
            });
        });
        describe('when subject is falsy', function () {
            it('should deny', function () {
                expect(1).not.toBeFalse();
            });
        });
    });
});
describe('toBeFunction', function () {
    describe('when invoked', function () {
        describe('when subject IS a function', function () {
            it('should confirm', function () {
                expect(function () { }).toBeFunction();
            });
        });
        describe('when subject is NOT a function', function () {
            it('should deny', function () {
                expect(/regexp/).not.toBeFunction();
            });
        });
    });
});
describe('toBeHtmlString', function () {
    describe('when invoked', function () {
        describe('when subject IS a string of HTML markup', function () {
            beforeEach(function () {
                this.ngMultiLine = '';
                this.ngMultiLine += '<a data-ng-href="//www.google.com" data-ng-click="launchApp($event)" target="_blank" class="ng-binding" href="//www.google.com">';
                this.ngMultiLine += '\n';
                this.ngMultiLine += '  Watch with Google TV';
                this.ngMultiLine += '\n';
                this.ngMultiLine += '</a>';
                this.ngMultiLine += '\n';
            });
            it('should confirm', function () {
                expect('<element>text</element>').toBeHtmlString();
                expect('<a data-ng-href="//foo.com" data-ng-click="bar($event)">baz</a>').toBeHtmlString();
                expect('<div ng-if="foo > bar || bar < foo && baz == bar"></div>').toBeHtmlString();
                expect('<li ng-if="foo > bar || bar < foo && baz == bar">').toBeHtmlString();
                expect(this.ngMultiLine).toBeHtmlString();
            });
        });
        describe('when subject is NOT a string of HTML markup', function () {
            it('should deny', function () {
                expect('div').not.toBeHtmlString();
                expect(null).not.toBeHtmlString();
            });
        });
    });
});
describe('toBeIso8601', function () {
    describe('when invoked', function () {
        describe('when value is a Date String conforming to the ISO 8601 standard', function () {
            describe('when specified date is valid', function () {
                it('should confirm', function () {
                    expect('2013-07-08T07:29:15.863Z').toBeIso8601();
                    expect('2013-07-08T07:29:15.863').toBeIso8601();
                    expect('2013-07-08T07:29:15').toBeIso8601();
                    expect('2013-07-08T07:29').toBeIso8601();
                    expect('2013-07-08').toBeIso8601();
                });
            });
            describe('when specified date is NOT valid', function () {
                it('should deny', function () {
                    expect('2013-99-12T00:00:00.000Z').not.toBeIso8601();
                    expect('2013-12-99T00:00:00.000Z').not.toBeIso8601();
                    expect('2013-01-01T99:00:00.000Z').not.toBeIso8601();
                    expect('2013-01-01T99:99:00.000Z').not.toBeIso8601();
                    expect('2013-01-01T00:00:99.000Z').not.toBeIso8601();
                });
            });
        });
        describe('when value is a String NOT conforming to the ISO 8601 standard', function () {
            it('should deny', function () {
                expect('2013-07-08T07:29:15.').not.toBeIso8601();
                expect('2013-07-08T07:29:').not.toBeIso8601();
                expect('2013-07-08T07:2').not.toBeIso8601();
                expect('2013-07-08T07:').not.toBeIso8601();
                expect('2013-07-08T07').not.toBeIso8601();
                expect('2013-07-08T').not.toBeIso8601();
                expect('2013-07-0').not.toBeIso8601();
                expect('2013-07-').not.toBeIso8601();
                expect('2013-07').not.toBeIso8601();
                expect('2013-0').not.toBeIso8601();
                expect('2013-').not.toBeIso8601();
                expect('2013').not.toBeIso8601();
                expect('201').not.toBeIso8601();
                expect('20').not.toBeIso8601();
                expect('2').not.toBeIso8601();
                expect('').not.toBeIso8601();
            });
        });
    });
});
var _undefined;
describe('toBeJsonString', function () {
    describe('when invoked', function () {
        describe('when subject IS a string of parseable JSON', function () {
            it('should confirm', function () {
                expect('{}').toBeJsonString();
                expect('[]').toBeJsonString();
                expect('[1]').toBeJsonString();
            });
        });
        describe('when subject is NOT a string of parseable JSON', function () {
            it('should deny', function () {
                expect('[1,]').not.toBeJsonString();
                expect('<>').not.toBeJsonString();
                expect(null).not.toBeJsonString();
                expect('').not.toBeJsonString();
                expect(_undefined).not.toBeJsonString();
            });
        });
    });
});
describe('toBeLongerThan', function () {
    describe('when invoked', function () {
        describe('when the subject and comparison ARE both strings', function () {
            describe('when the subject IS longer than the comparision string', function () {
                it('should confirm', function () {
                    expect('abc').toBeLongerThan('ab');
                    expect('a').toBeLongerThan('');
                });
            });
            describe('when the subject is NOT longer than the comparision string', function () {
                it('should deny', function () {
                    expect('ab').not.toBeLongerThan('abc');
                    expect('').not.toBeLongerThan('a');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function () {
            it('should deny (we are asserting the relative lengths of two strings)', function () {
                expect('truthy').not.toBeLongerThan(_undefined);
                expect(_undefined).not.toBeLongerThan('truthy');
                expect('').not.toBeLongerThan(_undefined);
                expect(_undefined).not.toBeLongerThan('');
            });
        });
    });
});
describe('toBeNonEmptyArray', function () {
    describe('when invoked', function () {
        describe('when subject is a true Array', function () {
            describe('when subject has members', function () {
                it('should confirm', function () {
                    expect([null]).toBeNonEmptyArray();
                    expect([_undefined]).toBeNonEmptyArray();
                    expect(['']).toBeNonEmptyArray();
                });
            });
            describe('when subject has no members', function () {
                it('should deny', function () {
                    expect([]).not.toBeNonEmptyArray();
                });
            });
        });
        describeWhenNotArray('toBeNonEmptyArray');
    });
});
describe('toBeNonEmptyObject', function () {
    beforeEach(function () {
        this.Foo = function () { };
    });
    describe('when invoked', function () {
        describe('when subject IS an Object with at least one instance member', function () {
            it('should confirm', function () {
                expect({
                    a: 1
                }).toBeNonEmptyObject();
            });
        });
        describe('when subject is NOT an Object with at least one instance member', function () {
            beforeEach(function () {
                this.Foo.prototype = {
                    b: 2
                };
            });
            it('should deny', function () {
                expect(new this.Foo()).not.toBeNonEmptyObject();
                expect({}).not.toBeNonEmptyObject();
                expect(null).not.toBeNonEmptyObject();
            });
        });
    });
});
describe('toBeNonEmptyString', function () {
    describe('when invoked', function () {
        describe('when subject IS a string with at least one character', function () {
            it('should confirm', function () {
                expect(' ').toBeNonEmptyString();
            });
        });
        describe('when subject is NOT a string with at least one character', function () {
            it('should deny', function () {
                expect('').not.toBeNonEmptyString();
                expect(null).not.toBeNonEmptyString();
            });
        });
    });
});
describe('toBeNumber', function () {
    describe('when invoked', function () {
        describe('when subject IS a number', function () {
            it('should confirm', function () {
                expect(1).toBeNumber();
                expect(1.11).toBeNumber();
                expect(1e3).toBeNumber();
                expect(0.11).toBeNumber();
                expect(-11).toBeNumber();
            });
        });
        describe('when subject is NOT a number', function () {
            it('should deny', function () {
                expect('1').not.toBeNumber();
                expect(NaN).not.toBeNumber();
            });
        });
    });
});
describe('toBeObject', function () {
    beforeEach(function () {
        this.Foo = function () { };
    });
    describe('when invoked', function () {
        describe('when subject IS an Object', function () {
            it('should confirm', function () {
                expect(new Object()).toBeObject();
                expect(new this.Foo()).toBeObject();
                expect({}).toBeObject();
            });
        });
        describe('when subject is NOT an Object', function () {
            it('should deny', function () {
                expect(null).not.toBeObject();
                expect(123).not.toBeObject();
                expect('[object Object]').not.toBeObject();
            });
        });
    });
});
describe('toBeOddNumber', function () {
    describe('when invoked', function () {
        describe('when subject IS an odd number', function () {
            it('should confirm', function () {
                expect(1).toBeOddNumber();
            });
        });
        describe('when subject is NOT an odd number', function () {
            it('should deny', function () {
                expect(2).not.toBeOddNumber();
                expect(NaN).not.toBeOddNumber();
            });
        });
    });
});
var _undefined;
describe('toBeSameLengthAs', function () {
    describe('when invoked', function () {
        describe('when the subject and comparison ARE both strings', function () {
            describe('when the subject IS the same length as the comparision string', function () {
                it('should confirm', function () {
                    expect('ab').toBeSameLengthAs('ab');
                });
            });
            describe('when the subject is NOT the same length as the comparision string', function () {
                it('should deny', function () {
                    expect('abc').not.toBeSameLengthAs('ab');
                    expect('a').not.toBeSameLengthAs('');
                    expect('').not.toBeSameLengthAs('a');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function () {
            it('should deny (we are asserting the relative lengths of two strings)', function () {
                expect('truthy').not.toBeSameLengthAs(_undefined);
                expect(_undefined).not.toBeSameLengthAs('truthy');
                expect('').not.toBeSameLengthAs(_undefined);
                expect(_undefined).not.toBeSameLengthAs('');
            });
        });
    });
});
var _undefined;
describe('toBeShorterThan', function () {
    describe('when invoked', function () {
        describe('when the subject and comparison ARE both strings', function () {
            describe('when the subject IS shorter than the comparision string', function () {
                it('should confirm', function () {
                    expect('ab').toBeShorterThan('abc');
                    expect('').toBeShorterThan('a');
                });
            });
            describe('when the subject is NOT shorter than the comparision string', function () {
                it('should deny', function () {
                    expect('abc').not.toBeShorterThan('ab');
                    expect('a').not.toBeShorterThan('');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function () {
            it('should deny (we are asserting the relative lengths of two strings)', function () {
                expect('truthy').not.toBeShorterThan(_undefined);
                expect(_undefined).not.toBeShorterThan('truthy');
                expect('').not.toBeShorterThan(_undefined);
                expect(_undefined).not.toBeShorterThan('');
            });
        });
    });
});
describe('toBeString', function () {
    describe('when invoked', function () {
        describe('when subject IS a string of any length', function () {
            it('should confirm', function () {
                expect('').toBeString();
                expect(' ').toBeString();
            });
        });
        describe('when subject is NOT a string of any length', function () {
            it('should deny', function () {
                expect(null).not.toBeString();
            });
        });
    });
});
describe('toBeTrue', function () {
    describe('when invoked', function () {
        describe('when subject is not only truthy, but a boolean true', function () {
            it('should confirm', function () {
                expect(true).toBeTrue();
                expect(new Boolean(true)).toBeTrue();
            });
        });
        describe('when subject is truthy', function () {
            it('should deny', function () {
                expect(1).not.toBeTrue();
            });
        });
    });
});
describe('toBeWhitespace', function () {
    describe('when invoked', function () {
        describe('when subject IS a string containing only tabs, spaces, returns etc', function () {
            it('should confirm', function () {
                expect(' ').toBeWhitespace();
                expect('').toBeWhitespace();
            });
        });
        describe('when subject is NOT a string containing only tabs, spaces, returns etc', function () {
            it('should deny', function () {
                expect('has-no-whitespace').not.toBeWhitespace();
                expect('has whitespace').not.toBeWhitespace();
                expect(null).not.toBeWhitespace();
            });
        });
    });
});
describe('toBeWholeNumber', function () {
    describe('when invoked', function () {
        describe('when subject IS a number with no positive decimal places', function () {
            it('should confirm', function () {
                expect(1).toBeWholeNumber();
                expect(0).toBeWholeNumber();
                expect(0.0).toBeWholeNumber();
            });
        });
        describe('when subject is NOT a number with no positive decimal places', function () {
            it('should deny', function () {
                expect(NaN).not.toBeWholeNumber();
                expect(1.1).not.toBeWholeNumber();
                expect(0.1).not.toBeWholeNumber();
            });
        });
    });
});
describe('toBeWithinRange', function () {
    describe('when invoked', function () {
        describe('when subject IS a number >= floor and <= ceiling', function () {
            it('should confirm', function () {
                expect(0).toBeWithinRange(0, 2);
                expect(1).toBeWithinRange(0, 2);
                expect(2).toBeWithinRange(0, 2);
            });
        });
        describe('when subject is NOT a number >= floor and <= ceiling', function () {
            it('should deny', function () {
                expect(-3).not.toBeWithinRange(0, 2);
                expect(-2).not.toBeWithinRange(0, 2);
                expect(-1).not.toBeWithinRange(0, 2);
                expect(3).not.toBeWithinRange(0, 2);
                expect(NaN).not.toBeWithinRange(0, 2);
            });
        });
    });
});
var _undefined;
describe('toEndWith', function () {
    describe('when invoked', function () {
        describe('when subject is NOT an undefined or empty string', function () {
            describe('when subject is a string whose trailing characters match the expected string', function () {
                it('should confirm', function () {
                    expect('jamie').toEndWith('mie');
                });
            });
            describe('when subject is a string whose trailing characters DO NOT match the expected string', function () {
                it('should deny', function () {
                    expect('jamie ').not.toEndWith('mie');
                    expect('jamiE').not.toEndWith('mie');
                });
            });
        });
        describe('when subject IS an undefined or empty string', function () {
            it('should deny', function () {
                expect('').not.toEndWith('');
                expect(_undefined).not.toEndWith('');
                expect(_undefined).not.toEndWith('undefined');
                expect('undefined').not.toEndWith(_undefined);
            });
        });
    });
});
describe('toHaveArray', function () {
    describeToHaveArrayX('toHaveArray', function () {
        it('should confirm', function () {
            expect({
                memberName: []
            }).toHaveArray('memberName');
            expect({
                memberName: [1, 2, 3]
            }).toHaveArray('memberName');
        });
    });
});
describe('toHaveArrayOfBooleans', function () {
    describeToHaveArrayX('toHaveArrayOfBooleans', function () {
        describe('when named Array is empty', function () {
            it('should confirm', function () {
                expect({
                    memberName: []
                }).toHaveArrayOfBooleans('memberName');
            });
        });
        describe('when named Array has items', function () {
            describe('when all items are booleans', function () {
                it('should confirm', function () {
                    expect({
                        memberName: [true]
                    }).toHaveArrayOfBooleans('memberName');
                    expect({
                        memberName: [new Boolean(true)]
                    }).toHaveArrayOfBooleans('memberName');
                    expect({
                        memberName: [new Boolean(false)]
                    }).toHaveArrayOfBooleans('memberName');
                    expect({
                        memberName: [false, true]
                    }).toHaveArrayOfBooleans('memberName');
                });
            });
            describe('when any item is not a boolean', function () {
                it('should deny', function () {
                    expect({
                        memberName: [null]
                    }).not.toHaveArrayOfBooleans('memberName');
                    expect({
                        memberName: [null, false]
                    }).not.toHaveArrayOfBooleans('memberName');
                });
            });
        });
    });
});
describe('toHaveArrayOfNumbers', function () {
    describeToHaveArrayX('toHaveArrayOfNumbers', function () {
        describe('when named Array is empty', function () {
            it('should confirm', function () {
                expect({
                    memberName: []
                }).toHaveArrayOfNumbers('memberName');
            });
        });
        describe('when named Array has items', function () {
            describe('when all items are numbers', function () {
                it('should confirm', function () {
                    expect({
                        memberName: [1]
                    }).toHaveArrayOfNumbers('memberName');
                    expect({
                        memberName: [new Number(1)]
                    }).toHaveArrayOfNumbers('memberName');
                    expect({
                        memberName: [new Number(0)]
                    }).toHaveArrayOfNumbers('memberName');
                    expect({
                        memberName: [0, 1]
                    }).toHaveArrayOfNumbers('memberName');
                });
            });
            describe('when any item is not a number', function () {
                it('should deny', function () {
                    expect({
                        memberName: [null]
                    }).not.toHaveArrayOfNumbers('memberName');
                    expect({
                        memberName: [null, 0]
                    }).not.toHaveArrayOfNumbers('memberName');
                });
            });
        });
    });
});
describe('toHaveArrayOfObjects', function () {
    describeToHaveArrayX('toHaveArrayOfObjects', function () {
        describe('when named Array is empty', function () {
            it('should confirm', function () {
                expect({
                    memberName: []
                }).toHaveArrayOfObjects('memberName');
            });
        });
        describe('when named Array has items', function () {
            describe('when all items are objects', function () {
                it('should confirm', function () {
                    expect({
                        memberName: [{}]
                    }).toHaveArrayOfObjects('memberName');
                    expect({
                        memberName: [{}, {}]
                    }).toHaveArrayOfObjects('memberName');
                });
            });
            describe('when any item is not an object', function () {
                it('should deny', function () {
                    expect({
                        memberName: [null]
                    }).not.toHaveArrayOfObjects('memberName');
                    expect({
                        memberName: [null, {}]
                    }).not.toHaveArrayOfObjects('memberName');
                });
            });
        });
    });
});
describe('toHaveArrayOfSize', function () {
    describeToHaveArrayX('toHaveArrayOfSize', function () {
        describe('when number of expected items does not match', function () {
            it('should deny', function () {
                expect({
                    memberName: ''
                }).not.toHaveArrayOfSize('memberName');
                expect({
                    memberName: ['bar']
                }).not.toHaveArrayOfSize('memberName', 0);
            });
        });
        describe('when number of expected items does match', function () {
            it('should confirm', function () {
                expect({
                    memberName: []
                }).toHaveArrayOfSize('memberName', 0);
                expect({
                    memberName: ['bar']
                }).toHaveArrayOfSize('memberName', 1);
                expect({
                    memberName: ['bar', 'baz']
                }).toHaveArrayOfSize('memberName', 2);
            });
        });
    });
});
describe('toHaveArrayOfStrings', function () {
    describeToHaveArrayX('toHaveArrayOfStrings', function () {
        describe('when named Array is empty', function () {
            it('should confirm', function () {
                expect({
                    memberName: []
                }).toHaveArrayOfStrings('memberName');
            });
        });
        describe('when named Array has items', function () {
            describe('when all items are strings', function () {
                it('should confirm', function () {
                    expect({
                        memberName: ['truthy']
                    }).toHaveArrayOfStrings('memberName');
                    expect({
                        memberName: [new String('truthy')]
                    }).toHaveArrayOfStrings('memberName');
                    expect({
                        memberName: [new String('')]
                    }).toHaveArrayOfStrings('memberName');
                    expect({
                        memberName: ['', 'truthy']
                    }).toHaveArrayOfStrings('memberName');
                });
            });
            describe('when any item is not a string', function () {
                it('should deny', function () {
                    expect({
                        memberName: [null]
                    }).not.toHaveArrayOfStrings('memberName');
                    expect({
                        memberName: [null, '']
                    }).not.toHaveArrayOfStrings('memberName');
                });
            });
        });
    });
});
describe('toHaveBoolean', function () {
    describeToHaveBooleanX('toHaveBoolean', function () {
        describe('when primitive', function () {
            it('should confirm', function () {
                expect({
                    memberName: true
                }).toHaveBoolean('memberName');
                expect({
                    memberName: false
                }).toHaveBoolean('memberName');
            });
        });
        describe('when Boolean object', function () {
            it('should confirm', function () {
                expect({
                    memberName: new Boolean(true)
                }).toHaveBoolean('memberName');
                expect({
                    memberName: new Boolean(false)
                }).toHaveBoolean('memberName');
            });
        });
    });
});
describe('toHaveCalculable', function () {
    describeToHaveX('toHaveCalculable', function () {
        describe('when subject CAN be coerced to be used in mathematical operations', function () {
            it('should confirm', function () {
                expect({
                    memberName: '1'
                }).toHaveCalculable('memberName');
                expect({
                    memberName: ''
                }).toHaveCalculable('memberName');
                expect({
                    memberName: null
                }).toHaveCalculable('memberName');
            });
        });
        describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', function () {
            it('should deny', function () {
                expect({
                    memberName: {}
                }).not.toHaveCalculable('memberName');
                expect({
                    memberName: NaN
                }).not.toHaveCalculable('memberName');
            });
        });
    });
});
describe('toHaveDate', function () {
    var mockDate;
    beforeEach(function () {
        mockDate = {
            any: new Date(),
            early: new Date('2013-01-01T00:00:00.000Z'),
            late: new Date('2013-01-01T01:00:00.000Z')
        };
    });
    describeToHaveX('toHaveDate', function () {
        describe('when member is an instance of Date', function () {
            it('should confirm', function () {
                expect({
                    memberName: mockDate.any
                }).toHaveDate('memberName');
            });
        });
        describe('when member is NOT an instance of Date', function () {
            it('should deny', function () {
                expect({
                    memberName: null
                }).not.toHaveDate('memberName');
            });
        });
    });
});
describe('toHaveDateAfter', function () {
    var mockDate;
    beforeEach(function () {
        mockDate = {
            any: new Date(),
            early: new Date('2013-01-01T00:00:00.000Z'),
            late: new Date('2013-01-01T01:00:00.000Z')
        };
    });
    describeToHaveX('toHaveDateAfter', function () {
        describe('when member is an instance of Date', function () {
            describe('when date occurs before another', function () {
                it('should confirm', function () {
                    expect({
                        memberName: mockDate.late
                    }).toHaveDateAfter('memberName', mockDate.early);
                });
            });
            describe('when date does NOT occur before another', function () {
                it('should deny', function () {
                    expect({
                        memberName: mockDate.early
                    }).not.toHaveDateAfter('memberName', mockDate.late);
                });
            });
        });
        describe('when member is NOT an instance of Date', function () {
            it('should deny', function () {
                expect({
                    memberName: null
                }).not.toHaveDateAfter('memberName', mockDate.any);
            });
        });
    });
});
describeToHaveX('toHaveDateBefore', function () {
    var mockDate;
    beforeEach(function () {
        mockDate = {
            any: new Date(),
            early: new Date('2013-01-01T00:00:00.000Z'),
            late: new Date('2013-01-01T01:00:00.000Z')
        };
    });
    describe('when member is an instance of Date', function () {
        describe('when date occurs before another', function () {
            it('should confirm', function () {
                expect({
                    memberName: mockDate.early
                }).toHaveDateBefore('memberName', mockDate.late);
            });
        });
        describe('when date does NOT occur before another', function () {
            it('should deny', function () {
                expect({
                    memberName: mockDate.late
                }).not.toHaveDateBefore('memberName', mockDate.early);
            });
        });
    });
    describe('when member is NOT an instance of Date', function () {
        it('should deny', function () {
            expect({
                memberName: null
            }).not.toHaveDateBefore('memberName', mockDate.any);
        });
    });
});
describe('toHaveEmptyArray', function () {
    describeToHaveArrayX('toHaveEmptyArray', function () {
        describe('when named array has members', function () {
            it('should deny', function () {
                expect({
                    memberName: [1, 2, 3]
                }).not.toHaveEmptyArray('memberName');
                expect({
                    memberName: ''
                }).not.toHaveEmptyArray('memberName');
            });
        });
        describe('when named array has no members', function () {
            it('should confirm', function () {
                expect({
                    memberName: []
                }).toHaveEmptyArray('memberName');
            });
        });
    });
});
describe('toHaveEmptyObject', function () {
    beforeEach(function () {
        this.Foo = function () { };
    });
    describeToHaveX('toHaveEmptyObject', function () {
        describe('when subject IS an Object with no instance members', function () {
            beforeEach(function () {
                this.Foo.prototype = {
                    b: 2
                };
            });
            it('should confirm', function () {
                expect({
                    memberName: new this.Foo()
                }).toHaveEmptyObject('memberName');
                expect({
                    memberName: {}
                }).toHaveEmptyObject('memberName');
            });
        });
        describe('when subject is NOT an Object with no instance members', function () {
            it('should deny', function () {
                expect({
                    memberName: {
                        a: 1
                    }
                }).not.toHaveEmptyObject('memberName');
                expect({
                    memberName: null
                }).not.toHaveNonEmptyObject('memberName');
            });
        });
    });
});
describe('toHaveEmptyString', function () {
    describeToHaveX('toHaveEmptyString', function () {
        describe('when subject IS a string with no characters', function () {
            it('should confirm', function () {
                expect({
                    memberName: ''
                }).toHaveEmptyString('memberName');
            });
        });
        describe('when subject is NOT a string with no characters', function () {
            it('should deny', function () {
                expect({
                    memberName: ' '
                }).not.toHaveEmptyString('memberName');
            });
        });
    });
});
describe('toHaveEvenNumber', function () {
    describeToHaveX('toHaveEvenNumber', function () {
        describe('when subject IS an even number', function () {
            it('should confirm', function () {
                expect({
                    memberName: 2
                }).toHaveEvenNumber('memberName');
            });
        });
        describe('when subject is NOT an even number', function () {
            it('should deny', function () {
                expect({
                    memberName: 1
                }).not.toHaveEvenNumber('memberName');
                expect({
                    memberName: NaN
                }).not.toHaveEvenNumber('memberName');
            });
        });
    });
});
describe('toHaveFalse', function () {
    describeToHaveBooleanX('toHaveFalse', function () {
        describe('when primitive', function () {
            describe('when true', function () {
                it('should deny', function () {
                    expect({
                        memberName: true
                    }).not.toHaveFalse('memberName');
                });
            });
            describe('when false', function () {
                it('should confirm', function () {
                    expect({
                        memberName: false
                    }).toHaveFalse('memberName');
                });
            });
        });
        describe('when Boolean object', function () {
            describe('when true', function () {
                it('should deny', function () {
                    expect({
                        memberName: new Boolean(true)
                    }).not.toHaveFalse('memberName');
                });
            });
            describe('when false', function () {
                it('should confirm', function () {
                    expect({
                        memberName: new Boolean(false)
                    }).toHaveFalse('memberName');
                });
            });
        });
    });
});
describe('toHaveHtmlString', function () {
    describeToHaveX('toHaveHtmlString', function () {
        describe('when subject IS a string of HTML markup', function () {
            beforeEach(function () {
                this.ngMultiLine = '';
                this.ngMultiLine += '<a data-ng-href="//www.google.com" data-ng-click="launchApp($event)" target="_blank" class="ng-binding" href="//www.google.com">';
                this.ngMultiLine += '\n';
                this.ngMultiLine += '  Watch with Google TV';
                this.ngMultiLine += '\n';
                this.ngMultiLine += '</a>';
                this.ngMultiLine += '\n';
            });
            it('should confirm', function () {
                expect({
                    memberName: '<element>text</element>'
                }).toHaveHtmlString('memberName');
                expect({
                    memberName: '<a data-ng-href="//foo.com" data-ng-click="bar($event)">baz</a>'
                }).toHaveHtmlString('memberName');
                expect({
                    memberName: '<div ng-if="foo > bar || bar < foo && baz == bar"></div>'
                }).toHaveHtmlString('memberName');
                expect({
                    memberName: '<li ng-if="foo > bar || bar < foo && baz == bar">'
                }).toHaveHtmlString('memberName');
                expect({
                    memberName: this.ngMultiLine
                }).toHaveHtmlString('memberName');
            });
        });
        describe('when subject is NOT a string of HTML markup', function () {
            it('should deny', function () {
                expect({
                    memberName: 'div'
                }).not.toHaveHtmlString('memberName');
                expect({
                    memberName: null
                }).not.toHaveHtmlString('memberName');
            });
        });
    });
});
describe('toHaveIso8601', function () {
    describeToHaveX('toHaveIso8601', function () {
        describe('when member is a Date String conforming to the ISO 8601 standard', function () {
            describe('when specified date is valid', function () {
                it('should confirm', function () {
                    expect({
                        memberName: '2013-07-08T07:29:15.863Z'
                    }).toHaveIso8601('memberName');
                    expect({
                        memberName: '2013-07-08T07:29:15.863'
                    }).toHaveIso8601('memberName');
                    expect({
                        memberName: '2013-07-08T07:29:15'
                    }).toHaveIso8601('memberName');
                    expect({
                        memberName: '2013-07-08T07:29'
                    }).toHaveIso8601('memberName');
                    expect({
                        memberName: '2013-07-08'
                    }).toHaveIso8601('memberName');
                });
            });
            describe('when specified date is NOT valid', function () {
                it('should deny', function () {
                    expect({
                        memberName: '2013-99-12T00:00:00.000Z'
                    }).not.toHaveIso8601('memberName');
                    expect({
                        memberName: '2013-12-99T00:00:00.000Z'
                    }).not.toHaveIso8601('memberName');
                    expect({
                        memberName: '2013-01-01T99:00:00.000Z'
                    }).not.toHaveIso8601('memberName');
                    expect({
                        memberName: '2013-01-01T99:99:00.000Z'
                    }).not.toHaveIso8601('memberName');
                    expect({
                        memberName: '2013-01-01T00:00:99.000Z'
                    }).not.toHaveIso8601('memberName');
                });
            });
        });
        describe('when member is a String NOT conforming to the ISO 8601 standard', function () {
            it('should deny', function () {
                expect({
                    memberName: '2013-07-08T07:29:15.'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013-07-08T07:29:'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013-07-08T07:2'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013-07-08T07:'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013-07-08T07'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013-07-08T'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013-07-0'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013-07-'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013-07'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013-0'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013-'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2013'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '201'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '20'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: '2'
                }).not.toHaveIso8601('memberName');
                expect({
                    memberName: ''
                }).not.toHaveIso8601('memberName');
            });
        });
    });
});
describe('toHaveJsonString', function () {
    describeToHaveX('toHaveJsonString', function () {
        describe('when subject IS a string of parseable JSON', function () {
            it('should confirm', function () {
                expect({
                    memberName: '{}'
                }).toHaveJsonString('memberName');
                expect({
                    memberName: '[]'
                }).toHaveJsonString('memberName');
                expect({
                    memberName: '[1]'
                }).toHaveJsonString('memberName');
            });
        });
        describe('when subject is NOT a string of parseable JSON', function () {
            it('should deny', function () {
                expect({
                    memberName: '[1,]'
                }).not.toHaveJsonString('memberName');
                expect({
                    memberName: '<>'
                }).not.toHaveJsonString('memberName');
                expect({
                    memberName: null
                }).not.toHaveJsonString('memberName');
                expect({
                    memberName: ''
                }).not.toHaveJsonString('memberName');
                expect({
                    memberName: _undefined
                }).not.toHaveJsonString('memberName');
            });
        });
    });
});
describe('toHaveMember', function () {
    describeToHaveX('toHaveMember', function () { });
});
describe('toHaveMethod', function () {
    describeToHaveX('toHaveMethod', function () {
        describe('when subject IS a function', function () {
            it('should confirm', function () {
                expect({
                    memberName: function () { }
                }).toHaveMethod('memberName');
            });
        });
        describe('when subject is NOT a function', function () {
            it('should deny', function () {
                expect({
                    memberName: /regexp/
                }).not.toHaveMethod('memberName');
            });
        });
    });
});
describe('toHaveNonEmptyArray', function () {
    describeToHaveArrayX('toHaveNonEmptyArray', function () {
        describe('when named array has no members', function () {
            it('should deny', function () {
                expect({
                    memberName: []
                }).not.toHaveNonEmptyArray('memberName');
            });
        });
        describe('when named array has members', function () {
            it('should confirm', function () {
                expect({
                    memberName: [1, 2, 3]
                }).toHaveNonEmptyArray('memberName');
            });
        });
    });
});
describe('toHaveNonEmptyObject', function () {
    describeToHaveX('toHaveNonEmptyObject', function () {
        beforeEach(function () {
            this.Foo = function () { };
        });
        describe('when subject IS an Object with at least one instance member', function () {
            it('should confirm', function () {
                expect({
                    memberName: {
                        a: 1
                    }
                }).toHaveNonEmptyObject('memberName');
            });
        });
        describe('when subject is NOT an Object with at least one instance member', function () {
            beforeEach(function () {
                this.Foo.prototype = {
                    b: 2
                };
            });
            it('should deny', function () {
                expect({
                    memberName: new this.Foo()
                }).not.toHaveNonEmptyObject('memberName');
                expect({
                    memberName: {}
                }).not.toHaveNonEmptyObject('memberName');
                expect({
                    memberName: null
                }).not.toHaveNonEmptyObject('memberName');
            });
        });
    });
});
describe('toHaveNonEmptyString', function () {
    describeToHaveX('toHaveNonEmptyString', function () {
        describe('when subject IS a string with at least one character', function () {
            it('should confirm', function () {
                expect({
                    memberName: ' '
                }).toHaveNonEmptyString('memberName');
            });
        });
        describe('when subject is NOT a string with at least one character', function () {
            it('should deny', function () {
                expect({
                    memberName: ''
                }).not.toHaveNonEmptyString('memberName');
                expect({
                    memberName: null
                }).not.toHaveNonEmptyString('memberName');
            });
        });
    });
});
describe('toHaveNumber', function () {
    describeToHaveX('toHaveNumber', function () {
        describe('when subject IS a number', function () {
            it('should confirm', function () {
                expect({
                    memberName: 1
                }).toHaveNumber('memberName');
                expect({
                    memberName: 1.11
                }).toHaveNumber('memberName');
                expect({
                    memberName: 1e3
                }).toHaveNumber('memberName');
                expect({
                    memberName: 0.11
                }).toHaveNumber('memberName');
                expect({
                    memberName: -11
                }).toHaveNumber('memberName');
            });
        });
        describe('when subject is NOT a number', function () {
            it('should deny', function () {
                expect({
                    memberName: '1'
                }).not.toHaveNumber('memberName');
                expect({
                    memberName: NaN
                }).not.toHaveNumber('memberName');
            });
        });
    });
});
describe('toHaveNumberWithinRange', function () {
    describeToHaveX('toHaveNumberWithinRange', function () {
        describe('when subject IS a number >= floor and <= ceiling', function () {
            it('should confirm', function () {
                expect({
                    memberName: 0
                }).toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: 1
                }).toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: 2
                }).toHaveNumberWithinRange('memberName', 0, 2);
            });
        });
        describe('when subject is NOT a number >= floor and <= ceiling', function () {
            it('should deny', function () {
                expect({
                    memberName: -3
                }).not.toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: -2
                }).not.toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: -1
                }).not.toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: 3
                }).not.toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: NaN
                }).not.toHaveNumberWithinRange('memberName', 0, 2);
            });
        });
    });
});
describe('toHaveObject', function () {
    describeToHaveX('toHaveObject', function () {
        beforeEach(function () {
            this.Foo = function () { };
        });
        describe('when subject IS an Object', function () {
            it('should confirm', function () {
                expect({
                    memberName: new Object()
                }).toHaveObject('memberName');
                expect({
                    memberName: new this.Foo()
                }).toHaveObject('memberName');
                expect({
                    memberName: {}
                }).toHaveObject('memberName');
            });
        });
        describe('when subject is NOT an Object', function () {
            it('should deny', function () {
                expect({
                    memberName: null
                }).not.toHaveObject('memberName');
                expect({
                    memberName: 123
                }).not.toHaveObject('memberName');
                expect({
                    memberName: '[object Object]'
                }).not.toHaveObject('memberName');
            });
        });
    });
});
describe('toHaveOddNumber', function () {
    describeToHaveX('toHaveOddNumber', function () {
        describe('when subject IS an odd number', function () {
            it('should confirm', function () {
                expect({
                    memberName: 1
                }).toHaveOddNumber('memberName');
            });
        });
        describe('when subject is NOT an odd number', function () {
            it('should deny', function () {
                expect({
                    memberName: 2
                }).not.toHaveOddNumber('memberName');
                expect({
                    memberName: NaN
                }).not.toHaveOddNumber('memberName');
            });
        });
    });
});
describe('toHaveString', function () {
    describeToHaveX('toHaveString', function () {
        describe('when subject IS a string of any length', function () {
            it('should confirm', function () {
                expect({
                    memberName: ''
                }).toHaveString('memberName');
                expect({
                    memberName: ' '
                }).toHaveString('memberName');
            });
        });
        describe('when subject is NOT a string of any length', function () {
            it('should deny', function () {
                expect({
                    memberName: null
                }).not.toHaveString('memberName');
            });
        });
    });
});
describe('toHaveStringLongerThan', function () {
    describeToHaveX('toHaveStringLongerThan', function () {
        describe('when the subject and comparison ARE both strings', function () {
            describe('when the subject IS longer than the comparision string', function () {
                it('should confirm', function () {
                    expect({
                        memberName: 'abc'
                    }).toHaveStringLongerThan('memberName', 'ab');
                    expect({
                        memberName: 'a'
                    }).toHaveStringLongerThan('memberName', '');
                });
            });
            describe('when the subject is NOT longer than the comparision string', function () {
                it('should deny', function () {
                    expect({
                        memberName: 'ab'
                    }).not.toHaveStringLongerThan('memberName', 'abc');
                    expect({
                        memberName: ''
                    }).not.toHaveStringLongerThan('memberName', 'a');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function () {
            it('should deny (we are asserting the relative lengths of two strings)', function () {
                expect({
                    memberName: 'truthy'
                }).not.toHaveStringLongerThan('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringLongerThan('memberName', 'truthy');
                expect({
                    memberName: ''
                }).not.toHaveStringLongerThan('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringLongerThan('memberName', '');
            });
        });
    });
});
describe('toHaveStringSameLengthAs', function () {
    describeToHaveX('toHaveStringSameLengthAs', function () {
        describe('when the subject and comparison ARE both strings', function () {
            describe('when the subject IS the same length as the comparision string', function () {
                it('should confirm', function () {
                    expect({
                        memberName: 'ab'
                    }).toHaveStringSameLengthAs('memberName', 'ab');
                });
            });
            describe('when the subject is NOT the same length as the comparision string', function () {
                it('should deny', function () {
                    expect({
                        memberName: 'abc'
                    }).not.toHaveStringSameLengthAs('memberName', 'ab');
                    expect({
                        memberName: 'a'
                    }).not.toHaveStringSameLengthAs('memberName', '');
                    expect({
                        memberName: ''
                    }).not.toHaveStringSameLengthAs('memberName', 'a');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function () {
            it('should deny (we are asserting the relative lengths of two strings)', function () {
                expect({
                    memberName: 'truthy'
                }).not.toHaveStringSameLengthAs('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringSameLengthAs('memberName', 'truthy');
                expect({
                    memberName: ''
                }).not.toHaveStringSameLengthAs('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringSameLengthAs('memberName', '');
            });
        });
    });
});
describe('toHaveStringShorterThan', function () {
    describeToHaveX('toHaveStringShorterThan', function () {
        describe('when the subject and comparison ARE both strings', function () {
            describe('when the subject IS shorter than the comparision string', function () {
                it('should confirm', function () {
                    expect({
                        memberName: 'ab'
                    }).toHaveStringShorterThan('memberName', 'abc');
                    expect({
                        memberName: ''
                    }).toHaveStringShorterThan('memberName', 'a');
                });
            });
            describe('when the subject is NOT shorter than the comparision string', function () {
                it('should deny', function () {
                    expect({
                        memberName: 'abc'
                    }).not.toHaveStringShorterThan('memberName', 'ab');
                    expect({
                        memberName: 'a'
                    }).not.toHaveStringShorterThan('memberName', '');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function () {
            it('should deny (we are asserting the relative lengths of two strings)', function () {
                expect({
                    memberName: 'truthy'
                }).not.toHaveStringShorterThan('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringShorterThan('memberName', 'truthy');
                expect({
                    memberName: ''
                }).not.toHaveStringShorterThan('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringShorterThan('memberName', '');
            });
        });
    });
});
describe('toHaveTrue', function () {
    describeToHaveBooleanX('toHaveTrue', function () {
        describe('when primitive', function () {
            describe('when true', function () {
                it('should confirm', function () {
                    expect({
                        memberName: true
                    }).toHaveTrue('memberName');
                });
            });
            describe('when false', function () {
                it('should deny', function () {
                    expect({
                        memberName: false
                    }).not.toHaveTrue('memberName');
                });
            });
        });
        describe('when Boolean object', function () {
            describe('when true', function () {
                it('should confirm', function () {
                    expect({
                        memberName: new Boolean(true)
                    }).toHaveTrue('memberName');
                });
            });
            describe('when false', function () {
                it('should deny', function () {
                    expect({
                        memberName: new Boolean(false)
                    }).not.toHaveTrue('memberName');
                });
            });
        });
    });
});
describe('toHaveWhitespaceString', function () {
    describeToHaveX('toHaveWhitespaceString', function () {
        describe('when subject IS a string containing only tabs, spaces, returns etc', function () {
            it('should confirm', function () {
                expect({
                    memberName: ' '
                }).toHaveWhitespaceString('memberName');
                expect({
                    memberName: ''
                }).toHaveWhitespaceString('memberName');
            });
        });
        describe('when subject is NOT a string containing only tabs, spaces, returns etc', function () {
            it('should deny', function () {
                expect({
                    memberName: 'has-no-whitespace'
                }).not.toHaveWhitespaceString('memberName');
                expect({
                    memberName: 'has whitespace'
                }).not.toHaveWhitespaceString('memberName');
                expect({
                    memberName: null
                }).not.toHaveWhitespaceString('memberName');
            });
        });
    });
});
describe('toHaveWholeNumber', function () {
    describeToHaveX('toHaveWholeNumber', function () {
        describe('when subject IS a number with no positive decimal places', function () {
            it('should confirm', function () {
                expect({
                    memberName: 1
                }).toHaveWholeNumber('memberName');
                expect({
                    memberName: 0
                }).toHaveWholeNumber('memberName');
                expect({
                    memberName: 0.0
                }).toHaveWholeNumber('memberName');
            });
        });
        describe('when subject is NOT a number with no positive decimal places', function () {
            it('should deny', function () {
                expect({
                    memberName: NaN
                }).not.toHaveWholeNumber('memberName');
                expect({
                    memberName: 1.1
                }).not.toHaveWholeNumber('memberName');
                expect({
                    memberName: 0.1
                }).not.toHaveWholeNumber('memberName');
            });
        });
    });
});
describe('toImplement', function () {
    describe('when invoked', function () {
        describe('when subject IS an Object containing all of the supplied members', function () {
            it('should confirm', function () {
                expect({
                    a: 1,
                    b: 2
                }).toImplement({
                    a: 1,
                    b: 2
                });
                expect({
                    a: 1,
                    b: 2
                }).toImplement({
                    a: 1
                });
            });
        });
        describe('when subject is NOT an Object containing all of the supplied members', function () {
            it('should deny', function () {
                expect({
                    a: 1
                }).not.toImplement({
                    c: 3
                });
                expect(null).not.toImplement({
                    a: 1
                });
            });
        });
    });
});
describe('toStartWith', function () {
    describe('when invoked', function () {
        describe('when subject is NOT an undefined or empty string', function () {
            describe('when subject is a string whose leading characters match the expected string', function () {
                it('should confirm', function () {
                    expect('jamie').toStartWith('jam');
                });
            });
            describe('when subject is a string whose leading characters DO NOT match the expected string', function () {
                it('should deny', function () {
                    expect(' jamie').not.toStartWith('jam');
                    expect('Jamie').not.toStartWith('jam');
                });
            });
        });
        describe('when subject IS an undefined or empty string', function () {
            it('should deny', function () {
                expect('').not.toStartWith('');
                expect(_undefined).not.toStartWith('');
                expect(_undefined).not.toStartWith('undefined');
                expect('undefined').not.toStartWith(_undefined);
            });
        });
    });
});
describe('toThrowAnyError', function () {
    describe('when supplied a function', function () {
        describe('when function errors when invoked', function () {
            beforeEach(function () {
                this.throwError = function () {
                    throw new Error('wut?');
                };
                this.badReference = function () {
                    return badReference.someValue;
                };
            });
            it('should confirm', function () {
                expect(this.throwError).toThrowAnyError();
                expect(this.badReference).toThrowAnyError();
            });
        });
        describe('when function does NOT error when invoked', function () {
            beforeEach(function () {
                this.noErrors = function () { };
            });
            it('should deny', function () {
                expect(this.noErrors).not.toThrowAnyError();
            });
        });
    });
});
describe('toThrowErrorOfType', function () {
    describe('when supplied a function', function () {
        describe('when function errors when invoked', function () {
            beforeEach(function () {
                this.throwError = function () {
                    throw new Error('wut?');
                };
                this.badReference = function () {
                    return badReference.someValue;
                };
            });
            describe('when the error is of the expected type', function () {
                it('should confirm', function () {
                    expect(this.throwError).toThrowErrorOfType('Error');
                    expect(this.badReference).toThrowErrorOfType('ReferenceError');
                });
            });
            describe('when the error is NOT of the expected type', function () {
                it('should confirm', function () {
                    expect(this.throwError).not.toThrowErrorOfType('ReferenceError');
                    expect(this.badReference).not.toThrowErrorOfType('Error');
                });
            });
        });
    });
});
describe("Jasmine fixture extension", function () {
    describe("Affixes dom elements to body", function () {
        it("Inserts a new element on affix", function () {
            expect('#test1').not.toExist();
            affix('#test1');
            expect('#test1').toExist();
        });
        it("Inserts subelements when given", function () {
            affix('#test2 .something-special');
            expect('.something-special').toExist();
            var parent = $('#test2 .something-special').parent();
            var id = parent.attr('id');
            expect(id).toBe('test2');
        });
        it("Can add elements with multiple classes", function () {
            affix('#test3 div.this.that');
            expect('#test3 div').toHaveClass('this');
            expect('#test3 div').toHaveClass('that');
        });
        it("Creates new elements as divs by default", function () {
            affix('#test4 .subelement');
            expect('#test4 .subelement').toBeMatchedBy('div');
        });
        it("Can add different types of elements", function () {
            affix('#test5 p.part1');
            expect('#test5 .part1').toBeMatchedBy('p');
            affix('#test5 span.part2');
            expect('#test5 .part2').toBeMatchedBy('span');
        });
    });
    describe("Cleans up after each test", function () {
        it("Formerly affixed parts are removed when out of scope", function () {
            expect('#test1').not.toExist();
            expect('#test2').not.toExist();
            expect('#test3').not.toExist();
        });
    });
});
describe('toBeArray', function () {
    describe('matches', function () {
        it('should pass for []', function () {
            expect([]).toBeArray();
        });
        it('should pass for `new Array`', function () {
            expect(new Array()).toBeArray();
        });
        it('should pass for [1,"",{}]', function () {
            expect([
                1,
                "",
                {}
            ]).toBeArray();
        });
    });
    describe('.not matches', function () {
        it('should pass for {}', function () {
            expect({}).not.toBeArray();
        });
        it('should pass for `arguments`', function () {
            expect(arguments).not.toBeArray();
        });
    });
});
describe('toBeNumber', function () {
    describe('matches', function () {
        it('should pass for 0', function () {
            expect(0).toBeNumber();
        });
        it('should pass for 2.1', function () {
            expect(2.1).toBeNumber();
        });
    });
    describe('non matches', function () {
        it('should pass for "x"', function () {
            expect('x').not.toBeNumber();
        });
        it('should pass for function(){}', function () {
            expect(function () {
            }).not.toBeNumber();
        });
    });
});
describe('toBeInstanceOf', function () {
    describe('matches', function () {
        it('should work for `function(){}` to be instance of `Function`', function () {
            expect(function () {
            }).toBeInstanceOf(Function);
        });
    });
});
describe('toBeNan', function () {
    describe('matches', function () {
        it('should work for NaN', function () {
            expect(NaN).toBeNan();
        });
    });
});
describe('toBeOfType', function () {
    describe('matches', function () {
        it('should work for `number`', function () {
            expect(1).toBeOfType('number');
        });
    });
    describe('non-matches', function () {
        it('should work for `number`', function () {
            expect('a').not.toBeOfType('number');
        });
    });
});
describe('toBeInRange', function () {
    describe('matches', function () {
        it('should find 0 in 0..1', function () {
            expect(0).toBeInRange(0, 1);
        });
        it('should find 1 in 0..2', function () {
            expect(1).toBeInRange(0, 2);
        });
        it('should find 1.5 in 1..2', function () {
            expect(1.5).toBeInRange(1, 2);
        });
    });
    describe('non-matches', function () {
        it('should not find 0 in 1..2', function () {
            expect(0).not.toBeInRange(1, 2);
        });
        it('should not find 100 in 33..55', function () {
            expect(100).not.toBeInRange(33, 55);
        });
    });
});
describe('toBeOneOf', function () {
    describe('matches', function () {
        it('should find "a" in ["a", "b"]', function () {
            expect('a').toBeOneOf([
                'a',
                'b'
            ]);
        });
        it('should find "uxebu" in ["company", "uxebu"]', function () {
            expect('uxebu').toBeOneOf([
                'company',
                'uxebu'
            ]);
        });
    });
    describe('non-matches', function () {
        it('should not find "" in [" ", "0"]', function () {
            expect('').not.toBeOneOf([
                ' ',
                '0'
            ]);
        });
        it('should not find "a" in ["b", "c"]', function () {
            expect('a').not.toBeOneOf([
                'b',
                'c'
            ]);
        });
    });
});
describe('toBeCloseToOneOf', function () {
    function oneDigitOff(actual, expected) {
        var actualInt = parseInt(actual, 10);
        return actualInt - 1 <= expected && actualInt + 1 >= expected;
    }
    function tenPercentOff(actual, expected) {
        return expected * 0.9 <= actual && expected * 1.1 >= actual;
    }
    function oneDigitOrTenPercentOff(actual, expected) {
        return oneDigitOff(actual, expected) || tenPercentOff(actual, expected);
    }
    function twoDecimalsOff(actual, expected) {
        var lower = ((expected * 100) - 2) / 100;
        var upper = ((expected * 100) + 2) / 100;
        return lower <= actual && upper >= actual;
    }
    describe('matches', function () {
        it('should say 7 is close to one of [8, 9]', function () {
            expect(7).toBeCloseToOneOf([
                8,
                9
            ], oneDigitOff);
        });
        it('should say 2 is 10% off of one of [2.2, 1.0]', function () {
            expect(2).toBeCloseToOneOf([
                2.2,
                1.0
            ], tenPercentOff);
        });
        it('should say 7 is close to one of [8, 9]', function () {
            expect(7).toBeCloseToOneOf([
                8,
                9
            ], oneDigitOrTenPercentOff);
        });
        it('should say 1.345 two decimals off of [1.325, 1.365]', function () {
            expect(1.345).toBeCloseToOneOf([
                1.325,
                1.365
            ], twoDecimalsOff);
        });
    });
    describe('non-matches', function () {
        it('should say 7 is NOT one off of [9, 10, 11]', function () {
            expect(7).not.toBeCloseToOneOf([
                9,
                10,
                11
            ], oneDigitOff);
        });
        it('should say 1 is close to one of [8, 9]', function () {
            expect(1).not.toBeCloseToOneOf([
                8,
                9
            ], oneDigitOrTenPercentOff);
        });
        it('should say 1.9 is NOT 10% off of one of [2.2, 1.0]', function () {
            expect(1.9).not.toBeCloseToOneOf([
                2.2,
                1.0
            ], tenPercentOff);
        });
        it('should say 1.345 two decimals off of [1.325, 1.365]', function () {
            expect(1.304).not.toBeCloseToOneOf([
                1.325,
                1.365
            ], twoDecimalsOff);
        });
    });
});
describe('toContainOnce', function () {
    describe('matches', function () {
        it('should work for arrays', function () {
            expect([
                1,
                2
            ]).toContainOnce(1);
        });
        it('should work for strings', function () {
            expect('uxebu rox').toContainOnce('uxebu');
        });
    });
    describe('non-matches', function () {
        it('should work for arrays', function () {
            expect([
                1,
                2
            ]).not.toContainOnce(3);
        });
        it('should work for strings', function () {
            expect('uxebu rox').not.toContainOnce('u');
        });
        it('should work for undefined', function () {
            expect(undefined).not.toContainOnce(1);
        });
    });
});
describe('toHaveLength', function () {
    describe('matches', function () {
        it('should work for `{length:2}`', function () {
            expect({
                length: 2
            }).toHaveLength(2);
        });
        it('should work for `{length:null}`', function () {
            expect({
                length: null
            }).toHaveLength(null);
        });
    });
});
describe('toHaveProperties', function () {
    describe('matches', function () {
        it('should work for `{x:0, y:undefined}`', function () {
            var obj = {
                x: 0,
                y: undefined
            };
            expect(obj).toHaveProperties('x', 'y');
        });
    });
});
describe('toHavePropertiesWithValues', function () {
    describe('matches', function () {
        it('should work with a reference object', function () {
            var C = function C() {
                this.x = 0;
            };
            C.prototype.y = 'arbitrary';
            expect(new C()).toHavePropertiesWithValues({
                x: 0,
                y: 'arbitrary',
                constructor: C
            });
        });
    });
});
describe('toHaveOwnProperties', function () {
    describe('matches', function () {
        it('should work for `{x:0, y:undefined}`', function () {
            var obj = {
                x: 0,
                y: undefined
            };
            expect(obj).toHaveOwnProperties('x', 'y');
        });
    });
});
describe('toHaveOwnPropertiesWithValues', function () {
    describe('matches', function () {
        it('should work with a reference object', function () {
            expect({
                x: 0,
                y: 'arbitrary'
            }).toHaveOwnPropertiesWithValues({
                x: 0,
                y: 'arbitrary'
            });
        });
    });
});
describe('toHaveBeenCalledXTimes', function () {
    describe('matches', function () {
        it('should work for 1', function () {
            var func = jasmine.createSpy('func');
            func();
            expect(func).toHaveBeenCalledXTimes(1);
        });
        it('should work for 2', function () {
            var func = jasmine.createSpy('func');
            func();
            func();
            expect(func).not.toHaveBeenCalledXTimes(1);
        });
    });
});
describe('toExactlyHaveProperties', function () {
    describe('matches', function () {
        it('should work for `{x:0, y:undefined}`', function () {
            var obj = {
                x: 0,
                y: undefined
            };
            expect(obj).toExactlyHaveProperties('x', 'y');
        });
        it('should work in any order', function () {
            var obj = {
                x: 0,
                y: undefined
            };
            expect(obj).toExactlyHaveProperties('y', 'x');
        });
    });
    describe('non-matches', function () {
        it('should work for too many properties', function () {
            var obj = {
                x: 0,
                y: undefined
            };
            expect(obj).not.toExactlyHaveProperties('x');
        });
        it('should work for missing properties', function () {
            var obj = {
                x: 0,
                y: undefined
            };
            expect(obj).not.toExactlyHaveProperties('x', 'y', 'z');
        });
    });
});
describe('toEndWith', function () {
    describe('matches', function () {
        it('should work for string', function () {
            expect('abc').toEndWith('c');
        });
        it('should work for equal string', function () {
            expect('abc').toEndWith('abc');
        });
    });
    describe('non-matches', function () {
        it('should work for string', function () {
            expect('abc').not.toEndWith('d');
        });
        it('should work for equal string', function () {
            expect('abc').not.toEndWith('abz');
        });
    });
    describe('with array', function () {
        describe('matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).toEndWith('2');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).toEndWith([
                    4,
                    5
                ]);
            });
        });
        describe('non-matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).not.toEndWith('3');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).not.toEndWith([
                    3,
                    4
                ]);
            });
        });
    });
});
describe('toEachEndWith', function () {
    describe('matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).toEachEndWith('e');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'zwee',
                'three'
            ]).toEachEndWith('e');
        });
    });
    describe('non-matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).not.toEachEndWith('o');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'zwei',
                'three'
            ]).not.toEachEndWith('e');
        });
    });
});
describe('toSomeEndWith', function () {
    describe('matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).toSomeEndWith('e');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'zwee',
                'three'
            ]).toSomeEndWith('ee');
        });
    });
    describe('non-matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).not.toSomeEndWith('o');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'zwei',
                'three'
            ]).not.toSomeEndWith('a');
        });
    });
});
describe('toStartWith', function () {
    describe('matches', function () {
        it('should work for string', function () {
            expect('abc').toStartWith('a');
        });
        it('should work for equal string', function () {
            expect('abc').toStartWith('abc');
        });
    });
    describe('non-matches', function () {
        it('should work for string', function () {
            expect('abc').not.toStartWith('d');
        });
        it('should work for equal string', function () {
            expect('abc').not.toStartWith('abz');
        });
    });
    describe('with array', function () {
        describe('matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).toStartWith('1');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).toStartWith([
                    3,
                    4
                ]);
            });
        });
        describe('non-matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).not.toStartWith('3');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).not.toStartWith([
                    4,
                    5
                ]);
            });
        });
    });
});
describe('toEachStartWith', function () {
    describe('matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).toEachStartWith('o');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'onetwo',
                'onethree'
            ]).toEachStartWith('o');
        });
    });
    describe('non-matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).not.toEachStartWith('e');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'two',
                'onethree'
            ]).not.toEachStartWith('o');
        });
    });
});
describe('toSomeStartWith', function () {
    describe('matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).toSomeStartWith('o');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'onetwo',
                'three'
            ]).toSomeStartWith('one');
        });
    });
    describe('non-matches', function () {
        it('should work for array with one element', function () {
            expect([
                'one'
            ]).not.toSomeStartWith('e');
        });
        it('should work for array with multiple elements', function () {
            expect([
                'one',
                'two',
                'onethree'
            ]).not.toSomeStartWith('a');
        });
    });
});
describe('toStartWithEither', function () {
    describe('matches', function () {
        it('should work for two parameters', function () {
            expect('one').toStartWithEither('two', 'one');
        });
        it('should work for three parameters', function () {
            expect('one').toStartWithEither('two', 'one', 'three');
        });
        it('should work for multiple matches', function () {
            expect('one').toStartWithEither('on', 'one', 'o');
        });
    });
    describe('non-matches', function () {
        it('should work for two elements', function () {
            expect('one').not.toStartWithEither('e', 'a');
        });
        it('should work for three elements', function () {
            expect('one').not.toStartWithEither('ne', 'ones', 'two');
        });
    });
    describe('with array', function () {
        describe('matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).toStartWithEither('1', '2');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).toStartWithEither([
                    4
                ], [
                    3,
                    4
                ]);
            });
        });
        describe('non-matches', function () {
            it('should work for string', function () {
                expect([
                    '1',
                    '2'
                ]).not.toStartWithEither('3');
            });
            it('should work for array', function () {
                expect([
                    3,
                    4,
                    5
                ]).not.toStartWithEither([
                    5,
                    6
                ], [
                    4,
                    5
                ]);
            });
        });
    });
});
describe('toThrowInstanceOf', function () {
    describe('matches', function () {
        it('should work for `Error`', function () {
            expect(function () {
                throw new Error();
            }).toThrowInstanceOf(Error);
        });
    });
});
describe('toThrowStartsWith', function () {
    describe('matches', function () {
        it('should match the error string', function () {
            expect(function () {
                throw new Error('ooops');
            }).toThrowStartsWith('ooops');
        });
    });
    describe('non-matches', function () {
        it('should mismatch the error string', function () {
            expect(function () {
                throw new Error('ooops');
            }).not.toThrowStartsWith('1');
        });
    });
});
describe('something', function () {
    beforeEach(function () {
        installPromiseMatchers();
    });
    it('should do something', function () {
        var foo = {};
        var bar = {};
        expect(foo).toBeResolvedWith(bar);
        expect(foo).toBeRejectedWith(bar);
        expect(foo).toBeResolved();
        expect(foo).toBeRejected();
    });
});
describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
});
describe("A suite is just a function", function () {
    var a;
    it("and so is a spec", function () {
        a = true;
        expect(a).toBe(true);
    });
});
describe("The 'toBe' matcher compares with ===", function () {
    it("and has a positive case", function () {
        expect(true).toBe(true);
    });
    it("and can have a negative case", function () {
        expect(false).not.toBe(true);
    });
});
describe("Included matchers:", function () {
    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = a;
        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });
    describe("The 'toEqual' matcher", function () {
        it("works for simple literals and variables", function () {
            var a = 12;
            expect(a).toEqual(12);
        });
        it("should work for objects", function () {
            var foo = {
                a: 12,
                b: 34
            };
            var bar = {
                a: 12,
                b: 34
            };
            expect(foo).toEqual(bar);
        });
    });
    it("The 'toMatch' matcher is for regular expressions", function () {
        var message = "foo bar baz";
        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
    });
    it("The 'toBeDefined' matcher compares against `undefined`", function () {
        var a = {
            foo: "foo"
        };
        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });
    it("The `toBeUndefined` matcher compares against `undefined`", function () {
        var a = {
            foo: "foo"
        };
        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
    });
    it("The 'toBeNull' matcher compares against null", function () {
        var a = null;
        var foo = "foo";
        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });
    it("The 'toBeTruthy' matcher is for boolean casting testing", function () {
        var a, foo = "foo";
        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });
    it("The 'toBeFalsy' matcher is for boolean casting testing", function () {
        var a, foo = "foo";
        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });
    it("The 'toContain' matcher is for finding an item in an Array", function () {
        var a = ["foo", "bar", "baz"];
        expect(a).toContain("bar");
        expect(a).not.toContain("quux");
    });
    it("The 'toBeLessThan' matcher is for mathematical comparisons", function () {
        var pi = 3.1415926, e = 2.78;
        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    });
    it("The 'toBeGreaterThan' is for mathematical comparisons", function () {
        var pi = 3.1415926, e = 2.78;
        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });
    it("The 'toBeCloseTo' matcher is for precision math comparison", function () {
        var pi = 3.1415926, e = 2.78;
        expect(pi).not.toBeCloseTo(e, 2);
        expect(pi).toBeCloseTo(e, 0);
    });
    it("The 'toThrow' matcher is for testing if a function throws an exception", function () {
        var foo = function () {
            return 1 + 2;
        };
        var bar = function () {
            var a = undefined;
            return a + 1;
        };
        expect(foo).not.toThrow();
        expect(bar).toThrow();
    });
    it("The 'toThrowError' matcher is for testing a specific thrown exception", function () {
        var foo = function () {
            throw new TypeError("foo bar baz");
        };
        expect(foo).toThrowError("foo bar baz");
        expect(foo).toThrowError(/bar/);
        expect(foo).toThrowError(TypeError);
        expect(foo).toThrowError(TypeError, "foo bar baz");
    });
});
describe("A spec", function () {
    it("is just a function, so it can contain any code", function () {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
    });
    it("can have more than one expectation", function () {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});
describe("A spec (with setup and tear-down)", function () {
    var foo;
    beforeEach(function () {
        foo = 0;
        foo += 1;
    });
    afterEach(function () {
        foo = 0;
    });
    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });
    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});
describe("A spec", function () {
    var foo;
    beforeEach(function () {
        foo = 0;
        foo += 1;
    });
    afterEach(function () {
        foo = 0;
    });
    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });
    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
    describe("nested inside a second describe", function () {
        var bar;
        beforeEach(function () {
            bar = 1;
        });
        it("can reference both scopes as needed", function () {
            expect(foo).toEqual(bar);
        });
    });
});
xdescribe("A spec", function () {
    var foo;
    beforeEach(function () {
        foo = 0;
        foo += 1;
    });
    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });
});
describe("Pending specs", function () {
    xit("can be declared 'xit'", function () {
        expect(true).toBe(false);
    });
    it("can be declared with 'it' but without a function");
    it("can be declared by calling 'pending' in the spec body", function () {
        expect(true).toBe(false);
        pending();
        pending('this is why it is pending');
    });
});
describe("A spy", function () {
    var foo, bar = null;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            }
        };
        spyOn(foo, 'setBar');
        foo.setBar(123);
        foo.setBar(456, 'another param');
    });
    it("tracks that the spy was called", function () {
        expect(foo.setBar).toHaveBeenCalled();
    });
    it("tracks all the arguments of its calls", function () {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });
    it("stops all execution on a function", function () {
        expect(bar).toBeNull();
    });
});
describe("A spy, when configured to call through", function () {
    var foo, bar, fetchedBar;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };
        spyOn(foo, 'getBar').and.callThrough();
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(123);
    });
});
describe("A spy, when configured to fake a return value", function () {
    var foo, bar, fetchedBar;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };
        spyOn(foo, "getBar").and.returnValue(745);
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(745);
    });
});
describe("A spy, when configured with an alternate implementation", function () {
    var foo, bar, fetchedBar;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };
        spyOn(foo, "getBar").and.callFake(function () {
            return 1001;
        });
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(1001);
    });
});
describe("A spy, when configured to throw a value", function () {
    var foo, bar;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            }
        };
        spyOn(foo, "setBar").and.throwError("quux");
    });
    it("throws the value", function () {
        expect(function () {
            foo.setBar(123);
        }).toThrowError("quux");
    });
});
describe("A spy, when configured with multiple actions", function () {
    var foo, bar, fetchedBar;
    beforeEach(function () {
        var _this = this;
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };
        spyOn(foo, 'getBar').and.callThrough().and.callFake(function () {
            _this.fakeCalled = true;
        });
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(123);
    });
    it("should have called the fake implementation", function () {
        expect(this.fakeCalled).toEqual(true);
    });
});
describe("A spy", function () {
    var foo, bar = null;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            }
        };
        spyOn(foo, 'setBar').and.callThrough();
    });
    it("can call through and then stub in the same spec", function () {
        foo.setBar(123);
        expect(bar).toEqual(123);
        foo.setBar.and.stub();
        bar = null;
        foo.setBar(123);
        expect(bar).toBe(null);
    });
});
describe("A spy", function () {
    var foo, bar = null;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            }
        };
        spyOn(foo, 'setBar');
    });
    it("tracks if it was called at all", function () {
        expect(foo.setBar.calls.any()).toEqual(false);
        foo.setBar();
        expect(foo.setBar.calls.any()).toEqual(true);
    });
    it("tracks the number of times it was called", function () {
        expect(foo.setBar.calls.count()).toEqual(0);
        foo.setBar();
        foo.setBar();
        expect(foo.setBar.calls.count()).toEqual(2);
    });
    it("tracks the arguments of each call", function () {
        foo.setBar(123);
        foo.setBar(456, "baz");
        expect(foo.setBar.calls.argsFor(0)).toEqual([123]);
        expect(foo.setBar.calls.argsFor(1)).toEqual([456, "baz"]);
    });
    it("tracks the arguments of all calls", function () {
        foo.setBar(123);
        foo.setBar(456, "baz");
        expect(foo.setBar.calls.allArgs()).toEqual([[123], [456, "baz"]]);
    });
    it("can provide the context and arguments to all calls", function () {
        foo.setBar(123);
        expect(foo.setBar.calls.all()).toEqual([{ object: foo, args: [123], returnValue: undefined }]);
    });
    it("has a shortcut to the most recent call", function () {
        foo.setBar(123);
        foo.setBar(456, "baz");
        expect(foo.setBar.calls.mostRecent()).toEqual({ object: foo, args: [456, "baz"], returnValue: undefined });
    });
    it("has a shortcut to the first call", function () {
        foo.setBar(123);
        foo.setBar(456, "baz");
        expect(foo.setBar.calls.first()).toEqual({ object: foo, args: [123], returnValue: undefined });
    });
    it("can be reset", function () {
        foo.setBar(123);
        foo.setBar(456, "baz");
        expect(foo.setBar.calls.any()).toBe(true);
        foo.setBar.calls.reset();
        expect(foo.setBar.calls.any()).toBe(false);
    });
});
describe("A spy, when created manually", function () {
    var whatAmI;
    beforeEach(function () {
        whatAmI = jasmine.createSpy('whatAmI');
        whatAmI("I", "am", "a", "spy");
    });
    it("is named, which helps in error reporting", function () {
        expect(whatAmI.and.identity()).toEqual('whatAmI');
    });
    it("tracks that the spy was called", function () {
        expect(whatAmI).toHaveBeenCalled();
    });
    it("tracks its number of calls", function () {
        expect(whatAmI.calls.count()).toEqual(1);
    });
    it("tracks all the arguments of its calls", function () {
        expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
    });
    it("allows access to the most recent call", function () {
        expect(whatAmI.calls.mostRecent().args[0]).toEqual("I");
    });
});
describe("Multiple spies, when created manually", function () {
    var tape;
    beforeEach(function () {
        tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);
        tape.play();
        tape.pause();
        tape.rewind(0);
    });
    it("creates spies for each requested function", function () {
        expect(tape.play).toBeDefined();
        expect(tape.pause).toBeDefined();
        expect(tape.stop).toBeDefined();
        expect(tape.rewind).toBeDefined();
    });
    it("tracks that the spies were called", function () {
        expect(tape.play).toHaveBeenCalled();
        expect(tape.pause).toHaveBeenCalled();
        expect(tape.rewind).toHaveBeenCalled();
        expect(tape.stop).not.toHaveBeenCalled();
    });
    it("tracks all the arguments of its calls", function () {
        expect(tape.rewind).toHaveBeenCalledWith(0);
    });
});
describe("jasmine.any", function () {
    it("matches any value", function () {
        expect({}).toEqual(jasmine.any(Object));
        expect(12).toEqual(jasmine.any(Number));
    });
    describe("when used with a spy", function () {
        it("is useful for comparing arguments", function () {
            var foo = jasmine.createSpy('foo');
            foo(12, function () {
                return true;
            });
            expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
        });
    });
});
describe("jasmine.objectContaining", function () {
    var foo;
    beforeEach(function () {
        foo = {
            a: 1,
            b: 2,
            bar: "baz"
        };
    });
    it("matches objects with the expect key/value pairs", function () {
        expect(foo).toEqual(jasmine.objectContaining({
            bar: "baz"
        }));
        expect(foo).not.toEqual(jasmine.objectContaining({
            c: 37
        }));
    });
    describe("when used with a spy", function () {
        it("is useful for comparing arguments", function () {
            var callback = jasmine.createSpy('callback');
            callback({
                bar: "baz"
            });
            expect(callback).toHaveBeenCalledWith(jasmine.objectContaining({
                bar: "baz"
            }));
            expect(callback).not.toHaveBeenCalledWith(jasmine.objectContaining({
                c: 37
            }));
        });
    });
});
describe("jasmine.arrayContaining", function () {
    var foo;
    beforeEach(function () {
        foo = [1, 2, 3, 4];
    });
    it("matches arrays with some of the values", function () {
        expect(foo).toEqual(jasmine.arrayContaining([3, 1]));
        expect(foo).not.toEqual(jasmine.arrayContaining([6]));
    });
    describe("when used with a spy", function () {
        it("is useful when comparing arguments", function () {
            var callback = jasmine.createSpy('callback');
            callback([1, 2, 3, 4]);
            expect(callback).toHaveBeenCalledWith(jasmine.arrayContaining([4, 2, 3]));
            expect(callback).not.toHaveBeenCalledWith(jasmine.arrayContaining([5, 2]));
        });
    });
});
describe("Manually ticking the Jasmine Clock", function () {
    var timerCallback;
    beforeEach(function () {
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().install();
    });
    afterEach(function () {
        jasmine.clock().uninstall();
    });
    it("causes a timeout to be called synchronously", function () {
        setTimeout(function () {
            timerCallback();
        }, 100);
        expect(timerCallback).not.toHaveBeenCalled();
        jasmine.clock().tick(101);
        expect(timerCallback).toHaveBeenCalled();
    });
    it("causes an interval to be called synchronously", function () {
        setInterval(function () {
            timerCallback();
        }, 100);
        expect(timerCallback).not.toHaveBeenCalled();
        jasmine.clock().tick(101);
        expect(timerCallback.calls.count()).toEqual(1);
        jasmine.clock().tick(50);
        expect(timerCallback.calls.count()).toEqual(1);
        jasmine.clock().tick(50);
        expect(timerCallback.calls.count()).toEqual(2);
    });
    describe("Mocking the Date object", function () {
        it("mocks the Date object and sets it to a given time", function () {
            var baseTime = new Date(2013, 9, 23);
            jasmine.clock().mockDate(baseTime);
            jasmine.clock().tick(50);
            expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
        });
    });
});
describe("Asynchronous specs", function () {
    var value;
    beforeEach(function (done) {
        setTimeout(function () {
            value = 0;
            done();
        }, 1);
    });
    it("should support async execution of test preparation and expectations", function (done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done();
    });
    describe("long asynchronous specs", function () {
        beforeEach(function (done) {
            done();
        }, 1000);
        it("takes a long time", function (done) {
            setTimeout(function () {
                done();
            }, 9000);
        }, 10000);
        afterEach(function (done) {
            done();
        }, 1000);
    });
});
describe("Fail", function () {
    it("should fail test when called without arguments", function () {
        fail();
    });
    it("should fail test when called with a fail message", function () {
        fail("The test failed");
    });
    it("should fail test when called an error", function () {
        fail(new Error("The test failed with this error"));
    });
});
describe("custom equality", function () {
    var myCustomEquality = function (first, second) {
        if (typeof first == "string" && typeof second == "string") {
            return first[0] == second[1];
        }
    };
    beforeEach(function () {
        jasmine.addCustomEqualityTester(myCustomEquality);
    });
    it("should be custom equal", function () {
        expect("abc").toEqual("aaa");
    });
    it("should be custom not equal", function () {
        expect("abc").not.toEqual("abc");
    });
});
var customMatchers = {
    toBeGoofy: function (util, customEqualityTesters) {
        return {
            compare: function (actual, expected) {
                if (expected === undefined) {
                    expected = '';
                }
                var result = { pass: false };
                result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);
                if (result.pass) {
                    result.message = "Expected " + actual + " not to be quite so goofy";
                }
                else {
                    result.message = "Expected " + actual + " to be goofy, but it was not very goofy";
                }
                return result;
            }
        };
    }
};
describe("Custom matcher: 'toBeGoofy'", function () {
    beforeEach(function () {
        jasmine.addMatchers(customMatchers);
    });
    it("is available on an expectation", function () {
        expect({
            hyuk: 'gawrsh'
        }).toBeGoofy();
    });
    it("can take an 'expected' parameter", function () {
        expect({
            hyuk: 'gawrsh is fun'
        }).toBeGoofy(' is fun');
    });
    it("can be negated", function () {
        expect({
            hyuk: 'this is fun'
        }).not.toBeGoofy();
    });
});
(function () {
    var env = jasmine.getEnv();
    var htmlReporter = new jasmine.HtmlReporter();
    env.addReporter(htmlReporter);
    var specFilter = new jasmine.HtmlSpecFilter();
    env.specFilter = function (spec) {
        return specFilter.matches(spec.getFullName());
    };
    var currentWindowOnload = window.onload;
    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload(null);
        }
        htmlReporter.initialize();
        env.execute();
    };
})();
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
});
describe("A suite is just a function", function () {
    var a;
    it("and so is a spec", function () {
        a = true;
        expect(a).toBe(true);
    });
});
describe("The 'toBe' matcher compares with ===", function () {
    it("and has a positive case ", function () {
        expect(true).toBe(true);
    });
    it("and can have a negative case", function () {
        expect(false).not.toBe(true);
    });
});
describe("Included matchers:", function () {
    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = a;
        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });
    describe("The 'toEqual' matcher", function () {
        it("works for simple literals and variables", function () {
            var a = 12;
            expect(a).toEqual(12);
        });
        it("should work for objects", function () {
            var foo = {
                a: 12,
                b: 34
            };
            var bar = {
                a: 12,
                b: 34
            };
            expect(foo).toEqual(bar);
        });
    });
    it("The 'toMatch' matcher is for regular expressions", function () {
        var message = 'foo bar baz';
        expect(message).toMatch(/bar/);
        expect(message).toMatch('bar');
        expect(message).not.toMatch(/quux/);
    });
    it("The 'toBeDefined' matcher compares against `undefined`", function () {
        var a = {
            foo: 'foo'
        };
        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });
    it("The `toBeUndefined` matcher compares against `undefined`", function () {
        var a = {
            foo: 'foo'
        };
        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
    });
    it("The 'toBeNull' matcher compares against null", function () {
        var a = null;
        var foo = 'foo';
        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });
    it("The 'toBeTruthy' matcher is for boolean casting testing", function () {
        var a, foo = 'foo';
        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });
    it("The 'toBeFalsy' matcher is for boolean casting testing", function () {
        var a, foo = 'foo';
        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });
    it("The 'toContain' matcher is for finding an item in an Array", function () {
        var a = ['foo', 'bar', 'baz'];
        expect(a).toContain('bar');
        expect(a).not.toContain('quux');
    });
    it("The 'toBeLessThan' matcher is for mathematical comparisons", function () {
        var pi = 3.1415926, e = 2.78;
        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    });
    it("The 'toBeGreaterThan' is for mathematical comparisons", function () {
        var pi = 3.1415926, e = 2.78;
        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });
    it("The 'toBeCloseTo' matcher is for precision math comparison", function () {
        var pi = 3.1415926, e = 2.78;
        expect(pi).not.toBeCloseTo(e, 0.1);
        expect(pi).toBeCloseTo(e, 0);
    });
    it("The 'toThrow' matcher is for testing if a function throws an exception", function () {
        var foo = function () {
            return 1 + 2;
        };
        var bar = function () {
        };
        expect(foo).not.toThrow();
        expect(bar).toThrow();
    });
});
describe("A spec", function () {
    it("is just a function, so it can contain any code", function () {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
    });
    it("can have more than one expectation", function () {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});
describe("A spec (with setup and tear-down)", function () {
    var foo;
    beforeEach(function () {
        foo = 0;
        foo += 1;
    });
    afterEach(function () {
        foo = 0;
    });
    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });
    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});
describe("A spec", function () {
    var foo;
    beforeEach(function () {
        foo = 0;
        foo += 1;
    });
    afterEach(function () {
        foo = 0;
    });
    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });
    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
    describe("nested inside a second describe", function () {
        var bar;
        beforeEach(function () {
            bar = 1;
        });
        it("can reference both scopes as needed ", function () {
            expect(foo).toEqual(bar);
        });
    });
});
xdescribe("A spec", function () {
    var foo;
    beforeEach(function () {
        foo = 0;
        foo += 1;
    });
    xit("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });
});
describe("A spy", function () {
    var foo, bar = null;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            }
        };
        spyOn(foo, 'setBar');
        foo.setBar(123);
        foo.setBar(456, 'another param');
    });
    it("tracks that the spy was called", function () {
        expect(foo.setBar).toHaveBeenCalled();
    });
    it("tracks its number of calls", function () {
        expect(foo.setBar.calls.length).toEqual(2);
    });
    it("tracks all the arguments of its calls", function () {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });
    it("allows access to the most recent call", function () {
        expect(foo.setBar.mostRecentCall.args[0]).toEqual(456);
    });
    it("allows access to other calls", function () {
        expect(foo.setBar.calls[0].args[0]).toEqual(123);
    });
    it("stops all execution on a function", function () {
        expect(bar).toBeNull();
    });
});
describe("A spy, when configured to call through", function () {
    var foo, bar, fetchedBar;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };
        spyOn(foo, 'getBar').andCallThrough();
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(123);
    });
});
describe("A spy, when faking a return value", function () {
    var foo, bar, fetchedBar;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };
        spyOn(foo, 'getBar').andReturn(745);
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(745);
    });
});
describe("A spy, when faking a return value", function () {
    var foo, bar, fetchedBar;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };
        spyOn(foo, 'getBar').andCallFake(function () {
            return 1001;
        });
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(1001);
    });
});
describe("A spy, when created manually", function () {
    var whatAmI;
    beforeEach(function () {
        whatAmI = jasmine.createSpy('whatAmI');
        whatAmI("I", "am", "a", "spy");
    });
    it("is named, which helps in error reporting", function () {
        expect(whatAmI.identity).toEqual('whatAmI');
    });
    it("tracks that the spy was called", function () {
        expect(whatAmI).toHaveBeenCalled();
    });
    it("tracks its number of calls", function () {
        expect(whatAmI.calls.length).toEqual(1);
    });
    it("tracks all the arguments of its calls", function () {
        expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
    });
    it("allows access to the most recent call", function () {
        expect(whatAmI.mostRecentCall.args[0]).toEqual("I");
    });
});
describe("Multiple spies, when created manually", function () {
    var tape;
    beforeEach(function () {
        tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);
        tape.play();
        tape.pause();
        tape.rewind(0);
    });
    it("creates spies for each requested function", function () {
        expect(tape.play).toBeDefined();
        expect(tape.pause).toBeDefined();
        expect(tape.stop).toBeDefined();
        expect(tape.rewind).toBeDefined();
    });
    it("tracks that the spies were called", function () {
        expect(tape.play).toHaveBeenCalled();
        expect(tape.pause).toHaveBeenCalled();
        expect(tape.rewind).toHaveBeenCalled();
        expect(tape.stop).not.toHaveBeenCalled();
    });
    it("tracks all the arguments of its calls", function () {
        expect(tape.rewind).toHaveBeenCalledWith(0);
    });
});
describe("jasmine.any", function () {
    it("matches any value", function () {
        expect({}).toEqual(jasmine.any(Object));
        expect(12).toEqual(jasmine.any(Number));
    });
    describe("when used with a spy", function () {
        it("is useful for comparing arguments", function () {
            var foo = jasmine.createSpy('foo');
            foo(12, function () {
                return true;
            });
            expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
        });
    });
});
describe("Manually ticking the Jasmine Mock Clock", function () {
    var timerCallback;
    beforeEach(function () {
        timerCallback = jasmine.createSpy('timerCallback');
        jasmine.Clock.useMock();
    });
    it("causes a timeout to be called synchronously", function () {
        setTimeout(function () {
            timerCallback();
        }, 100);
        expect(timerCallback).not.toHaveBeenCalled();
        jasmine.Clock.tick(101);
        expect(timerCallback).toHaveBeenCalled();
    });
    it("causes an interval to be called synchronously", function () {
        setInterval(function () {
            timerCallback();
        }, 100);
        expect(timerCallback).not.toHaveBeenCalled();
        jasmine.Clock.tick(101);
        expect(timerCallback.callCount).toEqual(1);
        jasmine.Clock.tick(50);
        expect(timerCallback.callCount).toEqual(1);
        jasmine.Clock.tick(50);
        expect(timerCallback.callCount).toEqual(2);
    });
});
describe("Asynchronous specs", function () {
    var value, flag;
    it("should support async execution of test preparation and exepectations", function () {
        runs(function () {
            flag = false;
            value = 0;
            setTimeout(function () {
                flag = true;
            }, 500);
        });
        waitsFor(function () {
            value++;
            return flag;
        }, "The Value should be incremented", 750);
        runs(function () {
            expect(value).toBeGreaterThan(0);
        });
    });
});
(function () {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 250;
    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };
    var currentWindowOnload = window.onload;
    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload(null);
        }
        document.querySelector('.version').innerHTML = jasmineEnv.versionString();
        execJasmine();
    };
    function execJasmine() {
        jasmineEnv.execute();
    }
})();
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
