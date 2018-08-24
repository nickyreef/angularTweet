import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tweet} from '../tweet.model';
import {TweetService} from '../tweet.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  @Input() tweets;
  @Output() tweetSelected;
  selectedTweetByMouse: Tweet;

  constructor(private tweetService: TweetService, private route: ActivatedRoute, private router: Router) {
    this.tweetSelected = new EventEmitter<Tweet>();
  }

  ngOnInit() {
    this.tweets = this.tweetService.findAll();
  }

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

  onAddNewTweet(ev) {
    this.router.navigate(['/tweets/edit']);
  }

}
