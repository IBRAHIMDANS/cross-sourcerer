import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError, map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private apollo: Apollo) {
  }

  userFound(username: string): Promise<boolean> {
    const query = gql`
  {
    user(login: "${username}") {
        name
        login
    }
  }
`;
    return this.apollo.watchQuery({
      query
    })
      .valueChanges
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });

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
    location
    bio
    websiteUrl
    company
    following {
      totalCount
    }
    followers {
      totalCount
    }
    repositories(first: 100) {
      totalCount
      edges {
        cursor
        node {
          languages(first: 100) {
            nodes {
              color
              name
            }
            totalCount
          }
          primaryLanguage {
            name
            color
            id
          }
          name
        }
      }
    }
  }
}


`;
    return this.apollo.watchQuery({
      query
    }).valueChanges
      .pipe(
        map(result => result)
      );

  }
}
