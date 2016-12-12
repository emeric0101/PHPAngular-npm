"use strict";
var EntityFactory = (function () {
    function EntityFactory() {
        this.bundle = LIM.MoreSalle;
    }
    EntityFactory.prototype.getBundle = function () {
        return this.bundle;
    };
    EntityFactory.prototype.create = function (model) {
        return new (this.getBundle()).Entity[model](0, model);
    };
    EntityFactory.prototype.createFromId = function (id, model, callback) {
        if (typeof (this.getBundle().Entity[model]) !== 'function') {
            throw 'Model not found : ' + model;
        }
        return new (this.getBundle().Entity[model](id, callback));
    };
    return EntityFactory;
}());
exports.EntityFactory = EntityFactory;
