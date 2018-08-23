import {Component, OnInit} from '@angular/core';
import {Tweet} from './tweet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tweets: Tweet[];

  ngOnInit() {
    this.tweets = [
      new Tweet(1, 'A', 'nso', new Date(), 'njnvfnvn  klnfdlng nf db nrbnnifv sd v dvnk,n '),
      new Tweet(2, 'A', 'nsu', new Date(), 'vsdvbkj jvbdfjk vdf vdfv ujsdfvjbhsdfjkv sdfjvb jdfbvjqsd jvb '),
      new Tweet(3, 'A', 'nso', new Date(), 'h bdfjb jh ksgjbjsjs bjs')
    ];
  }

  tweetSelected(tweet: Tweet) {
    console.log('Tweet select : ' + tweet.id + ' - contntent : ' + tweet.content + ' [hashTag: ' + tweet.tag + ']');
  }
}
