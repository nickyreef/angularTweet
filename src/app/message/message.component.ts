import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from '../../../node_modules/rxjs';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  msg: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.msg = message;
      setTimeout(this.clearMsg, 5000 , this);
    });
  }

  ngOnDestroy() {
    // this.messageService.clearMessage();
    this.subscription.unsubscribe();
  }

  clearMsg(me: MessageComponent) {
    me.msg = null;
  }

}
