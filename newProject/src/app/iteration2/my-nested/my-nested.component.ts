import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-nested',
  templateUrl: './my-nested.component.html',
  styleUrls: ['./my-nested.component.css']
})
export class MyNestedComponent implements OnInit {

  constructor() {}

  comments: Array<Object> = 
  [
  {name: 'test comment 1', updatedAt: new Date(), text:'testing comment 1 loooooooooooooooootsssssssssssss of teeeeeeeeext'},
  {name: 'test comment 2',  updatedAt: new Date(), text:'testing comment 2 loooooooooooooooootsssssssssssss of teeeeeeeeext'}
];

  ngOnInit() {
  }

}
