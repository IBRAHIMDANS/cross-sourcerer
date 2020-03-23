import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  @Input() repositories;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this?.repositories);
    }, 100);
  }

}