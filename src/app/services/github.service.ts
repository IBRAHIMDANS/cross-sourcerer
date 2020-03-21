import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private apollo: Apollo) {
  }

  getUSer(username: string) {
    const query = gql`
  {
    user(login: ${username}) {
        id
        name
        avatarUrl
        email
    }
  }
`;
    this.apollo.watchQuery({
      query
    }).valueChanges.pipe(map(result => result));

  }
}
