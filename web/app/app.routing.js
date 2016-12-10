"use strict";
var router_1 = require("@angular/router");
var Main_1 = require("./Component/Main/Main/Main");
var Home_1 = require("./Component/Home/Home/Home");
var Create_1 = require("./Component/Reservation/Create/Create");
var Mines_1 = require("./Component/Reservation/Mines/Mines");
var Planning_1 = require("./Component/Reservation/Planning/Planning");
var Login_1 = require("./Component/User/Login/Login");
var appRoutes = [
    {
        path: "Home",
        component: Home_1.Home
    },
    {
        path: "Home-Home",
        component: Home_1.Home
    },
    {
        path: "User-Login",
        component: Login_1.UserLogin
    },
    {
        path: "",
        redirectTo: "/Home",
        pathMatch: "full"
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.declarations = [
    Main_1.Main, Home_1.Home, Login_1.UserLogin, Create_1.ReservationCreate, Mines_1.ReservationMines, Planning_1.ReservationPlanning
];
