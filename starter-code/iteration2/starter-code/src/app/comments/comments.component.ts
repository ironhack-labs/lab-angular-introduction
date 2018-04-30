import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blah-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [
    new Comment(
      "Positif",
      "J'aime bien, mais bon"),

    new Comment(
      "Pas mal",
      "Ca va j'ai kiffé"
    ),

    new Comment(
      "De ouf",
      "Ironhack c'est la life!"
    )
  ]
  
  constructor() { }

  ngOnInit() {
  }

}

class Comment {
  constructor(
  public title: string;
  public comment: string;
  ) {}
}