import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from '../../node_modules/rxjs';
import {LoginService} from './login/login.service';

@Injectable()
export class UserRouteAccessService implements CanActivate {

  url: any;

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.url = state.url;

    if (this.loginService.isLogged()) {
      return true;
    }
    this.router.navigate(['/tweets/login']);
    return false;
  }

  goTo() {
    if (this.url) {
      this.router.navigate([this.url]);
    } else {
      this.router.navigate(['/tweets']);
    }
  }

}
