import { InterceptorService } from './services/interceptor.service';
import { AuthenticationService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmexioWidgetModule } from 'amexio-ng-extensions'

import {RouterModule, Routes} from '@angular/router'
import { FormsModule } from '@angular/forms';
import {CanLoladGuardService} from './services/canload.auth.service'
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


const route : Routes =[
{path: '', redirectTo:'login', pathMatch: 'full'},
{path : 'login', component : LoginComponent},
{path: 'home', canLoad:[CanLoladGuardService], loadChildren: './components/home/home.module#HomeModule'}
]

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, AmexioWidgetModule, RouterModule.forRoot(route)
  ],
  providers: [AuthenticationService, CanLoladGuardService, CookieService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
