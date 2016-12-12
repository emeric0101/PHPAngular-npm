/** karma unit testing" */
import 'angular';
import { Model } from './Entity/AEntity';
import { IGroup } from './Entity/IGroup';
import { IUser } from './Entity/IUser';
import {RepositoryService} from './service/RepositoryService';
export var phpangularModule = angular.module('phpangularModule');
class EntityFactory {
    private bundle = Emeric0101.PHPAngular;
    getBundle() : any {
        return this.bundle;
    }
}
phpangularModule.service("EntityFactory", EntityFactory);


module Emeric0101.PHPAngular.Entity {
    export class GroupeUser extends Model implements IGroup {
        getFlag() {
            return 'USER';
        }
    }
    export class User extends Model implements IUser {
        private mail;
  	     public getMail() {
             return this.mail;
         }
         public setMail(m) {
             this.mail = m;
         }
         private groupe = [new GroupeUser('groupe', this.repositoryService)];
         public async getGroupe() {
             return new Promise<GroupeUser[]>(resolve => {
                 resolve(this.groupe);
             });
         }
        constructor(repositoryService : RepositoryService) {
          super("User", repositoryService);
        }
  }
}
