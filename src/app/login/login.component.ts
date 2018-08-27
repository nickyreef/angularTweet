import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {UserRouteAccessService} from '../user-route-access.service';

@Component({
  selector: 'formation-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  username: string;

  constructor(private loginService: LoginService, private userRouteAccess: UserRouteAccessService) {
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login();
    this.userRouteAccess.goTo();
  }

}
