import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.scss']
})
export class FunFactsComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
