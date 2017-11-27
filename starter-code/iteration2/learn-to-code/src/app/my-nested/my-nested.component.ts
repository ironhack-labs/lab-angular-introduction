import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-nested',
  templateUrl: './my-nested.component.html',
  styleUrls: ['./my-nested.component.css']
})

export class MyNestedComponent implements OnInit {
  comments: Array<string> = ['Dog', 'Duck', 'Elephant', 'Zebra'];

  constructor() { }

  ngOnInit() {
  }

}
