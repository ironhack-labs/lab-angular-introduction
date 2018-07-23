import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-element',
  templateUrl: './comment-element.component.html',
  styleUrls: ['./comment-element.component.css']
})
export class CommentElementComponent {
  title = 'Comments';
  comments = [
    {
      comment: 'I Love him!!!',
      author: "Paco Pil"
    },
    {
      comment: 'Rastamen live up!!!',
      author: "Lola Lanas"
    }];
}
