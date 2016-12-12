import { Injectable } from '@angular/core';
import { FlashmessageService } from './Flashmessage'; import "./Flashmessage";
import { Router } from "@angular/router";

@Injectable()
export class UrlService {
    public static servername = '';
    public static version = '0000001';
    constructor(private $flash : FlashmessageService, private $router : Router) {

    }
    /**
    * Redirect to another page with a message
    * @param module string Module target
    * @param action string Action on the module
    * @param id number Id
    * @param msg number Id
    * @param type number Id
    **/
    public redirect(module: string, action : string, id : number, msg? : string, type: string = 'success') {
        if (typeof (msg) !== 'undefined' && msg != '') {
            this.$flash.create(msg, type);
        }
        if (action == '') {
            action = module;
        }
        this.$router.navigateByUrl(this.make(module, action, id));
    }
    /**
    * make an url for page
    * @param module string Module target
    * @param action string Action on the module
    * @param id number Id
    * @param params object Other var to add
    **/
    public make(module : string, action : string = "", id? : number, params : {} = {}) {
        var url = module;
        if (action !== "") {
            url += '-' + action;
            if (typeof(id) !== 'undefined' && id !== null) {
                url += '-' + id;
            }
        }
        var first = true;
        for (var i in params) {
            if (first) {url += "?"; first=false;}
            else {url += "&";}
            url += i + "=" + params[i];
        }
        return url;
    }
    /**
    * make an url for including html element
    * @param module string Module target
    * @param action string Action on the module
    * @param id number Id
    **/
    public makeTemplate(module : string, action : string = "") {
        return UrlService.servername + "template/" + module + "/"+ action + "/" + action + '-' + UrlService.version +'.html';
    }
    /**
    * make an url for API json
    * @param module string Module target
    * @param action string Action on the module
    * @param id number Id
    * @param params object other params added with &param=value
    **/
    public makeApi(module: string, action: string, id? : number, params? : {}) {
        module = module['ucFirst']();
        var url = module;
        if (action !== "") {
            url += '/' + action;
            if (typeof(id) !== 'undefined' && id !== null) {
                url += '/' + id;
            }
        }
        url += '.json';
        if (typeof(params) !== 'undefined') {
            var first = true;
            for (var i in params) {
                if (first) {url += "?"; first=false;}
                else {url += "&";}
                url += i + "=" + params[i];
            }
        }
        return url;
    }
}
