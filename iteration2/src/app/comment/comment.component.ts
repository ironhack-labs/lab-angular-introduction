import { Component } from '@angular/core';

export class Comment {
  name: string;
  date: Date;
  description: string;
}

const comments: Comment[] = [
  {
    name: 'Bobby Tables',
    date: new Date(),
    description: 'What am I doing with my life?'
  },
  {
    name: 'Ironhack School',
    date: new Date(),
    description: 'Apparently not much.'
  }
]

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  comments: Comment[] = comments;
}
