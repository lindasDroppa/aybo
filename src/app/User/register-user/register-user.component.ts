import { Component } from '@angular/core';
import {RegisterUserService} from "../Services/register-user.service";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent
{
  name= '';
  surname = '';
  email= '' ;
  password = '';
  confirmPassword = '';

  constructor(private registerService:RegisterUserService,private router: Router) {
  }
  register(){
    console.log("HERE ------")
    const user = {
      name:this.name,
      surname:this.surname,
      email:this.email,
      password:this.password
    }

    console.log(user)
    // if(this.validatePassword()&&this.name!=''&&this.surname!=''&&this.email!=''){
      this.registerService.registerUser(user).subscribe(
        (response) => {
          if(response.error){
            alert("Error while registering")
          }else {
            localStorage.setItem('userDetails',JSON.stringify(response));
            this.router.navigateByUrl('home/user/shop');
            alert("Successful Registered");
          }
        }
      );
    // }else {
    //   console.log("Null object")
    // }
  }

  validatePassword(){
    return (this.password===this.confirmPassword)&&(this.password.length>6);
  }

}
