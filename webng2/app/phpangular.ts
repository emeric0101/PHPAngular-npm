import * as phpangular from 'phpangular';

export var providers = [
    phpangular.UrlService,
    phpangular.AjaxService,
    phpangular.RepositoryService,
    phpangular.FlashmessageService,
    phpangular.EntityManager,
    phpangular.LoginService,
    phpangular.StorageService
];

phpangular.RepositoryService.EntityPrototype = [];
