import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username: string;
  user;
  countRepos;

  constructor(private githubService: GithubService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params.id;
    });
    this.githubService
      .getUSer(this.username)
      .subscribe(({ data }) => {
        return this.user = data.user;
      }, error => {
        return error;
      });
  }

}
