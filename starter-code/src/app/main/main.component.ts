import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   title: string,
   image: string,
   description: string;
  constructor() {
    this.title = 'Doggo Gets A Boop';
    this.image = 'assets/boop.gif';
    this.description = `This is a subreddit
    devoted to cute little animols such as
    puppers, cates and turtles if you have
    some cute turtles post other animols if you want to ok`;
  }

  ngOnInit() {
  }

}
