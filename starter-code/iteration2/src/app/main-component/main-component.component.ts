import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title: string = 'Learn how to code';
  image: string = '../assets/photo4.png';
  description: string = 'Lorem ipsum dolor saepe.';

  constructor() { }

  ngOnInit() {
  }

}
