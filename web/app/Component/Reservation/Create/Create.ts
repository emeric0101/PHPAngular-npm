import { Component } from '@angular/core';
import {LoginService, UrlService} from 'phpangular';
import { User } from '../../../Entity/User';
import { Ressource } from '../../../Entity/Ressource';

@Component({
  selector: 'reservation-create',
  templateUrl: 'app/Component/Reservation/Create/Create.html'
})
export class ReservationCreate {
    public user : User = null;
    public salles : Ressource[];
    private async getLogin() {
        this.user = await this.$login.isLogged() as User;
    }
    public constructor(
        private $login : LoginService,
        private $url : UrlService
    ) {
        this.getLogin();
    }
}
