// import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  styleUrls: ['./comments.component.css'],
  template:
  `
  <div class="container">
    <div *ngFor="let comment of comments; let i = index">
    <h3>{{comment.name}} {{comments.date}}</h3>
    <p> {{comment.comment}}</p>
    </div>
      <div class="form">
      <form class="comments-form" action="index.html" method="post">
        <h3>Add your comment</h3>
        <label for="name">Name</label><br>
        <input type="text" name="name" value=""><br><br>
        <label for="comment-text">Comment</label><br>
        <textarea name="comment-text" rows="8" cols="80"></textarea><br>
        <button type="button" name="submit">Submit</button>
      </form>
      </div>
      </div>

      `
})

export class CommentsComponent implements OnInit {
  name = "Comments";
  comments = [
    {
      name: "Bobby Tables",
      date: "19/07/16 19:35",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Ironhack School",
      date: "19/07/16 20:35",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
