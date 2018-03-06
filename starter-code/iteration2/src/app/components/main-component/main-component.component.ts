import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title: string = 'Learn how to code with Ironhack';
  image: string = 'https://i.ytimg.com/vi/YCroEUOxujQ/maxresdefault.jpg';
  description: string = `
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, fugit aspernatur! 
  Neque praesentium ipsam distinctio, est officia hic aspernatur, fugiat placeat odio laboriosam 
  commodi necessitatibus iure repudiandae quisquam rem consequuntur?
  `;

  constructor() { }

  ngOnInit() {
  }

}
