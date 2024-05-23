import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './User/login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {LoginUserService} from "./User/Services/login-user.service";
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {UserHomeComponent} from './User/user-home/user-home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {CreateUserAccountComponent} from './User/create-user-account/create-user-account.component';
import { RegisterUserComponent } from './User/register-user/register-user.component';
import {RegisterUserService} from "./User/Services/register-user.service";
import {CreateProductService} from "./User/Services/create-product.service";
import { CartComponent } from './User/cart/cart.component';
import { TrackingParcelComponent } from './User/tracking-parcel/tracking-parcel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    UserHomeComponent,
    NavBarComponent,
    CreateUserAccountComponent,
    RegisterUserComponent,
    CartComponent,
    TrackingParcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginUserService,HttpClientModule,RegisterUserService,CreateProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
