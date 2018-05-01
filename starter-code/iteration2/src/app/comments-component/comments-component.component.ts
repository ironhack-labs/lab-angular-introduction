import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-comments',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

comments: Comment[] = [
    new Comment(
    "Great!",
    "I like it a lot"),
    
    new Comment(
    "It's just ok",
    "Seen better, seen worse"
    ),
   
    new Comment(
    "Wow!",
    "Angular is pretty cool, I guess."
    ),

    new Comment(
    "Bravo!",
    "Good job."
    )
    ]

  constructor() { }

  ngOnInit() {
  }

}

class Comment {
    constructor(
    public title: string,
    public comment: string
    ) {}
}
