"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var phpangular_1 = require("phpangular");
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super.apply(this, arguments) || this;
        _this.name = "User";
        _this.groupe = null;
        return _this;
    }
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setFirstName = function (v) {
        this.setValue('firstName', v);
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setLastName = function (v) {
        this.setValue('lastName', v);
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setPassword = function (v) {
        this.setValue('password', v);
    };
    User.prototype.getAddress = function () {
        return this.address;
    };
    User.prototype.setAddress = function (v) {
        this.setValue('address', v);
    };
    User.prototype.getCp = function () {
        return this.cp;
    };
    User.prototype.setCp = function (v) {
        this.setValue('cp', v);
    };
    User.prototype.getCity = function () {
        return this.city;
    };
    User.prototype.setCity = function (v) {
        this.setValue('city', v);
    };
    User.prototype.getSex = function () {
        return this.sex;
    };
    User.prototype.setSex = function (v) {
        this.setValue('sex', v);
    };
    User.prototype.getMail = function () {
        return this.mail;
    };
    User.prototype.setMail = function (v) {
        this.setValue('mail', v);
    };
    User.prototype.getCreated = function () {
        return this.created;
    };
    User.prototype.setCreated = function (v) {
        this.setValue('created', v);
    };
    User.prototype.getGroupe = function () {
        return this.foreignKey('groupe');
    };
    User.prototype.setGroupe = function (v) {
        this.setValue('groupe', v);
    };
    return User;
}(phpangular_1.Model));
exports.User = User;
