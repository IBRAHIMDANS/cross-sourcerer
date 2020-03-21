import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private apollo: Apollo) {
  }

  getUSer(username: string): Observable<any> {
    const query = gql`
  {
    user(login: "${username}") {
        id
        name
        avatarUrl
        email
        login
    }
  }
`;
    return this.apollo.watchQuery({
      query
    }).valueChanges.pipe(map(result => result));

  }
}
