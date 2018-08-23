import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tweet} from '../tweet.model';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent {

  @Input() tweets;
  @Output() tweetSelected = new EventEmitter<Tweet>();

  selectedTweetByMouse: Tweet;

  onOverTweet(ev) {
    this.selectedTweetByMouse = ev;
    this.tweetSelected.emit(ev);
  }

  isSelectedTweet(ev): boolean {
    if (this.selectedTweetByMouse === ev) {
      return true;
    } else {
      return false;
    }

  }

}
