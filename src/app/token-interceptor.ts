import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from '../../node_modules/rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.headers.get('nsoAuth')) {
      const clone = req.clone({setHeaders: {'nsoAuth': `token AZERTYnso123`}});
      return next.handle(clone);
    }
    return next.handle(req);
  }
}
