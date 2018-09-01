import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor(private _cookieService: CookieService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         
        let tokenId = this._cookieService.get('loginInfo');

        if(tokenId) {
            let clonedReq = req.clone({
                headers: req.headers.set('loginInfo', tokenId)
                
            });
            return next.handle(clonedReq);
        } else {
            return next.handle(req);
        }
    }

 
}