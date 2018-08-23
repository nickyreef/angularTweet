import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetRowComponent } from './tweet-row/tweet-row.component';
import { TweetService } from './tweet.service';


@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
