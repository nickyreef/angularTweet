import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetRowComponent } from './tweet-row/tweet-row.component';
import { TweetService } from './tweet.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
