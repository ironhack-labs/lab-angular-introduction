import { Component } from '@angular/core';
import { Comment } from './../../shared/models/comment.model';
import comments from '../../shared/data/comments.data';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  comments: Array<Comment> = comments;
  newComment: Comment = new Comment();

  addCommnet(): void {
    this.comments.push(this.newComment);
    this.newComment = new Comment();
  }
}