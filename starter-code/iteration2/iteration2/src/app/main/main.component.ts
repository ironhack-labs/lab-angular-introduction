import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  title: string = 'Coolboy55';
  image: string = "https://i1.wp.com/nerdbastards.com/wp-content/uploads/2014/06/TMNT.jpg?w=600"
  description: string = 'Yo these be turtles. They kick and stuff, check it';

  constructor() { }

  ngOnInit() {
  }

}
