import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TweetListComponent} from './tweet-list/tweet-list.component';
import {TweetRowComponent} from './tweet-row/tweet-row.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import {RouterModule} from '@angular/router';
import { TweetFormComponent } from './tweet-form/tweet-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TweetListComponent,
    TweetRowComponent
  ],
  declarations: [
    TweetListComponent,
    TweetRowComponent,
    TweetDetailComponent,
    TweetFormComponent
  ]
})
export class TweetModule {
}
