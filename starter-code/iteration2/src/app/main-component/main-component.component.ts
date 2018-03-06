import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }
  article: Object = {
    title: 'Learn how to code with IronHack',
    image: 'https://secure.meetupstatic.com/photos/event/c/5/4/1/600_468050497.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur justo sit amet dignissim ultrices. Nullam ultrices sed erat et semper. Praesent aliquet, eros a bibendum suscipit, velit nisl porttitor mauris, sed sagittis ligula sapien porta mi.'
  };
  ngOnInit() {
  }

}
