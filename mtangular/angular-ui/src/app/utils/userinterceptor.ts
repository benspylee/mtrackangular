
import { AuthenticationService } from '../service/authentication.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class userinterceptor implements HttpInterceptor
{
  constructor(public auth: AuthenticationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
     //   Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  }
}