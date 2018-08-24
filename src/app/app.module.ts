import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TweetService } from './tweet.service';
import {HttpClientModule} from '@angular/common/http';
import {TweetModule} from './tweet/tweet.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TweetModule
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
