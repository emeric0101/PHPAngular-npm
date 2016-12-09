"use strict";
var phpangular = require("phpangular");
exports.providers = [
    phpangular.UrlService,
    phpangular.AjaxService,
    phpangular.RepositoryService,
    phpangular.FlashmessageService,
    phpangular.EntityManager,
    phpangular.LoginService,
    phpangular.StorageService
];
phpangular.RepositoryService.EntityPrototype = [];
