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
    organizations(first: 100) {
      totalCount
      edges {
        node {
          name
        }
        cursor
      }
    }
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
          name
          languages(first: 100) {
            edges {
              node {
                name
                id
                color
              }
            }
            totalCount
          }
          primaryLanguage {
            name
            color
            id
          }
          object(expression: "master") {
            ... on Commit {
              history {
                totalCount
                edges {
                  node {
                    id
                    message
                  }
                }
              }
            }
          }
          createdAt
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
