import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TweetListComponent} from './tweet-list/tweet-list.component';
import {TweetRowComponent} from './tweet-row/tweet-row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TweetListComponent,
    TweetRowComponent
  ],
  declarations: [
    TweetListComponent,
    TweetRowComponent
  ]
})
export class TweetModule {
}
