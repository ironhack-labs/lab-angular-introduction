import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  
  title:string = 'blah';
  imageURL:string = 'https://d1m6vmmwsgiy3l.cloudfront.net/images/screenshots/screenshot_1_36078.jpg';
  description:string = "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.";
  
  constructor() { }

  ngOnInit() {
  }

};
