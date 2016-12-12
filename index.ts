export { Model } from './Entity/AEntity';
export { UrlService } from './service/UrlService';
export { AjaxService } from './service/AjaxService';
export { EntityManager } from './service/EntityManager';
export { FlashmessageService } from './service/Flashmessage';
export { RepositoryService } from './service/RepositoryService';
export { StorageService } from './service/StorageService';
export  *  from './service/LoginService';

String.prototype['ucFirst'] = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
