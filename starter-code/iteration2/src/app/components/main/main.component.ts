import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Learn how to code with Ironhack!';

  image = '';

  description = 'Lorem ipsum, dolor sit amet.'

  constructor() {
   }

  ngOnInit() {
  }

}
