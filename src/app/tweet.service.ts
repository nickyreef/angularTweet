import {Injectable} from '@angular/core';
import {Tweet} from './tweet.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from '../../node_modules/rxjs';

@Injectable()
export class TweetService {

  tweets: Tweet[];
  twList$: Observable<Tweet[]>;

  constructor(private httpClient: HttpClient) {
    //*** TP7
    // this.tweets = [
    //   new Tweet(1, 'A', 'nso', new Date(), 'njnvfnvn  klnfdlng nf db nrbnnifv sd v dvnk,n '),
    //   new Tweet(2, 'A', 'nsu', new Date(), 'vsdvbkj jvbdfjk vdf vdfv ujsdfvjbhsdfjkv sdfjvb jdfbvjqsd jvb '),
    //   new Tweet(3, 'A', 'nso', new Date(), 'h bdfjb jh ksgjbjsjs bjs')
    // ];

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
   * Mise a jour d'un tweet present dans la liste - sans API
   * @param tweet
   */
  // update(tweet: Tweet): Tweet {
  //   let tweet2update: Tweet;
  //   this.find(tweet.id).subscribe(
  //     (data: Tweet) => {
  //       tweet2update = data;
  //     }
  //   );
  //   tweet2update.content = tweet.content;
  //   tweet2update.timestamp = new Date();
  //   return tweet2update;
  // }

  /**
   * Mise a jour via API
   * @param tweet
   */
  update(tweet: Tweet): Observable<Tweet> {
    return this.httpClient.put<Tweet>('http://localhost:8080/api/tweets/', tweet);
  }

  /**
   * Retourne un tweet parmi la liste
   * @param id
   */
  find(id: number): Observable<Tweet> {
    // return this.tweets.find((t) => {
    //   return t.id === id;
    // });

    return this.httpClient.get<Tweet>('http://localhost:8080/api/tweets/' + id.toString());
  }

  /**
   * Retourne un clone de la liste (empeche la modif)
   */
  findAll(): Observable<Tweet[]> {
    return this.httpClient.get<Tweet[]>('http://localhost:8080/api/tweets');
    // return Object.assign([], this.tweets);
  }

}
