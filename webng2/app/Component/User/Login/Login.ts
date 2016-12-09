import { Component } from '@angular/core';
import {EntityManager, RepositoryService} from 'phpangular';
@Component({
  selector: 'home-home',
  templateUrl: 'app/Component/User/Login/Login.html'
})
export class UserLogin {
    public constructor($em : EntityManager, $repo : RepositoryService) {
        //$repo.createEntity()
    }
}
