import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  isLoad = false;
  userStatus = false;

  constructor(private githubService: GithubService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  userNotFound() {
    this.userStatus = true;
    setTimeout(() => {
      this.userStatus = false;
    }, 1000);
  }

  searchUser() {
    this.isLoad = true;
    this.githubService.getUSer(this.usernameFormControl.value).subscribe(({ data }) => {
      this.isLoad = false;
      return this.router.navigate([ 'user', data.user.login]);
    }, error => {
      this.isLoad = false;
      this.userNotFound();
      return error;
    });
  }


}
