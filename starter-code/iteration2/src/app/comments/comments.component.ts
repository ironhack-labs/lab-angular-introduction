import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = [
    {
      name: "Bob",
      date: new Date(),
      description: "loremp ipsum dolor sit amet",
  },
  {
    name: "Pepe",
    date: new Date(),
    description: "loremp ipsum dolor sit amet",
  }]
  constructor() { }

  ngOnInit() {
  }

}
