import {Injectable} from '@angular/core';
import {Tweet} from './tweet.model';

@Injectable()
export class TweetService {

  tweets: Tweet[];

  constructor() {
    this.tweets = [
      new Tweet(1, 'A', 'nso', new Date(), 'njnvfnvn  klnfdlng nf db nrbnnifv sd v dvnk,n '),
      new Tweet(2, 'A', 'nsu', new Date(), 'vsdvbkj jvbdfjk vdf vdfv ujsdfvjbhsdfjkv sdfjvb jdfbvjqsd jvb '),
      new Tweet(3, 'A', 'nso', new Date(), 'h bdfjb jh ksgjbjsjs bjs')
    ];
  }

  /**
   * Création d'un tweet et ajout a la liste des tweets
   * @param tweet
   */
  create(tweet: Tweet): Tweet {
    tweet.id = this.tweets.length + 1;
    const tweetCreated = Object.assign({}, tweet);
    this.tweets.push(tweetCreated);
    return tweetCreated;
  }

  /**
   * Mise a jour d'un tweet present dans la liste
   * @param tweet
   */
  update(tweet: Tweet): Tweet {
    const tweet2update = this.find(tweet.id);
    tweet2update.content = tweet.content;
    tweet2update.timestamp = new Date();
    return tweet2update;
  }

  /**
   * Retourne un tweet parmi la liste
   * @param id
   */
  find(id: number): Tweet {
    return this.tweets.find((t) => {
      return t.id === id;
    });
  }

  /**
   * Retourne un clone de la liste (empeche la modif)
   */
  findAll(): Tweet[] {
    return Object.assign([], this.tweets);
  }

}
