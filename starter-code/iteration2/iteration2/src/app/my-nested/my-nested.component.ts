import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './my-nested.component.html',
  styleUrls: ['../app.component.css']
})
export class MyNestedComponent implements OnInit {

  date = "March 5, 2018";
  constructor() {}
  ngOnInit() {

  }

}
