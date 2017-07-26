import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { User } from '../../core/user.model';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUser(): Observable<User> {

    return Observable.of(new User({
      _id: '123456',
      firstName: 'Test',
      surname: 'User',
      username: 'testuser'
    })).catch(error => Observable.throw(error.json().error || 'Server error'));
  }

  getErrorExample(): Observable<void> {
    return this.http.get('/api/example/error')
      .map(response => null);
  }
}
