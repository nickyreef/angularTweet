import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TweetService } from './tweet/tweet.service';
import {HttpClientModule} from '@angular/common/http';
import {TweetModule} from './tweet/tweet.module';
import {RouterModule} from '@angular/router';
import {TweetDetailComponent} from './tweet/tweet-detail/tweet-detail.component';
import {TweetListComponent} from './tweet/tweet-list/tweet-list.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TweetModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'tweets', pathMatch: 'full' },
      { path: 'tweets', component: TweetListComponent },
      { path: 'tweets/:id', component: TweetDetailComponent }
    ])
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
