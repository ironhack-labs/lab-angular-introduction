import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
title ="Comments"
  comments: Array<Comment> = [
    {name: "Anna", text:"Love the city!!", day: new Date()},
    {name: "Madeleine", text:"My favorite city", day: new Date()},
  ]

}
class Comment {
  name: string;
  text: string;
  day: Date ;
}
