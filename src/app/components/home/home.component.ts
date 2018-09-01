import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private _router: Router, private _cookiesService: CookieService) { }

    ngOnInit() { }

    onSimpleGrid() {
     this._router.navigate(['home/simplegrid']);
    }

    ontemplate() {
        this._router.navigate(['home/template']);
    }
    onLogOut() {
         this._cookiesService.delete('loginInfo');
        this._router.navigate(['login']);
    }
}