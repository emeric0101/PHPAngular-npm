"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AEntity_1 = require("phpangular/Entity/AEntity");
var Ressource = (function (_super) {
    __extends(Ressource, _super);
    function Ressource() {
        var _this = _super.apply(this, arguments) || this;
        _this.name = "Ressource";
        _this.ressourceType = null;
        _this.entrepotRessources = null;
        _this.price = null;
        return _this;
    }
    Ressource.prototype.getTitle = function () {
        return this.title;
    };
    Ressource.prototype.setTitle = function (v) {
        this.setValue('title', v);
    };
    Ressource.prototype.getDescription = function () {
        return this.description;
    };
    Ressource.prototype.setDescription = function (v) {
        this.setValue('description', v);
    };
    Ressource.prototype.getRessourceType = function () {
        return this.foreignKey('ressourceType');
    };
    Ressource.prototype.setRessourceType = function (v) {
        this.setValue('ressourceType', v);
    };
    Ressource.prototype.getDelais = function () {
        return this.delais;
    };
    Ressource.prototype.setDelais = function (v) {
        this.setValue('delais', v);
    };
    Ressource.prototype.getEntrepotRessources = function () {
        return this.foreignKeys('entrepotRessources');
    };
    Ressource.prototype.setEntrepotRessources = function (v) {
        this.setValue('entrepotRessources', v);
    };
    Ressource.prototype.getPrice = function () {
        return this.foreignKeys('price');
    };
    Ressource.prototype.setPrice = function (v) {
        this.setValue('price', v);
    };
    Ressource.prototype.getIsLieu = function () {
        return this.isLieu;
    };
    Ressource.prototype.setIsLieu = function (v) {
        this.setValue('isLieu', v);
    };
    Ressource.prototype.getActive = function () {
        return this.active;
    };
    Ressource.prototype.setActive = function (v) {
        this.setValue('active', v);
    };
    Ressource.prototype.getColor = function () {
        return this.color;
    };
    Ressource.prototype.setColor = function (v) {
        this.setValue('color', v);
    };
    return Ressource;
}(AEntity_1.Model));
exports.Ressource = Ressource;
