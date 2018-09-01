import { AuthenticationService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'

@Injectable()
export class CanLoladGuardService implements CanLoad {
    constructor(private _authenticationService: AuthenticationService, private _router: Router, private _cookie_service: CookieService) { }a
    canLoad(route: Route) {

        if(this._authenticationService.getLoginStatus()) {
            this._cookie_service.set('loginInfo', this._authenticationService.getLoggedUser());
         return true
        } else{
            this._router.navigate(['login']);
            return false;

        }
    }
}