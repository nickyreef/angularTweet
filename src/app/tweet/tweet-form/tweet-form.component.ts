import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  tweetForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.tweetForm = this.fb.group({
      author: ['', Validators.required],
      tag: ['', Validators.required],
      content: ['']
    });
  }

  saveTweet() {
  }

}
