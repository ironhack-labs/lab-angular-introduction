import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css'],
  template: `
    <h2>{{commentsTitle}}</h2>
    <form action="/my-handling-form-page" method="post">
    <div>
        <label for="name">{{nameLabel}}</label>
        <input type="text" id="name" />
    </div>
    <div>
        <label for="msg">{{description}}</label>
        <textarea id="msg"></textarea>
    </div>
    <button type="submit">{{send}}</button>
</form>
  `
})
export class CommentsComponentComponent implements OnInit {

  commentsTitle = "Comments";
  nameLabel = "Name";
  description = "Description";
  sendButton = "Send";

  constructor() { }

  ngOnInit() {
  }

}
