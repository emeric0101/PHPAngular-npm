"use strict";
var router_1 = require("@angular/router");
var Main_1 = require("./Component/Main/Main/Main");
var Home_1 = require("./Component/Home/Home/Home");
var Login_1 = require("./Component/User/Login/Login");
var appRoutes = [
    {
        path: "Home",
        component: Home_1.Home
    },
    {
        path: "UserLogin",
        component: Login_1.UserLogin
    },
    {
        path: "",
        redirectTo: "/Home",
        pathMatch: "full"
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.declarations = [Main_1.Main, Home_1.Home, Login_1.UserLogin];
