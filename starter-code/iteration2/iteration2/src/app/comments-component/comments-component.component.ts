import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments: Array<Comment> = [
    new Comment("Bob Maurice", "05/11/1982 - 19:30", "It seems difficult"),
    new Comment("Marcel Patoulachi", "05/09/2017 - 9:30", "great !"),
    new Comment("Jean Blah", "20/01/1403 - 13:30", "amazing idea")
  ];

  constructor() { }

  ngOnInit() {
  }

}


class Comment {
  constructor(
    public name: string,
    public date: string,
    public zeComment: string,
  ){}
}