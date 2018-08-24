import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../tweet.model';

@Component({
  selector: 'app-tweet-row',
  templateUrl: './tweet-row.component.html',
  styleUrls: ['./tweet-row.component.css']
})
export class TweetRowComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor() {
  }

  ngOnInit() {
  }

}
