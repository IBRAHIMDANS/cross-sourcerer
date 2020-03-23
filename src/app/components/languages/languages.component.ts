import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  @Input() repositories;
  data;
  languages = [];
  count;
  objetKey = Object.keys;

  constructor() {
  }

  getColor(names) {
    const arrayColor = [];
    names.map(name => {
      this.languages.map(item => {
        if (item.name === name) {
          arrayColor.push(item.color);
        }
      });
    });
    return arrayColor;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.repositories.edges.map(repo => {
        repo.node.languages.edges.map(lang => {
          this.languages.push({
            name: lang.node.name,
            color: lang.node.color
          });
        });
      });
      this.count = this.languages.reduce((prev, cur) => {
        prev[cur.name] = (prev[cur.name] || 0) + 1;
        return prev;
      }, {});
      this.data = {
        labels: Object.keys(this.count),
        datasets: [
          {
            data: Object.values(this.count),
            backgroundColor: this.getColor(Object.keys(this.count)),
            hoverBackgroundColor: this.getColor(Object.keys(this.count)),
          }]
      };
    }, 1000);

  }

}
