import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }


}
