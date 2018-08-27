import {Injectable} from '@angular/core';
import {Observable, Subject} from '../../node_modules/rxjs';

@Injectable()
export class MessageService {

  private subject = new Subject<any>();

  constructor() {
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  sendMessage(msg: String) {
    this.subject.next({text: msg});
  }

  clearMessage() {
    this.subject.next();
  }

}
