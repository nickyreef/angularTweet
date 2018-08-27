import { Injectable } from '@angular/core';
import {UserRouteAccessService} from '../user-route-access.service';

@Injectable()
export class LoginService {

  logged: boolean;

  constructor() { }

  login() {
    this.logged = true;
  }

  isLogged() {
    return this.logged;
  }
}
