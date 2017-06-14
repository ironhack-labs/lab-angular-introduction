import { CommentsComponent } from '../comments/comments.component'

export class Main {
  title: string;
  src: string;
  comments: CommentsComponent;

  constructor(title: string, src: string, comments?: CommentsComponent) {
    this.title = title;
    this.src = src;
    this.comments = comments;
  }

}
