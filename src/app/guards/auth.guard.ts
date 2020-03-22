import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { GithubService } from '../services/github.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public githubService: GithubService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return true;
    // return this.githubService
    //   .userFound(next.params.id)
    //   .then((res: boolean) => {
    //     console.log(res);
    //     return true;
    //   }).catch((err) => {
    //     console.log(err);
    //     return false;
    //   });
  }

}
