import { Component } from '@angular/core';
import {LoginService, UrlService} from 'phpangular';
import { User } from '../../../Entity/User';

@Component({
  selector: 'reservation-planning',
  templateUrl: 'app/Component/Reservation/Planning/Planning.html'
})
export class ReservationPlanning {
    public user : User = null;
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
