import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TweetService } from './tweet/tweet.service';
import {HttpClientModule} from '@angular/common/http';
import {TweetModule} from './tweet/tweet.module';
import {RouterModule} from '@angular/router';
import {TweetDetailComponent} from './tweet/tweet-detail/tweet-detail.component';
import {TweetListComponent} from './tweet/tweet-list/tweet-list.component';
import {TweetFormComponent} from './tweet/tweet-form/tweet-form.component';
import { MessageComponent } from './message/message.component';
import {MessageService} from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TweetModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'tweets', pathMatch: 'full' },
      { path: 'tweets', component: TweetListComponent },
      { path: 'tweets/edit', component: TweetFormComponent },
      { path: 'tweets/:id', component: TweetDetailComponent },
      { path: 'tweets/edit/:id', component: TweetFormComponent },
    ])
  ],
  providers: [
    TweetService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
