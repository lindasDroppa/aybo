import {Component} from '@angular/core';
import {LoginUserService} from "../Services/login-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: any;
  username: any;

  constructor(private loginService:LoginUserService,private router: Router) {
  }

  loginUser() {
    const  clientDetails={
      username:this.username,
      password:this.password
    }
    this.loginService.loginClient(clientDetails).subscribe((response) => {
      if(response.status===403){
        alert('Error')
        console.log(response)
      }else{

        localStorage.setItem('userDetails',JSON.stringify(response));
        this.router.navigateByUrl('home/user/shop');
      }
    })
  }
}
