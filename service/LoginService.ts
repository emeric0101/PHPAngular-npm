import { Injectable } from '@angular/core';
import { AjaxService } from './AjaxService';
import { UrlService } from './UrlService';
import { RepositoryService } from './RepositoryService';
import { IUser } from '../Entity/IUser';
@Injectable()



export class LoginService {
    protected user : IUser = null;
    protected oldValueUser : IUser = null;
    protected logged = false; // if the request has already been sent
    protected requesting = false;
    protected waitingCb : ((user : IUser) => void)[] = [];
    protected timeout : Date = null;
    protected updateCallbacks :((user : IUser) => void)[]= [];
    /** add a listener on the user state change */
    public registerUpdateCallback(cb : (user : IUser) => void) {
        this.updateCallbacks.push(cb);
    }
    private fireUpdateCallback() {
        // only if change
        if (this.user == this.oldValueUser) {
            return;
        }
        this.oldValueUser = this.user;
        for (let cb of this.updateCallbacks) {
            cb(this.user);
        }
    }

    async login(
        mail : string,
        pass : string,
        stay : boolean) : Promise<IUser>{

            let data = await this.$ajaxService.post<any>(this.$url.makeApi('Login', 'login'), {
                mail: mail,
                password: pass,
                stay: stay
            }).toPromise();

            if (data.success !== true) {
                throw 'BAD_LOGIN';
            }
            let user = await this.isLogged(true);
            if (user == null) {
                throw 'UNKNOW_ERROR';
            }
            return user;
    }
    logout() {
        this.$ajaxService.get<any>(this.$url.makeApi('Login', 'logout')).subscribe(
        data => {
            this.logged = false;
            this.user = null;
            this.fireUpdateCallback();
            this.$url.redirect('user', 'register', null, 'Au revoir', 'success');
        });
    }
    async getUser(callback : (user : IUser) => void = (u) => {}) : Promise<IUser> {
        var user = await this.isLogged();
        callback(user);
        return user;
    }



    isLogged( force = false) {
        return new Promise<IUser>(async resolve => {
            this.waitingCb.push(resolve);

            // If the request is already in progress, don't do anything else, just wait for callback
            if (this.requesting) {
                return;
            }

            this.requesting = true;

            // After request, call this :
            var callback = () => {
                this.requesting = false;
                // Calling all queue callback !
                for (var i in this.waitingCb) {
                    this.waitingCb[i](this.user);
                }
                // calling update
                this.fireUpdateCallback();
                // Reset the queue
                this.waitingCb = [];
            };

            // Requete que toute les 60s
            if (this.timeout == null) {
                this.timeout = new Date();
            }
            if (force === false && (new Date()).getTime() - this.timeout.getTime() < 60*1000 && this.logged) {
                callback();
                return;
            }

            this.timeout = new Date();
            var data = await this.$ajaxService.get<any>(this.$url.makeApi("Login", "getLoginInfo")).toPromise();
            this.logged = true; // request done
            if (data.success === true && typeof(data.user) !== "undefined") {
                this.user = this.$repo.EntityFromJson(data.user, 'User') as IUser;
            }else {
                this.user = null;
            }
            if (callback !== null) {
                callback();
            }

        });
    }
    constructor(protected $ajaxService : AjaxService,
        protected $url : UrlService,
        protected $repo : RepositoryService) {
    }
}
