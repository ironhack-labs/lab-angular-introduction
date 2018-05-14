import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
arrayComments = [{name: 'Uncle dev', comments: 'This article is bias, #MAGA'}, { name: 'Green man', comments: 'Well written'},
 {name: 'Laura', comments: 'This is where we are these days'} ];
  constructor() { }

  ngOnInit() {
  }

}
