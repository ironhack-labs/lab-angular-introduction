import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string = "learn how to code @ IH";
  image: string = "./assets/ironhack.jpg";
  description: string = "Looking to make a transition into a technical career? Ironhack's Web Development Bootcamp is designed to help you acquire the right set of skills to land a job as a junior developer or get started in another technical role.";

  constructor() { }

  ngOnInit() {
  }

}
