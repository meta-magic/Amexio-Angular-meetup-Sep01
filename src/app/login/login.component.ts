import { AuthenticationService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    loginModel : LoginModel
    constructor(private _authenticationService: AuthenticationService, private router: Router) {
        this.loginModel = new LoginModel();
     }

    ngOnInit(): void { }

    onLogin() {
        if(this.loginModel.username && this.loginModel.password){
           if(this._authenticationService.isAuthenticateUser(this.loginModel)) {
            this.router.navigate(['home']);
           }
        }
    }
}


export class LoginModel {
    username: string;
    password: string;

    constructor() {
        this.username = '';
        this.password = '';
    }
}