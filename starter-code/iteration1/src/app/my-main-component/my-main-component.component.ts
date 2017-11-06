import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-main-component',
  templateUrl: './my-main-component.component.html',
  styleUrls: ['./my-main-component.component.css']
})
export class MyMainComponentComponent implements OnInit {
   image: String = 'http://buzzsharer.com/wp-content/uploads/2015/07/cute-english-bulldog.jpg';

  constructor() { }

  ngOnInit() {
  }

}
