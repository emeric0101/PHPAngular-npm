/** This file is autogenerated */

import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Main } from "./Component/Main/Main/Main";
import { Home }  from './Component/Home/Home/Home';
import { ReservationCreate }  from './Component/Reservation/Create/Create';
import { ReservationMines }  from './Component/Reservation/Mines/Mines';
import { ReservationPlanning }  from './Component/Reservation/Planning/Planning';
import { UserLogin }  from './Component/User/Login/Login';

const appRoutes: Routes = [
	{
		path: "Home",
		component : Home
	},
	{
		path: "Home-Home",
		component : Home
	},
	{
		path: "User-Login",
		component : UserLogin
	},
	{
		path: "",
		redirectTo: "/Home",
		pathMatch: "full"
	}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const declarations = [
	Main, Home, UserLogin, ReservationCreate,ReservationMines, ReservationPlanning
];