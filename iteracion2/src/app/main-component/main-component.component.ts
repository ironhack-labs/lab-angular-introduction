import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
img = 'https://www.quelinka.com/wp-content/uploads/2017/05/Lorem.jpg';
  constructor() { }

  ngOnInit() {
  }

}
