import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {LoginComponent} from "./User/login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserHomeComponent} from "./User/user-home/user-home.component";
import {CreateUserAccountComponent} from "./User/create-user-account/create-user-account.component";
import {RegisterUserComponent} from "./User/register-user/register-user.component";
import {CartComponent} from "./User/cart/cart.component";
import {TrackingParcelComponent} from "./User/tracking-parcel/tracking-parcel.component";


const routes: Routes = [
  {path : 'home',component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user/login', component: LoginComponent},
  {path:'home/user/shop',component:UserHomeComponent},
  {path:'user/create/product',component: CreateUserAccountComponent},
  { path:'user/registration',component:RegisterUserComponent },
  {path:'user/shopping/cart',component:CartComponent},
  {path:'user/tracking/CART10001',component:TrackingParcelComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
