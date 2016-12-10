"use strict";
var phpangular = require("phpangular");
var User_1 = require("./Entity/User");
exports.providers = [
    phpangular.UrlService,
    phpangular.AjaxService,
    phpangular.RepositoryService,
    phpangular.FlashmessageService,
    phpangular.EntityManager,
    phpangular.LoginService,
    phpangular.StorageService
];
phpangular.RepositoryService.EntityPrototype = {
    'User': User_1.User
};
