import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetRowComponent } from './tweet-row/tweet-row.component';


@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
