import { RepositoryService } from '../service/RepositoryService';

class ForeignKeyRequest {
    private callbacks : ((model : Model) => void)[] = [];
    private done = false;
    private errors : (() =>void)[] = [];
    private value = null;
    public static getForeignKeyRequestFromField(field :string, array : ForeignKeyRequest[]) {
        for (let request of array) {
            if (request == null) {continue;}
            if (request.getField() == field) {
                return request;
            }
        }
    }
    /**
    * Add a callback to the stack if the request is not done
    */
    public addCallback(cb : (model : Model) => void) {
        if (this.done) {
            cb(this.value);
        }
        else {
            this.callbacks.push(cb);
        }
    }
    public getField() {
        return this.field;
    }
    /**
    * Function call when the ajax get the value
    */
    public valueReceived(value) {
        this.value = value;
        this.done = true;
        this.fireCallback();
    }
    public onError() {
        this.done = true;
        for (let cb of this.errors) {
            cb();
        }
    }
    public addError(e : () => void) {
        this.errors.push(e);
    }

    private fireCallback() {
        for (let cb of this.callbacks) {
            cb(this.value);
        }
        this.callbacks = []; // clear callbacks
    }

    public constructor(
        callback : ((model : Model) => void),
        private field : string,
        private error : () => void
    ) {
        this.callbacks.push(callback);
    }
}

export abstract class Model {
    protected id : number;
    private isFromDb: boolean = false;

    private changed = false; // all base values to detect change
    public getChanged() {
        return this.changed || !this.isFromDb;
    }
    protected setValue(name, value) {
        this.changed = true;
        this[name] = value;
        for (var i in this.foreignKeyRequests) {
            if (this.foreignKeyRequests[i] != null && this.foreignKeyRequests[i].getField() == name) {
                this.foreignKeyRequests[i] = null; // unset
            }
        }
    }


    public getIsFromDb() {
        return this.isFromDb;
    }
    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    protected async foreignKeysAsync<T extends Model>(field: string) : Promise<T[]>{
        return new Promise<T[]>(resolve => {
            var array = this[field];
            // If the value is not defined
            if (array === null) {
                return null;
            }
            if (array.length == 0) {
                return [];
            }
            let countDownLatch = this[field].length;
            for (var i in this[field]) {
                this.foreignKey<T>(i, (r) => {
                    countDownLatch--;
                    if (countDownLatch == 0) {
                        resolve(this[field]);
                    }
                }, null, this[field]);

            }
        });
    }

    /**
    * Get Entity from a foreignKey and put the entity into the value
    * @param field string The field of the key
    * @param success callback
    * @param error callback
    * @param obj object to apply the foreginkey
    */
    private foreignKeyRequests : ForeignKeyRequest[] = [];
    protected foreignKeyAsync<T extends Model>(field: string) {
        return new Promise<T>(r => {
            this.foreignKey(field, (m : T) => {
                r(m);
            },() => {
                throw 'foreignKeyAsyncError';
            });
        });
    }
    protected foreignKey<T extends Model>(
        field : string,
        success? : (obj : Model) => void,
        error? : () => void,
        obj = null
    ) {

            if (obj === null) {
                obj = this;
            }


            error = function() {};

            if (success == undefined) {
                success = function() {};
            }

            var value = obj[field];
            if (value === null) {
                success(null);
                return null;
            }


            // If the key is already requested (or requested)
            let requestExist = ForeignKeyRequest.getForeignKeyRequestFromField(field, this.foreignKeyRequests);
            if (requestExist != null) {
                requestExist.addCallback(success); // add callback
                requestExist.addError(error); // add callback
                return obj[field];
            }
            // if already exist
            if ((obj[field] instanceof Model)) {
                success(obj[field]);
                return obj[field];
            }
            // create request for multiple callback
            var request = new ForeignKeyRequest(
                success, field, error
            )
            this.foreignKeyRequests.push(request);


            if (typeof(value['entity']) === 'undefined') {
                throw 'Model : foreignKey not an entity !';
            }
            var callbackSuccess = (objReceived) =>{
                obj[field] = objReceived;
                // clear callback
                request.valueReceived(objReceived);
            };
            this.repositoryService.findById<T>(value['entity'], value['id']).then((obj) => {
                callbackSuccess(obj);
            }).catch(() => {
                request.onError();
            });
            return obj[field];
    };

    public setValues(values : {}) {

        for (var i in values) {
            var value = values[i];
            if (value !== null && typeof (value["class"]) === 'string') {
                if (value["class"] === 'datetime') {
                    // datetime
                    // ie doesn't support direct ISO date in constructor
                    let s = value['date'].split(/\D/);
                    let d = new Date();
                    d.setFullYear(s[0]); d.setMonth(s[1]-1); d.setDate(s[2]); d.setHours(s[3]); d.setMinutes(s[4]);
                    value = d;
                }
                else {
                    throw "Unable to serialize : " + value['class'];
                }
            }
            this[i] = value;
        }
        this.isFromDb = true; // lock the model
    }

    // Update the entity from server
    update() {
        this.repositoryService.findById(this.name, this.id).then(obj => {
            this.setValues(obj);
        })
    }
    public setRepositoryService(repositoryService : RepositoryService) {
        this.repositoryService = repositoryService;
    }
    protected name;
    constructor(protected repositoryService : RepositoryService) {
    }
}
