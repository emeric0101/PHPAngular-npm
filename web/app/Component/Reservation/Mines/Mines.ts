import { Component } from '@angular/core';
import {LoginService, UrlService} from 'phpangular';
import { User } from '../../../Entity/User';

@Component({
  selector: 'reservation-mines',
  templateUrl: 'app/Component/Reservation/Mines/Mines.html'
})
export class ReservationMines {
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
