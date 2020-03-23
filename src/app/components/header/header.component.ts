import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user;
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
    }, 1000);

  }

}
