import { SimpleGridComponent } from './../simplegrid/simple.grid.component';
import { InterceptorService } from './../../services/interceptor.service';
import { TemplateGridComponent } from './../templategrid/template.grid.component';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common'
import { DataService } from '../../services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const route: Routes =[
    {path: '', component: HomeComponent,
    children: [
        {path: 'simplegrid', component: SimpleGridComponent},
        {path: 'template', component: TemplateGridComponent}
    ]
},
]


@NgModule({
    imports: [CommonModule, AmexioWidgetModule, HttpClientModule, RouterModule.forChild(route)],
    exports: [],
    declarations: [HomeComponent, SimpleGridComponent, TemplateGridComponent],
    providers: [DataService,  {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
      }],
})
export class HomeModule { }
