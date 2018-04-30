import { Component, OnInit } from '@angular/core';

class Comment {
  constructor(
    public author: string,
    public date: Date,
    public content: string
  ) {}
}

const comment1 = new Comment("Jean Paul 2", new Date(), "C'est joli");
const comment2 = new Comment("Louis 14", new Date(), "Mon château il est plus beau!");
@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  commentsArr: Comment[] = [comment1, comment2];

  
  constructor() { }

  ngOnInit() {
  }

}