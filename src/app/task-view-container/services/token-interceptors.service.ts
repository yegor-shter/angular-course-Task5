import { Injectable, Version } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptorsService implements HttpInterceptor {


  constructor(private version: Version) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    req = req.clone({
      setHeaders: {'X-Frontend-By: ': this.version.full }
    });
    return next.handle(req);
  }
}
