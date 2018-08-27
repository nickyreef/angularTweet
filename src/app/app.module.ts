import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TweetService } from './tweet/tweet.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TweetModule} from './tweet/tweet.module';
import {CanActivate, RouterModule} from '@angular/router';
import {TweetDetailComponent} from './tweet/tweet-detail/tweet-detail.component';
import {TweetListComponent} from './tweet/tweet-list/tweet-list.component';
import {TweetFormComponent} from './tweet/tweet-form/tweet-form.component';
import { MessageComponent } from './message/message.component';
import {MessageService} from './message.service';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';
import {FormsModule} from '@angular/forms';
import {UserRouteAccessService} from './user-route-access.service';
import {TokenInterceptor} from './token-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TweetModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'tweets', pathMatch: 'full' },
      { path: 'tweets', component: TweetListComponent, canActivate: [UserRouteAccessService] },
      { path: 'tweets/login', component: LoginComponent },
      { path: 'tweets/edit', component: TweetFormComponent, canActivate: [UserRouteAccessService] },
      { path: 'tweets/:id', component: TweetDetailComponent, canActivate: [UserRouteAccessService] },
      { path: 'tweets/edit/:id', component: TweetFormComponent, canActivate: [UserRouteAccessService] },
    ])
  ],
  providers: [
    TweetService,
    MessageService,
    LoginService,
    UserRouteAccessService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
