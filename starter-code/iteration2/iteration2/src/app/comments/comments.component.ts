import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent {
  commentsArray = [
    {
      name: "Rob",
      description: "HE'S THE GOAT!!!!!!!!!!!!!!"
    },
    {
      name: "Randy",
      description: "GOAT!!!!!!!!!!!!!!"
    },
    {
      name: "John",
      description: "best artist ever"
    },
  ]
}

