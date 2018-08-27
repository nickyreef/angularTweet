import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TweetService} from '../tweet.service';
import {Tweet} from '../tweet.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MessageService} from '../../message.service';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  tweetForm: FormGroup;
  tweet: Tweet;

  constructor(private fb: FormBuilder, private tweetService: TweetService,
              private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
  }

  ngOnInit() {
    this.tweetForm = this.fb.group({
      author: ['', Validators.required],
      tag: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [forbiddenChar]]
    });

    function forbiddenChar(control: FormControl) {
      const contentValue = control.value.toString();
      if (contentValue.includes('@') || contentValue.includes('//')) {
        return {invalideChar: true};
      } else {
        return null;
      }
    }

    let tweedId: number;
    this.route.paramMap.subscribe((params: ParamMap) => {
      tweedId = Number(params.get('id'));
    });

    if (!tweedId) {
      this.tweet = new Tweet();
    } else {
      this.tweetService.find(tweedId).subscribe((data: Tweet) => {
        this.tweet = data;
      });
    }
  }

  saveTweet(data: Tweet) {
    this.tweet.author = data.author;
    this.tweet.tag = '#' + data.tag;
    this.tweet.content = data.content;
    // console.log(this.tweet);

    if (this.tweet.id) {
      // mise à jour d'un tweet
      this.tweetService.update(this.tweet).subscribe(twt => {
        this.tweet = twt;
        this.messageService.sendMessage(twt.author + ' has updated a tweet !');
        this.router.navigate(['/tweets']);
      });
    } else {
      // Ajout d'un tweet
      this.tweetService.create(this.tweet).subscribe(twt => {
        this.tweet = twt;
        this.router.navigate(['/tweets']);
      });
    }

    // Redirection vers tweet liste
    // this.router.navigate(['/tweets']);
  }

}
