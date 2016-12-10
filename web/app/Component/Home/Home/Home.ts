import { Component } from '@angular/core';
import {LoginService, UrlService} from 'phpangular';
import { User } from '../../../Entity/User';

@Component({
  selector: 'home-home',
  templateUrl: 'app/Component/Home/Home/Home.html'
})
export class Home {
    public user : User = null;
    private async getLogin() {
        this.user = await this.$login.isLogged() as User;
        if (this.user == null) {
            this.$url.redirect('User', 'Login', null);
            return;
        }
    }
    public constructor(
        private $login : LoginService,
        private $url : UrlService
    ) {
        this.getLogin();
    }
}
