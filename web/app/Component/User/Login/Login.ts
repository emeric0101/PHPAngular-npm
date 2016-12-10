import { Component, OnInit  } from '@angular/core';
import { LoginService, BadLogin, UrlService } from 'phpangular';
import { User } from '../../../Entity/User';
@Component({
  selector: 'home-home',
  templateUrl: 'app/Component/User/Login/Login.html'
})
export class UserLogin implements OnInit
{
    public mail : string;
    public pass : string;
    public badlogin = false;
    public error = false;
    private async getLogin() {
        var user = await this.$login.isLogged();
        if (user != null) {
            this.$url.redirect('Home', '', null);
            return;
        }
    }
    async onSubmit()
    {
        this.badlogin = false,
        this.error = false;
        try {
            var user = await this.$login.login(this.mail, this.pass, true) as User;
            if (user != null) {
                this.$url.redirect('Home', '', null, 'Bienvenue ' + user.getFirstName() + ' ' + user.getLastName(), 'success');
            }
        }
        catch (e) {
            if (e == 'BAD_LOGIN') {
                this.badlogin = true;
            }
            else {
                console.log(e);
                this.error = true;
            }
        }
    }
    public async ngOnInit()
    {
    }
    public constructor(
        private $login: LoginService,
        private $url: UrlService

    )
    {
        this.getLogin();
    }
}
