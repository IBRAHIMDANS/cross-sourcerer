import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user;
  @Input('countRepos') count;

  countRepo;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      const arrayTemp = [];
      this.user.repositories.edges.map((item) => {
        arrayTemp.push(item.node.object.history.totalCount);
      });
      this.countRepo = arrayTemp.reduce((first, second) => first + second);
      this.count = this.countRepo;
    }, 1000);

  }

}
