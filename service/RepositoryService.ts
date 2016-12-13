import { Injectable } from '@angular/core';
import { Model } from '../Entity/AEntity';
import { AjaxService } from './AjaxService';
import { UrlService } from './UrlService';
import {Observable} from 'rxjs/Rx';

class Request {
    private static globalrequestid = 1;
    private requestid;
    constructor(
        private controller : string,
        private method: string,
        private id : number,
        private params : any,
        private entity : string,
        private callback : (obj : Model) => void,
        private error : () => void = () => {}
    ) {
        this.requestid = Request.globalrequestid++;
    }
    getRequestId(){return this.requestid;}
    getId() {return this.id;}
    getController() {return this.controller;}
    getMethod() {return this.method;}
    getParams() {return this.params;}
    getEntity() {return this.entity;}
    getCallback(){return this.callback;}
    getError() {return this.error;}
}
@Injectable()
export class RepositoryService {
    private entities = [];
    // DEPRECATED
    private requestById = [];

    private requests : Request[] = [];
    private requestTimer = null;

    public static EntityPrototype : any= [];

    constructor(
        private UrlService : UrlService,
        private AjaxService : AjaxService
     ) {
    }

    public clearCache() {
        this.entities = [];
    }

    getFromCache(name: string, id: number): Model {
        // Looking if it is into the cache ?
        if (typeof(this.entities[name]) === 'undefined' || typeof(this.entities[name][id]) === "undefined") {
            return null;
        }
        return this.entities[name][id];
    }

    /** Add a request into the request list to be executed
    */
    private addGetRequest(request : Request) {
        this.requests.push(request);
        // Fire after a little interval to get maximum request
        if (this.requestTimer == null) {
            this.requestTimer = setTimeout(() => {
                this.runRequests(this.requests.slice(0)); // slice = clone
                this.requestTimer = null;
            }, 10);
        }

    }

    /** Create a ajax request for runRequest */
    private prepareRequests(requests : Request[]) {
        var params = [];
        for (var i in this.requests) {
            var request = this.requests[i];
            params.push({
                id: request.getId(),
                method: request.getMethod(),
                controller: request.getController(),
                params: request.getParams(),
                requestid: request.getRequestId()
            });

        }
        return params;
    }
    /** Get the request according to the requestid
    */
    private getRequestFromRequestId(requestid : number, requests : Request[]) {
        for (var i in requests) {
            if (requests[i].getRequestId() == requestid) {
                return requests[i];
            }
        }
        return null;
    }
    /** Execute all the requests list */
    private runRequests(requests : Request[]) {
        var params = this.prepareRequests(requests);
        this.AjaxService.post<any>(this.UrlService.makeApi('Multiple', 'index'), params).subscribe(
            data => {
            if (typeof(data.Multiple) === 'undefined') {
                // Call all error callback !
                for (var i in requests) {
                    this.requests[i].getError()();
                }
                return false;
            }
            var data = data.Multiple;
            // Manage request
            for (var i in data) {
                var request = this.getRequestFromRequestId(data[i].requestid, requests);
                // Callback
                request.getCallback()(data[i]);
            }
        });

        // Clear request list
        this.requests = [];
    }

    /**
    * @param obj object
    * @param name string name of the model
    */
    EntityFromJson<T extends Model>(obj : any, name : string) {
        var entity : T = this.createEntity(name);
        entity.setValues(obj);
        // Add to the local cache
        if (typeof(this.entities[name]) === "undefined") {
            this.entities[name] = [];
        }
        this.entities[name][entity.getId()] = entity;

        return entity;
    }
    /** best way to create an entity */
    createEntity(name) {
        if (RepositoryService.EntityPrototype[name] == undefined) {
            throw 'CreateEntity : entity not declared : ' + name;
        }
        return new RepositoryService.EntityPrototype[name](this);
    }
    /**
    * @param objs array
    * @param name string name of the model
    */
    EntitiesFromJson<T extends Model>(objs : any, name: string) {
        var objArray = [];
        for (var i in objs) {
            objArray.push(this.EntityFromJson<T>(objs[i], name));
        }
        return objArray;
    }


    findById<T extends Model>(name : string, id :number) : Promise<T>{
        return new Promise<T>(resolve => {
            if (id === 0) {
                throw 'ID NULL';
            }
            let fromCache : any = this.getFromCache(name, id) ;
            if (fromCache !== null) {
                resolve(fromCache);
                return;
            }
            var errorCb = () => {throw 'findById : ' + id + ' : ' + name + ' : BAD_RESULT'};
            // Prepare the query
            let request = new Request(
                'Entity',
                name,
                id,
                {},
                name,
                (data) => {
                    if (!data['success']) {
                        errorCb();
                        return;
                    }
                    let obj = this.EntityFromJson<T>(data[name], name);
                    resolve(obj);
                },
                errorCb
            );
            // add the request to the list
            this.addGetRequest(request);
        });

    }

    /**
    * @param obj string Name of the Entity (With CAPITAL LETTER first !!) User
    * @param success callback(array of Entity)
    * @param error callback
    */
    findAll<T extends Model>(name : string) {
        var errorCb = () => {throw 'findAll : ' + name + ' : BAD_RESULT'};

        return new Promise<T[]>(resolve => {
            // Prepare the query
            var request = new Request(
                'Entity',
                name,
                0,
                {},
                name,
                (data) => {
                    if (!data['success']) {
                        errorCb();
                        return;
                    }
                    var objs = this.EntitiesFromJson<T>(data[name + 's'], name);
                    resolve(objs);
                },
                errorCb
            );
            // add the request to the list
            this.addGetRequest(request);
        });
    }

    /**
    * Find some entites by calling a method from the controller
    * @param method string Method called in the server controller
    * @param name string Controller name (must be the same than the entity expected !), with capital letter
    * @param id number Can be used to pass args to the server controller
    * @param success callback(array of Entity)
    * @param error callback
    */
    findSome<T extends Model>(method: string, name : string, id: number, params: any){
        var errorCb = () => {throw 'findSome : ' + method + ' : ' + name + ' : BAD_RESULT'};
        return new Promise<T[]>(resolve => {
            // Prepare the query
            var request = new Request(
                name,
                method,
                id,
                params,
                name,
                (data) => {
                    if (!data['success']) {
                        errorCb();
                        return;
                    }
                    var objs = this.EntitiesFromJson<T>(data[name + 's'], name);
                    resolve(objs);
                },
                errorCb
            );
            // add the request to the list
            this.addGetRequest(request);
        });
    }
}
