import * as phpangular from 'phpangular';
import { User } from './Entity/User';
export var providers = [
    phpangular.UrlService,
    phpangular.AjaxService,
    phpangular.RepositoryService,
    phpangular.FlashmessageService,
    phpangular.EntityManager,
    phpangular.LoginService,
    phpangular.StorageService
];

phpangular.RepositoryService.EntityPrototype = {
    'User': User
};
