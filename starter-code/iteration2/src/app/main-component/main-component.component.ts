import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
title="Comments";
comments=[
  {name: "Stacy",
  comment: "I love Pop My Eyes since I discovered it!"
},
  {name: "Daniel",
  comment: "Such an inspiration"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
