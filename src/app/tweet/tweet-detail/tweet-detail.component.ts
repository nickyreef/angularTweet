import {Component, OnInit} from '@angular/core';
import {TweetService} from '../tweet.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Tweet} from '../tweet.model';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {

  // tweetDetail: Observable<Tweet>;
  tweetDetail: Tweet;

  constructor(private tweetService: TweetService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    let tweedId: number;
    this.route.paramMap.subscribe((params: ParamMap) => {
      tweedId = Number(params.get('id'));
    });
    this.tweetService.find(tweedId).subscribe((data: Tweet) => {
      this.tweetDetail = data;
    });
  }

  onReturnToTweets(ev) {
    this.router.navigate(['/tweets']);
  }

}
