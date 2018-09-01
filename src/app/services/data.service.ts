import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable()
export class DataService {

    constructor(private _httpClient: HttpClient ) { }


    getData(url: string): Observable<any> {
     return this._httpClient.get(url);
    }

    postData(url: string, requestBody: any): Observable<any> {
     return this._httpClient.post(url, requestBody);
    }
}