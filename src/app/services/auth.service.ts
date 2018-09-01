import { Injectable } from '@angular/core';

export const USER: any = [
    {username:'datta@gmail.com', password: '7675'},
    {username:'sagar@gmail.com', password: '9292'}
    
]

@Injectable()
export class AuthenticationService {
    isLoggedIn: boolean;
    loggedUser: any;
    constructor() {
        this.isLoggedIn = false;
        this.loggedUser = null;
     }

    isAuthenticateUser(loginModel: any) : boolean{
    let user = USER.find(user=>(user.username == loginModel.username && user.password == loginModel.password));

    if(user) {
      this.isLoggedIn = true;
      this.loggedUser = loginModel;
    }
    return this.isLoggedIn;
    }


    getLoginStatus (): boolean {
       return this.isLoggedIn;
    }

    getLoggedUser(): string {
      return this.loggedUser.username;
    }
}