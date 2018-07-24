import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comment = [
    {
      name: "Katya",
      description: "Lovely!"
    },
    {
      name: "Michel",
      description: "Cool!"
    },
    {
      name: "Tom",
      description: "Awesome!"
    },
  ];
  constructor() {

   }

  ngOnInit() {
  }

}
